# Generated by Django 4.1 on 2023-02-10 08:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("gallery", "0003_imageblock_block_display_order"),
    ]

    operations = [
        migrations.RemoveField(model_name="imageblock", name="block_display_order",),
    ]
