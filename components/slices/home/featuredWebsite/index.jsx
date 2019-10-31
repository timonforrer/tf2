import React from 'react'
import LazyHydrate from 'react-lazy-hydration'

import Button from '../../../button'
import DecoratedImage from '../../../decoratedImage'
import Stack from '../../../stack'

import './styles.scss'

const FeaturedWebsite = props => {
  let data = props.primary.projectlink.data

  return (
    <section>
      <LazyHydrate ssrOnly>
        <div className="container">
          <Stack className="mega-card" tag="article" wider>
            <DecoratedImage image={data.cover} />
            <Stack className="mega-card__content">
              <Stack narrowest>
                <p className="secondary wght-700">Projekt &bull; {data.type_of_project}</p>
                <h2>{data.client} <span className="wght-400">{data.business}</span></h2>
              </Stack>
              <Stack className="mega-card__buttons" regular>
                {/* <Button primary>Fallstudie lesen</Button> */}
                <Button
                  target={data.final_website.target}
                  type={data.final_website.link_type}
                  href={data.final_website.url}>
                  Website ansehen
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </LazyHydrate>
    </section>
  )
}

export default FeaturedWebsite
