import React from 'react'
import {RichText} from 'prismic-reactjs'

import Grid from '../../../grid'
import GridItemIcon from '../../../gridItemIcon'
import Stack from '../../../stack'

const IconList = props => {
  let items = props.items

  return (
    <section>
      {/* <LazyHydrate ssrOnly> */}
        <div className="container">
          <Stack tag="article" wider>
            {RichText.render(props.primary.heading)}
            <div>
              <Grid asList>
                {items.map((item, index) => (
                  <GridItemIcon key={`list-item-${index}`} icon={item.icon}>
                    <Stack narrow>
                      {RichText.render(item.title)}
                      {RichText.render(item.text)}
                    </Stack>
                  </GridItemIcon>
                ))}
              </Grid>
            </div>
          </Stack>
        </div>
      {/* </LazyHydrate> */}
    </section>
  )
}

export default IconList
