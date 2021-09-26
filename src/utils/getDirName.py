#!/usr/bin/env python3

import os

path = "./"
subdirs = [f.path for f in os.scandir(path) if f.is_dir()]
subdirs = list(
    filter(lambda s: s != 'js',
           map(lambda s: s.strip('./'), subdirs)))

dirs = ""
html = ""
for s in subdirs:
    dirs += s
    dirs += "\n"

    html += "<option value=\"{}\">{}</option>".format(s, s)
    html += "\n"

with open("dirname.txt", mode="w") as f:
    f.write(dirs)
    f.write(html)
