const { src, dest, series } = require('gulp'); // parallel useful later
const responsive = require('gulp-responsive');
var $ = require('gulp-load-plugins');

function resize_images(cb) {
  return src('../img-src/*.{jpg,png}')
    .pipe(responsive({
      '*.jpg': {
        width: 200,
        rename: { 
          suffix: '-200w'
        },
        format: 'jpg'
      },
    }, { // Global configuration for all images
      passThroughUnused: true,
      errorOnUnusedImage: false
    }))
    .pipe(dest('../public/img'));
  cb();
};

exports.resize_images = resize_images;
exports.default = series(resize_images);

