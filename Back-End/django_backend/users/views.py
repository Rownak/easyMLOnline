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


class CustomLoginView(LoginView):
    def get_response(self):
        orginal_response = super().get_response()
        orginal_response.data['user']['token'] = orginal_response.data['access_token']
        print(orginal_response.data)

        return orginal_response

class CustomRegisterView(RegisterView):
    serializer_class = serializers.CustomRegisterSerializer
    def create(self, request, *args, **kwargs):

        #Update
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save(request)
        user_data = serializer.data
        user = models.CustomUser.objects.get(email=user_data['email'])
        token = RefreshToken.for_user(user).access_token
        current_site = get_current_site(request).domain
        relativeLink=reverse('email-verify')

        absurl = 'http://'+current_site+relativeLink+"?token="+str(token)
        email_body = 'Hi '+ user.last_name + 'use link below to verify your email\n' + absurl
        data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Verify your email'}
        Util.send_email(data)

        # orginal_response = super().create(request, *args, **kwargs)
        # orginal_response = user_data
        # custom_data = {"message": "Success", "status": "ok"}
        # orginal_response.data.update(custom_data)
        # print(orginal_response)
        return Response(user_data, status=status.HTTP_201_CREATED)

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