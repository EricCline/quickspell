ATTRIBUTE_COLUMNS = [
    ('name', 'Name'),
    ('display_level', 'Level'),
    ('school', 'School'),
    ('ritual', 'Can Be Used As A Ritual'),
    ('casting_time', 'Casting Time'),
    ('range', 'Range'),
    ('duration', 'Duration'),
    ('concentration', 'Requires Concentration'),
    ('verbal', 'Verbal'),
    ('somatic', 'Somatic'),
    ('materialistic', 'Materialistic'),
    ('materials', 'Materials Used'),
    ('bard', 'Bard'),
    ('cleric', 'Cleric'),
    ('druid', 'Druid'),
    ('paladin', 'Paladin'),
    ('ranger', 'Ranger'),
    ('sorcerer', 'Sorcerer'),
    ('warlock', 'Warlock'),
    ('wizard', 'Wizard'),
    ('description', 'Description')
]
ATTRIBUTE_NAME = 0
COLUMN_NAME = 1

class Spell:

    def __init__(self, spell_row):
        for i, attr_pair in enumerate(ATTRIBUTE_COLUMNS):
            setattr(self, attr_pair[ATTRIBUTE_NAME], spell_row[i])
        self.level = int(self.display_level[0])

    def class_match(self, class_name):
        return getattr(self, class_name) == 'TRUE'

    def printable(self):
        return f'{self.name} ({self.display_level} {self.school})\n' \
               f'Casting Time: {self.casting_time}\n' \
               f'Range: {self.range}\n' \
               f'Components: {self.format_components()}\n' \
               f'Duration: {self.format_duration()}\n\n' \
               f'{self.description}'

    def format_components(self):
        components = []
        if self.verbal == 'TRUE':
            components.append('V')
        if self.somatic == 'TRUE':
            components.append('S')
        if self.materialistic == 'TRUE':
            components.append(f'M ({self.materials})')
        return  ','.join(components)

    def format_duration(self):
        if self.concentration == 'TRUE':
            return f'Concentration, {self.duration}'
        return self.duration

    def __lt__(self, other):
        return self.name < other.name
