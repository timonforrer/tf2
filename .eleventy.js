const renderGallery = require('./_utils/renderGallery.js');

module.exports = function (config) {

  config.addShortcode('renderGallery', renderGallery);

  return {
    markdownTemplateEngine: 'hbs',
    input: '/src',
    output: '/dist'
  }
}
