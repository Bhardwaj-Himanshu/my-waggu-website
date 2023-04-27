---
sidebar_position: 1
---

# 1. Tutorial

Let's discover **Wagtail in less than 5 minutes**.

## Your first Wagtail site

### Install and run Wagtail

### Install dependencies

Wagtail supports Python 3.7, 3.8, 3.9, 3.10, and 3.11.

To check whether you have an appropriate version of Python 3:

```bash
python --version
```

**On Windows** (cmd.exe, with the Python Launcher for Windows):

```bash
py --version
```

If this does not return a version number or returns a version lower than 3.7, you will need to install [Python 3](https://www.python.org/downloads/).

```
NOTE

Before installing Wagtail, it is necessary to install the `libjpeg` and `zlib` libraries, which provide support for working with JPEG, PNG, and GIF images (via the Python Pillow library). The way to do this varies by platform—see Pillow’s platform-specific installation instructions.
```

### Create and activate a virtual environment

We recommend using a virtual environment, which isolates installed dependencies from other projects. This tutorial uses [venv](https://docs.python.org/3/tutorial/venv.html), which is packaged with Python 3.

On **Windows** (cmd.exe):

```bash
py -m venv mysite\env
mysite\env\Scripts\activate.bat
# or:
mysite\env\Scripts\activate
```

On **GNU/Linux** or **MacOS** (bash/zsh):

```bash
python -m venv mysite/env
source mysite/env/bin/activate
```

For other shells see the [venv documentation](https://docs.python.org/3/library/venv.html).

### Install Wagtail

Use pip, which is packaged with Python, to install Wagtail and its dependencies:

```bash
pip install wagtail
```

### Generate your site

Wagtail provides a `start` command similar to `django-admin startproject`. Running `wagtail start mysite` in your project will generate a new `mysite` folder with a few Wagtail-specific extras, including the required project settings, a “home” app with a blank `HomePage` model and basic templates, and a sample “search” app.

Because the folder `mysite` was already created by `venv`, run `wagtail start` with an additional argument to specify the destination directory:

```bash
wagtail start mysite mysite
```

### Install project dependencies

```bash
cd mysite
pip install -r requirements.txt
```

This ensures that you have the relevant versions of Wagtail, Django, and any other dependencies for the project you have just created. The _requirements.txt_ file contains all the dependencies needed in order to run the project.

### Create the database

If you haven’t updated the project settings, this will be a SQLite database file in the project directory.

```bash
python manage.py migrate
```

This command ensures that the tables in your database are matched to the models in your project. Every time you alter your model (for example you may add a field to a model) you will need to run this command to update the database.

### Create an admin user

```bash
python manage.py createsuperuser
```

This will prompt you to create a new superuser account with full permissions. Note the password text won’t be visible when typed, for security reasons.
