import json

import googleapiclient.discovery
import datetime
from google.oauth2 import service_account

from django.views import generic
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.urls import reverse_lazy
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.generic import View
from rest_framework.views import APIView
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from .models import Feedback
from .serializers import FeedbackSerializer

CAL_ID='67caopf2kqtiud7trcge6flk7s@group.calendar.google.com'
SCOPES = ['https://www.googleapis.com/auth/calendar']
SERVICE_ACCOUNT_FILE = './google-credentials.json'

# Create your views here.
'''
def index(request):
    return render(request,'index.html')
'''
class IndexView(generic.ListView):
    template_name = 'index.html'
    
    def get_queryset(self):
        print(self)
        return {'x':1}

@api_view(['GET', 'POST'])
@csrf_exempt
def ApiView(request, *args, **kwargs):
    from pprint import pprint
    #pprint(vars(request))
    #pprint((request.POST))
    

    #data=request.POST
    jdata=json.loads(json.dumps(request.data))
    #pprint(((request.data.get('formData'))))
    pprint(list(jdata))
    f=request.data['formData']
    for i in f:
        print(i, '\n',f[i])
    return Response(status=200)

@api_view(['GET', 'POST'])
@csrf_exempt
def FeedbackView(request, *args, **kwargs):
    data=request.data['formData']
    name=data['name']
    email=data['email']
    message=data['message']
    phone=data['phone']
    feedback = Feedback(name=name, email=email, message=message,phone=phone)
    feedback.save()
    return Response(status=200)

@api_view(['GET', 'POST'])
@csrf_exempt
def GetFeedbackView(request, *args, **kwargs):
    queryset=Feedback.objects.all()
    serializer_class = FeedbackSerializer(queryset, many=True)
    return Response(serializer_class.data)
@api_view(['GET', 'POST'])
@csrf_exempt
def GetEvents(request, *args, **kwargs):
    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = googleapiclient.discovery.build('calendar', 'v3', credentials=credentials)
    events_result = service.events().list(calendarId=CAL_ID, maxResults=2500).execute()
    events = events_result.get('items', [])
    for e in events:
        print(e)
    return Response(events,status=200)
    
@api_view(['GET', 'POST'])
@csrf_exempt
def CreateEvent(request, *args, **kwargs):
    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = googleapiclient.discovery.build('calendar', 'v3', credentials=credentials)
    new_event = {
    'summary': "Events TEsTT22",
    'location': 'Toronto',
    'description': 'Test',
    'start': {
        'date': f"{datetime.date.today()+ datetime.timedelta(days=3)}",
        'timeZone': 'America/Toronto',
    },
    'end': {
        'date': f"{datetime.date.today() + datetime.timedelta(days=3)}",
        'timeZone': 'America/Toronto',
    },
    }
    service.events().insert(calendarId=CAL_ID, body=new_event).execute()
    print('Event Created')
    return Response(status=200)