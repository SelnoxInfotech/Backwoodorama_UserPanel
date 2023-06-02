import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import SideNavbar from "../Navbar/Component/SideSlider/Slider"
import Button from '@mui/material/Button';
import useStyles from "../../../Style"
import SearchBar from "./Component/SearchBar"
import { AiFillHeart } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineShoppingCart } from "react-icons/md"
import { Link, NavLink } from "react-router-dom";
import SliderLink from "./Component/SideSlider/SilderLink"
import Createcontext from "../../../Hooks/Context"
import Cookies from 'universal-cookie';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CurrentLocation from './Component/CurrentLocation';

const Navbar = () => {
  const cookies = new Cookies();
  const ref = React.useRef(null);
  const { state, dispatch } = React.useContext(Createcontext)
  const [windowSize, setWindowSize] = React.useState()
  const [Hamburger, SetHamburger] = React.useState(window.innerWidth >= 900)
  const classes = useStyles()
  const [Open, SetOpen] = React.useState(false)
  React.useEffect(() => {

    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (windowSize >= 900) {
      SetHamburger(true)
    }
    else {
      if (windowSize <= 900) {
        SetHamburger(false)
      }
    }
    return () => window.removeEventListener('resize', handleResize)

  }, [windowSize])
  function openNav() {
    SetOpen((Open) => !Open)
  }
  function closeNav() {
    SetOpen(false)

  }
  function Logout() {
    cookies.remove('Token_access')
    dispatch({ type: 'Login', login: false })
    dispatch({ type: 'ApiProduct' })
  }


  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (Open) {
          SetOpen((Open) => !Open)
        }
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [Open, windowSize]);



  return (
    <>


      <div ref={ref} className='sticky-top' style={{ background: "white", padding: "10px" }}>
        <Grid container spacing={0} rowSpacing={0.3}   >
          <Grid container xs={2} md={2} xl={2}>
            {
              Hamburger ?
                <span>
                  <Link to="/"><LazyLoadImage className='navbar_logo_image' src='/image/logo.webp' /></Link>
                </span> :

                <div className='center'>
                  <button className="openbtn Border" onClick={() => { openNav() }}>☰</button>
                </div>

            }
          </Grid>
          <Grid xs={6} md={8} xl={8} display={{ xs: "none", md: "block", lg: "block" }}>
            <SearchBar />
          </Grid>
          <Grid xs={10} md={2} xl={2} display={{ xs: "block", md: "none", lg: "none" }} >
            <div className=' col-12 Login_Sigup_button  Heder_icon '>
              <AiFillHeart size={22}></AiFillHeart>
              <IoIosNotifications size={22}></IoIosNotifications>
              <Link to="/AddToCart">  <MdOutlineShoppingCart size={22}></MdOutlineShoppingCart></Link>
              <div className={"border SliderLink_CartCount_div"} >
                <span className={state.LoadingApi ? "animated bounce" : " "}> {state.AllProduct?.length}</span>
              </div>


            </div>
          </Grid>
          <Grid xs={4} md={2} xl={2} >
            {
              state.login === true
                ?

                <div className=' col-12 Login_Sigup_button '>
                  <div className='col-lg-4 col-sm-4'>
                    <Grid display={{ xs: "none", md: "block", lg: "block" }}>
                      <Button className={classes.muiBtn} onClick={Logout} >Logout</Button>
                    </Grid>
                  </div>
                </div>

                :

                <div className=' col-12 Login_Sigup_button '>
                  <div className='col-lg-4 col-sm-4'>
                    <Grid display={{ xs: "none", md: "block", lg: "block" }}>
                      <NavLink to="/Login" >   <Button className={classes.muiBtn} >Login</Button></NavLink>
                    </Grid>
                  </div>
                  <div className='col-lg-4 col-sm-4'>
                    <Grid display={{ xs: "none", md: "block", lg: "block" }}>
                      <NavLink to="/Signup" >    <Button className={classes.muiBtn} >Signup</Button></NavLink>
                    </Grid>
                  </div>
                </div>
            }
          </Grid>
          <Grid xs={12} md={12} xl={12} >
            <SliderLink state={state}></SliderLink>
            <SideNavbar closeNav={closeNav} Open={Open}></SideNavbar>
          </Grid>
        </Grid>

      </div>

      

    </>
  )
}
export default Navbar


// AIzaSyCIKajdxnw25suNPzUQIVQzbBmxN9n4XrE