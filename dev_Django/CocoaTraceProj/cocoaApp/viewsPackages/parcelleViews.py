from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from cocoaApp.models import Parcelle
from cocoaApp.serializer import ParcelleSerializer

class ParcelleCreateView(APIView):
    def post(self, request):
        serializer = ParcelleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ParcelleListView(generics.ListAPIView):
    queryset = Parcelle.objects.all()
    serializer_class = ParcelleSerializer
    
    
class ParcelleByProducteurView(generics.ListAPIView):
    serializer_class = ParcelleSerializer

    def get_queryset(self):
        producteur_id = self.kwargs['producteur_id']
        return Parcelle.objects.filter(producteur_id=producteur_id)
    


class ParcelleUpdateView(generics.UpdateAPIView):
    queryset = Parcelle.objects.all()
    serializer_class = ParcelleSerializer
    lookup_field = 'id'  # Utiliser l'ID du Parcelle pour les opérations

class ParcelleDeleteView(generics.DestroyAPIView):
    queryset = Parcelle.objects.all()
    serializer_class = ParcelleSerializer
    lookup_field = 'id'  # Utiliser l'ID du Parcelle pour les opérations