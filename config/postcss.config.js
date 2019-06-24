module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-nesting'),
    require('postcss-preset-env') // https://preset-env.cssdb.org/
    // interesting:
    // require('lost'),
    // require('precss'), // https://cssnano.co/guides/getting-started/
    // require('cssnano'), // https://cssnano.co/guides/getting-started/
    // require('stylelint'), // throws mad warns due mostly to our css partitioning setup
    // require('postcss-nested'), // https://github.com/postcss/postcss-nested
    // require('postcss-extend'),
    // require('postcss-nested'),
    // require('postcss-mixins'),
    // require('postcss-custom-properties'),
    // require('postcss-calc')
    // https://github.com/davidtheclark/list-selectors
  ],
  'watch': 'true',
  'local-plugins': true,
  'autoprefixer': {
    browsers: '> 5%'
  }
}
