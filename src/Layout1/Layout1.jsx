import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Component/Navbar/Navbar'
import Createcontext from '../Hooks/Context';
import CheckAgeEligbilityPopup from '../Components/Page/CheckAgeEligblityPopup/CheckAgeEligbilityPopup';
import CookiesAccept from '../Components/Component/CookiesAccept/CookiesAccept';
import Cookies from 'universal-cookie';
const Layout1 = () => {
  const cookies = new Cookies();
  const { state, dispatch } = React.useContext(Createcontext)
  // console.log(state)
  React.useEffect(() => {
    let date = new Date();
    date.setTime(date.getTime() + (60 * 60 * 8000))
    if (!cookies.get('CookiesAcceptAll')) {
      cookies.set('CookiesAcceptAll', 0, { expires: date })
    }
    if (!cookies.get('Marketing')) {
      cookies.set('Marketing', 0, { expires: date })
    }
    if (!cookies.get('Analytical')) {
      cookies.set('Analytical', 0, { expires: date })
    }
    dispatch({ type: 'Cookies', Cookies: cookies.get("CookiesAcceptAll") })
    dispatch({ type: 'CookiesMarketing', CookiesMarketing: cookies.get("Marketing") })
    dispatch({ type: 'CookiesAnalytical', CookiesAnalytical: cookies.get("Analytical") })
  }, [])
  return (

    <React.Fragment>
      <CheckAgeEligbilityPopup value={cookies.get("CheckAge") === undefined ? true : false} ></CheckAgeEligbilityPopup>
      {
        parseInt(state.Cookies) === 0 && <CookiesAccept></CookiesAccept>
      }
      <div className='sticky-top '>
        <Navbar></Navbar>
      </div>
      <div className='loginsignwrapper'>
        <Outlet />
      </div>
    </React.Fragment>
  )
}

export default Layout1