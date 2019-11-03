import React from 'react'
import parse, { domToReact } from 'html-react-parser'
import attributesToProps from 'html-react-parser/lib/attributes-to-props'
import iconSVGData from './iconList'

const Icon = ({ width, height, name, circle, color }) => {
  if (circle) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        style={{ color: color }}
      >
        <circle
          cx="50%"
          cy="50%"
          r={(width/2)}
          fill="#6CCC5C"
        />
        {parse(iconSVGData[name], {
          replace: domNode => {
            if (domNode.parent === null) {

              // Get all attributes from parent node
              const attribs = domNode.attribs

              // Remove obsolete xmlns attribute
              delete attribs['xmlns']

              // Resize svg
              Object.keys(attribs).map((key) => {
                if (key === 'width') { attribs[key] = width * 0.6 }
                if (key === 'height') { attribs[key] = height * 0.6 }
              })

              // Center svg
              attribs['x'] = width * 0.2
              attribs['y'] = width * 0.2

              // Convert HTML attribut names to JSX props
              const props = attributesToProps(domNode.attribs)

              return <svg {...props}>{domToReact(domNode.children)}</svg>
            }
          }
        })}
      </svg>
    )
  }
  return parse(iconSVGData[name], {
    replace: domNode => {
      if (domNode.parent === null) {

        // Get all attributes from parent node
        const attribs = domNode.attribs

        // Resize svg
        Object.keys(attribs).map((key) => {
          if (key === 'width') { attribs[key] = width }
          if (key === 'height') { attribs[key] = height }
        })

        // Set color
        attribs['style'] = `color: ${color};`
      }
    }
  })
}

Icon.defaultProps = {
  width: 24,
  height: 24,
  circle: false,
  icon: 'activity',
  color: 'black'
}

export default Icon
