# Generated by Django 5.1.6 on 2025-03-02 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('FilmFlowApp', '0009_alter_schedule_session_alter_seat_schedule'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='seat',
            name='room',
        ),
    ]
