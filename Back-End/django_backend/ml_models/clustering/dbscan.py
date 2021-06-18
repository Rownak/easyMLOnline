#Import necessary libraries
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Student_activity
from api.serializers import StudentActivitySerializer
from users.models import CustomUser
import numpy as np
from sklearn import metrics
from sklearn.cluster import DBSCAN
import json
#import matplotlib.pyplot as plt
import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
from plotting.plot_2d import plot_2d
from rest_framework import status

@api_view(['GET'])
def index_page(request):
    return_data = {
        "error" : "0",
        "message" : "Successful",
    }
    return Response(return_data)

def dbscan_cluster(X, eps, min_samples, user_id, features):
    model = DBSCAN(eps, min_samples)
    # fit model and predict clusters

    y_db = model.fit_predict(X)
    silhouette_score=metrics.silhouette_score(X, y_db)
    # print("X", X)
    X = np.array(X)
    plt_url = 'media/{}'.format(user_id)

    if not os.path.exists(plt_url):
        os.makedirs(plt_url)
    title = "DBScan Clustering"
    plt_url += '/{}.png'.format(title.replace(" ", "_"))
    i=0
    while os.path.exists(f"{plt_url}_{i}.png"):
        i += 1
    plt_url = '{}_{}.png'.format(plt_url,i)
    plot_2d(X, y_db, plt_url,title, features)

    return y_db, silhouette_score, plt_url

@api_view(["POST"])
def get_dbscan(request):
    user_id = request.user.id
    if (user_id == None):
        user_id = 1
    try:

        data = json.loads(request.body)
        #print("data", data)
         # data contains three fileds: eps: epsilon, min_samples : minimum number of elements within epsilon distance
         # train: matrix(size: m*n, m = # row, n = # column)
        eps = data['eps']
        min_samples = data['min_samples']
        train_data = data['train']
        if ('header' in data):
            header = data['header']
        else:
            header = None
        features = None
        if eps is not None:
            #Datapreprocessing Convert the values to float
            eps = float(eps)
            #print("eps",eps)
            min_samples = int(min_samples)
            #print("min_samples",min_samples)
            train_data = list(filter(any, train_data))
            train_data = [list(filter(None, lst)) for lst in train_data]
            if (not header):
                features = None
            else:
                features = train_data.pop(0)
            train_data = np.asarray(train_data,dtype=np.float64)
            # print("train",train_data)
            y_db, silhouette_score, plt_url = dbscan_cluster(train_data,eps, min_samples, user_id, features)
            # print("y_db", y_db)
            result = {
                'error' : '0',
                'message' : 'Successfull',
                'y_db' : y_db.reshape(-1,1),
                'input_output': np.concatenate((train_data, y_db.reshape(-1, 1)), axis=1),
                'silhouette_score' : silhouette_score,
                'plt_url' : plt_url
            }
            # print("result", result)
            # user = CustomUser.objects.get(id=user_id)
            # activity = Student_activity.objects.create(user=user, ml_model="db_scan", n_rows=train_data.shape[0], n_columns=train_data.shape[1])
            # serializer = StudentActivitySerializer(activity)
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
                "message": ["The data should contain only decimal values. Check if any datapoint is missing in the table or the attached file"]
            }
        return Response(response, status=status.HTTP_400_BAD_REQUEST)
    return Response(result)