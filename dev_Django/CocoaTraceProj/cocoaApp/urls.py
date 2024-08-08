from django.urls import  path
from cocoaApp.viewsPackages.sacViews import SacCreateView, SacListView, SacByAcheteurView, SacUpdateView, SacDeleteView, SacRetrieveView
from cocoaApp.viewsPackages.parcelleViews import ParcelleCreateView, ParcelleListView,ParcelleByProducteurView, ParcelleUpdateView, ParcelleDeleteView, ParcelleRetrieveView
from cocoaApp.viewsPackages.producteurViews import ProducteurCreateView, ProducteurListView, ProducteurByCooperativeView, ProducteurUpdateView, ProducteurDeleteView, ProducteurRetrieveView
from cocoaApp.viewsPackages.acheteurViews import AcheteurCreateView, AcheteurListView, AcheteurUpdateView, AcheteurDeleteView, AcheteurRetrieveView
from cocoaApp.viewsPackages.cooperativeViews import CooperativeCreateView, CooperativeListView, CooperativeUpdateView, CooperativeDeleteView, CooperativeRetrieveView
from cocoaApp.viewsPackages.lotViews import LotCreateView, LotListView, LotUpdateView, LotDeleteView, LotByCooperativeView, LotByParcelleView, LotByProducteurView, LotRetrieveView
from cocoaApp.viewsPackages.cooperativeProducteurViews import CooperativeProducteurCreateView, CooperativeProducteurListView, CooperativeProducteurUpdateView, CooperativeProducteurDeleteView, CooperativeProducteurByCooperativeView, CooperativeProducteurByProducteurView, CooperativeProducteurRetrieveView
from rest_framework.routers import DefaultRouter
from .views import LoginView, RegisterView, UserCreateView





# ===========| acheteur urls |========================
AcheteurRouteur = DefaultRouter()
# AcheteurRouteur.register('acheteur_rest', AcheteurViewset, basename='acheteur_viewset' )
urlpatterns = [
    # path('test/', TestUrl, name='testUrl'),
    # path('inscription/', InscriptionView.as_view()),
    # path('register/', register, name='register'),
    # path('login/', login_view, name='login'),
    
    path('cocoa/login/', LoginView.as_view(), name='login'),
    path('cocoa/register/', RegisterView.as_view(), name='register'),
    path('cocoa/create/', UserCreateView.as_view(), name='creatUser'),
    path('cocoa/acheteur/new/', AcheteurCreateView.as_view(), name='acheteur-create'),
    path('cocoa/acheteur/list/', AcheteurListView.as_view(), name='acheteur-list'),
    # path('cocoa/cooperatives/<int:cooperative_id>/acheteur/', AcheteurByCooperativeView.as_view(), name='producers-by-cooperative'),
    path('cocoa/acheteur/<int:id>/', AcheteurUpdateView.as_view(), name='acheteur-update'),
    path('cocoa/acheteur/<int:id>/delete/', AcheteurDeleteView.as_view(), name='acheteur-delete'),
    path('cocoa/acheteur/<int:id>/get/', AcheteurRetrieveView.as_view(), name='acheteur-delete'),
]
urlpatterns += AcheteurRouteur.urls


# ===========| sac urls |========================
sacRouteur = DefaultRouter()
# sacRouteur.register('sac_rest', SacViewset, basename='sac_viewset' )
sac_urls = [
    path('cocoa/sac/new/', SacCreateView.as_view(), name='sac-create'),
    path('cocoa/sac/list/', SacListView.as_view(), name='sac-list'),
    path('cocoa/cooperatives/<int:cooperative_id>/sac/', SacByAcheteurView.as_view(), name='producers-by-cooperative'),
    path('cocoa/sac/<int:id>/', SacUpdateView.as_view(), name='sac-update'),
    path('cocoa/sac/<int:id>/delete/', SacDeleteView.as_view(), name='sac-delete'),
    path('cocoa/sac/<int:id>/get/', SacRetrieveView.as_view(), name='sac-delete'),
]
urlpatterns += sac_urls + sacRouteur.urls


# ===========| producteur urls |========================
producteurRouteur = DefaultRouter()
# producteurRouteur.register('producteur_rest', ProducteurViewset, basename='producteur_viewset' )
producteur_urls = [
    path('cocoa/producteur/new/', ProducteurCreateView.as_view(), name='producteur-create'),
    path('cocoa/producteur/list/', ProducteurListView.as_view(), name='producteur-list'),
    path('cocoa/cooperatives/<int:cooperative_id>/producteur/', ProducteurByCooperativeView.as_view(), name='producers-by-cooperative'),
    path('cocoa/producteur/<int:id>/', ProducteurUpdateView.as_view(), name='producteur-update'),
    path('cocoa/producteur/<int:id>/delete/', ProducteurDeleteView.as_view(), name='producteur-delete'),
    path('cocoa/producteur/<int:id>/get/', ProducteurRetrieveView.as_view(), name='producteur-delete'),
]
urlpatterns += producteur_urls + producteurRouteur.urls



