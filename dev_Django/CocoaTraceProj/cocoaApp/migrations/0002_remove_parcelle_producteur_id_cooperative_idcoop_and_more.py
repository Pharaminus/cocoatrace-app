# Generated by Django 5.1.1 on 2024-10-16 11:22

import django.contrib.auth.models
import django.contrib.auth.validators
import django.contrib.gis.db.models.fields
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('cocoaApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='parcelle',
            name='producteur_id',
        ),
        migrations.AddField(
            model_name='cooperative',
            name='idcoop',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='parcelle',
            name='producteur',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='producteurParcelle', to='cocoaApp.producteur'),
        ),
        migrations.AddField(
            model_name='producteur',
            name='autre_cooperative',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='producteur',
            name='cooperative',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='acheteur',
            name='contact',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='acheteur',
            name='coordonnees_geographiques',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='acheteur',
            name='filiale',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='acheteur',
            name='nom',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='acheteur',
            name='numero_cni',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='acheteur',
            name='numero_oncc',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='acheteur',
            name='prenom',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='acheteur',
            name='type_acheteur',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='arrondissement',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='contact_responssable',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='coordonnees_gps',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='departement',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='nom',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='nom_responssable',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='region',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='siege_social',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='type_cooperative',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='cooperative',
            name='village',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='lot',
            name='cooperative',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lotCooperative', to='cocoaApp.cooperative'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='numero_lot',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='lot',
            name='parcelle',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lotParcelle', to='cocoaApp.parcelle'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='producteur',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lotProducteur', to='cocoaApp.producteur'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='sac',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='lotSac', to='cocoaApp.sac'),
        ),
        migrations.AlterField(
            model_name='lot',
            name='type_commercial',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='an_creation',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='arrondisement',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='departement',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='description',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='geometrie',
            field=django.contrib.gis.db.models.fields.MultiPolygonField(null=True, srid=4326),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='id_parcelle',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='id_producteur',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='longueur',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='numero_titre_foncier',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='region',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='statut',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='superficie',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='type_culture',
            field=models.CharField(max_length=200, null=True, verbose_name='Type_culture'),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='url_carte',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='village',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='parcelle',
            name='voie_eau',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='an_enreg',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='genre',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='id_producteur',
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='identifiant_fodecc_cicc',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='lieu_naissance',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='nom',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='numero_cni',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='numero_telephone',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='prenom',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='residence',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='producteur',
            name='tel_second',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='sac',
            name='code_qr',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='utilisateur',
            name='mot_de_passe',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='utilisateur',
            name='nom',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('groups', models.ManyToManyField(related_name='custom_user_set', to='auth.group')),
                ('user_permissions', models.ManyToManyField(related_name='custom_user_set', to='auth.permission')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
