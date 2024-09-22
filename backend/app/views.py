import logging
from django.contrib.auth import authenticate, get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
import json
import os
from django.http import FileResponse
from PyPDF2 import PdfReader, PdfWriter

logger = logging.getLogger(__name__)
User = get_user_model()

@csrf_exempt
@require_POST
def register(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return JsonResponse({'message': 'Email and password are required'}, status=400)

        if User.objects.filter(email=email).exists():
            return JsonResponse({'message': 'User with this email already exists'}, status=400)

        user = User.objects.create_user(email=email, password=password)
        
        # Generate tokens for the new user
        refresh = RefreshToken.for_user(user)
        
        return JsonResponse({
            'message': 'User registered successfully',
            'user': {
                'id': user.id,
                'email': user.email,
            },
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }, status=201)

    except json.JSONDecodeError:
        return JsonResponse({'message': 'Invalid JSON'}, status=400)
    except Exception as e:
        logger.exception("Unexpected error in register view")
        return JsonResponse({'message': str(e)}, status=500)

@csrf_exempt
@require_POST
def login_view(request):
    try:
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return JsonResponse({'success': False, 'message': 'Email and password are required'}, status=400)

        user = authenticate(request, email=email, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return JsonResponse({
                'success': True,
                'message': 'Login successful',
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': {
                    'id': user.id,
                    'email': user.email,
                }
            })
        else:
            return JsonResponse({
                'success': False,
                'message': 'Invalid credentials'
            }, status=400)

    except json.JSONDecodeError:
        logger.error("Invalid JSON in login request")
        return JsonResponse({'success': False, 'message': 'Invalid JSON'}, status=400)
    except Exception as e:
        logger.exception("Unexpected error in login_view")
        return JsonResponse({'success': False, 'message': 'An unexpected error occurred'}, status=500)

from django.shortcuts import render

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    user = request.user
    return JsonResponse({
        'id': user.id,
        'email': user.email,
    })


# Create your views here.

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
import json
from dotenv import load_dotenv
load_dotenv()
import os
# ... rest of your settings

@csrf_exempt
def contact_form(request):
    print(f"Email Host: {settings.EMAIL_HOST}")
    print(f"Email Port: {settings.EMAIL_PORT}")
    print(f"Email Host User: {settings.EMAIL_HOST_USER}")
    if request.method == 'POST':
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Send email
        subject = f"New contact form submission from {name}"
        email_message = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        from_email = os.environ.get('EMAIL_HOST_USER')
        recipient_list = [os.environ.get('EMAIL_HOST_USER')]  # The email address where you want to receive the messages

        try:
            send_mail(subject, email_message, from_email, recipient_list)
            return JsonResponse({'status': 'success'})
        except Exception as e:
            print(f"Error sending email: {str(e)}")
            return JsonResponse({'status': 'error'}, status=500)

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)
