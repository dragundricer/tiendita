from django.db import models

# Create your models here.
class Categoria(models.Model):
    cat_id = models.AutoField(primary_key=True, help_text="Id de la categoria")
    cat_nom = models.CharField(max_length=50, help_text="Nombre de la categoria", unique=True)

    def __str__(self):
        return '{}'.format(self.cat_nom)
    
    class Meta:
        db_table = 't_categorias'
        verbose_name_plural = "Categorias"

class Productos(models.Model):
    prod_id = models.AutoField(primary_key=True, help_text="Id del producto")
    prod_nom = models.CharField(max_length=50, help_text="Nombre del producto", unique=True)
    prod_cant = models.IntegerField(help_text="Cantidad del producto")
    prod_prec = models.DecimalField(max_digits=5, decimal_places=2, help_text="Precio del producto")
    cat_id = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return '{},{},{}'.format(self.prod_nom, self.prod_cant,self.prod_prec)
    
    class Meta:
         db_table = 't_productos'
         verbose_name_plural = "Productos"