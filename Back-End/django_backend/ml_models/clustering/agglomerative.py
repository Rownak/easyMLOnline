from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Student_activity
from api.serializers import StudentActivitySerializer
from users.models import CustomUser
import numpy as np
from sklearn import metrics
from sklearn.cluster import AgglomerativeClustering
import json
import matplotlib.pyplot as plt
import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
from plotting.plot_2d import plot_2d
from rest_framework import status

def agg_cluster(X, n, user_id, features):
    model = AgglomerativeClustering(n)
    y_agg = model.fit_predict(X)
    silhouette_score=metrics.silhouette_score(X, y_agg)
    #pickle.dump(y_agg,open("ml_model/agglomerative_result.pkl", "wb"))

    X = np.array(X)
    plt_url = 'media/{}'.format(user_id)
    if not os.path.exists(plt_url):
        os.makedirs(plt_url)
    title = "Agglomerative Clustering"
    plt_url += '/{}'.format(title.replace(" ", "_"))
    i=0
    while os.path.exists(f"{plt_url}_{i}.png"):
        i += 1
    plt_url = '{}_{}.png'.format(plt_url,i)

    plot_2d(X, y_agg, plt_url, title, features)

    return y_agg, silhouette_score, plt_url

@api_view(["POST"])
def get_agglomerative(request):
    print(request.user.id)
    user_id = request.user.id
    if (user_id == None):
        user_id = 1
    try:
        data = json.loads(request.body)
        #print("data", data)
        n = data['n']
        train_data = data['train']
        if('header' in data):
            header = data['header']
        else:
            header = None
        features = None
        #train_data = request.GET.get('data')
        if n is not None:
            #Datapreprocessing Convert the values to float
            n = int(n)
            #print("n_clusters",n_clusters)
            train_data = list(filter(any, train_data))
            train_data = [list(filter(None, lst)) for lst in train_data]
            if (not header):
                features = None
            else:
                features = train_data.pop(0)

            train_data = np.asarray(train_data,dtype=np.float64)
            # print(train_data)
            y_agg, silhouette_score, plt_url = agg_cluster(train_data,n, user_id, features)
            input_output = np.concatenate((y_agg.reshape(-1, 1), train_data), axis=1)
            if(features):
                features.insert(0, " ")
                features = np.array(features)
                input_output = np.concatenate((features.reshape(1, -1), input_output), axis=0)
            result = {
                'error' : '0',
                'message' : 'Successfull',
                'y_kmeans' : y_agg.reshape(-1,1),
                'input_output': input_output,
                'silhouette_score' : silhouette_score,
                'plt_url' : plt_url
            }
            user = CustomUser.objects.get(id=user_id)
            activity = Student_activity.objects.create(user=user, ml_model="agglomerative", n_rows=train_data.shape[0], n_columns=train_data.shape[1])
            serializer = StudentActivitySerializer(activity)
        else:
            result = {
                'error' : '1',
                'message': 'Invalid Parameters'                
            }
    except Exception as e:
        response = {
            'error' : '2',
            "message": [str(e)]
        }
        if (str(e) == "could not convert string to float: '?'"):
            response = {
                'error': '2',
                "message": ["The data should only contain decimal values. Check if any datapoint is string or missing in the table."]
            }
        return Response(response, status=status.HTTP_400_BAD_REQUEST)
    
    return Response(result)