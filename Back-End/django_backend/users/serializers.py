# users/serializers.py
from rest_framework import serializers
from . import models
from django.db import transaction
from rest_auth.registration.serializers import RegisterSerializer
# from users.models import UNIVERSITY_SELECTION

from rest_auth.serializers import LoginSerializer as RestAuthLoginSerializer


class CustomLoginSerializer(RestAuthLoginSerializer):
    username = None

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('id','email','first_name','last_name', 'university')

class CustomRegisterSerializer(RegisterSerializer):
	username=None
	university = serializers.CharField(max_length=100)
	first_name = serializers.CharField(max_length=50)
	last_name = serializers.CharField(max_length=50)
	@transaction.atomic
	def save(self, request):
		user = super().save(request)
		user.university = self.data.get('university')
		user.first_name = self.data.get('first_name')
		user.last_name = self.data.get('last_name')
		user.save()
		return user