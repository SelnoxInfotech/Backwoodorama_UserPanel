
import React from "react"
import Button from '@mui/material/Button';
import useStyles from "../../../../../Style"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";
import Createcontext from "../../../../../Hooks/Context"
import Cookies from 'universal-cookie';
const SideNavbar = ({ closeNav, Open }) => {
    const cookies = new Cookies();
    const Navigate =  useNavigate()
    const { state, dispatch } = React.useContext(Createcontext)
    const classes = useStyles()
    function Logout() {
        cookies.remove('Token_access')
        dispatch({ type: 'Login', login: false })
        dispatch({ type: 'ApiProduct' })
    }
   function Login (){
    Navigate("/login")
    closeNav()
   }
   function Signup (){
    Navigate("/Signup")
    closeNav()
   }


    return (
        <>
            <div id="mySidebar" className="sidebar" style={{ width: Open ? "250px" : "0px" }}>
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
                            <div className="col-6">
                                <Button className={classes.muiBtn} onClick={Logout} >Logout</Button>
                            </div>

                    }
                </div>
                <div className="col-12 Slider_content_center " >
                    <Link to="/"><p onClick={closeNav}>Home</p></Link>
                </div>

                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link to="/Dispansires"><p onClick={closeNav}>Dispensaries</p></Link>
                </div>

                <hr></hr>

                <div className="col-12 Slider_content_center ">
                    <Link to="/Deliveries"><p onClick={closeNav}>Deliveries</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link to="/Brand"><p onClick={closeNav}>Brand</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link to="/Product"> <p onClick={closeNav}>Product</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                <Link to="/MainDeals"> <p onClick={closeNav}>Deals</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p onClick={closeNav}>Learn</p>
                </div>
                <hr></hr>
         
                <div className="col-12 Slider_content_center " >
                    <p onClick={closeNav}>More</p>
                </div>
            </div>
        </>
    )
}
export default SideNavbar