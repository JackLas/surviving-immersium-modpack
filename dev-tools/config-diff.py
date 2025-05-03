#!/usr/bin/env python3
# Copyright (c) 2025 Yevhenii Kryvyi
# SPDX-License-Identifier: MIT

import argparse
import os
import hashlib

def hash_from_file(file_path):
    hash_md5 = hashlib.md5()
    with open(file_path, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash_md5.update(chunk)
    return hash_md5.hexdigest()

def collect_files(path):
    result = []

    for path, dirs, files in os.walk(path):
        for filename in files:
            result.append(os.path.join(path, filename))

    return result

def print_start_info(args):
    print(f"Analyzing configs in:\n{args.conf}\n")
    print(f"Using configs reference:\n{args.ref}\n")
    print(f"Modified configs will be copied into:\n{args.out}\n")

def main(args):
    print_start_info(args)

    ref_config_list = collect_files(args.ref)
    config_list = collect_files(args.conf)

    for ref_config in ref_config_list:
        config = ref_config.replace(args.ref, args.conf)

        if config in config_list:
            config_list.remove(config)
        else:
            print(f"Reference config is not present in configs: {ref_config}")
            continue
        
        ref_config_hash = hash_from_file(ref_config)
        config_hash = hash_from_file(config)

        if ref_config_hash != config_hash:
            print(config)

def read_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("-r", "--ref", required=True)
    parser.add_argument("-c", "--conf", default="config")
    parser.add_argument("-o", "--out")
    return parser.parse_args()


if __name__ == "__main__":
    args = read_args()
    if args:
        main(args)