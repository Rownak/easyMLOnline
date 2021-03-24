from django.urls import path
from ml_models.clustering import kmeans, dbscan, agglomerative
from ml_models.classifier import gaussian_naive_bayes, knn_classifier, svm_classifier
from ml_models.nearest_neighbour import knn_neighbors
from . import views

urlpatterns = [
	path('', views.message),
    path('kmeans/', kmeans.get_kmeans),
    path('db_scan/', dbscan.get_dbscan),
    path('agglomerative/', agglomerative.get_agglomerative),
    path('gauss_nb/', gaussian_naive_bayes.get_gaussian_nb),
    path('knn_classifier/', knn_classifier.get_knn_classifier),
    path('svm_classifier/', svm_classifier.get_smv_classifier),
    path('knn_neighbors/', knn_neighbors.get_knn_neighbors)
]