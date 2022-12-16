from django.shortcuts import render
from django.http import HttpResponse

import requests
import json

tafis_api = 'https://tafis2.cwb.gov.tw/tafis/api/'
token = 'iaU5doZ8-xHOK7sonSHAff-Zc8E'
response_ca = requests.get(url=tafis_api+'cyclone/active/', headers={"Authorization": f"Token {token}"})

# Create your views here.
def index(request):
    return render(request , 'index.html')

def test(request):
    return HttpResponse(response_ca.text)
    