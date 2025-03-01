from django.contrib import admin
from .models import User, Room, Seat, Film, Slot, Schedule


class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'name')

class RoomAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class SeatAdmin(admin.ModelAdmin):
    list_display = ('row', 'number', 'user', 'room', 'schedule')
    list_filter = ('user', 'room', 'schedule')
    search_fields = ('row', 'number', 'user__name', 'schedule')

class FilmAdmin(admin.ModelAdmin):
    list_display = ('title', 'poster')
    search_fields = ('title',)

class SlotAdmin(admin.ModelAdmin):
    list_display = ('time', 'date')
    search_fields = ('time', 'date')

class ScheduleAdmin(admin.ModelAdmin):
    list_display = ('film', 'slot', 'room')
    list_filter = ('room', 'film')
    search_fields = ('film__title', 'room__name')

admin.site.register(User, UserAdmin)
admin.site.register(Room, RoomAdmin)
admin.site.register(Seat, SeatAdmin)
admin.site.register(Film, FilmAdmin)
admin.site.register(Slot, SlotAdmin)
admin.site.register(Schedule, ScheduleAdmin)
