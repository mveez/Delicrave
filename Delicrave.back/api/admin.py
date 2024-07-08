from django.contrib import admin
from .models import Home, Products, ClientAddress, Clients, Carts, CartItems, Contacts

# Register your models here.
admin.site.register(Home)
admin.site.register(Products)
admin.site.register(ClientAddress)
admin.site.register(Clients)
admin.site.register(Carts)
admin.site.register(CartItems)
admin.site.register(Contacts)