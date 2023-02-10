from django.shortcuts import render
from django.http import HttpResponse
from gallery.models import ImageMetaData , ImageBlock
from datetime import datetime as dt
from datetime import timedelta as td

import requests
import json

tafis_api = 'https://tafis2.cwb.gov.tw/tafis/api/'
token = 'iaU5doZ8-xHOK7sonSHAff-Zc8E'
response_ca = requests.get(url=tafis_api+'cyclone/active/', headers={"Authorization": f"Token {token}"})

opendata_api = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/'
product = 'O-A0001-001'
token = 'CWB-D8D93D37-13E2-4637-A854-3EEFCEC990CF'
response_weather = requests.get(url=opendata_api + product, params={"Authorization": f"{token}" , "limit": "1"})

def convert_timenow_to_timedata(delay: int , freq: int):
    datetime = dt.now() - td(minutes = delay)
    if freq == 30:
        datetimeStr = dt.strftime(datetime , '%Y%m%d_%H%M')
        minute = '0' if int(datetimeStr[11]) < 3 else '3'
        datetimeStr = f'{datetimeStr[:11]}{minute}0'
        datetime = dt.strptime(datetimeStr , '%Y%m%d_%H%M')
    return datetime

def convert_timedata_to_path(datetime , filedir , filename):
    return dt.strftime(datetime , f'{filedir}{filename}')

def convert_data_to_paths(objects):
    paths = []
    for o in ImageMetaData.objects.all().order_by('id'):
        datetime = convert_timenow_to_timedata(o.data_delay , o.data_freq)
        paths.append(convert_timedata_to_path(datetime , o.data_dir , o.data_file))
    return paths

# Create your views here.
def index(request):
    image_meta_data = ImageMetaData.objects.all().order_by('id')
    image_block = ImageBlock.objects.all().order_by('block_display_order')
    paths = convert_data_to_paths(image_meta_data)
    return render(request , 'index.html' , locals())

def test(request):
    return HttpResponse(response_weather.text)
    