# Generated by Django 2.1.7 on 2019-03-17 22:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='main_image',
            field=models.ImageField(upload_to='upload'),
        ),
        migrations.AlterField(
            model_name='post',
            name='name',
            field=models.CharField(default='none', max_length=128),
        ),
    ]
