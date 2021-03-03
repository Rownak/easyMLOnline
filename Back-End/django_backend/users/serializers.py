# users/serializers.py
from rest_framework import serializers
from . import models
from django.db import transaction
from rest_auth.registration.serializers import RegisterSerializer
from users.models import UNIVERSITY_SELECTION

from rest_auth.serializers import LoginSerializer as RestAuthLoginSerializer


class CustomLoginSerializer(RestAuthLoginSerializer):
    username = None

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('email', 'university')

class CustomRegisterSerializer(RegisterSerializer):
	username=None
	university = serializers.ChoiceField(choices=UNIVERSITY_SELECTION)
	@transaction.atomic
	def save(self, request):
		user = super().save(request)
		user.university = self.data.get('university')
		user.save()
		return user