import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import { BsWhatsapp } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineShoppingCart } from "react-icons/md"
import {FcGoogle} from "react-icons/fc"
import {ImFacebook}  from "react-icons/im"
import {RiInstagramLine} from "react-icons/ri"
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../../Component/SearchBar"
import Badge from '@mui/material/Badge';
import useStyles from "../../../../../Style";
import IconButton  from "@mui/material/IconButton"; 
export default function DashBoardLink({ state }) {
  const classes=useStyles()
  const [current_route, Setcurrent_route] = React.useState()
  const location = useLocation();
  React.useEffect(() => {

    Setcurrent_route(location.pathname)

  }, [location])
  return (
    <>

      <div className="container-fluid Top ">
        <Grid container spacing={2}  >
          <Grid xs={8} md={7.5} xl={8.2} display={{ xs: "none", md: "block", lg: "block" }}>
            <div className="ccol  nav_list1">
              <ul>
                <Link to="/Dispansires" id={`${(current_route === "/Dispansires" ? "Active" : "")}`}> <li >Dispensaries </li></Link>
                <Link to="/Deliveries" id={`${(current_route === "/Deliveries" ? "Active" : "")}`}><li>Deliveries</li></Link>
                <Link to="/Brand" id={`${(current_route === "/Brand" ? "Active" : "")}`}> <li>Brand</li></Link>
                <Link to="/Product" id={`${(current_route === "/Product" ? "Active" : "")}`}><li>Product</li></Link>
                {/* <Link to="/Deals"  id={`${(current_route ===  "/Deals" ? "Active" : "")}`}><li>Deals</li></Link> */}
                <Link to="/MainDeals" id={`${(current_route === "/MainDeals" ? "Active" : "")}`}><li>Deals</li></Link>

               <Link to="/LearnTabs" id={`${(current_route === "/LearnTabs" ? "Active" : "")}`}><li >Learn</li></Link>
                <Link to="/Strain" id={`${(current_route === "/Strain" ? "Active" : "")}`}><li>Strain</li></Link>
                {/* <Link to="/Strain" id={`${(current_route === "/Strain" ? "Active" : "")}`}><li>Strain</li></Link> */}
              </ul>
            </div>
          </Grid>
          <Grid xs={6} md={2} xl={2} display={{ xs: "none", md: "block", lg: "block" }}>
            <div className=' col-12 Login_Sigup_button Login_Sigup_logo ' >
              <ImFacebook color={"#39569c"} size={25} style={{ pointerEvents: "none" }}></ImFacebook>
             <RiInstagramLine className="InstaColor" size={25} style={{ pointerEvents: "none" }}></RiInstagramLine>
              <BsWhatsapp color="green" size={22} style={{ pointerEvents: "none" }}></BsWhatsapp>
              <FcGoogle size={25} style={{ pointerEvents: "none" }}></FcGoogle>
            </div>
          </Grid>
          <Grid xs={6} md={2} xl={1} spacing={2} display={{ xs: "none", md: "block", lg: "block" }} >
            <div className=' col-12  addyocardIcon  '>
              <Link to="/Whislists">
             
              <Badge badgeContent={Object.values(state.WishList).reduce((a, item) => a + item, 0)} className={classes.sliderLink_badge}>
                <IconButton className={classes.navBarButton_icons} aria-label="whislist"><AiFillHeart color="#858585" size={22}></AiFillHeart></IconButton>
              </Badge>
              </Link>
              <Badge badgeContent={4} className={classes.sliderLink_badge}>
              <IconButton className={classes.navBarButton_icons}  aria-label="notification"> <IoIosNotifications color="#858585" size={23}></IoIosNotifications></IconButton>
              </Badge>
              <Link to="AddToCart">
                <Badge className={`state.LoadingApi ? "animated bounce" : " " ${classes.sliderLink_badge}`} badgeContent={state.AllProduct?.length>0?state.AllProduct?.length:"0"}>
                  <IconButton className={classes.navBarButton_icons}  aria-label="shopping-cart"><MdOutlineShoppingCart color="#858585" size={22}></MdOutlineShoppingCart></IconButton>
                </Badge>
              </Link>
            </div>
          </Grid>
          <Grid xs={12} md={8} xl={8} display={{ xs: "block", md: "none", lg: "none" }}>
            <SearchBar />
          </Grid>
        </Grid>
      </div>

    </>
  )

}

