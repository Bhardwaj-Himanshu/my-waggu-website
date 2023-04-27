---
sidebar_position: 3
---

# Some more Sample Images and Errors faced.

## venv not found

- virtual env, creates a virtual enviroment which keeps away dependencies installed in that environment away from the system dependencies.

  - The error could look like this
    ![](@site/static/Images/venv_not_found.png)

## pip not found

- PIP is a package installation manager, which could be missing from your system --rendering you unable to use any of the commands starting with "pip ...."

  - **The error could look like or be found out like this**-
    ![](@site/static/Images/pip_not_found.png)

- Both of these errors can be solved using

```bash
sudo apt install python3-pip
OR
sudo apt install python3-venv
```
