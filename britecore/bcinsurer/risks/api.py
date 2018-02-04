from rest_framework.generics import ListAPIView

from .serializers import RiskTypesList, TextFieldList, DateFieldList, NumberFieldList, JsonFieldList
from .models import RiskObject, TextField, DateField, NumberField, JsonField
from rest_framework import generics

class RiskTypesListApi(generics.ListCreateAPIView):
    queryset = RiskObject.objects.all()
    serializer_class = RiskTypesList

class RiskView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = RiskTypesList
    queryset = RiskObject.objects.all()

class TextFieldListApi(generics.ListCreateAPIView):
    queryset = TextField.objects.all()
    serializer_class = TextFieldList

class TextFieldView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TextFieldList
    queryset = TextField.objects.all()

class DateFieldListApi(generics.ListCreateAPIView):
    queryset = DateField.objects.all()
    serializer_class = DateFieldList

class DateFieldView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = DateFieldList
    queryset = DateField.objects.all()

class NumberFieldListApi(generics.ListCreateAPIView):
    queryset = NumberField.objects.all()
    serializer_class = NumberFieldList

class NumberFieldView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NumberFieldList
    queryset = NumberField.objects.all()

class OtherFieldListApi(generics.ListCreateAPIView):
    queryset = JsonField.objects.all()
    serializer_class = JsonFieldList

class OtherFieldView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = JsonFieldList
    queryset = JsonField.objects.all()