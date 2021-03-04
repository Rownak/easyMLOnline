# users/admin.py
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    username=None
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    # As username is not in database, so specify which field to use for ordering
    ordering = ('email',)
    list_display = ['email','first_name','last_name','university']

admin.site.register(CustomUser, CustomUserAdmin)