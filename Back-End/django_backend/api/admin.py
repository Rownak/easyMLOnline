
from django.contrib import admin
from .models import Student_activity
class CustomActivityAdmin(admin.ModelAdmin):

    list_display = ['id', 'user', 'ml_model', 'date_time', 'n_columns', 'n_rows']

admin.site.register(Student_activity, CustomActivityAdmin)