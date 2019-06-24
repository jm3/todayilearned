module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('postcss-css-variables'), // https://github.com/MadLittleMods/postcss-css-variables
    require('postcss-nested'), // https://github.com/postcss/postcss-nested
    require('postcss-color-gray'), // https://github.com/postcss/postcss-color-gray
    // require('postcss-color-function'), // fucking hell i hate this shit
    //require('postcss-color-mod-function'), // https://github.com/MadLittleMods/postcss-css-variables
    // require('postcss-simple-vars'), // https://github.com/postcss/postcss-simple-vars
    // require('postcss-custom-properties'),
    // interesting:
    // require('postcss-preset-env'), // https://preset-env.cssdb.org/
    // require('lost'),
    // require('precss'), // https://cssnano.co/guides/getting-started/
    // require('cssnano'), // https://cssnano.co/guides/getting-started/
    // require('stylelint'), // throws mad warns due mostly to our css partitioning setup
    // require('postcss-nested'), // https://github.com/postcss/postcss-nested
    // require('postcss-extend'),
    // require('postcss-nested'),
    // require('postcss-mixins'),
    // require('postcss-calc')
  ],
  'watch': 'true',
  'local-plugins': true,
  'autoprefixer': {
    browsers: '> 5%'
  }
}
