#!/usr/bin/env python3

import os

path = "./"
subdirs = [f.path for f in os.scandir(path) if f.is_dir()]
subdirs = list(
    filter(lambda s: s != 'js',
           map(lambda s: s.strip('./'), subdirs)))

html = ""
for s in subdirs:
    html += "<option value=\"{}\">{}</option>".format(s, s)
    html += "\n"

with open("dirname.txt", mode="w") as f:
    f.write(html)
