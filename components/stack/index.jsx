import React from 'react'

import './styles.scss'

const Stack = (props) => {
  let classes = `stack stack--${
    props.narrowest ? 'narrowest' :
    props.narrower ? 'narrower' :
    props.narrow ? 'narrower' :
    props.wide ? 'wide' :
    props.wider ? 'wider' :
    props.widest ? 'widest' :
    'regular'
  }${props.className ? ` ${props.className}` : ''}`

  let Tag = props.tag ? props.tag : 'div'

  return <Tag className={classes}>{props.children}</Tag>
}

export default Stack
