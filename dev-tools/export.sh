#!/usr/bin/env bash
set -euo pipefail

MRPACK_DIR="$1"
OUTPUT_DIR="$2"
OUTPUT_DIR="$(readlink -f "$OUTPUT_DIR")" # absolute path to use while in pushd

INDEX_FILE="$MRPACK_DIR/modrinth.index.json"

NAME=$(sed -n 's/.*"name"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' "$INDEX_FILE")
NAME=${NAME// /-}
VERSION=$(sed -n 's/.*"versionId"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' "$INDEX_FILE")
OUTPUT_FILE="$OUTPUT_DIR/$NAME-$VERSION.mrpack"

pushd $MRPACK_DIR > /dev/null
zip -r $OUTPUT_FILE ./*
popd > /dev/null

echo "$OUTPUT_FILE"