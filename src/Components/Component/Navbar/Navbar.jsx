import { Outlet, Link, NavLink } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import Button from '@mui/material/Button';
import {FaFacebookF} from "react-icons/fa"
import{AiFillInstagram} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineGoogle} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import {BiBell} from "react-icons/bi"
import {MdOutlineShoppingCart} from "react-icons/md"
import useStyles from "../../../Style"
import Box from '@mui/material/Box';
const Navbar = () => {
  const classes=useStyles()
  return (
    <>
      <nav>

        <div className="container-fluid p-4">

        <div className="row m-4 d-flex ">
          <div className="col-4 ">
            <p>Backwoodaroma</p>
          </div>
          <div className="col-6 ">
            <SearchBar

            />


          </div>
          <div className="col-2 ">
            <div className="nav_btn ">
              <Button className={classes.muiBtn} >Login</Button>
              <Button className={classes.muiBtn} >Signup</Button>
            </div>

          </div>

        </div>
        <div className="row">
          <div className="col-6  nav_list1">
           <ul>
            <li>Dispansires</li>
            <li>Delivery</li>
            <li>Brand</li>
            <li>Product</li>
            <li>Deals</li>
            <li>Learn</li>
            <li>Strain</li>
            <li>More</li>

           </ul>
          </div>
          <div className="col-4 nav_list">
           <ul>
            <li>
              <FaFacebookF className={classes.muiIcon}/>
              </li>
            <li><AiFillInstagram className={classes.insta}/></li>
            <li><BsWhatsapp/></li>
            <li><AiOutlineGoogle/></li>
           </ul>
          </div>
          <div className="col-2  nav_list2">
           <ul>
            <li><AiOutlineHeart/></li>
            <li><BiBell/></li>
            <li><MdOutlineShoppingCart/></li>
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