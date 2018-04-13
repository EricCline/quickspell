from spell import ATTRIBUTE_COLUMNS
from spells.models import Spell

import csv


class Spells:

    spell_file_path = 'spells.csv'

    def __init__(self):
        self.spells = []
        with open(self.spell_file_path) as spell_file:
            rows = [row for row in csv.reader(spell_file)]
        spell_rows = rows[2:]
        for spell_row in spell_rows:
            spell = Spell()
            for i, attr_pair in enumerate(ATTRIBUTE_COLUMNS):
                if spell_row[i] == 'TRUE':
                    spell_row[i]  = True
                elif spell_row[i] == 'FALSE':
                    spell_row[i]  = False
                setattr(spell, attr_pair[0], spell_row[i])
            spell.level = int(spell.display_level[0])
            spell.save()


if __name__ == '__main__':
    Spells()
