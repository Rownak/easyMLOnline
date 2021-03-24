from rest_framework import serializers
from .models import Student_activity

class StudentActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Student_activity
        fields = ['id', 'user', 'ml_model', 'date_time', 'n_columns', 'n_rows']