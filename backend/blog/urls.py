from django.urls import path
from .views import getRoutes, getArticles, getArticle

urlpatterns = [
    path('', getRoutes),
    path('articles/', getArticles, name='articles'),
    path('articles/<str:pk>/', getArticle, name='article'),
]
