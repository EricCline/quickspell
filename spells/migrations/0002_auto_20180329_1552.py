# Generated by Django 2.0.3 on 2018-03-29 15:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spells', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spell',
            name='name',
            field=models.CharField(max_length=255, unique=True),
        ),
    ]