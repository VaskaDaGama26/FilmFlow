from django.core.management.base import BaseCommand
from FilmFlowApp.models import Room, Seat, Schedule

class Command(BaseCommand):
    help = 'Заполняет зал сидениями для каждого сеанса, если они еще не существуют'

    def handle(self, *args, **kwargs):
        rooms = Room.objects.all()
        for room in rooms:
            schedules = Schedule.objects.filter(room=room)
            for schedule in schedules:
                seats = []
                for row in range(1, 11):
                    for number in range(1, 9):
                        if not Seat.objects.filter(row=row, number=number, room=room, schedule=schedule).exists():
                            seat = Seat(row=row, number=number, room=room, schedule=schedule)
                            seats.append(seat)
                if seats:
                    Seat.objects.bulk_create(seats)
                    self.stdout.write(self.style.SUCCESS(f'Зал {room.name}, Сеанс {schedule.id} успешно заполнен новыми сидениями!'))
