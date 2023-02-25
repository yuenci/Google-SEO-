from django.shortcuts import render
from django.http import HttpResponse
import requests

# Create your views here.


def say_hi(request):
    return HttpResponse("hi World")


def say_hello(request):
    return render(request, "hello.html", {
        "name": "Django"
    })


def index(request):
    # get json from http://127.0.0.1:5000/articles

    res = requests.get("http://127.0.0.1:5000/articles")
    articles = res.json()

    return render(request, "index.html", {
        "title0": articles["0"]["title"],
        "title1": articles["1"]["title"],
        "title2": articles["2"]["title"],
        "title3": articles["3"]["title"],

        "content0": articles["0"]["content"],
        "content1": articles["1"]["content"],
        "content2": articles["2"]["content"],
        "content3": articles["3"]["content"],
    })
