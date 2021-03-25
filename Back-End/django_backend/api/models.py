from django.db import models
from users.models import CustomUser


class Student_activity(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    ml_model = models.CharField(max_length=32)
    date_time = models.DateTimeField(auto_now_add=True)
    n_columns = models.IntegerField()
    n_rows = models.IntegerField()
