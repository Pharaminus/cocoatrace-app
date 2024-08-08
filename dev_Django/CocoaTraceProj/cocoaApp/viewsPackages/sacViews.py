from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from cocoaApp.models import Sac
from cocoaApp.serializer import SacSerializer

class SacCreateView(APIView):
    def post(self, request):
        serializer = SacSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class SacListView(generics.ListAPIView):
    queryset = Sac.objects.all()
    serializer_class = SacSerializer
    
    
class SacByAcheteurView(generics.ListAPIView):
    serializer_class = SacSerializer

    def get_queryset(self):
        acheteur_id = self.kwargs['acheteur_id']
        return Sac.objects.filter(acheteur_id=acheteur_id)
    


class SacUpdateView(generics.UpdateAPIView):
    queryset = Sac.objects.all()
    serializer_class = SacSerializer
    lookup_field = 'id'  # Utiliser l'ID du Sac pour les opérations

class SacDeleteView(generics.DestroyAPIView):
    queryset = Sac.objects.all()
    serializer_class = SacSerializer
    lookup_field = 'id'  # Utiliser l'ID du Sac pour les opérations
    
    
class SacGet(APIView):
    def get(self, request, pk):
        try:
            element = Sac.objects.get(pk=pk)
            serializer = SacSerializer(element)
            return Response(serializer.data)
        except Sac.DoesNotExist:
            return Response({'detail': 'Not found.'}, status=404)
        
class SacRetrieveView(generics.RetrieveAPIView):
    queryset = Sac.objects.all()
    serializer_class = SacSerializer
    lookup_field = 'id'

        