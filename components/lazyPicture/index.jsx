import React from 'react'

import './styles.scss'

const LazyPicture = ({image}) => {
  return (
    <picture className="lazy-picture">
      <source srcSet={image.url} media={`(min-width: ${image.dimensions.width}px)`} />
      <source srcSet={image.tablet.url} media={`(min-width: ${image.tablet.dimensions.width}px)`} />
      <img src={image.mobile.url} alt={image.alt ? image.alt : ''} />
    </picture>
  )
}

export default LazyPicture
