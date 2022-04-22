import json
import copy
import googleapiclient.discovery
import datetime
import pytz
import base64
import sys
import re

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

from square.client import Client
from nanoid import generate

import mimetypes
from email import encoders
from email.message import Message
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart

from googleapiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials

from django.views.decorators.csrf import csrf_exempt
from .models import Feedback
from .serializers import FeedbackSerializer
from os import environ, path
from dotenv import load_dotenv

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))

CAL_ID= environ.get('CAL_ID')

SCOPES = ['https://www.googleapis.com/auth/calendar']
SCOPES1 = ['https://www.googleapis.com/auth/gmail.send']
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

SQUARE_ACCESS_TOKEN= environ.get('SQUARE_ACCESS_TOKEN')

client = Client(
    access_token=SQUARE_ACCESS_TOKEN,
    environment='production',
)

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
def ApiView(request, *args, **kwargs):
    from pprint import pprint
    jdata=json.loads(json.dumps(request.data))
    pprint(list(jdata))
    f=request.data['formData']

    CreateEvent(f)
    return Response(status=200)

@api_view(['GET', 'POST'])
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
def GetFeedbackView(request, *args, **kwargs):
    queryset=Feedback.objects.all()
    serializer_class = FeedbackSerializer(queryset, many=True)
    return Response(serializer_class.data)

@api_view(['GET', 'POST'])
def ContactUsView(request, *args, **kwargs):
    contactUs=request.data['contactUs']
    message = MIMEText(contactUs['message'] +"\n" +contactUs['name'] +"\n"+ contactUs['email'])
    message["to"] = "akartarjanitorial@gmail.com"
    message["from"] = "akartarjanitorial@gmail.com"
    message["subject"] = "Contact Us Message from " + contactUs['name']
    raw_message = base64.urlsafe_b64encode(message.as_bytes())
    raw=base64.urlsafe_b64encode(message.as_string().encode()).decode()
    body = {"raw": raw}

    message1 = MIMEText("Thank You for reaching out to us. The following message has been sent.\n"+str(message))
    message1["to"] = contactUs['email']
    message1["from"] = "akartarjanitorial@gmail.com"
    message1["subject"] = "Message successfully sent to AKJanitorial"
    raw_message1 = base64.urlsafe_b64encode(message1.as_bytes())
    raw1=base64.urlsafe_b64encode(message1.as_string().encode()).decode()
    body1 = {"raw": raw1}
    try:
        creds = Credentials.from_authorized_user_file("token.json", SCOPES1)
        service = googleapiclient.discovery.build("gmail", "v1", credentials=creds)
        message = service.users().messages().send(userId="akartarjanitorial@gmail.com", body=body).execute()
        message1 = service.users().messages().send(userId="akartarjanitorial@gmail.com", body=body1).execute()
        print(message)
        print ("Email sent successfully!")
    except Exception as ex:
        print ("Something went wrong….",ex)
        return Response(status=400)
    return Response(status=200)

@api_view(['GET', 'POST'])
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
    pprint(dates)
    return Response(dates,status=200)


