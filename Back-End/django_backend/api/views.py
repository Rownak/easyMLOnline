from django.shortcuts import render
from django.contrib.auth.models import  User
from .models import Student_activity
from . import serializers
from rest_framework import generics
# Create your views here.
class StudentActivityViewSet(generics.ListAPIView):
	queryset = Student_activity.objects.all()
	serializer_class = serializers.StudentActivitySerializer