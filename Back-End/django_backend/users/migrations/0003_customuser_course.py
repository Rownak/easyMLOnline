# Generated by Django 3.1.3 on 2021-04-08 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210310_2027'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='course',
            field=models.CharField(default='None', max_length=20),
        ),
    ]
