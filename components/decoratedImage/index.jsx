import React from 'react'

import './styles.scss'

import LazyPicture from '../lazyPicture'
import Dots from '../dots'

const DecoratedImage = ({image, children}) => {
  return (
    <div className="decorated-image">
      <Dots />
      <div className="decorated-image__wrapper">
        <div className="decorated-image__content">{children}</div>
        <LazyPicture image={image} />
      </div>
      <Dots />
    </div>
  )
}

export default DecoratedImage
