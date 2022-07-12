# Generators

## Sprite generator
In order to improve the performance of the app, all the icon images are loaded as one [sprite image](https://www.w3schools.com/Css/css_image_sprites.asp). The sprite image is created from all the images at `images/icons` and includes a css file, with the necesary styles to use it with `Icon` component. 

To build a new sprite image, you should run the following command at terminal:

```
npm run build-sprites
```

#### Requirements
* Bash
* Magick 
* All images must be created with the same size (width and height) to avoid glitches.

#### Features
* The sprite generator creates one PNG file for all the icon images at images/icons.
* To customize icons location, you can edit `build-sprites` at package.json.
* To customize the script you should edit `src/components/icon/sprite-generator`.
* You can optimize the final sprite using [TinyPNG](https://tinypng.com).
  

## Documentation generator
Creates technical documentation as a markdown files from all the comments in the source code (on JSDoc format).

The way to use the documentation generator is running the following command on Terminal:
```
npm run gen-docs
```

#### Requirements
* Bash
* NPM dependencies installed. 

#### Features
* `gen-docs` searches for all the Typescript files inside the `src/` folder.
* Creates a markdown file (.md) for each folder inside `src/`.
* To customize folders or filenames, you can edit `gen-docs.sh` at root foolder. 
* To customize the JSDoc configuration you should edit `jsdoc2md.json`, also at root folder.
  
