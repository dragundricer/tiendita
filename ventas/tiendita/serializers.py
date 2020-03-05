from rest_framework import serializers
from .models import Productos, Categoria

class ProductoSerializador(serializers.ModelSerializer):
    class Meta:
        model = Productos
        fields = '__all__'

class CategoriaSerializador(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'
        