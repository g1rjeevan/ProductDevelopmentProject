# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# def riskobjectlist(request):
#     return render(request,'risk/all_risk.html')

def risks(request):
    return render(request,'risks/all_risk.html')

# Create your views here.
def riskobject(request, risk_id):
    return  render(request,'risks/risk.html')