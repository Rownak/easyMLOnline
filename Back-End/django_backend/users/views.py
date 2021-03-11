# users/views.py
from rest_framework import generics

from . import models
from . import serializers
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView
from rest_framework.permissions import IsAuthenticated

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