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

class CustomLoginView(LoginView):
    def get_response(self):
        orginal_response = super().get_response()
        orginal_response.data['user']['token'] = orginal_response.data['access_token']
        print(orginal_response.data)

        return orginal_response

class CustomRegisterView(RegisterView):
    def create(self, request, *args, **kwargs):
        orginal_response = super().create(request, *args, **kwargs)
        custom_data = {"message": "Success", "status": "ok"}
        orginal_response.data.update(custom_data)
        return orginal_response

class UserListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer
    #\authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)


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