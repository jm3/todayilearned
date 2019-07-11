const { src, dest, series } = require('gulp'); // parallel useful later
const responsive = require('gulp-responsive');
const rename = require('gulp-rename');
const rm = require('gulp-rm');

// const imagemin = require('gulp-imagemin');
// const mozjpeg = require('imagemin-mozjpeg');

const art_src = '../art';
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
            width: 600,
            rename: {suffix: "-600"},
         }, {
            width: 800,
            rename: {suffix: "-800"},
         }, {
            width: 1000,
            rename: {suffix: "-1000"},
         }, {
            width: 1200,
            rename: {suffix: "-1200"},
         }, {
            width: 1600,
            rename: {suffix: "-1600"},
         },
      ],

    }, { // Global configuration for all images
      passThroughUnused: true,
      errorOnUnusedImage: false,
      errorOnEnlargement: false,
      skipOnEnlargement: true
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

