from django.shortcuts import render
from rest_framework import viewsets
from .serializer import  HomeSerializer, ProductsSerializer, ClientAddressSerializer, ClientsSerializer, CartsSerializer, CartItemsSerializer, ContactsSerializer
from .models import Home, Products, ClientAddress, Clients, Carts, CartItems, Contacts

#from django.http import JsonResponse
#from django.views.decorators.http import require_POST
#from django.views.decorators.csrf import csrf_exempt
#import json

#from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class HomeViewSet(viewsets.ModelViewSet):
    queryset = Home.objects.all()
    serializer_class = HomeSerializer

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer

class ClientAddressViewSet(viewsets.ModelViewSet):
    queryset = ClientAddress.objects.all()
    serializer_class = ClientAddressSerializer

class ClientsViewSet(viewsets.ModelViewSet):
    queryset = Clients.objects.all()
    serializer_class = ClientsSerializer

class CartsViewSet(viewsets.ModelViewSet):
    queryset = Carts.objects.all()
    serializer_class = CartsSerializer

class CartItemsViewSet(viewsets.ModelViewSet):
    queryset = CartItems.objects.all()
    serializer_class = CartItemsSerializer

class ContactsViewSet(viewsets.ModelViewSet):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer