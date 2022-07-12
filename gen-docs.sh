#!/usr/bin/env bash

SOURCE_PATH=./src/
FOLDERS=$(find $SOURCE_PATH -mindepth 1 -maxdepth 1 -type d)

echo ""

for folder in ${FOLDERS[@]}; do
    folder_name="${folder#$SOURCE_PATH}"
    if [ $folder_name == "schemas" ]; then
        continue
    fi
    echo "Getting documentation for $folder_name..."
    jsdoc2md --files "$SOURCE_PATH$folder_name/**/*.tsx" --configure jsdoc2md.json >./docs/$folder_name.md
done

echo ""
