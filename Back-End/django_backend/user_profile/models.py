from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

class Profile(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	UNIVERSITIES = (
		('utep', 'The Univerisity of Texas at El Paso'),
		('arizona', 'University of Arizona')
	)

	#ROLES = ((0, 'Professor'),(1, 'Student'),(2, 'Staff'))

	university = models.CharField(max_length=50,blank=False, default='unknown',choices=UNIVERSITIES)


class Ml_algo(models.Model):
	title = models.CharField(max_length=32)
	description = models.TextField(max_length=360)

	def no_of_ratings(self):
		# filtering for this ml_algo
		ratings = Rating.objects.filter(ml_algo=self)
		return len(ratings)

	def avg_rating(self):
		sum=0
		ratings = Rating.objects.filter(ml_algo=self)
		for rating in ratings:
			sum+= rating.stars
		if( len(ratings)>0):
			return sum/len(ratings)
		else:
			return 0

class Rating(models.Model):
	# if we remove a ml_algo we also remove the rating of that algorithm
	ml_algo = models.ForeignKey(Ml_algo, on_delete=models.CASCADE)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	stars = models.IntegerField(validators=[MinValueValidator(1),
											MaxValueValidator(5)])
	class Meta:
		# if we have a rating for a ml_algo from a user, we can't breate new rating for same ml_algo and user

		unique_together = (('user', 'ml_algo'),)
		index_together = (('user', 'ml_algo'),)
# Create your models here.
