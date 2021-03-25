from django.shortcuts import render
from django.contrib.auth.models import  User
from rest_framework.decorators import action
from rest_framework import viewsets
from .models import Student_activity
from . import serializers
from rest_framework import generics, status
from rest_framework.response import Response
# Create your views here.
class StudentActivityViewSet(viewsets.ModelViewSet):
	queryset = Student_activity.objects.all()
	serializer_class = serializers.StudentActivitySerializer
	@action(detail=True, methods=['GET'])
	def get_activities(self):
		all_activity = Student_activity.objects.all()
		serializer=serializers.StudentActivitySerializer(all_activity)
		response = {'message': 'Rating Updated', 'result': serializer.data}
		return Response(response, status=status.HTTP_200_OK)
