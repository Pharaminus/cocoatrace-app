from rest_framework import serializers
from .models import Acheteur, Sac, Producteur, Parcelle, Cooperative, Lot, CooperativeProducteur, Utilisateur

        
class AcheteurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acheteur
        fields = '__all__'
        
class SacSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sac
        fields = '__all__'
class ProducteurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producteur
        fields = '__all__'
class ParcelleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parcelle
        fields = '__all__'
        
class CooperativeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cooperative
        fields = '__all__'
        
class LotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lot
        fields = '__all__'
        
class CooperativeProducteurSerializer(serializers.ModelSerializer):
    class Meta:
        model = CooperativeProducteur
        fields = '__all__'
        
class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ['nom', 'email', 'mot_de_passe']