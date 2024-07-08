from rest_framework import serializers
from .models import Home, Products, ClientAddress, Clients, Carts, CartItems, Contacts

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Home
        fields='__all__'

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields='__all__'

class ClientAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model=ClientAddress
        fields='__all__'

class ClientsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Clients
        fields='__all__'

class CartsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Carts
        fields='__all__'

class CartItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model=CartItems
        fields='__all__'

class ContactsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contacts
        fields='__all__'