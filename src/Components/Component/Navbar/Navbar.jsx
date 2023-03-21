import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import SideNavbar from "../Navbar/Component/SideSlider/Slider"
import Button from '@mui/material/Button';
import useStyles from "../../../Style"
import SearchBar from "./Component/SearchBar"
import SliderLink from "./Component/SideSlider/SilderLink"
<<<<<<< HEAD
import DispensoriesAddress from '../../Page/Home/Dispensories/DispensoriesAddress';
import LatestServices from "../../Page/Home/LatestArticle/LatestServices"
import WeedProduct from '../../Page/Home/Weed/WeedProduct';


import CategoryProduct from '../../Page/Home/Category/CategoryProduct';
=======
>>>>>>> 9add9ff (dsf)
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
<<<<<<< HEAD
      </div>
      <SliderLink></SliderLink>
      <SideNavbar
        closeNav={closeNav}
      ></SideNavbar>
      <CategoryProduct/>
      <div className='mt-4'>
      <DispensoriesAddress/>
      </div>
      <div className='mt-4'>
        <WeedProduct/>
      </div>
      <div className='mt-4'>
        <LatestServices/>
      </div>
      
=======
        </Grid>
 


>>>>>>> 9add9ff (dsf)
    </>
  )
}
export default Navbar


// AIzaSyCIKajdxnw25suNPzUQIVQzbBmxN9n4XrE