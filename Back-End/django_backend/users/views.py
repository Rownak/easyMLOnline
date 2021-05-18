# users/views.py
from rest_framework import generics

from . import models
from . import serializers
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView
from rest_framework.permissions import IsAuthenticated


from rest_framework import viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import  User
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import action
from rest_framework import viewsets

from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from allauth.account.admin import EmailAddress


class CustomLoginView(LoginView):
    def get_response(self):
        if(EmailAddress.objects.filter(user=self.request.user, verified=True).exists()):
            orginal_response = super().get_response()
            orginal_response.data['user']['token'] = orginal_response.data['access_token']
            print(orginal_response.data)

            return orginal_response
        else:
            response = {'verification': False, 'message': 'Please verify your email first to login !!!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)
class CustomRegisterView(RegisterView):
    serializer_class = serializers.CustomRegisterSerializer
    def create(self, request, *args, **kwargs):

        response = super().create(request, *args, **kwargs)
        print("first response: ", response.data)
        custom_data = {"message": "Success", "status": "ok"}
        response.data.update(custom_data)
        print("second response: ",response)
        return response

class VerifyEmail(generics.GenericAPIView):
    def get(self):
        pass
class CourseListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer
    permission_classes = (AllowAny,)

class UserListView(generics.ListAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer
    #\authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

# class CourseViewSet(viewsets.ModelViewSet):
#     queryset = models.Course.objects.all()
#     serializer_class = serializers.CourseSerializer

class TeacherView(viewsets.ModelViewSet):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer
    #authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    @action(detail=True, methods=['POST'])
    def set_teacher(self, request, pk=None):
        teacher = models.CustomUser.objects.get(id=pk)
        user = request.user
        print('user', user)
        if(user.is_superuser):
            print(user.is_superuser)
            teacher.is_student = False
            teacher.is_teacher = True
            teacher.save()
            response = {'message': 'New Teacher Added : {}'.format(teacher.first_name)}
            return Response(response, status=status.HTTP_200_OK)
        else:
            response = {'message': 'Sorry! Please login as SuperUser. Only Superuser can access this link !!!'}
            return Response(response, status=status.HTTP_400_BAD_REQUEST)