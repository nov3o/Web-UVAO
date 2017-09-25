from django.shortcuts import render
from .models import Post

def base(request):
    return render(request, 'game/base.html')
