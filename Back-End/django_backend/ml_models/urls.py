from django.urls import path
from ml_models.clustering import kmeans
from ml_models.clustering import dbscan
from ml_models.clustering import agglomerative
from . import views

urlpatterns = [
	path('', views.message),
    path('kmeans/', kmeans.get_kmeans),
    path('db_scan/', dbscan.get_dbscan),
    path('agglomerative/', agglomerative.get_agglomerative)
]