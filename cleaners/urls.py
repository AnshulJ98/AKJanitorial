from django.urls import path, re_path
from . import views

app_name = 'cleaners'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('api/', views.ApiView, name='apiview'),
    path('feedback-submit/', views.FeedbackView, name='feedbackview'),
    path('get-feedback-data/', views.GetFeedbackView, name='getfeedbackview'),
    re_path(r'^(?:.*)/?$', views.IndexView.as_view(template_name="index.html"), 
    ),
]