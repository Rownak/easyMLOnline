# users/urls.py
from django.urls import include, path

from . import views


from django.urls import include, path
from rest_auth.registration.views import VerifyEmailView, ConfirmEmailView
from dj_rest_auth.views import PasswordResetConfirmView
from .views import CustomLoginView, CustomRegisterView
urlpatterns = [
    path('users/', views.UserListView.as_view()),
    path('rest-auth/', include('rest_auth.urls')),
    path(r'custom/login/', CustomLoginView.as_view(), name='my_custom_login'),
    path('rest-auth/registration/account-confirm-email/<str:key>/',
        ConfirmEmailView.as_view()),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('custom/registration/', CustomRegisterView.as_view()),
    path('rest-auth/account-confirm-email/',VerifyEmailView.as_view(),
    	name='account_email_verification_sent'),
    path(
        'rest-auth/password/reset/confirm/<slug:uidb64>/<slug:token>/',
        PasswordResetConfirmView.as_view(), name='password_reset_confirm'),

]
