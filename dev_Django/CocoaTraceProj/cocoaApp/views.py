# views.py
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import UserRegistrationForm, CustomLoginForm
from rest_framework.views import APIView
from rest_framework.response import Response
from cocoaApp.serializer import UserSerializer
# from django.contrib.auth.models import User

# def register(request):
#     if request.method == 'POST':
#         form = UserRegistrationForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             password = form.cleaned_data.get('password')
#             email = form.cleaned_data.get('email')
#             user = authenticate(username=username, password=password, email=email)
#             login(request, user)
#             return redirect('cocoaApp/producteur')  # Redirigez vers votre page d'accueil
#     else:
#         form = UserRegistrationForm()
#     return render(request, 'cocoaApp/register.html', {'form': form})

# def login_view(request):
#     if request.method == 'POST':
#         form = CustomLoginForm(request, data=request.POST)
#         if form.is_valid():
#             login(request, form.get_user())
#             return redirect('cocoaApp/producteur')  # Redirigez vers votre page d'accueil
#     else:
#         form = CustomLoginForm()
#     return render(request, 'cocoaApp/login.html', {'form': form})


# class InscriptionView(APIView):
#     def post(self, request):
#         serializer = UtilisateurSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response({'message': 'Inscription réussie'})
#         return Response(serializer.errors, status=400)
    
# def TestUrl(request):
#     return render(request, 'cocoaApp/test.html')

from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework import status
from knox.views import LoginView as KnoxLoginView
from cocoaApp.serializer import UserSerializer
from cocoaApp.models import User
class LoginView(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = UserSerializer
    

class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    
def check_user(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            user = User.objects.get(username=username, password=password)
            return JsonResponse({'exists': True})
        except User.DoesNotExist:
            return JsonResponse({'exists': False})
    
    
    
    
