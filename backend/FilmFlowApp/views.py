from rest_framework import viewsets, generics, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import *
from .models import *
from django.contrib.auth.models import User, Group
from datetime import timedelta

# Room List
class RoomListView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    permission_classes = [permissions.AllowAny]

# Room Schedule
class RoomScheduleView(APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request, room_id):
        room = get_object_or_404(Room, id=room_id)
        yesterday = timezone.now().date() - timedelta(days=1)
        schedules = Schedule.objects.filter(room=room, session__date__gt=yesterday).order_by('session__date', 'session__time')

        grouped_schedules = self.get_grouped_schedules(schedules)
        
        response_data = {
            'room': RoomSerializer(room).data,
            'grouped_schedules': grouped_schedules
        }
        return Response(response_data)

    def get_grouped_schedules(self, schedules):
        grouped_schedules = []
        for schedule in schedules:
            grouped_schedules.append(schedule)
        return ScheduleSerializer(grouped_schedules, many=True).data

# Seat Selection
class SeatSelectionView(generics.RetrieveAPIView):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        schedule = self.get_object()
        room = schedule.room
        all_seats = room.generate_seats()
        reserved_seats = Seat.objects.filter(schedule=schedule)
        reserved_seats_set = {(seat.row, seat.number) for seat in reserved_seats}

        for seat in all_seats:
            seat['reserved'] = (seat['row'], seat['number']) in reserved_seats_set

        return Response({
            'schedule': ScheduleSerializer(schedule).data,
            'seat_map': all_seats
        })

# Book Seat
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def book_seat(request, seat_row, seat_number, schedule_id):
    schedule = get_object_or_404(Schedule, id=schedule_id)
    seat, created = Seat.objects.get_or_create(row=seat_row, number=seat_number, schedule=schedule)
    if created:
        seat.user = request.user
        seat.save()
    return Response(SeatSerializer(seat).data)

# User Tickets
class UserTicketsView(generics.ListAPIView):
    serializer_class = SeatSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Seat.objects.filter(user=self.request.user)

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        grouped_seats = self.get_grouped_seats(queryset)

        return Response(grouped_seats)

    def get_grouped_seats(self, reserved_seats):
        grouped_seats = {}
        for seat in reserved_seats:
            date = seat.schedule.session.date
            if date not in grouped_seats:
                grouped_seats[date] = []
            grouped_seats[date].append(seat)

        grouped_seats = dict(sorted(grouped_seats.items(), reverse=True))

        return grouped_seats

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            refresh = RefreshToken.for_user(user)
            return Response({
                'user': UserSerializer(user).data,
                'refresh': str(refresh),
                'access': str(refresh.access_token)
            })
        return Response({"detail": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_204_NO_CONTENT)
