from rest_framework import serializers
from .models import Ml_algo, Rating
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'username', 'password', 'email')
		# passing more information about the password field
		extra_kwargs = {'password': {'write_only': True, 'required': True}}

	def create(self, validated_data):
		user = User.objects.create_user(**validated_data)
		token = Token.objects.create(user=user)
		return user

class Ml_algoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Ml_algo
		fields = ('id', 'title', 'description', 'no_of_ratings', 'avg_rating')
class RatingSerializer(serializers.ModelSerializer):
	class Meta:
		model = Rating
		fields = ('id', 'stars', 'user', 'ml_algo')
