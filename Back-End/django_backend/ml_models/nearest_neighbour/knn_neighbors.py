from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
from sklearn import metrics
from sklearn.neighbors import NearestNeighbors
import json
import matplotlib.pyplot as plt
import os, sys
from api.models import Student_activity
from api.serializers import StudentActivitySerializer
from users.models import CustomUser
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
from plotting.plot_2d import plot_2d
from rest_framework import status


def knn_neighbors(X_train, X_test, n_neighbors, user_id, features):
    neigh = NearestNeighbors(n_neighbors)
    neigh.fit(X_train)
    distances, neighbors = neigh.kneighbors(X_test)
    # pickle.dump(y_agg,open("ml_model/agglomerative_result.pkl", "wb"))

     # X_test = np.array(X_test)
     # plt_url = 'media/{}'.format(user_id)
     # if not os.path.exists(plt_url):
     #    // os.makedirs(plt_url)
     # plt_url += '/knn_output.png'
     # plot_2d(X_test, y_pred, plt_url)

    return distances, neighbors


@api_view(["POST"])
def get_knn_neighbors(request):
    print(request.user.id)
    user_id = request.user.id
    if (user_id == None):
        user_id = 1
    try:
        data = json.loads(request.body)
        #print("data", data)

        train_data = data['train']
        X_test = data['test']
        n_neighbors = data['n_neighbors']
        if ('header' in data):
            header = data['header']
        else:
            header = None
        features = None
        # train_data = request.GET.get('data')
        if n_neighbors is not None:
            # Datapreprocessing Convert the values to float
            n_neighbors = int(n_neighbors)
            # print("n_clusters",n_clusters)
            train_data = list(filter(any, train_data))
            train_data = [list(filter(None, lst)) for lst in train_data]
            if (not header):
                features = None
            else:
                features = train_data.pop(0)
            X_train = np.asarray(train_data, dtype=np.float64)
            # print(X_train)

            # train_data = list(filter(any, train_data))
            # train_data = [list(filter(None, lst)) for lst in train_data]

            # print("X_train: ",X_train)
            # print("y_train: ",y_train)
            plt_url = ""
            distances, neighbors = knn_neighbors(X_train, X_test, n_neighbors, user_id, features)
            result = {
                'error': '0',
                'message': 'Successfull',
                'neighbors': neighbors,
                'distances':distances,
                'plt_url': plt_url
            }
            user = CustomUser.objects.get(id=user_id)
            activity = Student_activity.objects.create(user=user, ml_model="knn_neighbors", n_rows=X_train.shape[0], n_columns=X_train.shape[1])
            serializer = StudentActivitySerializer(activity)
        else:
            result = {
                'error': '1',
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