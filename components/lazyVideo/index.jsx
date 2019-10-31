import React, { useState } from 'react'

import Button from '../button'

import './styles.scss'

const LazyVideo = ({src, cta}) => {
  let [showVideo, setShowVideo] = useState(false)



  return (
    <div className="lazy-video">
      {
        showVideo
        ? <video autoPlay controls src={src}></video>
        : <Button onClick={() => setShowVideo(true)} primary>{cta}</Button>
      }
      <noscript><video autoPlay controls src={src}></video></noscript>
    </div>
  )
}

export default LazyVideo
