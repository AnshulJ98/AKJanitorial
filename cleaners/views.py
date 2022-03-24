from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.generic import View

# Create your views here.
class IndexView(generic.ListView):
    template_name = 'cleaners/index.html'
    
    def get_queryset(self):
        print(self)
        return {'x':1}