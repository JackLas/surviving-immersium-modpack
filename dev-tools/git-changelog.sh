#! /bin/bash

# $1 = <last release tag>..HEAD

git log $1 --pretty=format:"### %s%n%b%n"