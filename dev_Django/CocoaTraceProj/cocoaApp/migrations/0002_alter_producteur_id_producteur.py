# Generated by Django 5.1.1 on 2024-10-14 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cocoaApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producteur',
            name='id_producteur',
            field=models.CharField(db_index=True, max_length=500),
        ),
    ]
