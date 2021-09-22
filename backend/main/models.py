from django.db import models
from django.utils.text import slugify

class Note(models.Model):
	body = models.TextField(null = True,unique=True)
	updated = models.DateTimeField(auto_now=True)
	created = models.DateTimeField(auto_now_add=True)
	slug = models.SlugField(null = True,unique = True,max_length=400)

	def __str__(self):
		return str(self.body[0:50])

	def save(self,*args,**kwargs):
		self.slug = slugify(self.body)
		super().save(*args,**kwargs)

	class Meta:
		ordering = ['-updated']