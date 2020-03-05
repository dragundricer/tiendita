from django.urls import path, include
from .views import ProductosViews, CategoriaViews
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('productos',ProductosViews, basename="Productos")
router.register('categoria',CategoriaViews, basename="Categoria")

urlpatterns=[
    path('',include(router.urls)),
]