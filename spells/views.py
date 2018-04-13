import os
import json

from django.views import View
from django.template.loader import get_template
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import pdfkit

from spells.models import Spell


class FilterSpells(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request, classname="", level=""):
        spells = self.get_spells(classname, level)
        data = json.dumps(spells)
        return HttpResponse(data, content_type='application/json')

    def post(self, request, classname="", level=""):
        spells = self.get_spells(classname, level)
        template = get_template('spells_pdf.html')
        classname = classname.capitalize()
        context = {
            'classname': classname,
            'level': level or 'All',
            'spells': spells
        }
        html = template.render(context)
        options = {
            'page-size': 'Letter',
            'margin-top': '0.75in',
            'margin-right': '0.75in',
            'margin-bottom': '0.75in',
            'margin-left': '0.75in',
        }
        pdfkit.from_string(html, 'spells.pdf')
        with open("spells.pdf", 'rb') as pdf:
            response = HttpResponse(pdf.read(), content_type='application/pdf')
            response['Content-Disposition'] = 'attachment; filename="spells.pdf"'
        os.remove("spells.pdf")
        return response

    def get_spells(self, classname, level):
        filter_kwargs = {}
        if classname:
            filter_kwargs[classname] = True
        if level:
            filter_kwargs['level__lte'] = int(level)
        if filter_kwargs:
            spells = list(
                Spell.objects.filter(**filter_kwargs).order_by('name').values()
            )
        else:
            spells = list(Spell.objects.all().values().order_by('name'))
        format_spells(spells)
        return spells


def format_spells(spells):
    for spell in spells:
        format_components(spell)
        format_duration(spell)
        format_school_and_level(spell)
        split_newlines(spell)


def split_newlines(spell):
    spell['description'] = spell['description'].split('\n')


def format_school_and_level(spell):
    if spell['level'] == 0:
        spell["level_school"] = f'{spell["school"]} Cantrip'
    else:
        spell["level_school"] = f'{spell["display_level"]} {spell["school"]}'


def format_components(spell):
    components = []
    if spell['verbal']:
        components.append('V')
    if spell['somatic']:
        components.append('S')
    if spell['materialistic']:
        components.append(f'M ({spell["materials"]})')
    spell['components'] = ','.join(components)


def format_duration(spell):
    if spell['concentration']:
        spell['duration'] = f'Concentration, up to {spell["duration"]}'
