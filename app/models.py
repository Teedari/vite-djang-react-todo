from django.db import models

# Create your models here.

class Todo(models.Model):
  title = models.CharField(max_length=40,)
  description = models.CharField(max_length=250, blank=True, null=True)
  status = models.BooleanField(default=False)
  set_date = models.DateTimeField()
  created_at = models.DateTimeField(auto_now_add=True)
