# Generated by Django 2.1.7 on 2019-03-17 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_auto_20190317_2219'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='main_image',
            field=models.ImageField(blank=True, null=True, upload_to='upload/%Y/%m/%D/'),
        ),
    ]
