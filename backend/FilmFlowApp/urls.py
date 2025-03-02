from django.urls import path
from .views import room_list, room_schedule, seat_selection, book_seat

urlpatterns = [
    path('', room_list, name='room_list'),
    path('rooms/<int:room_id>/', room_schedule, name='room_schedule'),
    path('seats/<int:schedule_id>/', seat_selection, name='seat_selection'),
    path('book/<int:seat_row>/<int:seat_number>/<int:schedule_id>/', book_seat, name='book_seat'),
]