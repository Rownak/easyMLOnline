from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
from sklearn import metrics
from sklearn.naive_bayes import GaussianNB
import json
import matplotlib.pyplot as plt
import os,sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)
from plotting.plot_2d import plot_2d


def gaussian_nb(X_train, y_train,X_test, user_id):
    gnb = GaussianNB()
    y_pred = gnb.fit(X_train, y_train).predict(X_test)
    # pickle.dump(y_agg,open("ml_model/agglomerative_result.pkl", "wb"))

    X_test = np.array(X_test)
    plt_url = 'media/{}'.format(user_id)
    if not os.path.exists(plt_url):
        os.makedirs(plt_url)
    plt_url += '/guss_nb_output.png'
    plot_2d(X_test, y_pred, plt_url)

    return y_pred, plt_url


@api_view(["POST"])
def get_gaussian_nb(request):
    print(request.user.id)
    user_id = request.user.id
    if (user_id == None):
        user_id = 0
    try:
        data = json.loads(request.body)
        # print("data", data)

        train_data = data['train']
        label_col = data['label_col']
        X_test = data['test']
        # train_data = request.GET.get('data')
        if label_col is not None:
            # Datapreprocessing Convert the values to float
            label_col = int(label_col)
            # print("n_clusters",n_clusters)
            train_data = np.array(train_data)



            # train_data = list(filter(any, train_data))
            # train_data = [list(filter(None, lst)) for lst in train_data]

            X_train = train_data[:, 0:label_col]
            y_train = train_data[:, label_col]
            # print("train_data",train_data)
            y_pred, plt_url = gaussian_nb(X_train, y_train,X_test, user_id)
            result = {
                'error': '0',
                'message': 'Successfull',
                'y_pred': y_pred.reshape(-1, 1),
                'plt_url': plt_url
            }
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