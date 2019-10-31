import React from 'react'

import DecoratedImage from '../../../decoratedImage'
import LazyVideo from '../../../lazyVideo'
import Stack from '../../../stack'

import './styles.scss'
import LazyPicture from '../../../lazyPicture'

const FeaturedVideo = props => {
  let data = props.primary.projectlink.data

  return (
    <section className="video-section">
      <div className="container video-section__content">
        <Stack tag="article" wide>
          <Stack narrowest>
            <p className="secondary wght-700">Projekt &bull; {data.type_of_project}</p>
            <h2>{data.client} <span className="wght-400">{data.business}</span></h2>
          </Stack>
          <DecoratedImage image={data.cover}>
            <LazyVideo src={data.video.url} cta="Video abspielen" />
          </DecoratedImage>
        </Stack>
      </div>
      <div className="video-section__background-wrapper">
        <LazyPicture image={data.backdrop} />
      </div>
    </section>
  )
}

export default FeaturedVideo
