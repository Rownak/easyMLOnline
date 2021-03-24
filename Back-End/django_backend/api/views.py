from django.shortcuts import render
from django.contrib.auth.models import  User
from .models import Student_activity
from .serializers import StudentActivitySerializer
# Create your views here.
class StudentActivityViewSet(viewsets.ModelViewSet):
	queryset = Student_activity.objects.all()
	serializer_class = StudentActivitySerializer