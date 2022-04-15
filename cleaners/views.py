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
        '08:00-10:00',
        '10:00-12:00',
        '12:00-14:00',
        '14:00-16:00',
        '16:00-18:00',
        '18:00-20:00',
        '20:00-22:00',
        '22:00-00:00'
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
    CreateEvent(f)
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
        '08:00-10:00':True,
        '10:00-12:00':True,
        '12:00-14:00':True,
        '14:00-16:00':True,
        '16:00-18:00':True,
        '18:00-20:00':True,
        '20:00-22:00':True,
        '22:00-00:00':True
    }
    dates={}
    for i in range(0,30):
        dates[(datetime.datetime.today() + datetime.timedelta(i)).strftime('%d-%B-%Y')]=copy.deepcopy(time_slots)

    availableDatetimes = {}
    from pprint import pprint
    pprint(dates)
    for e in events:
        time_format = "%H:%M"
        date_format = "%d-%B-%Y" 
        start_time = (parser.parse(e['start'].get('dateTime'))).strftime(time_format)
        end_time = (parser.parse(e['end'].get('dateTime'))).strftime(time_format)
        date = (parser.parse(e['start'].get('dateTime'))).strftime(date_format  )
        print(date)
        if date in dates:
            dates[date][start_time+'-'+end_time]=False
            print("YYOYO")
        else: 
            print("NOOO")
        print(TIME_LIST.index(start_time+"-"+end_time))
    pprint(dates)
    return Response(dates,status=200)


@csrf_exempt
def CreateEvent(request):
    from pprint import pprint
    pprint(request)
    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = googleapiclient.discovery.build('calendar', 'v3', credentials=credentials)

    time_format = "%H:%M"
    date_format = '%Y-%m-%dT%H:%M:%S.%fZ'
    startdt =  parser.parse(request.get('bookingTime'))
    enddt =     parser.parse(request.get('bookingTime'))
    prereserve = parser.parse(request.get('bookingTime'))
    postreserve = parser.parse(request.get('bookingTime'))
    start_hour =  startdt.hour

    enddt = enddt + datetime.timedelta(hours=2)
    end_hour = enddt.hour
    prereserve = prereserve - datetime.timedelta(hours=2)
    postreserve = postreserve + datetime.timedelta(hours=4)
    slot = TIME_LIST.index(startdt.strftime(time_format)+'-'+enddt.strftime(time_format))
    
    user_data = request.get('userData')
    
    desc = ""
    for i in request.get('services'):
        if i=='1':
            desc+="\n\nHouse Cleaning"+"\nNumber of Rooms: " + str(request.get('houseCleaningData')['numberOfRooms']) + "\nNumber of Bathrooms: " + str(request.get('houseCleaningData')['numberOfBathrooms'])+"\nArea: " + str(request.get('houseCleaningData')['area'])+"\nBasement: " + str(request.get('houseCleaningData')['basement'])+"\nKitchen: " + str(request.get('houseCleaningData')['kitchen'])+"\nLiving Area: " + str(request.get('houseCleaningData')['livingArea'])+"\nCarpet: " + str(request.get('houseCleaningData')['carpet'])
        if i=='2':
            desc+="\n\nOffice Cleaning"+"\nNumber of Washrooms: " + str(request.get('officeCleaningData')['numberOfWashrooms'])+"\nArea: " + str(request.get('officeCleaningData')['area'])+"\Cabins: " + str(request.get('officeCleaningData')['cabins'])+"\Carpet: " + str(request.get('officeCleaningData')['carpet'])
        if i=='3':
            desc+="\n\nRenovation Cleaning"+"\nNumber of Rooms: " + str(request.get('renovationCleaningData')['numberOfRooms']) + "\nNumber of Bathrooms: " + str(request.get('renovationCleaningData')['numberOfBathrooms'])+"\nArea: " + str(request.get('renovationCleaningData')['area'])+"\nBasement: " + str(request.get('renovationCleaningData')['basement'])+"\nKitchen: " + str(request.get('renovationCleaningData')['kitchen'])+"\nLiving Area: " + str(request.get('renovationCleaningData')['livingArea'])+"\nCarpet: " + str(request.get('renovationCleaningData')['carpet'])
        if i=='4':
            desc+="\n\nSanitization"+"\nRequest: " + str(request.get('sanitizationData')['request'])
        if i=='5':
            desc+="\n\nPressure Washing"+"\nArea: " + str(request.get('pressureWashingData')['area'])+"\nCemented Backyard: " + str(request.get('pressureWashingData')['cementedBackyard'])+"\nDriveway: " + str(request.get('pressureWashingData')['driveway'])+"\nPatio: " + str(request.get('pressureWashingData')['patio'])
        if i=='6':
            desc+="\n\nMove In / Move Out Cleaning"+"\nNumber of Rooms: " + str(request.get('moveCleaningData')['numberOfRooms']) + "\nNumber of Bathrooms: " + str(request.get('moveCleaningData')['numberOfBathrooms'])+"\nArea: " + str(request.get('moveCleaningData')['area'])+"\nBasement: " + str(request.get('moveCleaningData')['basement'])+"\nKitchen: " + str(request.get('moveCleaningData')['kitchen'])+"\nLiving Area: " + str(request.get('moveCleaningData')['livingArea'])+"\nCarpet: " + str(request.get('moveCleaningData')['carpet'])
        if i=='7':
            desc+="\n\nMaid Cleaning"+"\nNumber of Rooms: " + str(request.get('maidCleaningData')['numberOfRooms']) + "\nNumber of Bathrooms: " + str(request.get('maidCleaningData')['numberOfBathrooms'])+"\nArea: " + str(request.get('maidCleaningData')['area'])
        if i=='8':
            desc+="\n\nOther(Garage, Gym, School)"+"\nRequest: " + str(request.get('otherCleaningData')['request']) 
        

    pre_event = {
    'summary': "Reserved",
    'description': 'Reserved',
    'start': {
        'dateTime': prereserve.isoformat("T"),
        'timeZone': 'America/Vancouver',
    },
    'end': {
        'dateTime': startdt.isoformat("T"),
        'timeZone': 'America/Vancouver',
    },
    }
    new_event = {
    'summary': "Cleaning Scheduled for "+user_data['name']+" "+ user_data['email'],
    'description': desc,
    'start': {
        'dateTime': startdt.isoformat("T"),
        'timeZone': 'America/Vancouver',
    },
    'end': {
        'dateTime': enddt.isoformat("T"),
        'timeZone': 'America/Vancouver',
    },
    }
    post_event = {
    'summary': "Reserved",
    'description': 'Reserved',
    'start': {
        'dateTime': enddt.isoformat("T"),
        'timeZone': 'America/Vancouver',
    },
    'end': {
        'dateTime': postreserve.isoformat("T"),
        'timeZone': 'America/Vancouver',
    },
    }
    pprint(new_event)
    if slot !=0:
        print("PRE")
        service.events().insert(calendarId=CAL_ID, body=pre_event).execute()
    if slot !=7:
        print("POST")
        service.events().insert(calendarId=CAL_ID, body=post_event).execute()
    service.events().insert(calendarId=CAL_ID, body=new_event).execute()
    
    
    print('Event Created')
    return Response(status=200)