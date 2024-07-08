from django.db import models

# Create your models here.

class Home(models.Model):
    image = models.ImageField(upload_to='images/', default='default.png')
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

class Products(models.Model):
    name = models.CharField(max_length=50)
    productType = models.CharField(max_length=50)
    price = models.IntegerField(default=0)
    stock = models.IntegerField(default=0)
    image = models.ImageField(upload_to='images/', default='default.png')
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

class ClientAddress(models.Model):
    province = models.CharField(max_length=50)
    locality = models.CharField(max_length=50)
    street = models.IntegerField(default=0)
    streetNumber = models.CharField(max_length=50)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

class Clients(models.Model):
    idClientAddress = models.ForeignKey(ClientAddress, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    phoneNumber = models.CharField(max_length=15)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True) 

class Carts(models.Model):
    idClient = models.ForeignKey(Clients, on_delete=models.CASCADE)
    totalItems = models.IntegerField(default=0)
    totalPrice = models.IntegerField(default=0)
    state = models.CharField(max_length=25, default="ordered")
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

class CartItems(models.Model):
    idCart = models.ForeignKey(Carts, on_delete=models.CASCADE)
    idProduct = models.ForeignKey(Products, on_delete=models.CASCADE)
    itemsPrice = models.IntegerField(default=0)
    shipDate = models.DateField()
    quantity = models.IntegerField(default=0)
    state = models.CharField(max_length=25, default="ordered")
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

class Contacts(models.Model):
    name = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    subject = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    message = models.TextField()
    image = models.ImageField(upload_to='images/', default='default.png')
    createdAt = models.DateTimeField(auto_now_add=True)
