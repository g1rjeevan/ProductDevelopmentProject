# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from django.contrib.auth.models import Group

from .models import RiskObject, TextField, DateField, JsonField, NumberField


class RiskAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')

class TextAdmin(admin.ModelAdmin):
    list_display = ('keyname', 'keydescription','keymaxlimit','keyminlimit','keymandatory')

class DateAdmin(admin.ModelAdmin):
    list_display = ('keyname', 'keydescription')

class NumberAdmin(admin.ModelAdmin):
    list_display = ('keyname', 'keydescription')

class JsonAdmin(admin.ModelAdmin):
    list_display = ('keyname', 'keyvalue')

admin.site.register(RiskObject, RiskAdmin)
admin.site.register(TextField, TextAdmin)
admin.site.register(DateField, DateAdmin)
admin.site.register(NumberField, NumberAdmin)
admin.site.register(JsonField, JsonAdmin)

admin.site.unregister(Group)