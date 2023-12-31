# users/serializers.py
from rest_framework import serializers
from . import models
from django.db import transaction
from rest_auth.registration.serializers import RegisterSerializer

from rest_auth.serializers import LoginSerializer as RestAuthLoginSerializer

class CustomLoginSerializer(RestAuthLoginSerializer):
    username = None

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ('id','course_name')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('id', 'email', 'first_name', 'last_name', 'university', 'course', 'is_teacher')

class CustomRegisterSerializer(RegisterSerializer):
	username=None
	university = serializers.CharField(max_length=100)
	first_name = serializers.CharField(max_length=50)
	last_name = serializers.CharField(max_length=50)
	course = serializers.CharField(max_length=50, allow_blank=True, required=False)
	#course = CourseSerializer(many=False, read_only=True)
	#course_name = serializers.CharField(write_only=True)
	#print("selected_course", course_name)
	@transaction.atomic
	def save(self, request):
		user = super().save(request)
		user.university = self.data.get('university')
		user.first_name = self.data.get('first_name')
		user.last_name = self.data.get('last_name')
		if('course' in self.data):
			user.course = self.data.get('course')
		user.save()
		return user