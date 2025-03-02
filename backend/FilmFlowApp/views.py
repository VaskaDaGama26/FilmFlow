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
    room = schedule.room
    all_seats = room.generate_seats()
    reserved_seats = Seat.objects.filter(schedule=schedule)
    reserved_seats_set = {(seat.row, seat.number) for seat in reserved_seats}
    seat_map = []
    for seat in all_seats:
        seat['reserved'] = (seat['row'], seat['number']) in reserved_seats_set
        seat_map.append(seat)

    return render(request, 'seat_selection.html', {'schedule': schedule, 'seat_map': seat_map})

def book_seat(request, seat_row, seat_number, schedule_id):
    schedule = get_object_or_404(Schedule, id=schedule_id)
    room = schedule.room
    seat, created = Seat.objects.get_or_create(
        row=seat_row, number=seat_number, schedule=schedule, room=room
    )
    if created:
        seat.user = request.user
        seat.save()
    return redirect('seat_selection', schedule_id=schedule.id)
