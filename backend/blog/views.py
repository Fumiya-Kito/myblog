from django.shortcuts import render
from .models import *

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ArticleSerializer

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/articles/',
        'api/articles/create',
        'api/articles/upload',
        'api/articles/<id>/reviews',
        'api/articles/top',
        'api/articles/<id>',
        'api/articles/delete/<id>',
        'api/articles/<upload>/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getArticles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getArticle(request, pk):
    article = Article.objects.get(_id=pk)
    serializer = ArticleSerializer(article, many=False)
    return Response(serializer.data)