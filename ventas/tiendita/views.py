from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from .serializers import ProductoSerializador, CategoriaSerializador
from .models import Productos, Categoria
from rest_framework import status
from django.shortcuts import get_object_or_404

# Create your views here.
class CategoriaViews(ViewSet):
    def list(self, request, format=None):
        categoria = Categoria.objects.all()
        data = UnidadMedidaSerializador(categoria, many=True).data
        if categoria:
            return Response({
                'message':'ok',
                'contendio':data
            })
        else:
            return Response({
                'message':'No hay'
            })

    def create(self, request):
        serializador = CategoriaSerializador(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(
                serializador.validated_data,
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                serializador.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
    
    def retrieve(self, request, pk=None):
        categoria = get_object_or_404(Categoria, pk=pk)
        data = CategoriaSerializador(categoria).data
        return Response({
            'productos':data
        }, status=status.HTTP_200_OK)
    
    def update(self, request, pk):
        data = CategoriaSerializador(data=request.data)
        if data.is_valid():
            Categoria.objects.filter(cat_id=pk).update(cat_nom=data.validated_data['cat_nom'])
            return Response({
                'message':'Ok'
            })
        else:
            return Response (
                data.errors, status=status.HTTP_403_FORBIDDEN
            )
    
    def destroy(self,request,pk):
        get_object_or_404(Categoria,pk=pk)
        Categoria.object.filter(cat_id=pk).delete()
        return Response({
            'message':'Ok',
            'contenido':'Producto eliminado con exito'
        }, status=status.HTTP_200_OK)

class ProductosViews(ViewSet):
    def list(self, request, format=None):
        productos = Productos.objects.all()
        data = ProductoSerializador(productos,many=True).data
        print(productos)
        if productos:
            return Response({
                'message':'Si hay',
                'contenido':data
            })
        else:
            return Response({
                'message':'No hay'
            })

    def create(self, request):
        serializador = ProductoSerializador(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response({
                'nombre':serializador.validated_data.get('prod_nom'),
            },
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                serializador.errors,
                status=status.HTTP_400_BAD_REQUEST
            )
    
    def retrieve(self, request, pk=None):
        productos = get_object_or_404(Productos, pk=pk)
        data = ProductoSerializador(productos).data
        return Response({
            'productos':data
        }, status=status.HTTP_200_OK)
    
    def update(self, request, pk):
        data = ProductoSerializador(data=request.data)
        if data.is_valid():
            Productos.objects.filter(prod_id=pk).update(prod_nom=data.validated_data['prod_nom'],prod_cant=data.validated_data['prod_cant'],prod_prec=data.validated_data['prod_prec'])
            return Response({
                'message':'Ok'
            })
        else:
            return Response (
                data.errors, status=status.HTTP_403_FORBIDDEN
            )
    
    def destroy(self,request,pk):
        instancia = Productos.objects.get(prod_id=pk)
        instancia.delete()
        return Response({
            'message':'Ok',
            'contenido':'Producto eliminado con exito'
        }, status=status.HTTP_200_OK)