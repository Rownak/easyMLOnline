from django.db import models
from django.contrib.auth.models import User


class Student_activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ml_model = models.CharField(max_length=32)
    date_time = models.DateTimeField(auto_now_add=True)
    n_column = models.IntegerField()
    n_rows = models.IntegerField()
