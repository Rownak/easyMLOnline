from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Ml_algo, Rating, Profile
from .serializers import Ml_algoSerializer, RatingSerializer, UserSerializer, ProfileSerializer
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User


class ProfileViewSet(viewsets.ModelViewSet):
	queryset = Profile.objects.all()
	serializer_class = ProfileSerializer
	
	authentication_classes = (TokenAuthentication, )
	permission_classes = (AllowAny,)

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

	authentication_classes = (TokenAuthentication, )
	permission_classes = (AllowAny,)

class Ml_algoViewSet(viewsets.ModelViewSet):
	queryset = Ml_algo.objects.all()
	serializer_class = Ml_algoSerializer

	# for authentication you need the token

	authentication_classes = (TokenAuthentication, )
	permission_classes = (IsAuthenticated,)

	# 1
	# @action(detail=True, methods=['POST'])
	# def rate_algo(self, request, pk=None):
	# 	response = {'message': 'its working'}
	# 	return Response(response, status=status.HTTP_200_OK)
	# 2
	# @action(detail=True, methods=['POST'])
	# def rate_algo(self, request, pk=None):
	# 	if 'stars' in request.data:
	# 		response = {'message': 'its working'}

	# 		ml_algo = Ml_algo.objects.get(id=pk)
	# 		print("ml_algo title: ", ml_algo.title)

	# 		return Response(response, status=status.HTTP_200_OK)
	# 	else:
	# 		response = {'message': 'You need to provide stars'}
	# 		return Response(response, status=status.HTTP_400_BAD_REQUEST)

	@action(detail=True, methods=['POST'])
	def rate_algo(self, request, pk=None):
		if 'stars' in request.data:
			ml_algo = Ml_algo.objects.get(id=pk)
			stars = request.data['stars']
			user = request.user
			#user = User.objects.get(id=1)
			print('user: ', user.username)

			try:
				rating = Rating.objects.get(user=user.id, ml_algo=ml_algo.id)
				rating.stars = stars
				rating.save()
				serializer = RatingSerializer(rating, many=False)
				response = {'message': 'Rating updated', 'result': serializer.data}
				return Response(response, status=status.HTTP_200_OK)
			except:
				rating = Rating.objects.create(user=user, ml_algo=ml_algo, stars=stars)
				serializer = RatingSerializer(rating, many=False)
				response = {'message': 'Rating created', 'result': serializer.data}
				return Response(response, status=status.HTTP_200_OK)
			
		else:
			response = {'message': 'You need to provide stars'}
			return Response(response, status=status.HTTP_400_BAD_REQUEST)



class RatingViewSet(viewsets.ModelViewSet):
	queryset = Rating.objects.all()
	serializer_class = RatingSerializer
	
	# for authentication you need the token

	authentication_classes = (TokenAuthentication, )
	permission_classes = (IsAuthenticated,)

	def update(self, request, *args, **kwargs):
		response = {'message': 'You cant update rating like that'}
		return Response(response, status=status.HTTP_400_BAD_REQUEST)
	def create(self, request, *args, **kwargs):
		response = {'message': 'You cant create rating like that'}
		return Response(response, status=status.HTTP_400_BAD_REQUEST)


