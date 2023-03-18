import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import SideNavbar from "../Navbar/Component/SideSlider/Slider"
import Button from '@mui/material/Button';
import useStyles from "../../../Style"
import SearchBar from "./Component/SearchBar"
import SliderLink from "./Component/SideSlider/SilderLink"
const Navbar = () => {
  const [windowSize, setWindowSize] = React.useState()
  const [Hamburger, SetHamburger] = React.useState(false)
  const classes = useStyles()
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (windowSize >= 993) {
      console.log(windowSize >= 993)
      // document.getElementById("mySidebar").style.width = "16vw";
      SetHamburger(true)
    }
    else {
      if (windowSize <= 993) {
        document.getElementById("mySidebar").style.width = "0px"
        SetHamburger(false)

      }
    }
    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize])


  function openNav() {
   
      document.getElementById("mySidebar").style.width = "250px";
    
  
  }
  function closeNav() {
    console.log("kjhm")
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft = "0";
  }



  // return (
  //   <>
  //     <nav>

  //       <div className="container-fluid p-4">

  //       <div className="row m-4 d-flex ">
  //         <div className="col-2 ">
  //           <p>Backwoodaroma</p>
  //         </div>
  //         <div className="col-6">
  //           <SearchBar />


  //         </div>
  //         <div className="col-4  ">
  //           <div className="nav_btn">
  //             <Button className={classes.muiBtn} >Login</Button>
  //             <Button className={classes.muiBtn} >Signup</Button>
  //           </div>

  //         </div>

  //       </div>
  //       <div className="row">
  //         <div className="col-6  nav_list1">
  //          {/* <ul>
  //           <li>Dispansires</li>
  //           <li>Delivery</li>
  //           <li>Brand</li>
  //           <li>Product</li>
  //           <li>Deals</li>
  //           <li>Learn</li>
  //           <li>Strain</li>
  //           <li>More</li>

  //          </ul> */}
  //          <a className="anchor" href="/">Dispansires</a>
  //          <a className="anchor" href="/">Delivery</a>
  //          <a className="anchor" href="/">Brand</a>
  //          <a className="anchor" href="/">Product</a>
  //          <a className="anchor" href="/">Deals</a>
  //          <a className="anchor" href="/">Learn</a>
  //          <a className="anchor" href="/">Strain</a>
  //          <a className="anchor" href="/">More</a>

  //         </div>
  //         <div className="col-4 nav_list">
  //          <ul>
  //           <li>
  //             <FaFacebookF className={classes.muiIcon}/>
  //             <FontAwesomeIcon icon={faFacebook}/>
  //             </li>
  //           <li><AiFillInstagram className={classes.insta}/>
  //           {/* <FontAwesomeIcon icon={faInstagram} /> */}
  //           </li>
  //           <li><BsWhatsapp/></li>
  //           <li><AiOutlineGoogle/></li>
  //          </ul>
  //         </div>
  //         <div className="col-2  nav_list2">
  //          <ul>
  //           <li><AiFillHeart className={classes.muiIcons}/></li>
  //           <li><FaBell className={classes.muiIcons}/></li>
  //           <li><MdOutlineShoppingCart className={classes.muiIcons}/></li>
  //          </ul>
  //         </div>
  //       </div>
  //       </div>

  //     </nav>



  //     <Outlet />
  //   </>
  // )
  return (
    <>
      <div className='container-fluid Top sticky-top '>
        <Grid container spacing={2}>
          <Grid xs={1} md={2} xl={2} >
            {
              Hamburger ?
                <span >Backwoodaroma</span> :
                <button className="openbtn " onClick={openNav}>☰</button>}
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
        </Grid>
      </div>
      <SliderLink></SliderLink>
      <SideNavbar
        closeNav={closeNav}
      ></SideNavbar>
    </>
  )
}
export default Navbar