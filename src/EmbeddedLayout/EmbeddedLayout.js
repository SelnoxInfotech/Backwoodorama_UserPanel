import React from 'react'
import { Outlet } from 'react-router-dom'
import Menuintregrate from '../Components/Page/StoreDetail/StoreDetailComponent/Menuintregrate'

const EmbeddedLayout = () => {
  return (
    <div className='container '>
      <div className='sticky-top '>
        <Menuintregrate></Menuintregrate>
      </div>

      <Outlet  />
    </div>
  )
}

export default EmbeddedLayout