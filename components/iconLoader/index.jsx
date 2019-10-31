import React from 'react'
import SVG from 'react-inlinesvg'
import { IconList as iconList } from './icon-list'

const IconLoader = ({ width, height, icon, circle }) => {
  const src = `/images/feather-icons/${iconList[icon]}`

  if (circle) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
      >
        <circle
          cx="50%"
          cy="50%"
          r={(width/2)}
          fill="#6CCC5C"
        />
        <SVG
          src={src}
          preProcessor={code => code.replace(/xmlns=".*?"/g, '').replace(/stroke=".*?"/g, 'stroke="white"')}
          x={(width*0.2)}
          y={(height*.2)}
          width={(width*0.6)}
          height={(height*0.6)}
        />
      </svg>
    )
  }
  return <SVG src={src} />
}

IconLoader.defaultProps = {
  width: 24,
  height: 24,
  circle: false,
  icon: 'activity'
}

export default IconLoader
