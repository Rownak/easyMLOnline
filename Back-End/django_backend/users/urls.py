# users/urls.py
from django.urls import include, path

from . import views


# from django.urls import include, path
# from rest_auth.registration.views import VerifyEmailView, ConfirmEmailView
# from dj_rest_auth.views import PasswordResetConfirmView
# from .views import CustomLoginView, CustomRegisterView
# urlpatterns = [
#     path('users/', views.UserListView.as_view()),
#     path('rest-auth/', include('rest_auth.urls')),
#     path(r'custom/login/', CustomLoginView.as_view(), name='my_custom_login'),
#     path('rest-auth/registration/account-confirm-email/<str:key>/',
#         ConfirmEmailView.as_view()),
#     path('rest-auth/registration/', include('rest_auth.registration.urls')),
#     path('custom/registration/', CustomRegisterView.as_view()),
#     path('rest-auth/account-confirm-email/',VerifyEmailView.as_view(),
#     	name='account_email_verification_sent'),
#     path(
#         'rest-auth/password/reset/confirm/<slug:uidb64>/<slug:token>/',
#         PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
#
# ]

from django.urls import path, re_path
from dj_rest_auth.registration.views import RegisterView, VerifyEmailView, ConfirmEmailView
from dj_rest_auth.views import LoginView, LogoutView
from dj_rest_auth.views import PasswordResetView, PasswordResetConfirmView
from .views import CustomLoginView, CustomRegisterView
from rest_framework import routers
router = routers.DefaultRouter()
router.register('teacher', views.TeacherView)
urlpatterns = [
    path('users/', views.UserListView.as_view()),
    path('courses/', views.CourseListView.as_view()),
    path('', include(router.urls)),
    path('account-confirm-email/<str:key>/', ConfirmEmailView.as_view()),
    #path('register/', RegisterView.as_view()),
    path('custom/registration/', CustomRegisterView.as_view()),
    #path('dj_rest_auth/login/', LoginView.as_view()),
    path('custom/login/', CustomLoginView.as_view(), name='my_custom_login'),
    path('custom/logout/', LogoutView.as_view()),
    path('email-verify/', views.VerifyEmail.as_view(), name="email-verify"),

    # path('verify-email/',
    #      VerifyEmailView.as_view(), name='rest_verify_email'),
    # path('account-confirm-email/',
    #      VerifyEmailView.as_view(), name='account_email_verification_sent'),
    # re_path(r'^account-confirm-email/(?P<key>[-:\w]+)/$',
    #      VerifyEmailView.as_view(), name='account_confirm_email'),
    # path('password-reset/', PasswordResetView.as_view()),
    # path('password-reset-confirm/<uidb64>/<token>/',
    #          PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
]