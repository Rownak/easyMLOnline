from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import StudentActivityViewSet


router = routers.DefaultRouter()
router.register('all_activities', StudentActivityViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
