const slugify = require('slugify');

module.exports = function(ctx, nav) {
  
  // construct urls in the following scheme:
  // "/en/projects/post-slug/index.html"

  // check wheter we're rendering an index page or a subpage
  const isSubPage = !ctx.page.fileSlug.startsWith('index');

  // get individual parts of url
  // 1. prefix certain languages with lang code
  const prefix = nav['_prefix'][ctx.language];
  // 2. get main part of url based on navkey
  const main = nav[ctx.navkey][ctx.language];
  // 3. create slug for subpages, return simple /index.html for overview pages
  const slug = isSubPage === true ? slugify(ctx.title, { lower: true }) : '';
  
  // return actual url
  const url = `${prefix}/${main}/${slug}/index.html`;
  return url
}