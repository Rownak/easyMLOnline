from rest_framework import serializers
from .models import Student_activity
from users.models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"

class StudentActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Student_activity
        fields = ['id','user', 'user_email', 'ml_model', 'date_time', 'n_columns', 'n_rows']
    user_email = serializers.SerializerMethodField('get_user_email')
    def get_user_email(self, obj):
        return obj.user.email