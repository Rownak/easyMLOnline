# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from .managers import CustomUserManager

# UNIVERSITY_SELECTION = [
#     ('UTEP', 'The University of Texas El Paso'),
#     ('ARIZONA', 'University of Arizona')
# ]


class CustomUser(AbstractUser):
	username = None
	email = models.EmailField(_('email address'), unique=True)
	first_name = models.CharField(blank=False, max_length=50)
	last_name = models.CharField(blank=False, max_length=50)
	course = models.CharField(default="None", max_length=20)
	#university = models.CharField(blank=False, max_length=255, choices=UNIVERSITY_SELECTION)
	university = models.CharField(blank=False, max_length=100)
	is_student = models.BooleanField('student_status', default=True)
	is_teacher = models.BooleanField('teacher_status', default=False)

	USERNAME_FIELD = 'email'

	REQUIRED_FIELDS = []
	objects = CustomUserManager()
	def __str__(self):
		return self.email