from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RoomListView, RoomScheduleView, SeatSelectionView, book_seat, UserTicketsView, RegisterView, LoginView, LogoutView

router = DefaultRouter()

urlpatterns = [
    path('rooms/', RoomListView.as_view(), name='room_list'),
    path('rooms/<int:room_id>', RoomScheduleView.as_view(), name='room_schedule'),
    path('seat_selection/<int:pk>/', SeatSelectionView.as_view(), name='seat_selection'),
    path('book_seat/<int:schedule_id>/<int:seat_row>/<int:seat_number>/', book_seat, name='book_seat'),
    path('user_tickets/', UserTicketsView.as_view(), name='user_tickets'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += router.urls

