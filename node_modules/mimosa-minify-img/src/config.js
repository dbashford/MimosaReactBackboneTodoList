"use strict";

exports.defaults = function() {
  return {
    minifyImg: {
      options: {
        interlaced: false,
        progressive: false,
        cache: false,
        optimizationLevel: 2
      },
      exts: [ "gif","jpeg","jpg","png" ]
    }
  };
};

exports.placeholder = function () {
   var ph = "  minifyImg:\n" +
      "    exts: ['gif','jpeg','jpg','png' ]    # extensions to minify\n" +
      "    options:                             # pass through options to https://github.com/kevva/image-min" +
      "      interlaced: false                  # Interlace gif for progressive rendering.\n" +
      "      progressive: false                 # Lossless conversion to progressive.\n" +
      "      cache: false                       # whether or not to cache optimized images\n" +
      "      optimizationLevel: 2               # Select a optimization level between 0 and 7\n";
  return ph;
};

exports.validate = function ( config, validators ) {
  var errors = [];

  if ( validators.ifExistsIsObject( errors, "minifyImg config", config.minifyImg ) ) {
    var mI = config.minifyImg;
    if ( validators.ifExistsIsObject( errors, "minifyImg.options", mI.options ) ) {
      validators.ifExistsIsBoolean( errors, "minifyImg.interlaced", mI.options.interlaced );
      validators.ifExistsIsBoolean( errors, "minifyImg.progressive", mI.options.progressive );
      validators.ifExistsIsBoolean( errors, "minifyImg.cache", mI.options.cache );
      validators.ifExistsIsNumber( errors, "minifyImg.optimizationLevel", mI.options.optimizationLevel );
    }

    validators.ifExistsIsArrayOfStrings( errors, "minifyImg.exts", mI.exts );
  }

  return errors;
};