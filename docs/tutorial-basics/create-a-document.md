---
sidebar_position: 2
---

# A Basic Blog

We are now ready to create a blog. To do so, run **python manage.py startapp blog** to create a new app in your Wagtail project.

Add the new **blog** app to **INSTALLED_APPS** in **mysite/settings/base.py**.

```py
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel


class BlogIndexPage(Page):
    intro = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro')
    ]
```

Run **python manage.py makemigrations** and **python manage.py migrate**.

Since the model is called **BlogIndexPage**, the default template name (unless we override it) will be **blog_index_page.html**. Django will look for a template whose name matches the name of your Page model within the templates directory in your blog app folder. This default behaviour can be overridden if needed.
To create a template for the **BlogIndexPage** model, create a file at the location **blog/templates/blog/blog_index_page.html**.

In your **blog_index_page.html** file enter the following content:

```html
{% extends "base.html" %} {% load wagtailcore_tags %} {% block body_class
%}template-blogindexpage{% endblock %} {% block content %}
<h1>{{ page.title }}</h1>

<div class="intro">{{ page.intro|richtext }}</div>

{% for post in page.get_children %}
<h2><a href="{% pageurl post %}">{{ post.title }}</a></h2>
{{ post.specific.intro }} {{ post.specific.body|richtext }} {% endfor %} {%
endblock %}
```

Most of this should be familiar, but we’ll explain **get_children** a bit later. Note the **pageurl** tag, which is similar to Django’s url tag but takes a Wagtail Page object as an argument.

In the Wagtail admin, go to Pages, then Home. Add a child page to the Home page by clicking on the “Actions” icon and selecting the option “Add child page”. Choose “Blog index page” from the list of the page types. Use “Our Blog” as your page title, make sure it has the slug “blog” on the Promote tab, and publish it. You should now be able to access the url **http://127.0.0.1:8000/blog** on your site (note how the slug from the Promote tab defines the page URL).

Now we need a model and template for our blog posts. In **blog/models.py**:

```py
from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.search import index


# Keep the definition of BlogIndexPage, and add:


class BlogPage(Page):
    date = models.DateField("Post date")
    intro = models.CharField(max_length=250)
    body = RichTextField(blank=True)

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('date'),
        FieldPanel('intro'),
        FieldPanel('body'),
    ]
```

In the model above, we import **index** as this makes the model searchable. You can then list fields that you want to be searchable for the user.

Run **python manage.py makemigrations** and **python manage.py migrate**.

Create a new template file at the location **blog/templates/blog/blog_page.html**. Now add the following content to your newly created **blog_page.html** file:

```html
{% extends "base.html" %} {% load wagtailcore_tags %} {% block body_class
%}template-blogpage{% endblock %} {% block content %}
<h1>{{ page.title }}</h1>
<p class="meta">{{ page.date }}</p>

<div class="intro">{{ page.intro }}</div>

{{ page.body|richtext }}

<p><a href="{{ page.get_parent.url }}">Return to blog</a></p>

{% endblock %}
```

Note the use of Wagtail’s built-in get_parent() method to obtain the URL of the blog this post is a part of.

Now create a few blog posts as children of BlogIndexPage. Be sure to select type “Blog Page” when creating your posts.

![](https://docs.wagtail.org/en/stable/_images/tutorial_4a.png)

![](https://docs.wagtail.org/en/stable/_images/tutorial_4b.png)

Wagtail gives you full control over what kinds of content can be created under various parent content types. By default, any page type can be a child of any other page type.

![](https://docs.wagtail.org/en/stable/_images/tutorial_5.png)

Publish each blog post when you are done editing.

You should now have the very beginnings of a working blog. Access the /blog URL and you should see something like this:

![](https://docs.wagtail.org/en/stable/_images/tutorial_7.png)

And this ladies and gentlemen is a basic blog, **hassshhh**.
