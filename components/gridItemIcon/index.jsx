import React from 'react'
import './styles.scss'
import Icon from '../icon'

const GridItemIcon = ({icon, children}) => {
  return (
    <div>
      <div className="grid__item grid__item--icon">
        <div>
          {/* <IconLoader width={32} height={32} icon={icon} circle /> */}
          <Icon name={icon} width={32} height={32} circle color="white" />
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default GridItemIcon