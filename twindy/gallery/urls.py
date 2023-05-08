"""twindy URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path

from gallery import views as g_views

urlpatterns = [
    path('', g_views.index, name='index'),
    path('test/' , g_views.test),
    path('set_cookie/<str:key>/<str:value>/' , g_views.set_cookie),
    path('get_cookie/<str:key>/' , g_views.get_cookie),
    path('get_allcookies/' , g_views.get_allcookies),
    path('delete_cookie/<str:key>/' , g_views.delete_cookie),
    path('set_session/<str:key>/<str:value>/' , g_views.set_session),
    path('get_session/<str:key>/' , g_views.get_session),
    path('get_allsessions/' , g_views.get_allsessions),
    path('delete_session/<str:key>/' , g_views.delete_session),
    path('check_visit/' , g_views.check_visit),
]
