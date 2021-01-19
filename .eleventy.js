const renderGallery = require('./_utils/renderGallery.js');

module.exports = function (config) {

  config.addShortcode('renderGallery', renderGallery);

  return {
    input: 'src',
    output: 'dist',
    markdownTemplateEngine: 'hbs',
  }
}
