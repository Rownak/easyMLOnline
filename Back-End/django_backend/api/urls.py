# api/urls.py
from django.urls import include, path
from . import views
urlpatterns = [
    path('student_activity/', views.StudentActivityViewSet.as_view())
    ]