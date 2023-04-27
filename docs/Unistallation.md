---
sidebar_position: 2.1
---

# 2. Remove the Demo app

Once you’ve experimented with the demo app and are ready to build your pages via your own app you can remove the demo app if you choose.

`PROJECT_ROOT` should be where your project is located (e.g. `/usr/local/django`) and `PROJECT` is the name of your project (e.g. `mywagtail`):

```bash
export PROJECT_ROOT=/usr/local/django
export PROJECT=mywagtail
cd $PROJECT_ROOT/$PROJECT
./manage.py sqlclear demo | psql -Upostgres $PROJECT -f -
psql -Upostgres $PROJECT << EOF
BEGIN;
DELETE FROM wagtailcore_site WHERE root_page_id IN (SELECT id FROM wagtailcore_page WHERE content_type_id IN (SELECT id FROM django_content_type where app_label='demo'));
DELETE FROM wagtailcore_page WHERE content_type_id IN (SELECT id FROM django_content_type where app_label='demo');
DELETE FROM auth_permission WHERE content_type_id IN (SELECT id FROM django_content_type where app_label='demo');
DELETE FROM django_content_type WHERE app_label='demo';
DELETE FROM wagtailimages_rendition;
DELETE FROM wagtailimages_image;
COMMIT;
EOF
rm -r demo media/images/* media/original_images/*
perl -pi -e"s/('demo',|WAGTAILSEARCH_RESULTS_TEMPLATE)/#\1/" $PROJECT/settings/base.py
```
