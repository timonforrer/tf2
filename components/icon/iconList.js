// Get all SVG files from folder
const iconRequireObject = require.context('./svg', true, /.*\.svg$/)

// Create empty export object
const svg = {}

iconRequireObject.keys().forEach(path => {
  const iconName = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  svg[iconName] = iconRequireObject(path).default
})

module.exports = svg
