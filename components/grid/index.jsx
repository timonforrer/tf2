import React from 'react'

import './styles.scss'

const Grid = (props) => {
  if (props.asList) {
    return (
      <ul className="grid">
        { props.children.length > 1 ? props.children.map(child => <li key={child.key}>{child}</li>) : <li>{props.children}</li> }
      </ul>
    )
  }

  return <div className="grid">{props.children}</div>
}

export default Grid
