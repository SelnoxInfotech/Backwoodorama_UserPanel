import React from 'react'
import { Outlet } from 'react-router-dom'
import Menuintregrate from '../Components/Page/StoreDetail/StoreDetailComponent/Menuintregrate'

const EmbeddedLayout = () => {
  return (
    <div>
      <div className='sticky-top '>
        <Menuintregrate></Menuintregrate>
      </div>
      <div className='container '>
        <Outlet  />
      </div>
      <div className='py-3' style={{ backgroundColor: '#F6F6F6'}}>
        <p className='m-0 text-center'>Copyright © 2024 weedx.io</p>
      </div>
    </div>
  )
}

export default EmbeddedLayout