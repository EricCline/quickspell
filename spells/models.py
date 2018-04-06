from django.db import models


class Spell(models.Model):
    # Meta
    name = models.CharField(max_length=255, unique=True)
    display_level = models.CharField(max_length=255)
    level = models.IntegerField()
    school = models.CharField(max_length=255)
    ritual = models.BooleanField()
    casting_time = models.CharField(max_length=255)
    range = models.CharField(max_length=255)
    duration = models.CharField(max_length=255)
    concentration = models.BooleanField()

    # Components
    verbal = models.BooleanField()
    somatic = models.BooleanField()
    materialistic = models.BooleanField()
    materials = models.CharField(max_length=255)

    # Classes
    bard = models.BooleanField()
    cleric = models.BooleanField()
    druid = models.BooleanField()
    paladin = models.BooleanField()
    ranger = models.BooleanField()
    sorcerer = models.BooleanField()
    warlock = models.BooleanField()
    wizard = models.BooleanField()

    # Description
    description = models.TextField()
