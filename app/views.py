import json
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
# Create your views here.

class CreateTodoView(View):
  
  def get(self, request, *args, **kwargs):
    return render(request, 'base.html', context={'data': json.dumps({'hello': 'world'})})