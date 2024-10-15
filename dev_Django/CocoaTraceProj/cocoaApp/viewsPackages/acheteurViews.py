from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from cocoaApp.models import Acheteur
from cocoaApp.serializer import AcheteurSerializer

class AcheteurCreateView(APIView):
    def post(self, request):
        serializer = AcheteurSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class AcheteurListView(generics.ListAPIView):
    queryset = Acheteur.objects.all()
    serializer_class = AcheteurSerializer
    
    
# class AcheteurByCooperativeView(generics.ListAPIView):
#     serializer_class = AcheteurSerializer

#     def get_queryset(self):
#         cooperative_id = self.kwargs['cooperative_id']
#         return Acheteur.objects.filter(AcheteurCoop__cooperative_id=cooperative_id)
    


class AcheteurUpdateView(generics.UpdateAPIView):
    queryset = Acheteur.objects.all()
    serializer_class = AcheteurSerializer
    lookup_field = 'id'  # Utiliser l'ID du Acheteur pour les opérations

class AcheteurDeleteView(generics.DestroyAPIView):
    queryset = Acheteur.objects.all()
    serializer_class = AcheteurSerializer
    lookup_field = 'id'  # Utiliser l'ID du Acheteur pour les opérations