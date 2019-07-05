const { src, dest, series } = require('gulp'); // parallel useful later
const responsive = require('gulp-responsive');
const rename = require('gulp-rename');
const rm = require('gulp-rm');

// const imagemin = require('gulp-imagemin');
// const mozjpeg = require('imagemin-mozjpeg');

const art_src = '../art-src';
const art_dest = '../static/art';

// UGH: some extra steps carefully massaging the post-processed
// filename extensions (.jpeg yuck) because * won't work because
// format needs to be specified because g-r's extname rename
// doesn't work (forces jpeg)
function resize_images(cb) {
  return src(art_src + '/**.*')
    .pipe(responsive({

      "*": [
         {
            width: 500,
            rename: {suffix: "-sm"},
         }, {
            width: 500 * 2,
            rename: {suffix: "-sm@2x"},
         }, {
            width: 1000,
         }, {
            width: 1000 * 2,
            rename: {suffix: "@2x"},
         },
      ],

    }, { // Global configuration for all images
      passThroughUnused: true,
      errorOnUnusedImage: false
    }))
    .pipe(dest(art_dest));
  cb();
}

function rename_jpegs(cb) {
  return src(art_dest + '/*.jpeg', {})
  .pipe(rename({
    extname: '.jpg'
  }))
  .pipe(dest(art_dest));
  cb();
}

function delete_jpegs(cb) {
  return src(art_dest + '/*.jpeg', { read: false })
  .pipe( rm())
  cb();
}

exports.rename_jpegs = rename_jpegs;
exports.delete_jpegs = delete_jpegs;
exports.resize_images = series(resize_images, rename_jpegs, delete_jpegs);

