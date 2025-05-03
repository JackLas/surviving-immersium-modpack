#!/usr/bin/env python3
# Copyright (c) 2025 Yevhenii Kryvyi
# SPDX-License-Identifier: MIT

import argparse
import os

def print_start_info(args):
    print(f"Analyzing configs in:\n{args.conf}\n")
    print(f"Using configs reference:\n{args.ref}\n")
    print(f"Modified configs will be copied into:\n{args.out}\n")

def main(args):
    print_start_info(args)

    

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-r", "--ref", type=os.path.abspath, required=True)
    parser.add_argument("-c", "--conf", type=os.path.abspath, default="config")
    parser.add_argument("-o", "--out", type=os.path.abspath, required=True)
    args = parser.parse_args()

    if not os.path.exists(args.ref):
        print(f"{args.ref} doesn't exist")
        exit(1)

    if not os.path.exists(args.conf):
        print(f"{args.conf} doesn't exist")
        exit(1)

    main(args)