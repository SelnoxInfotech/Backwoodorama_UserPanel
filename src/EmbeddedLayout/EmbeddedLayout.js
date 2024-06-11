import React from 'react'
import { Outlet } from 'react-router-dom'

const EmbeddedLayout = () => {
  return (
    <div className='container'>
      <Outlet/>
    </div>
  )
}

export default EmbeddedLayout