from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
from sklearn import metrics
from sklearn.cluster import KMeans
import json
import os, sys
from api.models import Student_activity
from api.serializers import StudentActivitySerializer
from users.models import CustomUser
from rest_framework import status
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
from plotting.plot_2d import plot_2d
# Create your views here.
@api_view(['GET'])
def index_page(request):
    return_data = {
        "error" : "0",
        "message" : "Successful",
    }
    return Response(return_data)


def kmeans_cluster(X, n_clusters, user_id, features):

    kmeans = KMeans(n_clusters)
    kmeans.fit(X)
    y_kmeans = kmeans.predict(X)
    silhouette_score=metrics.silhouette_score(X, y_kmeans)
    X = np.array(X)
    plt_url = 'media/{}'.format(user_id)
    if not os.path.exists(plt_url):
        os.makedirs(plt_url)
    title = "Kmeans Clustering"
    plt_url += '/{}.png'.format(title.replace(" ", "_"))
    i=0
    while os.path.exists(f"{plt_url}_{i}.png"):
        i += 1
    plt_url = '{}_{}.png'.format(plt_url,i)
    plot_2d(X, y_kmeans, plt_url, title, features)
    return y_kmeans, kmeans.inertia_, silhouette_score, plt_url

@api_view(["POST"])
def get_kmeans(request):
    print(request.user.id)
    user_id=request.user.id
    if(user_id==None):
        user_id=1
    try:
        # load request from json
        data = json.loads(request.body)
        #print("data", data)        
        # data contains two fileds: k: number of cluster, train: matrix(size: m*n)
        k = data['k']
        train_data = data['train']
        if ('header' in data):
            header = data['header']
        else:
            header = None
        features = None
        #train_data = request.GET.get('data')
        if k is not None:
            # Datapreprocessing Convert the values to float
            k = int(k)
            #print("k",k)
            # # Filtering the rows which contains None
            train_data = list(filter(any, train_data))
            train_data = [list(filter(None, lst)) for lst in train_data]
            if (not header):
                features = None
            else:
                features = train_data.pop(0)

            train_data = np.asarray(train_data, dtype=np.float64)
            #print(train_data)
            #print("train_data",train_data)
            y_kmeans, ssd_kmeans, silhouette_score, plt_url = kmeans_cluster(train_data, k, user_id, features)
            result = {
                'error' : '0',
                'message' : 'Successfull',
                'y_kmeans' : y_kmeans.reshape(-1,1),
                'ssd' : ssd_kmeans,
                'silhouette_score' : silhouette_score,
                'plt_url' : plt_url
            }
            user = CustomUser.objects.get(id=user_id)
            activity = Student_activity.objects.create(user=user, ml_model="kmeans", n_rows=train_data.shape[0], n_columns=train_data.shape[1])
            serializer = StudentActivitySerializer(activity)
            #rsp = {'message': 'Activity Created', 'result': serializer.data}
            #print(rsp)
        else:
            response = {'error': '1', 'message': ['The value of K is missing']}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        response = {
            'error' : '2',
            "message": [str(e)]
        }
        if (str(e) == "could not convert string to float: '?'"):
            response = {
                'error': '2',
                "message": ["The data should contain only decimal values. Check if any datapoint is missing in the table or the attached file"]
            }
        return Response(response, status=status.HTTP_400_BAD_REQUEST)
    return Response(result)
