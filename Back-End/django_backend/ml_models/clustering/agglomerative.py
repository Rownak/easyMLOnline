from rest_framework.decorators import api_view
from rest_framework.response import Response
import numpy as np
from sklearn import metrics
from sklearn.cluster import AgglomerativeClustering
import json
import matplotlib.pyplot as plt
import os
def agg_cluster(X, n, user_id):
    model = AgglomerativeClustering(n)
    y_agg = model.fit_predict(X)
    silhouette_score=metrics.silhouette_score(X, y_agg)
    #pickle.dump(y_agg,open("ml_model/agglomerative_result.pkl", "wb"))

    X = np.array(X)
    plt.scatter(X[:, 0], X[:, 1], c=y_agg, s=50, cmap='viridis')
    plt_url = 'media/{}'.format(user_id)
    if not os.path.exists(plt_url):
        os.makedirs(plt_url)
    plt_url += '/agg_output.png'
    plt.savefig(plt_url)

    return y_agg, silhouette_score, plt_url

@api_view(["POST"])
def get_agglomerative(request):
    print(request.user.id)
    user_id = request.user.id
    if (user_id == None):
        user_id = 0
    try:
        data = json.loads(request.body)
        #print("data", data)
        n = data['n']
        train_data = data['train']
        #train_data = request.GET.get('data')
        if n is not None:
            #Datapreprocessing Convert the values to float
            n = int(n)
            #print("n_clusters",n_clusters)
            train_data = np.array(train_data)
            train_data = list(filter(any,train_data))
            train_data = [list(filter(None, lst)) for lst in train_data]
            #print("train_data",train_data)
            y_agg, silhouette_score, plt_url = agg_cluster(train_data,n, user_id)
            result = {
                'error' : '0',
                'message' : 'Successfull',
                'y_kmeans' : y_agg.reshape(-1,1),
                'silhouette_score' : silhouette_score,
                'plt_url' : plt_url
            }
        else:
            result = {
                'error' : '1',
                'message': 'Invalid Parameters'                
            }
    except Exception as e:
        result = {
            'error' : '2',
            "message": str(e)
        }
    
    return Response(result)