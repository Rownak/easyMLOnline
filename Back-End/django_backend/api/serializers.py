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
        fields = ['id','user','user_first_name','user_last_name', 'user_email','user_course', 'ml_model', 'date_time', 'n_columns', 'n_rows']
    user_email = serializers.SerializerMethodField('get_user_email')
    user_first_name = serializers.SerializerMethodField('get_user_first_name')
    user_last_name = serializers.SerializerMethodField('get_user_last_name')
    user_course = serializers.SerializerMethodField('get_user_course')
    def get_user_email(self, obj):
        return obj.user.email
    def get_user_first_name(self, obj):
        return obj.user.first_name
    def get_user_last_name(self, obj):
        return obj.user.last_name
    def get_user_course(self, obj):
        return obj.user.course