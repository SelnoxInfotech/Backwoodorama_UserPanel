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
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const cookies = new Cookies();
  const ref = React.useRef(null);
  const profileRef = React.useRef(null)
  const { state, dispatch } = React.useContext(Createcontext)
  const [windowSize, setWindowSize] = React.useState()
  const [Hamburger, SetHamburger] = React.useState(window.innerWidth >= 900)
  const classes = useStyles()
  const [Open, SetOpen] = React.useState(false)
  const [DropDownState, SetDropDownState] = React.useState(false);
  const [ProfileImage, SetProfileImage] =  React.useState('')
  const [ProfileSlectedState, SetProfileSelectedState] = React.useState(1)
  const ProfileList = [{ id: 1, item: "My Order" }, { id: 2, item: "Favorites" },
  { id: 3, item: "Review" }, { id: 4, item: "Help" }]



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
  async function Logout() {
    await cookies.remove('Token_access')
    await dispatch({ type: 'Login', login: false })
    await dispatch({ type: 'ApiProduct' })
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

  React.useEffect(() => {
    const handleClickOutsideprofile = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        if (DropDownState) {
          SetDropDownState((DropDownState) => !DropDownState)
        }
      }
    };
    document.addEventListener('click', handleClickOutsideprofile, true);
    return () => {
      document.removeEventListener('click', handleClickOutsideprofile, true);
    };
  }, [DropDownState]);

  const handleClickDropdown = () => {
    SetDropDownState((DropDownState) => {
      return !DropDownState;
    })
  }
  const navigate = useNavigate()
  const Redirect = (items, listId) => {
    SetProfileSelectedState(listId)
    if (items === "My Order") {
      navigate("/MyOrder")
      SetDropDownState((DropDownState) => {
        return !DropDownState;
      })
    }

  }
  const ViewProfiles = () => {
    navigate("/Profile")
    SetDropDownState((DropDownState) => {
      return !DropDownState;
    })
  }
     
  React.useEffect(()=>{
    console.log(state)
  SetProfileImage(state?.Profile?.image)
  },[])
   

  return (
    <>
      <div ref={ref} className='sticky-top' style={{ background: "white", padding: "10px" }}>
        <Grid container spacing={0} rowSpacing={0.3}   >
          {
            Hamburger ?
              <Grid container xs={2} md={2} xl={2}
                alignItems="center"
                justifyContent="center"
              >
                <span >
                  <Link to="/"><LazyLoadImage className='navbar_logo_image' src='/image/logo.webp' /></Link>
                </span>

              </Grid>
              :
              <Grid container xs={2} md={2} xl={2}>
                <div className='center' style={{ marginLeft: "15px" }}>
                  <button className="openbtn Border" onClick={() => { openNav() }}>☰</button>
                </div>
              </Grid>
          }
          <Grid xs={6} md={6} xl={7} display={{ xs: "none", md: "block", lg: "block" }}>
            <SearchBar />
          </Grid>
          <Grid xs={10} md={2} xl={1} display={{ xs: "block", md: "none", lg: "none" }} >
            <div className=' col-12 Login_Sigup_button  Heder_icon ' style={{ justifyContent: "end", marginLeft: "-20px" }}>
              <Link to="/WhisLists">
             
              <Badge badgeContent={state.login && Object.values(state.WishList).reduce((a, item) => a + item, 0)} className={classes.sliderLink_badge}>
                <IconButton className={classes.navBarButton_icons} aria-label='whishlist'><AiFillHeart color="#858585" size={22} /></IconButton>
              </Badge>
              </Link>
              <Badge badgeContent={4} className={classes.sliderLink_badge}>

                <IconButton className={classes.navBarButton_icons} aria-label='notification'><IoIosNotifications color="#858585" size={22}></IoIosNotifications></IconButton>
              </Badge>
              <Link to="/AddToCart">
                <Badge className={`state.LoadingApi ? "animated bounce" : " " ${classes.sliderLink_badge}`} badgeContent={state.AllProduct?.length > 0 ? state.AllProduct?.length : "0"}>

                  <IconButton className={classes.navBarButton_icons} aria-label='shopping-cart'><MdOutlineShoppingCart color="#858585" size={22}></MdOutlineShoppingCart></IconButton>
                </Badge>
              </Link>
            </div>
          </Grid>
          <Grid xs={5} md={3} xl={3} >
            {
              state.login === true
                ?

                <div className=' col-12 Login_Sigup_button '>

                  <div className='col-lg-4 col-sm-4 navbarProfileDropDown_container' ref={profileRef}>
                    <Grid display={{ xs: "none", md: "block", lg: "block" }}>
                      <div className='Navbar_profile_logo_container'>
                        <LazyLoadImage
                          onError={event => {
                            event.target.src = "/image/user.webp"
                            event.onerror = null
                          }}
                          src={`https://sweede.app/${state?.Profile?.image}`}
                          alt=''
                          className="Navbar_logo_imgs"
                          onClick={handleClickDropdown}
                        />
                      </div>
                    </Grid>
                    {DropDownState && (
                      <div className='profileDropdown_container'>
                        <section className='Navbar_proflie_image_name_section'>
                          <div className='profile_image_container'>
                            {/* <LazyLoadImage onError={event => {
                              event.target.src = "/image/user.webp"
                              event.onerror = null
                            }}
                              src={`https://sweede.app/${state?.Profile?.image}`}
                              alt='' className="Navbar_profile_imgs" /> */}
                          </div>
                          <div className='profile_name_container'>
                            <p className='profile_names ellipsis'>{state?.Profile?.username}</p>
                            <p className='profile_viewAll' onClick={ViewProfiles}>View Profile</p>
                          </div>

                        </section>
                        <hr />
                        <section className='bg-light navbarProfileDropDownSection'>
                          <ol className='navbar_profile_orderList px-0'>
                            {ProfileList.map((value, index) => {
                              return (
                                <div key={index}>
                                  <li className='profile_list' style={{ color: ProfileSlectedState === value.id ? "#31B665" : "" }} onClick={() => { Redirect(value.item, value.id) }}>{value.item}</li>
                                  <hr />
                                </div>
                              )
                            })}
                          </ol>

                        </section>
                        <Box className={`mt-4 navbar_profileLodingBtn_position ${classes.navbarprofileLoadingBtn}`}>
                          <LoadingButton onClick={Logout}>Logout</LoadingButton>
                        </Box>
                      </div>

                    )}

                  </div>
                </div>
                :
                <div className=' col-12 Login_Sigup_button  Sapceing'>
                  <div className='col-lg-4 col-sm-4'>
                    <Grid display={{ xs: "none", md: "block", lg: "block", }} >
                      <NavLink to="/Login" >   <Button className={classes.muiBtn} >Login</Button></NavLink>
                    </Grid>
                  </div>
                  <div className='col-lg-4 col-sm-4'>
                    <Grid display={{ xs: "none", md: "block", lg: "block" }}>
                      <NavLink to="/Signup" >    <Button sx={{ boxShadow: 3 }} className={classes.muiBtn_Signup} >Signup</Button></NavLink>
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