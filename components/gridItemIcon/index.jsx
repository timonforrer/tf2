import React from 'react'

import IconLoader from '../../components/iconLoader'

import './styles.scss'

const GridItemIcon = ({icon, children}) => {
  return (
    <div>
      <div className="grid__item grid__item--icon">
        <div>
          <IconLoader width={32} height={32} icon={icon} circle />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default GridItemIcon