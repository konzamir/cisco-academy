from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

from . import views


urlpatterns = [
    url(r'^login/$', views.UserLoginView.as_view(), name='form-login'),
    url(r'^logout/$', views.logout_view, name='form-logout'),
    url(r'^send/$', views.send_mail, name='send-mail'),
    url(r'^$', views.PageListView.as_view(), name='posts-list'),
    url(r'^post/(?P<pk>[0-9])/$', views.PostPage.as_view(), name="new-post"),
]
