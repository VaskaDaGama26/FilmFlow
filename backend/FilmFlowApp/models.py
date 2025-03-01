from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class User(models.Model):
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    
class Slot(models.Model):
    time = models.TimeField()
    date = models.DateField()

    def __str__(self):
        return f"Time:{self.time}, Date:{self.date}"

class Room(models.Model):
    name = models.CharField(max_length=255)

class Film(models.Model):
    title = models.CharField(max_length=255)
    poster = models.ImageField(upload_to='posters/')

    def __str__(self):
        return f"Title: {self.title}"
    
class Schedule(models.Model):
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    slot = models.ForeignKey(Slot, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)

    def __str__(self):
        return f"Film:{self.film}, Slot:{self.slot}, Room:{self.room}"

class Seat(models.Model):
    row = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(10)])
    number = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(8)])
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING, null=True, blank=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    schedule = models.ForeignKey(Schedule, on_delete=models.CASCADE,default=1) 

    def __str__(self):
        return f"Row: {self.row}, Seat: {self.number}, Schedule: {self.schedule.id}"



