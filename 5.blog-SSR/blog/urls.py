from django.urls import path
from . import views


urlpatterns = [
    path("hi/", views.say_hi),
    path("hello/", views.say_hello),
    path("index/", views.index),
]