# users/admin.py
from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import CustomUser, Course
from django.contrib.sites.models import Site
class CustomUserAdmin(UserAdmin):
    #username=None
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    # As username is not in database, so specify which field to use for ordering
    list_display = ['email','first_name','last_name','university', 'course', 'is_teacher']
    add_fieldsets =(
        (None, {'fields': (
        'id','email','first_name','last_name','university', 'course', 'is_teacher')}),
    )
    fieldsets = (
        (None, {
            "fields": (
                ('email','first_name','last_name','university', 'course', 'is_teacher')

            ),
        }),
    )
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

admin.site.unregister(Site)
class SiteAdmin(admin.ModelAdmin):
    fields = ('id', 'name', 'domain')
    readonly_fields = ('id',)
    list_display = ('id', 'name', 'domain')
    list_display_links = ('name',)
    search_fields = ('name', 'domain')
admin.site.register(Site, SiteAdmin)
admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Course)