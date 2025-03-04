from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils import timezone
from django.core.exceptions import ValidationError
    
class Film(models.Model):
    title = models.CharField(max_length=255)
    poster = models.ImageField(upload_to='posters/')

    def __str__(self):
        return f"{self.title}"

class Slot(models.Model):
    time = models.CharField(max_length=5) 

    def save(self, *args, **kwargs):
        if ':' not in self.time and len(self.time) == 2:
            self.time = f'{self.time}:00'
        super(Slot, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.time}"

class Session(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE, null=True)
    time = models.ForeignKey(Slot, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return f"{self.film} TIME: {self.time}, DATE: {self.date}"
    def clean(self):
        if Session.objects.filter(film=self.film, time=self.time, date=self.date).exists():
            raise ValidationError('Сеанс с этим фильмом в это время и на эту дату уже существует.')
    def save(self, *args, **kwargs):
        self.clean()
        super(Session, self).save(*args, **kwargs)

class Room(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def generate_seats(self):
        seats = []
        for row in range(1, 11):
            for number in range(1, 9):
                seats.append({'row': row, 'number': number})
        return seats
    
class Schedule(models.Model):
    session = models.ForeignKey(Session, on_delete=models.CASCADE, null=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.room}, {self.session}"
    def clean(self):
        if Schedule.objects.filter(room=self.room, session=self.session).exists():
            raise ValidationError('Сеанс в это время уже существует в этом зале.')
    def save(self, *args, **kwargs):
        self.clean()
        super(Schedule, self).save(*args, **kwargs)


class Seat(models.Model):
    row = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
    number = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(8)])
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True, blank=True)
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE, null=True) 

    def __str__(self):
        return f"ROW: {self.row}, SEAT: {self.number}, SCHEDULE: {self.schedule}"



