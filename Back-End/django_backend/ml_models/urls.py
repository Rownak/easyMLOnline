from django.urls import path
from ml_models.clustering import kmeans
from ml_models.clustering import dbscan
from ml_models.clustering import agglomerative
from ml_models.classifier import gaussian_naive_bayes
from ml_models.classifier import knn_classifier
from . import views

urlpatterns = [
	path('', views.message),
    path('kmeans/', kmeans.get_kmeans),
    path('db_scan/', dbscan.get_dbscan),
    path('agglomerative/', agglomerative.get_agglomerative),
    path('gauss_nb/', gaussian_naive_bayes.get_gaussian_nb),
    path('knn_classifier/', knn_classifier.get_knn_classifier)
]