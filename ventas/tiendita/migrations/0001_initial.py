# Generated by Django 3.0.3 on 2020-03-05 01:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('cat_id', models.AutoField(help_text='Id de la categoria', primary_key=True, serialize=False)),
                ('cat_nom', models.CharField(help_text='Nombre de la categoria', max_length=50, unique=True)),
            ],
            options={
                'verbose_name_plural': 'Categorias',
                'db_table': 't_categorias',
            },
        ),
        migrations.CreateModel(
            name='Productos',
            fields=[
                ('prod_id', models.AutoField(help_text='Id del producto', primary_key=True, serialize=False)),
                ('prod_nom', models.CharField(help_text='Nombre del producto', max_length=50, unique=True)),
                ('prod_cant', models.IntegerField(help_text='Cantidad del producto')),
                ('prod_prec', models.DecimalField(decimal_places=2, help_text='Precio del producto', max_digits=5)),
                ('cat_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tiendita.Categoria')),
            ],
            options={
                'verbose_name_plural': 'Productos',
                'db_table': 't_productos',
            },
        ),
    ]
