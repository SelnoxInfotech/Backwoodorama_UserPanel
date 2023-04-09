import { Grid } from "@mui/material"
import React from "react"
import Button from '@mui/material/Button';
import useStyles from "../../../../../Style"
import { BsWhatsapp } from "react-icons/bs"
import { Link } from "react-router-dom"
import styled from "styled-components";

const SideNavbar = ({ closeNav, Open }) => {

    const classes = useStyles()
    // const Popup = styled.div`
console.log(Open)
    // width: ${Open ? "250px" : "0px"};
    
//   `;
    return (
        <>
            <div id="mySidebar" className="sidebar " style={{ width: Open ? "250px" : "0px"}}>
                <div className=' col-12 Login_Sigup_button mt-4 mb-3 '>
                    <div className='col-4'>

                        <Button className={classes.muiBtn} >Login</Button>

                    </div>
                    <div className='col-6 center Tooglrbar '>
                        <img src="image/facebook.png" alt="" height={"20px"} ></img>
                        <img src="image/instagram.png" alt="" height={"20px"} ></img>
                        <BsWhatsapp color="green" size={22} height={"20px"} ></BsWhatsapp>
                        <img src="image/google.png" alt="" height={"20px"} ></img>
                    </div>
                </div>
                <div className="col-12 Slider_content_center " >
                    <Link to="/"><p onClick={closeNav}>Dispansires</p></Link>
                </div>

                <hr></hr>

                <div className="col-12 Slider_content_center " >
                    <p onClick={closeNav}>Deliveries</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p onClick={closeNav}>Brand</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <Link to="/Product"> <p onClick={closeNav}>Product</p></Link>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p onClick={closeNav}>Deals</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p onClick={closeNav}>Learn</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p onClick={closeNav}>Dispansires</p>
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