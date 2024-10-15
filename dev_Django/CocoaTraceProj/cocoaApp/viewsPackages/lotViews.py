from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from cocoaApp.models import Lot
from cocoaApp.serializer import LotSerializer

class LotCreateView(APIView):
    def post(self, request):
        serializer = LotSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LotListView(generics.ListAPIView):
    queryset = Lot.objects.all()
    serializer_class = LotSerializer
    
    
class LotByProducteurView(generics.ListAPIView):
    serializer_class = LotSerializer

    def get_queryset(self):
        producteur_id = self.kwargs['producteur_id']
        return Lot.objects.filter(producteur_id=producteur_id)

class LotByCooperativeView(generics.ListAPIView):
    serializer_class = LotSerializer

    def get_queryset(self):
        cooperative_id = self.kwargs['cooperative_id']
        return Lot.objects.filter(cooperative_id=cooperative_id)

class LotByParcelleView(generics.ListAPIView):
    serializer_class = LotSerializer

    def get_queryset(self):
        parcelle_id = self.kwargs['parcelle_id']
        return Lot.objects.filter(parcelle_id=parcelle_id)
    


class LotUpdateView(generics.UpdateAPIView):
    queryset = Lot.objects.all()
    serializer_class = LotSerializer
    lookup_field = 'id'  # Utiliser l'ID du Lot pour les opérations

class LotDeleteView(generics.DestroyAPIView):
    queryset = Lot.objects.all()
    serializer_class = LotSerializer
    lookup_field = 'id'  # Utiliser l'ID du Lot pour les opérations
    
