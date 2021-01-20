const renderGallery = require('./_utils/renderGallery.js');
const urlConstructor = require('./_utils/urlConstructor.js');

module.exports = function (config) {

  config.addShortcode('renderGallery', renderGallery);

  config.addFilter("clog", function(data) { console.log(data) });
  config.addFilter('urlConstructor', urlConstructor);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    markdownTemplateEngine: 'hbs'
  }
}
