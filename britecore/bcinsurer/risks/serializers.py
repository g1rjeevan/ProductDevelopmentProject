from rest_framework import serializers

from .models import RiskObject, TextField, DateField, NumberField, JsonField


class TextFieldList(serializers.ModelSerializer):

    class Meta:
        model = TextField
        fields = ('keyname','keydescription','keymaxlimit','keyminlimit','keymandatory')

class DateFieldList(serializers.ModelSerializer):

    class Meta:
        model = DateField
        fields = ('keyname','keydescription','keymaxlimit','keyminlimit','keymandatory')

class NumberFieldList(serializers.ModelSerializer):

    class Meta:
        model = NumberField
        fields = ('keyname','keydescription','keymaxlimit','keyminlimit','keyunit','keymandatory')

class JsonFieldList(serializers.ModelSerializer):

    class Meta:
        model = JsonField
        fields = ('keyname','keyvalue')


class RiskTypesList(serializers.ModelSerializer):
    textfields = TextFieldList(read_only=True, many=True)
    date_pickers = DateFieldList(read_only=True, many=True)
    number_inputs = NumberFieldList(read_only=True, many=True)
    other_inputs = JsonFieldList(read_only=True, many=True)

    class Meta:
        model = RiskObject
        fields = ('id','title','description','textfields','date_pickers','number_inputs','other_inputs')


