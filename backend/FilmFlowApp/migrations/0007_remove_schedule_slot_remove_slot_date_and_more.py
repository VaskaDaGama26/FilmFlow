# Generated by Django 5.1.6 on 2025-03-02 11:56

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('FilmFlowApp', '0006_session'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedule',
            name='slot',
        ),
        migrations.RemoveField(
            model_name='slot',
            name='date',
        ),
        migrations.AddField(
            model_name='schedule',
            name='session',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='FilmFlowApp.session'),
        ),
    ]
