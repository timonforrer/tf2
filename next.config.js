const withSass = require('@zeit/next-sass')
require('dotenv').config()
module.exports = withSass({})


module.exports = withSass({
  target: 'serverless',
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
})
