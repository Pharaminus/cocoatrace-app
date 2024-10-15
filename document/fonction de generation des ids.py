import os
import random
import string
from qgis.core import QgsProject, QgsField, edit
from PyQt5.QtCore import QVariant

# Chargement de la couche active (shapefile des parcelles)
layer = iface.activeLayer()

# Fonction pour normaliser le nom (en ignorant la casse)
def normalize_nom(nom):
    return nom.lower().strip()

# Fonction pour générer l'identifiant unique pour chaque producteur
def generate_producer_id(nom, prenom, dob, cni):
    # Extraire les premières lettres du nom et prénom
    code_nom = nom[:2].upper()
    code_prenom = prenom[:2].upper()
    
    # Convertir la date de naissance (dob) en chaîne de caractères avant de l'utiliser
    dob_part = str(dob)[:1]  # Prendre le premier caractère de l'année de naissance
    cni_part = str(cni)[-2:]  # Prendre les deux derniers chiffres du CNI
    
    # Générer deux caractères aléatoires (chiffres et lettres mélangés)
    random_part = ''.join(random.choices(string.ascii_uppercase + string.digits, k=2))
    
    # Créer l'identifiant unique
    return f"{code_nom}{code_prenom}{dob_part}{cni_part}{random_part}"

# Dictionnaire pour stocker les IDs déjà générés pour les producteurs
producer_ids = {}

# Dictionnaire pour compter les parcelles par producteur
parcelle_counts = {}

# Champs à utiliser dans le shapefile (nom, prénom, date de naissance, numéro de CNI)
nom_field = "Nom"  # Champ dans ton shapefile
prenom_field = "Prénom"
dob_field = "An_Naissan"  # Champ de date de naissance
cni_field = "Num_ID"

# Vérifier et ajouter les champs si non existants
field_names = [field.name() for field in layer.fields()]

if "Producer_I" not in field_names:
    layer.dataProvider().addAttributes([QgsField("Producer_I", QVariant.String)])

if "Parcelle_I" not in field_names:
    layer.dataProvider().addAttributes([QgsField("Parcelle_I", QVariant.String)])

# Mettre à jour les champs dans la couche
layer.updateFields()

# Parcourir chaque entité (parcelle) dans le shapefile
with edit(layer):
    for feature in layer.getFeatures():
        nom = feature[nom_field]
        prenom = feature[prenom_field]
        dob = feature[dob_field]
        cni = feature[cni_field]

        # Normaliser nom et CNI
        key = (normalize_nom(nom), normalize_nom(prenom), cni)

        # Vérifier si l'identifiant unique existe déjà pour ce producteur
        if key not in producer_ids:
            producer_ids[key] = generate_producer_id(nom, prenom, dob, cni)
            parcelle_counts[key] = 0  # Initialiser le compteur de parcelles pour ce producteur
        
        # Récupérer l'ID du producteur
        producer_id = producer_ids[key]

        # Incrémenter le nombre de parcelles pour ce producteur
        parcelle_counts[key] += 1
        parcelle_num = parcelle_counts[key]

        # Créer l'ID de la parcelle (Producer_ID + suffixe)
        parcelle_id = f"{producer_id}_{parcelle_num}"

        # Mettre à jour les champs dans le shapefile
        feature.setAttribute(feature.fieldNameIndex("Producer_I"), producer_id)
        feature.setAttribute(feature.fieldNameIndex("Parcelle_I"), parcelle_id)

        # Mettre à jour la couche
        layer.updateFeature(feature)

print("Les identifiants uniques de producteurs et parcelles ont été générés avec succès.")
