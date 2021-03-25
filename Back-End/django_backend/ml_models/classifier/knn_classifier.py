from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Student_activity
from api.serializers import StudentActivitySerializer
from users.models import CustomUser
import numpy as np
from sklearn import metrics
from sklearn.neighbors import KNeighborsClassifier
import json
import matplotlib.pyplot as plt
import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
from plotting.plot_2d import plot_2d

def knn_classifier(X_train, y_train,X_test,n_neighbors, user_id):
    neigh = KNeighborsClassifier(n_neighbors)
    y_pred = neigh.fit(X_train, y_train).predict(X_test)
    # pickle.dump(y_agg,open("ml_model/agglomerative_result.pkl", "wb"))

    X_test = np.array(X_test)
    plt_url = 'media/{}'.format(user_id)
    if not os.path.exists(plt_url):
        os.makedirs(plt_url)
    plt_url += '/knn_output.png'
    plot_2d(X_test, y_pred, plt_url)


    return y_pred, plt_url


@api_view(["POST"])
def get_knn_classifier(request):
    print(request.user.id)
    user_id = request.user.id
    if (user_id == None):
        user_id = 1
    try:
        data = json.loads(request.body)
        print("data", data)

        train_data = data['train']
        label_col = data['label_col']
        X_test = data['test']
        n_neighbors = data['n_neighbors']
        # train_data = request.GET.get('data')
        if label_col is not None:
            # Datapreprocessing Convert the values to float
            label_col = int(label_col)
            n_neighbors = int(n_neighbors)
            # print("n_clusters",n_clusters)
            # # Filtering the rows which contains None
            train_data = list(filter(any, train_data))
            train_data = [list(filter(None, lst)) for lst in train_data]
            train_data = np.asarray(train_data, dtype=np.float64)
            print(train_data)
            X_test = np.asarray(X_test, dtype=np.float64)

            y_train = train_data[:, label_col]
            X_train = np.delete(train_data, label_col, 1)
            #print("X_train: ",X_train)
            #print("y_train: ",y_train)
            y_pred, plt_url = knn_classifier(X_train, y_train,X_test,n_neighbors, user_id)
            result = {
                'error': '0',
                'message': 'Successfull',
                'y_pred': y_pred.reshape(-1, 1),
                'plt_url': plt_url
            }
            user = CustomUser.objects.get(id=user_id)
            activity = Student_activity.objects.create(user=user, ml_model="knn_classifier", n_rows=X_train.shape[0], n_columns=X_train.shape[1])
            serializer = StudentActivitySerializer(activity)
        else:
            result = {
                'error': '1',
                'message': 'Invalid Parameters'
            }
    except Exception as e:
        result = {
            'error': '2',
            "message": str(e)
        }

    return Response(result)