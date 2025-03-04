from django.contrib.auth.models import User, Group
from django.conf import settings
from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = '__all__'

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seat
        fields = '__all__'


class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = ['title', 'poster']

class SessionSerializer(serializers.ModelSerializer):
    film = FilmSerializer()

    class Meta:
        model = Session
        fields = ['film', 'time', 'date']

class ScheduleSerializer(serializers.ModelSerializer):
    session = SessionSerializer()

    class Meta:
        model = Schedule
        fields = ['id', 'session']