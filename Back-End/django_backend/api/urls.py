# api/urls.py
from django.urls import include, path
from rest_auth.registration.views import VerifyEmailView, ConfirmEmailView
from dj_rest_auth.views import PasswordResetConfirmView

urlpatterns = [
    path('users/', include('users.urls')),
    path('rest-auth/', include('rest_auth.urls')),

    path('rest-auth/registration/account-confirm-email/<str:key>/',
        ConfirmEmailView.as_view()),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('rest-auth/account-confirm-email/',VerifyEmailView.as_view(),
    	name='account_email_verification_sent'),
    path(
        'rest-auth/password/reset/confirm/<slug:uidb64>/<slug:token>/',
        PasswordResetConfirmView.as_view(), name='password_reset_confirm'),



]
