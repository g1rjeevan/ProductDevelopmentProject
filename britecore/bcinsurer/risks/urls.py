from django.conf.urls import url, include

from .api import *
from .views import riskobject,risks

urlpatterns = [
    url(r'^$', RiskTypesListApi.as_view()),
    url(r'^textfields/$', TextFieldListApi.as_view()),
    url(r'^textfields/(?P<pk>\d+)/$', TextFieldView.as_view()),
    url(r'^datefields/$', DateFieldListApi.as_view()),
    url(r'^datefields/(?P<pk>\d+)/$', DateFieldView.as_view()),
    url(r'^numberfields/$', NumberFieldListApi.as_view()),
    url(r'^numberfields/(?P<pk>\d+)/$', NumberFieldView.as_view()),
    url(r'^otherfields/$', OtherFieldListApi.as_view()),
    url(r'^otherfields/(?P<pk>\d+)/$', OtherFieldView.as_view()),
    url(r'^list$', risks, name='risks'),
    url(r'(?P<pk>\d+)/$', RiskView.as_view()),
]