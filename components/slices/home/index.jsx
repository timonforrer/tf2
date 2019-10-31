import React, { Component } from 'react'

import FeaturedWebsite from './featuredWebsite'
import FeaturedVideo from './featuredVideo'
import IconList from './iconList'

class Slice extends Component {
  components = {
    featured_website: FeaturedWebsite,
    featured_video: FeaturedVideo,
    icon_list: IconList
  }
  render () {
    let Slice = this.components[this.props.slice_type || 'icon_list']
    return <Slice {...this.props} />
  }
}

export default Slice
