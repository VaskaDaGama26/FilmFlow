from django.urls import path
from . import views

urlpatterns = [
    path('', views.room_list, name='room_list'),
    path('rooms/<int:room_id>/', views.room_schedule, name='room_schedule'),
    path('seats/<int:schedule_id>/', views.seat_selection, name='seat_selection'), 
    path('book_seat/<int:seat_id>/<int:schedule_id>/', views.book_seat, name='book_seat'), 
]