def CreateEvent(request):
    from pprint import pprint
    credentials = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    service = googleapiclient.discovery.build('calendar', 'v3', credentials=credentials)

    time_format = "%H:%M"
    date_format = '%Y-%m-%dT%H:%M:%S.%fZ'
    until =  parser.parse(request.get('bookingTime'))
    startdt =  parser.parse(request.get('bookingTime'))
    enddt =     parser.parse(request.get('bookingTime'))
    prereserve = parser.parse(request.get('bookingTime'))
    postreserve = parser.parse(request.get('bookingTime'))
    start_hour =  startdt.hour

    until = until + datetime.timedelta(180)
    until=until.strftime("%Y%m%d")
    enddt = enddt + datetime.timedelta(hours=2)
    end_hour = enddt.hour
    prereserve = prereserve - datetime.timedelta(hours=2)
    postreserve = postreserve + datetime.timedelta(hours=4)
    slot = TIME_LIST.index(startdt.strftime(time_format)+'-'+enddt.strftime(time_format))
    
    user_data = request.get('userData')
    interval=-1
    desc = ""
    for i in request.get('services'):
        if i=='1':
            desc+="\n\nHouse Cleaning"+"\nNumber of Rooms: " + str(request.get('houseCleaningData')['numberOfRooms']) + "\nNumber of Bathrooms: " + str(request.get('houseCleaningData')['numberOfBathrooms'])+"\nArea: " + str(request.get('houseCleaningData')['area'])+"\nBasement: " + str(request.get('houseCleaningData')['basement'])+"\nKitchen: " + str(request.get('houseCleaningData')['kitchen'])+"\nLiving Area: " + str(request.get('houseCleaningData')['livingArea'])+"\nCarpet: " + str(request.get('houseCleaningData')['carpet'])
        if i=='2':
            desc+="\n\nOffice Cleaning"+"\nNumber of Washrooms: " + str(request.get('officeCleaningData')['numberOfWashrooms'])+"\nArea: " + str(request.get('officeCleaningData')['area'])+"\nCabins: " + str(request.get('officeCleaningData')['cabins'])+"\nCarpet: " + str(request.get('officeCleaningData')['carpet'])
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

    if request.get('serviceFrequency')=='0':
        desc+="\n\nService Frequency"+ ": One-Time" 
    if request.get('serviceFrequency')=='1':
        interval=";INTERVAL=1"
        desc+="\n\nService Frequency"+ ": Weekly" 
    if request.get('serviceFrequency')=='2':
        interval=";INTERVAL=2"
        desc+="\n\nService Frequency"+ ": Bi-Weekly" 
    if request.get('serviceFrequency')=='3':
        interval=";INTERVAL=4"
        desc+="\n\nService Frequency"+ ": Monthly" 
    if request.get('serviceFrequency')=='4':
        interval=";INTERVAL=12"
        desc+="\n\nService Frequency"+ ": 3 Months" 
    
    desc+="\n\nUser Details"
    desc+="\nName: " + request.get('userData')['name']
    desc+="\nEmail: " + request.get('userData')['email']
    desc+="\nPhone: " + request.get('userData')['phone']
    desc+="\nAdress: " + request.get('userData')['address']
    
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
    'summary': "Cleaning Scheduled for "+user_data['name']+" "+ user_data['phone']+" "+ user_data['email']+" "+ user_data['address'],
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
    if interval!=-1:
        rec=['RRULE:FREQ=WEEKLY;UNTIL='+until+interval]
        pre_event['recurrence']=rec
        new_event['recurrence']=rec
        post_event['recurrence']=rec
    print(type(new_event['summary']))
    print(type(rec))
    pprint(new_event)
    if slot !=0:
        print("PRE")
        service.events().insert(calendarId=CAL_ID, body=pre_event).execute()
    if slot !=7:
        print("POST")
        service.events().insert(calendarId=CAL_ID, body=post_event).execute()
    service.events().insert(calendarId=CAL_ID, body=new_event).execute()
    
    desc1=desc.replace('\n','<br>')
    message = MIMEMultipart()
    message["to"] = "akartarjanitorial@gmail.com"
    message["from"] = "akartarjanitorial@gmail.com"
    message["subject"] = "Cleaning Scheduled for "+user_data['name']+" "+ user_data['phone']+" "+ user_data['email']+" "+ user_data['address']
    message.attach(MIMEText('<p>'+desc1+'</p>', 'html'))

    message1 = MIMEMultipart()
    message1["to"] =  user_data['email']
    message1["from"] = "akartarjanitorial@gmail.com"
    message1["subject"] = "AKJanitorial Booking Confirmation"
    message1.attach(MIMEText("<p>Your booking has been scheduled as following:<br><br>"+desc1+"<br><br>Thank You for choosing us. </p>", 'html'))

    try:
        base64_data = re.sub('^data:image/.+;base64,', '', request.get('image1str'))
        byte_data = base64.b64decode(base64_data)
        attachment1 = MIMEImage(byte_data, _subtype='application/image')
        attachment1.add_header('Content-Disposition', 'attachment', filename='image1.jpg')
        message.attach(attachment1)
        message1.attach(attachment1)
    except Exception as e:
        print(e)

    try:
        base64_data = re.sub('^data:image/.+;base64,', '', request.get('image2str'))
        byte_data = base64.b64decode(base64_data)
        attachment2 = MIMEImage(byte_data, _subtype='application/image')
        attachment2.add_header('Content-Disposition', 'attachment', filename='image2.jpg')
        message.attach(attachment2)
        message1.attach(attachment2)
    except Exception as e:
        print(e)
    
    try:
        base64_data = re.sub('^data:image/.+;base64,', '', request.get('image3str'))
        byte_data = base64.b64decode(base64_data)
        attachment3 = MIMEImage(byte_data, _subtype='application/image')
        attachment3.add_header('Content-Disposition', 'attachment', filename='image3.jpg')
        message.attach(attachment3)
        message1.attach(attachment3)
    except Exception as e:
        print(e)

    try:
        base64_data = re.sub('^data:image/.+;base64,', '', request.get('image4str'))
        byte_data = base64.b64decode(base64_data)
        attachment4 = MIMEImage(byte_data, _subtype='application/image')
        attachment4.add_header('Content-Disposition', 'attachment', filename='image4.jpg')
        message.attach(attachment4)
        message1.attach(attachment4)
    except Exception as e:
        print(e)

    try:
        base64_data = re.sub('^data:image/.+;base64,', '', request.get('image5str'))
        byte_data = base64.b64decode(base64_data)
        attachment5 = MIMEImage(byte_data, _subtype='application/image')
        attachment5.add_header('Content-Disposition', 'attachment', filename='image5.jpg')
        #message.attach(attachment5)
        #message1.attach(attachment5)
    except Exception as e:
        print(e)

    raw_message = base64.urlsafe_b64encode(message.as_bytes())
    raw=base64.urlsafe_b64encode(message.as_string().encode()).decode()
    body = {"raw": raw}
    raw_message1 = base64.urlsafe_b64encode(message1.as_bytes())
    raw1=base64.urlsafe_b64encode(message1.as_string().encode()).decode()
    body1 = {"raw": raw1}

    try:
        creds = Credentials.from_authorized_user_file("token.json", SCOPES1)
        service = googleapiclient.discovery.build("gmail", "v1", credentials=creds)
        message = service.users().messages().send(userId="akartarjanitorial@gmail.com", body=body).execute()
        message1 = service.users().messages().send(userId="akartarjanitorial@gmail.com", body=body1).execute()
        print ("Email sent successfully!")
    except Exception as ex:
        print ("Something went wrong….",ex)
    
    print('Event Created')
    return Response(status=200)

@api_view(['GET', 'POST'])
def PaymentView(request, *args, **kwargs):
    from pprint import pprint
    pprint(request.data)
    jdata=json.loads(json.dumps(request.data))
    pprint(list(jdata))
    idempotency_key=generate()
    print(request.data['sourceId'])
    result = client.payments.create_payment(
    body = {
        "source_id": request.data['sourceId'],
        "idempotency_key": idempotency_key,
        "amount_money": {
        "amount": 3000,
        "currency": "CAD",
        "location_id": request.data['locationId'],
        }
    }
    )
    pprint(result.is_success())

    try:
        print(result.body['payment']['status'])
        if (result.body['payment']['status']=="COMPLETED"):
            return Response("SUCCESS",status=200)
        else:
            return Response(result.body['payment']['status'], status=400)
    except Exception as e:
        print('error',result.errors.detail)
        return Response("TRANSACTION FAILED", status=400)
    return Response(result.body, status=200)