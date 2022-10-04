from unittest.util import _MAX_LENGTH
from django.db import models

# Create your models here.

class ContactMe(models.Model):
    email = models.CharField(max_length=200)
    msg = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

