from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import Ml_algoViewSet, RatingViewSet, UserViewSet, ProfileViewSet


router = routers.DefaultRouter()
router.register('ml_algo', Ml_algoViewSet)
router.register('ratings', RatingViewSet)
router.register('users', UserViewSet)
router.register('profiles', ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]