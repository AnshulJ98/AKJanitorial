from django.db import models

# Create your models here.
class Feedback(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=10)
    message = models.CharField(max_length=200)
    def __str__(self):
        return self.phone