from django.contrib import admin
from .models import *
from django.contrib.auth.models import User, Group
from django.contrib.auth.admin import UserAdmin, GroupAdmin

class RoomAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class SeatAdmin(admin.ModelAdmin):
    list_display = ('row', 'number', 'user', 'schedule')
    list_filter = ('user', 'schedule__session__film', 'schedule__session__time', 'schedule__session__date', 'row', 'number', 'schedule__room')
    search_fields = ('row', 'number', 'username', 'schedule')

class FilmAdmin(admin.ModelAdmin):
    list_display = ('title', 'poster')
    search_fields = ('title',)

class SlotAdmin(admin.ModelAdmin):
    list_display = ('time',)

class SessionAdmin(admin.ModelAdmin):
    list_display = ('film', 'time', 'date')
    list_filter = ('film', 'time', 'date')
    search_fields = ('film', 'time', 'date')

class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('session', 'room')
    list_filter = ('session__film','session__date', 'session__time', 'room__name')


admin.site.unregister(User)
admin.site.unregister(Group)
admin.site.register(User, UserAdmin)
admin.site.register(Group, GroupAdmin)

admin.site.register(Room, RoomAdmin)
admin.site.register(Seat, SeatAdmin)
admin.site.register(Film, FilmAdmin)
admin.site.register(Slot, SlotAdmin)
admin.site.register(Session, SessionAdmin)
admin.site.register(Schedule, ScheduleAdmin)
