import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Component/Navbar/Navbar'
const Layout1 = () => {

  return (
    <React.Fragment>

      <Navbar></Navbar>
      <div className='loginsignwrapper'>
        <Outlet />
      </div>
    </React.Fragment>
  )
}

export default Layout1