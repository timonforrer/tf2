const slugify = require('slugify');
const getFromArray = require('./getFromArray.js');

module.exports = function(ctx, routes, languages) {
  
  // construct urls in the following scheme:
  // "/en/projects/post-slug/index.html"

  // check wheter we're rendering an index page or a subpage
  const isSubPage = !ctx.page.fileSlug.startsWith('index');

  // get route key of page from inputPath
  const pathArray = ctx.page.inputPath.split('/');
  const route_key = pathArray[pathArray.length-2] === 'subpages' ? pathArray[pathArray.length-3] : pathArray[pathArray.length-2];

  // get individual parts of url
  // 1. prefix certain languages with lang code
  const prefix = languages[ctx.language].path_prefix;
  // 2. get main part of url based on route_key
  const route_item = getFromArray(routes, "title", route_key);
  const main = route_item.path_fragment[ctx.language];
  // 3. create slug for subpages, return nothing for overview pages
  const slug = isSubPage === true ? slugify(ctx.title, { lower: true }) : '';

  // return actual url
  const url = `${prefix}/${main}/${slug}/index.html`;
  return url
}
