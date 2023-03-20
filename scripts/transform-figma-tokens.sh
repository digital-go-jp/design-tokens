#!/bin/sh

set -eu

npm run transform-figma-tokens
sed -i -e "s/Primitive Colors/Color/g" style-dictionary/tokens.json

TEMP_FILE="style-dictionary/tokens.json-e"
if [[ -e "$TEMP_FILE" ]]; then
    rm -f $TEMP_FILE
fi

echo 'done'