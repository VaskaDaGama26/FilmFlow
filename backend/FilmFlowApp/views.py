from django.shortcuts import render, get_object_or_404, redirect
from .models import Room, Schedule, Seat
from django.contrib.auth.decorators import login_required

def room_list(request):
    rooms = Room.objects.all()
    return render(request, 'room_list.html', {'rooms': rooms})

def room_schedule(request, room_id):
    room = get_object_or_404(Room, id=room_id)
    schedules = Schedule.objects.filter(room=room)
    return render(request, 'room_schedule.html', {'room': room, 'schedules': schedules})

def seat_selection(request, schedule_id):
    schedule = get_object_or_404(Schedule, id=schedule_id)
    seats = Seat.objects.filter(schedule=schedule)  # Фильтр по конкретному сеансу
    
    seat_map = [[None for _ in range(8)] for _ in range(10)]
    for seat in seats:
        seat_map[seat.row-1][seat.number-1] = seat

    return render(request, 'seat_selection.html', {'schedule': schedule, 'seat_map': seat_map})

def book_seat(request, seat_id, schedule_id):
    schedule = get_object_or_404(Schedule, id=schedule_id)
    seat = get_object_or_404(Seat, id=seat_id, schedule=schedule)
    if not seat.user:
        seat.user = request.user
        seat.save()
    return redirect('seat_selection', schedule_id=schedule.id)
