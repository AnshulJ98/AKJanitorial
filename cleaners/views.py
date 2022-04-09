import json
import copy
import googleapiclient.discovery
import datetime
import pytz

from google.oauth2 import service_account
from dateutil import parser

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
from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

CAL_ID= environ.get('CAL_ID')
SCOPES = ['https://www.googleapis.com/auth/calendar']
SERVICE_ACCOUNT_FILE = './google-credentials.json'

TIME_LIST=[
        '08:00-09:00',
        '09:00-10:00',
        '10:00-11:00',
        '11:00-12:00',
        '12:00-13:00',
        '13:00-14:00',
        '14:00-15:00',
        '15:00-16:00',
        '16:00-17:00',
        '17:00-18:00',
        '18:00-19:00',
        '19:00-20:00',
        '20:00-21:00',
        '21:00-22:00',
        '22:00-23:00',
        '23:00-00:00'
    ]

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
    jdata=json.loads(json.dumps(request.data))
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
    events_result = service.events().list(calendarId=CAL_ID, maxResults=250, singleEvents=True, orderBy='startTime').execute()
    events = events_result.get('items', [])
    
    time_slots={
        '08:00-09:00':{'available':True},
        '09:00-10:00':{'available':True},
        '10:00-11:00':{'available':True},
        '11:00-12:00':{'available':True},
        '12:00-13:00':{'available':True},
        '13:00-14:00':{'available':True},
        '14:00-15:00':{'available':True},
        '15:00-16:00':{'available':True},
        '16:00-17:00':{'available':True},
        '17:00-18:00':{'available':True},
        '18:00-19:00':{'available':True},
        '19:00-20:00':{'available':True},
        '20:00-21:00':{'available':True},
        '21:00-22:00':{'available':True},
        '22:00-23:00':{'available':True},
        '23:00-00:00':{'available':True}
    }
    dates={}
    for i in range(0,30):
        dates[(datetime.datetime.today() + datetime.timedelta(i)).strftime('%d-%B-%Y')]=copy.copy(time_slots)

    availableDatetimes = {}
    for e in events:
        time_format = "%H:%M"
        time_slots[(parser.parse(e['start'].get('dateTime'))).strftime(time_format)+'-'+(parser.parse(e['end'].get('dateTime'))).strftime(time_format)]['available']=False
        print(TIME_LIST.index((parser.parse(e['start'].get('dateTime'))).strftime(time_format)+'-'+(parser.parse(e['end'].get('dateTime'))).strftime(time_format)))
    return Response(dates,status=200)


@api_view(['GET', 'POST'])
@csrf_exempt
def CreateEvent(request, *args, **kwargs):
    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = googleapiclient.discovery.build('calendar', 'v3', credentials=credentials)
    utc = pytz.utc
    startdt =   utc.localize(datetime.datetime.strptime('2022-05-05 17:00:00','%Y-%m-%d %H:%M:%S'))
    enddt =     utc.localize(datetime.datetime.strptime('2022-05-05 18:00:00','%Y-%m-%d %H:%M:%S'))
    new_event = {
    'summary': "Events TEsTT22",
    'description': 'Test',
    'start': {
        'dateTime': startdt.isoformat("T"),
        'timeZone': 'America/Vancouver',
    },
    'end': {
        'dateTime': enddt.isoformat("T"),
        'timeZone': 'America/Vancouver',
    },
    }
    service.events().insert(calendarId=CAL_ID, body=new_event).execute()
    print('Event Created')
    return Response(status=200)