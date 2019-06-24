module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-cssnext'),
    require('postcss-simple-vars'),
    require('postcss-extend'),
    require('postcss-nested'),
    require('postcss-mixins'),
    require('postcss-custom-properties'),
    require('postcss-nesting'),
    //require('postcss-import'), // throws Invalid import media statement
    require('postcss-calc')
  ],
  'watch': 'true',
  'local-plugins': true,
  'autoprefixer': {
    browsers: '> 5%'
  },
  'postcssCssnext': {
    features: {
      autoprefixer: true
    }
  }

  // 'from': 'themes/rocker-panel/assets/sass/all.scss',
  // 'to': 'public/til.css',

}
