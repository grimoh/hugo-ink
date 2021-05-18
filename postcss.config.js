module.exports = (ctx) => ({
  plugins: [
    require('postcss-css-reset'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-color-function'),
    require('postcss-nested'),
    require('postcss-custom-media'),
    require('postcss-media-minmax')
  ]
});
