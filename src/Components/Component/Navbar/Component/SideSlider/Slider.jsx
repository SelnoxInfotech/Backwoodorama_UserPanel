
import React from "react"
import Button from '@mui/material/Button';
import useStyles from "../../../../../Style"
import { Link, useNavigate } from "react-router-dom"
import Createcontext from "../../../../../Hooks/Context"
import Cookies from 'universal-cookie';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaHome , FaClinicMedical , FaIdeal ,FaProductHunt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { SiBrandfolder ,SiFuturelearn} from "react-icons/si";
import { IoIosMore } from "react-icons/io";

import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
const SideNavbar = ({ closeNav, Open }) => {
  const profileRef=React.useRef(null)
    const cookies = new Cookies();
    const Navigate = useNavigate()
    const { state, dispatch } = React.useContext(Createcontext)
    const [SliderStateDropDown, SetSliderStateDropdown] = React.useState(null)
    const SliderProfileList = [{ item: "My Order" }, { item: "Favorites" },
    { item: "Review" }, { item: "Help" }]
    const classes = useStyles()
    function Logout() {
        cookies.remove('Token_access')
        dispatch({ type: 'Login', login: false })
        dispatch({ type: 'ApiProduct' })
    }
    function Login() {
        Navigate("/login")
        closeNav()
    }
    function Signup() {
        Navigate("/signup")
        closeNav()
    }
    React.useEffect(() => {
        const handleClickOutsideprofile = (event) => {
          if (profileRef.current && !profileRef.current.contains(event.target)) {
            if (SliderStateDropDown) {
                SetSliderStateDropdown((SliderStateDropDown) => !SliderStateDropDown)
            }
          }
        };
        document.addEventListener('click', handleClickOutsideprofile, true);
        return () => {
          document.removeEventListener('click', handleClickOutsideprofile, true);
        };
      }, [SliderStateDropDown]);
    const sliderProfileHandler = () => {
        SetSliderStateDropdown((SliderStateDropDown) => {
            return !SliderStateDropDown;
        })
    }
    
    const Redirect=(items)=>{
        if(items==="My Order"){
            Navigate("/MyOrder")
            closeNav()
        }

    }
    return (
        <React.Fragment>
            <div id="mySidebar" className="sidebar" style={{ width: Open ? "300px" : "0px" }}>
                <div className=' col-12 Login_Sigup_button mt-4 mb-3 '>
                    {
                        !state.login ?
                            <>
                                <div className='col-4'>

                                    <Button onClick={Login} className={classes.muiBtn} >Login</Button>

                                </div>
                                <div className='col-4'>

                                    <Button onClick={Signup} className={classes.muiBtn} >Signup</Button>

                                </div>
                            </> :
                            <div className="col-6 sliderImageProfile_container_mainDiv" ref={profileRef}>
                                {/* <Button className={classes.muiBtn} onClick={Logout} >Logout</Button> */}
                                <div className="SliderImageProfile_container" >
                                    <LazyLoadImage  alt='Profile' src='/image/user.webp' className="Slidser_profile_imgs" onClick={sliderProfileHandler} />

                                </div>
                                {SliderStateDropDown &&
                                    (<div className="sliderProfile_image_list_container">
                                        <section className="image_name_section">
                                            <div className="SliderImageProfile_container">
                                                <LazyLoadImage src='/image/user.webp' className="Slider_inner_profile_imgs" />
                                            </div>
                                            <div className="slider_image_profile_names_conatiner">
                                                <h1 className="slider_image_name_heading ellipsis">{state.Profile.username}</h1>
                                                {/* <p className="slider_view_heading" onClick={ViewProfiles}>View Profile</p> */}
                                                <Link to={"/Profile"}><p className="slider_view_heading" onClick={closeNav}>View Profile</p></Link>

                                            </div>
                                        </section>
                                        <hr />
                                        <section className="sliderProfile_list">
                                            <ol className="px-0">
                                                {SliderProfileList.map((items, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <li className="slider_profile_list" onClick={()=>Redirect(items.item)}>{items.item}</li>
                                                            <hr />
                                                        </div>

                                                    )
                                                })}
                                            </ol>
                                        </section>
                                        <Box className={`sliderProfile_logout_btn ${classes.sliderProfile_loadingBtn}`}>
                                            <LoadingButton onClick={Logout}>Logout</LoadingButton>
                                        </Box>

                                    </div>)
                                }
                            </div>

                    }
                </div>
                <div className="col-12 Slider_content_center " >
                    <Link to="/" className="LinkColor"><p onClick={closeNav} className="m-0"><span> <FaHome color="#31B655" fontSize={25}/></span >Home</p></Link>
                </div>

                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to={`/weed-dispensaries/in/${state?.Country?.toLowerCase()}/${state?.State?.toLowerCase()}/${state?.City?.toLowerCase()}`}><p onClick={closeNav} className="m-0"><span ><FaClinicMedical color="#31B655" fontSize={25} /></span>Dispensaries</p></Link>
                </div>

                <hr></hr>

                <div className="col-12 Slider_content_center ">
                    <Link className="LinkColor" to={`/weed-deliveries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}/${state.City.toLowerCase()}`}><p onClick={closeNav} className="m-0"><span><TbTruckDelivery color="#31B655"  fontSize={25} /></span>Deliveries</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to="/brands"><p onClick={closeNav} className="m-0"><span><SiBrandfolder color="#31B655" fontSize={25}/></span> Brand</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to="/products"> <p onClick={closeNav} className="m-0"><span><FaProductHunt color="#31B655" fontSize={25}/></span>Products</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to="/deals"> <p onClick={closeNav} className="m-0"><span><FaIdeal color="#31B655" fontSize={25}/></span>Deals</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link className="LinkColor" to="/Learn"><p onClick={closeNav} className="m-0"><span><SiFuturelearn color="#31B655" fontSize={25}/></span>Learn</p></Link>
                </div>
               
                <hr></hr>

                <div className="col-12 Slider_content_center " >
                    <p onClick={closeNav} className="m-0"><span><IoIosMore  color="#31B655" fontSize={25}/>
</span> More</p>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SideNavbar