from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'home', views.HomeViewSet)
router.register(r'products', views.ProductsViewSet)
router.register(r'clientaddres', views.ClientAddressViewSet)
router.register(r'clients', views.ClientsViewSet)
router.register(r'carts', views.CartsViewSet)
router.register(r'cartitems', views.CartItemsViewSet)
router.register(r'contacts', views.ContactsViewSet)

# router.register(r'SignUp', views.SignUpViewSet, basename="SignUpViewSet")
# router.register(r'LogIn', views.LoginViewSet, basename='LoginViewSet')

urlpatterns=[
    path('', include(router.urls))
    # path('signup/', views.SignUpViewSet.as_view({'post': 'create'}), name="SignUpViewSet-create"),
    # path('login/', views.LoginViewSet.as_view({'post': 'retrieve'}), name="LoginViewSet-retrieve"),
]