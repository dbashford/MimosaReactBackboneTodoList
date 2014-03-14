mimosa-minify-img
===========
## Overview

This module will process all your images and optimize/minify them.

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'minify-img'` to your list of modules.  That's all!  Mimosa will install the module for you when you start up.

## Functionality

Once this module has been added to your project, just execute `mimosa minimage` to create minified versions of your images in Mimosa's output directory.

When you've validated the minification `mimosa minimage --overwrite` will overwrite the images in your source directory with the minified versions.

## Default Config

```javascript
minifyImg: {
  options: {
    interlaced: false,
    progressive: false,
    cache: false,
    optimizationLevel: 2
  },
  exts: [ "gif","jpeg","jpg","png" ]
}
```

* `options`: an object. These are pass-through options to [image-min](https://github.com/kevva/image-min/tree/0.1.3).
* `exts`: An array of strings, the extensions to run image minification on.
