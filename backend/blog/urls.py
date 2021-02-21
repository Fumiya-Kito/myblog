from django.urls import path
from .views import postDetail

urlpatterns = [
    path('', postDetail)
]
