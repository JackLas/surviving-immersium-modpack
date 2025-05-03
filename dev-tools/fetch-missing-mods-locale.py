#!/usr/bin/env python3
# Copyright (c) 2025 Yevhenii Kryvyi
# SPDX-License-Identifier: MIT

import argparse
import os
import zipfile

def get_modid(modzip):
    # todo: handle json case, split modId line

    for file in modzip.filelist:
        if not "META-INF/mods.toml" in file.filename:
            continue
        
        is_mods_section = False
        with modzip.open(file) as metadata:
            for line in metadata.readlines():
                line = line.decode("UTF-8").strip()

                if line.startswith("[["):
                    is_mods_section = "[[mods]]" in line
                    continue

                if not is_mods_section:
                    continue

                if "modId" in line:
                    return line
    return ""

def process_mod(modfile, resourcepackdir, packname):
    print(modfile)
    with zipfile.ZipFile(modfile, "r") as modcontent:
        modid = get_modid(modcontent)
        print(modid)

def main(modsdir, resourcepackdir, packname):
    for mod in os.listdir(modsdir):
        if not mod.endswith(".jar"):
            continue
        process_mod(os.path.join(modsdir, mod), resourcepackdir, packname)

if __name__ == "__main__":
    def get_path(input):
        path = os.path.abspath(input)
        if not os.path.exists(path):
            raise Exception(f"path: {path} doesn't exist")
        return path
    try:
        parser = argparse.ArgumentParser()
        parser.add_argument("-m", "--mods", type=get_path, default="mods", dest="mods", help="mods directory")
        parser.add_argument("-r", "--resourcepacks", type=get_path, default="resourcepacks", dest="resourcepacks", help="mods directory")
        parser.add_argument("-n", "--resourcepack-name", type=str, default="ModpackLang", dest="packname", help="mods directory")
        args = parser.parse_args()
    except Exception as e:
        print(e)
        exit(1)

    print(f"Analyzing mods in directory:\n{args.mods}\n")
    print(f"Creating resource pack '{args.packname}' in directory:\n{args.resourcepacks}\n")

    main(args.mods, args.resourcepacks, args.packname)