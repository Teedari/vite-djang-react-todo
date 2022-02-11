import React from 'react'
import './styles/layout.scss'
const MobileLayout = ({children}) => {
  return (
    <div className='mobile-layout-inner'>{children}</div>
  )
}

export default MobileLayout