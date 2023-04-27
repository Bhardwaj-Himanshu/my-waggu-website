---
sidebar_position: 1
---

# Start the Server

Let's, **Play with it.**

### Start the server

```bash
python manage.py runserver
```

If everything worked, **http://127.0.0.1:8000** will show you a welcome page:

![](https://docs.wagtail.org/en/stable/_images/tutorial_1.png)

You can now access the administrative area at **http://127.0.0.1:8000/admin**

![](https://docs.wagtail.org/en/stable/_images/tutorial_2.png)

## Extend the HomePage model

Out of the box, the “home” app defines a blank `HomePage` model in `models.py`, along with a migration that creates a homepage and configures Wagtail to use it.

Edit `home/models.py` as follows, to add a body field to the model:

```py
from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel


class HomePage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body'),
    ]
```

**body** is defined as **RichTextField**, a special Wagtail field. When **blank=True**, it means that this field is not required and can be empty. You can use any of the [Django core fields](https://docs.djangoproject.com/en/stable/ref/models/fields). **content_panels** define the capabilities and the layout of the editing interface. When you add fields to **content_panels**, it enables them to be edited on the Wagtail interface. [More on creating Page models](https://docs.wagtail.org/en/stable/topics/pages.html).

Run:

```bash
# Creates the migrations file.
python manage.py makemigrations
# Executes the migrations and updates the database with your model changes.
python manage.py migrate
```

You must run the above commands each time you make changes to the model definition.
