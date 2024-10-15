# views.py
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import UserRegistrationForm, CustomLoginForm
from rest_framework.views import APIView
from rest_framework.response import Response
from cocoaApp.serializer import UtilisateurSerializer


def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            email = form.cleaned_data.get('email')
            user = authenticate(username=username, password=password, email=email)
            login(request, user)
            return redirect('cocoaApp/producteur')  # Redirigez vers votre page d'accueil
    else:
        form = UserRegistrationForm()
    return render(request, 'cocoaApp/register.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = CustomLoginForm(request, data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            return redirect('cocoaApp/producteur')  # Redirigez vers votre page d'accueil
    else:
        form = CustomLoginForm()
    return render(request, 'cocoaApp/login.html', {'form': form})


class InscriptionView(APIView):
    def post(self, request):
        serializer = UtilisateurSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Inscription réussie'})
        return Response(serializer.errors, status=400)
    
def TestUrl(request):
    return render(request, 'cocoaApp/test.html')