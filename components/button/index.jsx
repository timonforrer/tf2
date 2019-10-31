import React from 'react'

import './styles.scss'

const Button = (props) => {
  let classes = `button button--${ props.primary ? 'primary' : 'regular' }`

  return (
    props.href === undefined
    ? <button disabled={props.disabled} onClick={props.onClick} className={classes}>{props.children}</button>
    : <a rel="noopener" target={props.target} className={classes} href={props.href}>{props.children}</a>
  )
}

export default Button
