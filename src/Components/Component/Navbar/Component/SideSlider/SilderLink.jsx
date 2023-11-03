import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import { BsLinkedin } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineShoppingCart } from "react-icons/md"
import { ImFacebook } from "react-icons/im"
import { RiInstagramLine } from "react-icons/ri"
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../../Component/SearchBar"
import Badge from '@mui/material/Badge';
import useStyles from "../../../../../Style";
import IconButton from "@mui/material/IconButton";
import { useParams } from "react-router-dom";
export default function DashBoardLink({ state }) {
  const classes = useStyles()
  const [current_route, Setcurrent_route] = React.useState()
  const location = useLocation();
  React.useEffect(() => {

    Setcurrent_route(location.pathname)

  }, [location])
  return (
    <React.Fragment>

      <div className="container-fluid Top ">
        <Grid container spacing={2}  >
          <Grid xs={8} md={7.5} xl={8.2} display={{ xs: "none", md: "block", lg: "block" }}>
            <div className="ccol  nav_list1">
              <ul>
                <Link

                  to={(state.Country !== '' && state.State !== '' && state.City !== '' && state.route !== '') ? ` /weed-dispensaries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}/${state.City.toLowerCase()}/${state.route.toLowerCase()}` :
                    (state.Country !== '' && state.State !== '' && state.City !== '') ? `/weed-dispensaries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}/${state.City.toLowerCase()}`
                      : (state.Country !== '' && state.State !== '') ? `/weed-dispensaries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}}`
                        : (state.Country !== '') && `/weed-dispensaries/in/${state.Country.toLowerCase()}`}
                  id={`${(current_route?.slice(0, 18) === "/weed-dispensaries" ? "Active" : "")}`}> <li >Dispensaries </li></Link>
                <Link 
               
                to={(state.Country !== '' && state.State !== '' && state.City !== '' && state.route !== '') ? ` /weed-deliveries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}/${state.City.toLowerCase()}/${state.route.toLowerCase()}` :
                (state.Country !== '' && state.State !== '' && state.City !== '') ? `/weed-deliveries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}/${state.City.toLowerCase()}`
                  : (state.Country !== '' && state.State !== '') ? `/weed-deliveries/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}}`
                    : (state.Country !== '') && `/weed-deliveries/in/${state.Country.toLowerCase()}`}

                id={`${(current_route?.slice(0, 16) === "/weed-deliveries" ? "Active" : "")}`}><li>Deliveries</li></Link>
                <Link to="/brands" id={`${(current_route === "/brands" ? "Active" : "")}`}> <li>Brand</li></Link>
                <Link to="/products" id={`${(current_route === "/products" ? "Active" : "")}`}><li>Product</li></Link>
                {/* <Link to="/Deals"  id={`${(current_route ===  "/Deals" ? "Active" : "")}`}><li>Deals</li></Link> */}
                <Link to="/deals" id={`${(current_route === "/deals" ? "Active" : "")}`}><li>Deals</li></Link>
                <Link to="/learn" id={`${(current_route === "/learn" ? "Active" : "")}`}><li >Learn</li></Link>
                {/* <Link to="/strain" id={`${(current_route === "/strain" ? "Active" : "")}`}><li>Strain</li></Link> */}
                {/* <Link to="/Strain" id={`${(current_route === "/Strain" ? "Active" : "")}`}><li>Strain</li></Link> */}
              </ul>
            </div>
          </Grid>
          <Grid xs={6} md={2} xl={2} display={{ xs: "none", md: "block", lg: "block" }}>
            <div className=' col-12 Login_Sigup_button Login_Sigup_logo ' >
              <Link to={"https://www.facebook.com/profile.php?id=61550742531174"}><ImFacebook color={"#39569c"} size={25} ></ImFacebook></Link>
              <Link to={"https://www.instagram.com/weedx_io"}> <RiInstagramLine className="InstaColor" size={25} ></RiInstagramLine></Link>
              <Link to={'https://www.linkedin.com/company/weedx-io/'}> <BsLinkedin size={22} color='#0072b1' ></BsLinkedin></Link>
              <Link to={"https://twitter.com/Weedx_io"}>
                <span className="x_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                </span>
              </Link>
              {/* <RiTwitterXFill size={22} color="#00acee"></RiTwitterXFill> */}
            </div>
          </Grid>
          <Grid xs={6} md={2} xl={1} spacing={2} display={{ xs: "none", md: "block", lg: "block" }} >
            <div className=' col-12  addyocardIcon  '>
              <Link to="/whislists">

                <Badge badgeContent={state.login ? Object.values(state.WishList).reduce((a, item) => a + item, 0) : 0} className={classes.sliderLink_badge}>
                  <IconButton className={classes.navBarButton_icons} aria-label="whislist"><AiFillHeart color="#858585" size={22}></AiFillHeart></IconButton>
                </Badge>
              </Link>
              <Badge badgeContent={4} className={classes.sliderLink_badge}>
                <IconButton className={classes.navBarButton_icons} aria-label="notification"> <IoIosNotifications color="#858585" size={23}></IoIosNotifications></IconButton>
              </Badge>
              <Link to="/cart">
                <Badge className={`state.LoadingApi ? "animated bounce" : " " ${classes.sliderLink_badge}`} badgeContent={state.AllProduct?.length > 0 ? state.AllProduct?.length : null}>
                  <IconButton className={classes.navBarButton_icons} aria-label="shopping-cart"><MdOutlineShoppingCart color="#858585" size={22}></MdOutlineShoppingCart></IconButton>
                </Badge>
              </Link>
            </div>
          </Grid>
          <Grid xs={12} md={8} xl={8} display={{ xs: "block", md: "none", lg: "none" }}>
            <SearchBar />
          </Grid>
        </Grid>
      </div>

    </React.Fragment>
  )

}

