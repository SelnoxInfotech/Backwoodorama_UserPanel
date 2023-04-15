import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import SideNavbar from "../Navbar/Component/SideSlider/Slider"
import Button from '@mui/material/Button';
import useStyles from "../../../Style"
import SearchBar from "./Component/SearchBar"
import { AiFillHeart } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom";
import SliderLink from "./Component/SideSlider/SilderLink"
import { GiConsoleController } from 'react-icons/gi';
const Navbar = () => {
  const [windowSize, setWindowSize] = React.useState()
  const [Hamburger, SetHamburger] = React.useState(window.innerWidth >= 993)
  const classes = useStyles()
  const [Open , SetOpen] = React.useState(false)
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (windowSize >= 993) {
      SetHamburger(true)
 
       
     
    }
    else {
      if (windowSize <= 993) {
        SetHamburger(false)
      }
    }
    return () => window.removeEventListener('resize', handleResize)

  }, [windowSize])
  function openNav() {
    SetOpen(true)
  }
  function closeNav() {
    SetOpen(false)

  }

  React.useState(()=>{
    if (Open === true) {

      document.addEventListener("click", closeNav)
    }
  },[])

  return (
    <>


      <div className='sticky-top' style={{ background: "white" ,padding:"10px" }}>
        <Grid container spacing={0} rowSpacing={0.3}   >
          <Grid xs={2 } md={2} xl={2}>
            {
              Hamburger ?
                <span><img className='navbar_logo_image' src='./image/logo.webp'/></span> :

                <div className='center'>
                  <button className="openbtn Border" onClick={()=>{openNav()}}>☰</button>
                </div>

            }
          </Grid>
          <Grid xs={6} md={8} xl={8} display={{ xs: "none", md: "block", lg: "block" }}>
            <SearchBar />
          </Grid>
          <Grid xs={6} md={2} xl={2} display={{ xs: "block", md: "none", lg: "none" }} >
            <div className=' col-12 Login_Sigup_button  '>
              <AiFillHeart size={30}></AiFillHeart>
              <IoIosNotifications size={30}></IoIosNotifications>
              <Link to="AddToCart">  <MdOutlineShoppingCart size={30}></MdOutlineShoppingCart></Link>


            </div>
          </Grid>
          <Grid xs={4} md={2} xl={2} >
            <div className=' col-12 Login_Sigup_button '>
              <div className='col-lg-4 col-sm-4'>
                <Grid display={{ xs: "none", md: "block", lg: "block" }}>
                  <Button className={classes.muiBtn} >Login</Button>
                </Grid>
              </div>
              <div className='col-lg-4 col-sm-4'>
              <Grid>
                <Button className={classes.muiBtn} >Signup</Button>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid xs={12} md={12} xl={12} >
            <SliderLink></SliderLink>
            <SideNavbar closeNav={closeNav} Open={Open}></SideNavbar>
          </Grid>
        </Grid>

      </div>



    </>
  )
}
export default Navbar


// AIzaSyCIKajdxnw25suNPzUQIVQzbBmxN9n4XrE