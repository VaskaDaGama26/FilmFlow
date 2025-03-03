from django.shortcuts import render, get_object_or_404, redirect
from .models import *
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.utils import timezone
from datetime import timedelta

def room_list(request):
    rooms = Room.objects.all()
    return render(request, 'room_list.html', {'rooms': rooms})

def get_grouped_schedules(schedules):
    grouped_schedules = {}
    for schedule in schedules:
        date = schedule.session.date
        if date not in grouped_schedules:
            grouped_schedules[date] = []
        grouped_schedules[date].append(schedule)
    
    for date, day_schedules in grouped_schedules.items():
        day_schedules.sort(key=lambda x: x.session.time.time)
    
    return grouped_schedules

def room_schedule(request, room_id):
    room = get_object_or_404(Room, id=room_id)
    yesterday = timezone.now().date() - timedelta(days=1)
    schedules = Schedule.objects.filter(room=room, session__date__gt=yesterday).order_by('session__date', 'session__time')
    
    grouped_schedules = get_grouped_schedules(schedules)
    
    return render(request, 'room_schedule.html', {'room': room, 'grouped_schedules': grouped_schedules})

def seat_selection(request, schedule_id):
    schedule = get_object_or_404(Schedule, id=schedule_id)
    room = schedule.room
    all_seats = room.generate_seats()
    reserved_seats = Seat.objects.filter(schedule=schedule)
    reserved_seats_set = {(seat.row, seat.number) for seat in reserved_seats}
    
    for seat in all_seats:
        seat['reserved'] = (seat['row'], seat['number']) in reserved_seats_set
    
    return render(request, 'seat_selection.html', {'schedule': schedule, 'seat_map': all_seats})

@login_required
def book_seat(request, seat_row, seat_number, schedule_id):
    schedule = get_object_or_404(Schedule, id=schedule_id)
    seat, created = Seat.objects.get_or_create(row=seat_row, number=seat_number, schedule=schedule)
    if created:
        seat.user = request.user
        seat.save()
    return redirect('seat_selection', schedule_id=schedule.id)




@login_required
def user_tickets(request):
    today = timezone.now().date()
    yesterday = today - timedelta(days=1)
    
    reserved_seats = Seat.objects.filter(user=request.user)
    grouped_seats = {}
    for seat in reserved_seats:
        date = seat.schedule.session.date
        if date not in grouped_seats:
            grouped_seats[date] = []
        grouped_seats[date].append(seat)
    
    grouped_seats = dict(sorted(grouped_seats.items(), reverse=True))
    
    return render(request, 'user_tickets.html', {'grouped_seats': grouped_seats, 'yesterday': yesterday})

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('room_list')
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})

def user_login(request):
    next_url = request.GET.get('next', 'room_list') 
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            login(request, form.get_user())
            next_url = request.POST.get('next', 'room_list')
            return redirect(next_url)
    else:
        form = AuthenticationForm(initial={'next': next_url})
    return render(request, 'login.html', {'form': form, 'next': next_url})


def user_logout(request):
    logout(request)
    return redirect('room_list')
