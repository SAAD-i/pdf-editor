from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('user/', views.get_user, name='get_user'),
    path('register/', views.register, name='register'),
    path('contact', views.contact_form, name='contact_form'),
    # Add other URL patterns as needed
]
