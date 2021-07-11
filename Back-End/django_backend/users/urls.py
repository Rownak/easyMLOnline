# users/urls.py
from django.urls import include, path

from . import views

from django.urls import path, re_path
from dj_rest_auth.registration.views import RegisterView, VerifyEmailView, ConfirmEmailView
from dj_rest_auth.views import LoginView, LogoutView
from dj_rest_auth.views import PasswordResetView, PasswordResetConfirmView
from . import logging
from .views import CustomLoginView, CustomRegisterView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('teacher', views.TeacherView)
urlpatterns = [
    path('users/', views.UserListView.as_view()),
    path('logging/', logging.logging_activity),
    path('courses/', views.CourseListView.as_view()),
    path('', include(router.urls)),
    #path('account-confirm-email/<str:key>/', ConfirmEmailView.as_view()),
    path(
        'account-confirm-email/<str:key>/',
        ConfirmEmailView.as_view(),
    ),  # Needs to be defined before the registration path
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('custom/registration/', CustomRegisterView.as_view()),
    path('custom/login/', CustomLoginView.as_view(), name='my_custom_login'),
    path('custom/logout/', LogoutView.as_view()),
    path('dj-rest-auth/account-confirm-email/',
         VerifyEmailView.as_view(), name='account_email_verification_sent'),
    path('password-reset/', PasswordResetView.as_view()),
    path('password-reset-confirm/<uidb64>/<token>/',
PasswordResetConfirmView.as_view(), name = 'password_reset_confirm'),
]