import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import SideNavbar from "../Navbar/Component/SideSlider/Slider"
import Button from '@mui/material/Button';
import useStyles from "../../../Style"
import SearchBar from "./Component/SearchBar"
import SliderLink from "./Component/SideSlider/SilderLink"
const Navbar = () => {
  const [windowSize, setWindowSize] = React.useState()
  const [Hamburger, SetHamburger] = React.useState(window.innerWidth >= 993)
  const classes = useStyles()
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
    document.getElementById("mySidebar").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";

  }

  return (
    <>
     
        <Grid container spacing={0}  rowSpacing={1} >  
          <Grid xs={1} md={2} xl={2}>
            {
              Hamburger ?
                <span> Backwoodaroma</span> :
                <button className="openbtn Border" onClick={openNav}>☰</button>}
          </Grid>
          <Grid xs={6} md={8} xl={8}>
            <SearchBar />
          </Grid>
          <Grid xs={4} md={2} xl={2} >
            <div className=' col-12 Login_Sigup_button '>
              <div className='col-lg-4 col-sm-4'>
                <Button className={classes.muiBtn} >Login</Button>
              </div>
              <div className='col-lg-4 col-sm-4'>
                <Button className={classes.muiBtn} >Signup</Button>
              </div>
            </div>
          </Grid>
        <Grid xs={12} md={12} xl={12} >
          <SliderLink></SliderLink>
          <SideNavbar closeNav={closeNav}></SideNavbar>
        </Grid>
        </Grid>
 


    </>
  )
}
export default Navbar


// AIzaSyCIKajdxnw25suNPzUQIVQzbBmxN9n4XrE