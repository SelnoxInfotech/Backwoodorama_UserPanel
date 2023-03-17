import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { BsWhatsapp } from "react-icons/bs"
import {AiFillHeart} from "react-icons/ai"
import {IoIosNotifications} from "react-icons/io"
import {MdOutlineShoppingCart} from "react-icons/md"
export default function DashBoardLink() {
  return (
    <>
      <div className="container-fluid Top mt-2 sticky-top">
        <Grid container spacing={2}>
          <Grid xs={8} md={8} xl={8} display={{ xs: "none", md: "block", lg: "block" }}>
            <div className="ccol  nav_list1">
              <ul>
                <li>Dispansires</li>
                <li>Deliveries</li>
                <li>Brand</li>
                <li>Product</li>
                <li>Deals</li>
                <li>Learn</li>
                <li>Strain</li>
                <li>More</li>
              </ul>
            </div>
          </Grid>
          <Grid xs={6} md={2} xl={2} >
            <div className=' col-12 Login_Sigup_button  '>


              <img src="image/facebook.png" alt="" ></img>
              <img src="image/instagram.png" alt="" ></img>
              <BsWhatsapp color="green" size={22}></BsWhatsapp>
              <img src="image/google.png" alt="" ></img>
            </div>
          </Grid>

          <Grid xs={6} md={2} xl={2} >
            <div className=' col-12 Login_Sigup_button  '>
              <AiFillHeart size={22}></AiFillHeart>
              <IoIosNotifications size={23}></IoIosNotifications>
            <MdOutlineShoppingCart size={22}></MdOutlineShoppingCart>
            
            
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )

}

