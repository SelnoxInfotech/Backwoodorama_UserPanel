import { Outlet, Link, NavLink } from "react-router-dom";
// import SearchBar from "material-ui-search-bar";
import Button from '@mui/material/Button';
import {FaFacebookF} from "react-icons/fa"
import{AiFillInstagram} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineGoogle} from "react-icons/ai"
import {AiFillHeart} from "react-icons/ai"
import {FaBell} from "react-icons/fa"
import {MdOutlineShoppingCart} from "react-icons/md"
import useStyles from "../../../Style"
import Box from '@mui/material/Box';
import SearchBar from "./Component/SearchBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
  const classes=useStyles()
  return (
    <>
      <nav>

        <div className="container-fluid p-4">

        <div className="row m-4 d-flex ">
          <div className="col-2 ">
            <p>Backwoodaroma</p>
          </div>
          <div className="col-6">
            <SearchBar />


          </div>
          <div className="col-4  ">
            <div className="nav_btn">
              <Button className={classes.muiBtn} >Login</Button>
              <Button className={classes.muiBtn} >Signup</Button>
            </div>

          </div>

        </div>
        <div className="row">
          <div className="col-6  nav_list1">
           {/* <ul>
            <li>Dispansires</li>
            <li>Delivery</li>
            <li>Brand</li>
            <li>Product</li>
            <li>Deals</li>
            <li>Learn</li>
            <li>Strain</li>
            <li>More</li>

           </ul> */}
           <a className="anchor" href="#">Dispansires</a>
           <a className="anchor" href="#">Delivery</a>
           <a className="anchor" href="#">Brand</a>
           <a className="anchor" href="#">Product</a>
           <a className="anchor" href="#">Deals</a>
           <a className="anchor" href="#">Learn</a>
           <a className="anchor" href="#">Strain</a>
           <a className="anchor" href="#">More</a>
           
          </div>
          <div className="col-4 nav_list">
           <ul>
            <li>
              <FaFacebookF className={classes.muiIcon}/>
              <FontAwesomeIcon icon={faFacebook}/>
              </li>
            <li><AiFillInstagram className={classes.insta}/>
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
            </li>
            <li><BsWhatsapp/></li>
            <li><AiOutlineGoogle/></li>
           </ul>
          </div>
          <div className="col-2  nav_list2">
           <ul>
            <li><AiFillHeart className={classes.muiIcons}/></li>
            <li><FaBell className={classes.muiIcons}/></li>
            <li><MdOutlineShoppingCart className={classes.muiIcons}/></li>
           </ul>
          </div>
        </div>
        </div>

      </nav>
      <Outlet />
    </>
  )
}
export default Navbar