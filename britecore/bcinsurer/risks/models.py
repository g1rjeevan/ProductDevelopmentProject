# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class TextField(models.Model):
    keyname = models.CharField(max_length=100)
    keydescription = models.TextField(null=True)
    keymaxlimit = models.PositiveIntegerField(null=True)
    keyminlimit = models.PositiveIntegerField(null=True)
    keymandatory = models.NullBooleanField(default=False,null=True)

class DateField(models.Model):
    keyname = models.CharField(max_length=100)
    keydescription = models.TextField(null=True)
    keymaxlimit = models.DateField(null=True)
    keyminlimit = models.DateField(null=True)
    keymandatory = models.NullBooleanField(default=False,null=True)

class NumberField(models.Model):
    keyname = models.CharField(max_length=100)
    keydescription = models.TextField(null=True)
    keymaxlimit = models.FloatField(null=True)
    keyminlimit = models.FloatField(null=True)
    keyunit = models.CharField(max_length=20,null=True)
    keymandatory = models.NullBooleanField(default=False,null=True)

class JsonField(models.Model):
    keyname = models.TextField(max_length=50)
    keyvalue = models.TextField(max_length=50, null=True)

class RiskObject(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    textfields = models.ManyToManyField(TextField, related_name='textfields', blank=True)
    date_pickers = models.ManyToManyField(DateField, related_name='date_pickers', blank=True)
    number_inputs = models.ManyToManyField(NumberField, related_name='number_inputs', blank=True)
    other_inputs = models.ManyToManyField(JsonField, related_name='other_inputs', blank=True)

    class Meta:
        unique_together = ('title','description')
        ordering = ['title']
