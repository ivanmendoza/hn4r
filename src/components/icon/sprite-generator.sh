#!/usr/bin/env bash

SOURCE=$1
DESTINY=$2
EXTENSION=${3:-png}
SPRITE_FILENAME=${4:-icons.png}
CSS_FILENAME=${5:-icons.css}
CLASS_PREFIX=${6:-hn-icon-}

convert "$SOURCE/*.$EXTENSION" +append "$DESTINY/$SPRITE_FILENAME"

ICONS=($SOURCE/*.$EXTENSION)
icon_classes=""
icon_width=$(identify -format "%w" $ICONS[0])
icon_index=0

for icon in "${ICONS[@]}"; do
    icon_position=$(($icon_width * $icon_index))
    icon_file="${icon#$SOURCE/}"                                                                              #remove patch
    icon_name="${icon_file%".$EXTENSION"}"                                                                    #remove extension
    icon_class=".$CLASS_PREFIX$icon_name {background-position:calc(-1*var(--hn-icon-size)*${icon_index}) 0;}" # css class
    icon_classes="$icon_classes \n $icon_class"
    icon_index=$(($icon_index + 1))
done

echo -e $icon_classes >"$DESTINY/$CSS_FILENAME"
