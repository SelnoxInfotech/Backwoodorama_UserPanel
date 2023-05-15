import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import { BsWhatsapp } from "react-icons/bs"
import { AiFillHeart } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineShoppingCart } from "react-icons/md"
import { Link  , useLocation} from "react-router-dom";
import SearchBar from "../../Component/SearchBar"

export default function DashBoardLink({ state }) {
   const [current_route,Setcurrent_route] = React.useState()  
  const location = useLocation();
  React.useEffect(() => {
   
    Setcurrent_route(location.pathname)

  },[location])
  return (
    <>

      <div className="container-fluid Top ">
        <Grid container spacing={2}  >
          <Grid  xs={8} md={8} xl={8} display={{ xs: "none", md: "block", lg: "block" }}>
            <div className="ccol  nav_list1">
              <ul>
                <Link to="/Dispansires"  id={`${(current_route ===  "/Dispansires" ? "Active" : "")}`}> <li >Dispansires</li></Link>
                <Link to="/Deliveries" id={`${(current_route ===  "/Deliveries" ? "Active" : "")}`}><li>Deliveries</li></Link>
                <Link to="/Brand" id={`${(current_route ===  "/Brand" ? "Active" : "")}`}> <li>Brand</li></Link>
                <Link to="/Product" id={`${(current_route ===  "/Product" ? "Active" : "")}`}><li>Product</li></Link>
                <Link to="/Deals"  id={`${(current_route ===  "/Deals" ? "Active" : "")}`}><li>Deals</li></Link>
                <li >Learn</li>
                <Link to="/Strain" id={`${(current_route ===  "/Strain" ? "Active" : "")}`}><li>Strain</li></Link>
              </ul>
            </div>
          </Grid>
          <Grid  xs={6} md={2} xl={2} display={{ xs: "none", md: "block", lg: "block" }}>
            <div className=' col-12 Login_Sigup_button  '>


              <img src="image/facebook.png" alt="" style={{ pointerEvents: "none" }}></img>
              <img src="image/instagram.png" alt="" style={{ pointerEvents: "none" }}></img>
              <BsWhatsapp color="green" size={22} style={{ pointerEvents: "none" }}></BsWhatsapp>
              <img src="image/google.png" alt="" style={{ pointerEvents: "none" }}></img>
            </div>
          </Grid>

          <Grid  xs={6} md={2} xl={2} display={{ xs: "none", md: "block", lg: "block" }} >
            <div className=' col-12 Login_Sigup_button  '>
              <AiFillHeart color="grey" size={22}></AiFillHeart>
              <IoIosNotifications color="grey" size={23}></IoIosNotifications>
              <Link to="AddToCart">
                <MdOutlineShoppingCart color="grey" size={22}></MdOutlineShoppingCart>

              </Link>

              <div className={"border SliderLink_CartCount_div"} >
                <span className={state.LoadingApi ? "animated bounce" : " "}> {state.AllProduct?.length}</span>
              </div>
            </div>
          </Grid>
          <Grid  xs={12} md={8} xl={8} display={{ xs: "block", md: "none", lg: "none" }}>
            <SearchBar />
          </Grid>
        </Grid>
      </div>

    </>
  )

}

