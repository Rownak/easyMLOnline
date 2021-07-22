from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Student_activity
from api.serializers import StudentActivitySerializer
from users.models import CustomUser
import numpy as np
from sklearn import metrics
from sklearn import svm
import json
import matplotlib.pyplot as plt
import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
from plotting.plot_2d import plot_2d
from rest_framework import status

def svm_classifier(X_train, y_train,X_test, user_id, features):
    clf = svm.SVC()
    y_pred = clf.fit(X_train, y_train).predict(X_test)
    # pickle.dump(y_agg,open("ml_model/agglomerative_result.pkl", "wb"))

    X_test = np.array(X_test)
    plt_url = 'media/{}'.format(user_id)
    if not os.path.exists(plt_url):
        os.makedirs(plt_url)
    title = "SVM Classification"
    plt_url += '/{}.png'.format(title.replace(" ", "_"))
    i=0
    while os.path.exists(f"{plt_url}_{i}.png"):
        i += 1
    plt_url = '{}_{}.png'.format(plt_url, i)

    plot_2d(X_test, y_pred, plt_url, title, features)
    return y_pred, plt_url


@api_view(["POST"])
def get_smv_classifier(request):
    print(request.user.id)
    user_id = request.user.id
    if (user_id == None):
        user_id = 1
    try:
        data = json.loads(request.body)
        # print("data", data)

        train_data = data['train']
        label_col = data['label_col']
        X_test = data['test']
        if ('header' in data):
            header = data['header']
        else:
            header = None
        features = None
        # train_data = request.GET.get('data')
        if label_col is not None:
            # Datapreprocessing Convert the values to float
            label_col = int(label_col)
            # print("n_clusters",n_clusters)
            train_data = list(filter(any, train_data))
            train_data = [list(filter(None, lst)) for lst in train_data]
            if (not header):
                features = None
            else:
                features = train_data.pop(0)
            train_data = np.asarray(train_data, dtype=np.float64)
            # print(train_data)
            X_test = list(filter(any, X_test))
            X_test = [list(filter(None, lst)) for lst in X_test]
            X_test = np.asarray(X_test, dtype=np.float64)
            train_data = np.array(train_data)
            y_train = train_data[:, label_col]
            X_train = np.delete(train_data, label_col, 1)
            y_pred, plt_url = svm_classifier(X_train, y_train,X_test, user_id, features)
            input_output = np.concatenate((y_pred.reshape(-1, 1), X_test), axis=1)
            if(features):
                features.pop()
                features.insert(0, "Class")
                features = np.array(features)
                input_output = np.concatenate((features.reshape(1, -1), input_output), axis=0)
            result = {
                'error': '0',
                'message': 'Successfull',
                'y_pred': y_pred.reshape(-1, 1),
                'test_output': input_output,
                'plt_url': plt_url
            }
            user = CustomUser.objects.get(id=user_id)
            activity = Student_activity.objects.create(user=user, ml_model="svm", n_rows=X_train.shape[0], n_columns=X_train.shape[1])
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