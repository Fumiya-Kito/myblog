from django.shortcuts import render
from .models import *

# Create your views here.

def postDetail(request):
    return render(request, 'index.html')