# ===========| parcelle urls |========================
parcelleRouteur = DefaultRouter()
# parcelleRouteur.register('parcelle_rest', ParcelleViewset, basename='parcelle_viewset' )
parcelle_urls = [
    path('cocoa/parcelle/new/', ParcelleCreateView.as_view(), name='parcelle-create'),
    path('cocoa/parcelle/list/', ParcelleListView.as_view(), name='parcelle-list'),
    path('cocoa/cooperatives/<int:cooperative_id>/parcelle/', ParcelleByProducteurView.as_view(), name='producers-by-cooperative'),
    path('cocoa/parcelle/<int:id>/', ParcelleUpdateView.as_view(), name='parcelle-update'),
    path('cocoa/parcelle/<int:id>/delete/', ParcelleDeleteView.as_view(), name='parcelle-delete'),
    path('cocoa/parcelle/<int:id>/get/', ParcelleRetrieveView.as_view(), name='parcelle-delete'),
]
urlpatterns += parcelle_urls + parcelleRouteur.urls



# ===========| cooperative urls |========================
cooperativeRouteur = DefaultRouter()
# cooperativeRouteur.register('cooperative_rest', CooperativeViewset, basename='cooperative_viewset' )
cooperative_urls = [
    path('cocoa/cooperative/new/', CooperativeCreateView.as_view(), name='cooperative-create'),
    path('cocoa/cooperative/list/', CooperativeListView.as_view(), name='cooperative-list'),
    # path('cocoa/cooperatives/<int:cooperative_id>/cooperative/', CooperartiveByCooperativeView.as_view(), name='producers-by-cooperative'),
    path('cocoa/cooperative/<int:id>/', CooperativeUpdateView.as_view(), name='cooperative-update'),
    path('cocoa/cooperative/<int:id>/delete/', CooperativeDeleteView.as_view(), name='cooperative-delete'),
    path('cocoa/cooperative/<int:id>/get/', CooperativeRetrieveView.as_view(), name='cooperative-delete'),
]
urlpatterns += cooperative_urls + cooperativeRouteur.urls

# ===========| lot urls |========================
lotRouteur = DefaultRouter()
# lotRouteur.register('lot_rest', lotViewset, basename='lot_viewset' )
lot_urls = [
    path('cocoa/lot/new/', LotCreateView.as_view(), name='lot-create'),
    path('cocoa/lot/list/', LotListView.as_view(), name='lot-list'),
    path('cocoa/cooperatives/<int:cooperative_id>/lot/', LotByProducteurView.as_view(), name='producers-by-cooperative'),
    path('cocoa/cooperatives/<int:cooperative_id>/lot/', LotByCooperativeView.as_view(), name='producers-by-cooperative'),
    path('cocoa/cooperatives/<int:cooperative_id>/lot/', LotByParcelleView.as_view(), name='producers-by-cooperative'),
    path('cocoa/lot/<int:id>/', LotUpdateView.as_view(), name='lot-update'),
    path('cocoa/lot/<int:id>/delete/', LotDeleteView.as_view(), name='lot-delete'),
    path('cocoa/lot/<int:id>/get/', LotRetrieveView.as_view(), name='lot-delete'),
]
urlpatterns += lot_urls + lotRouteur.urls

# ===========| cooperativeProducteur urls |========================
cooperativeProducteurRouteur = DefaultRouter()
# cooperativeProducteurRouteur.register('cooperativeProducteur_rest', cooperativeProducteurViewset, basename='cooperativeProducteur_viewset' )
cooperativeProducteur_urls = [
    path('cocoa/cooperativeProducteur/new/', CooperativeProducteurCreateView.as_view(), name='cooperativeProducteur-create'),
    path('cocoa/cooperativeProducteur/list/', CooperativeProducteurListView.as_view(), name='cooperativeProducteur-list'),
    path('cocoa/cooperatives/<int:cooperative_id>/cooperativeProducteur/', CooperativeProducteurByProducteurView.as_view(), name='producers-by-cooperative'),
    path('cocoa/cooperatives/<int:cooperative_id>/cooperativeProducteur/', CooperativeProducteurByCooperativeView.as_view(), name='producers-by-cooperative'),
    path('cocoa/cooperativeProducteur/<int:id>/', CooperativeProducteurUpdateView.as_view(), name='cooperativeProducteur-update'),
    path('cocoa/cooperativeProducteur/<int:id>/delete/', CooperativeProducteurDeleteView.as_view(), name='cooperativeProducteur-delete'),
    path('cocoa/cooperativeProducteur/<int:id>/get/', CooperativeProducteurRetrieveView.as_view(), name='cooperativeProducteur-delete'),
]
urlpatterns += cooperativeProducteur_urls + cooperativeProducteurRouteur.urls


