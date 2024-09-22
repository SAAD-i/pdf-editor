from django.contrib import admin
from django.contrib.auth import authenticate, get_user_model

User = get_user_model()
 # Import your custom User model

# Register your models here.
admin.site.register(User)
