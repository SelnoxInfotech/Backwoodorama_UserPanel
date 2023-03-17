import React from "react"
import { BsGrid } from "react-icons/bs"
import { FaShoppingCart } from "react-icons/fa"
import { IoAnalyticsOutline } from "react-icons/io5"
import { MdOutlineGamepad } from "react-icons/md"
import { MdLocalActivity } from "react-icons/md"
import { MdTurnedIn } from "react-icons/md"
import { MdMarkunread } from "react-icons/md"
import { AiTwotoneSetting } from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"

const SideNavbar = ({ closeNav }) => {


    return (
        <>
            <div id="mySidebar" className="sidebar " >
                <p className="closebtn" onClick={closeNav} >×</p>
                <div className="col-12 Slider_content_center " >
                    <p>Dispansires</p>
                </div>
               <div className="col-10 ">
               <hr></hr>
               </div>
                <div className="col-12 Slider_content_center " >
                    <p>Deliveries</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Brand</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Product</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Deals</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Learn</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Dispansires</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>More</p>
                </div>
            </div>
        </>
    )
}
export default SideNavbar