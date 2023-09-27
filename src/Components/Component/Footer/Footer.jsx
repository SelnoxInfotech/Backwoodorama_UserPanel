import { BsLinkedin } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component";
import useStyles from "../../../Style"
import Axios from "axios"
import React from "react";
import { Link } from "react-router-dom"
import { IoLocationSharp } from "react-icons/io5"
import { CiMobile1 } from "react-icons/ci"
import { HiOutlineMail } from "react-icons/hi"
import "./Footer.css";
const Footer = () => {
    const classes = useStyles()
    const [Categorys, SetCategorys] = React.useState([])
    React.useEffect(() => {
        Axios.get("https://api.cannabaze.com/UserPanel/Get-Categories/", {}).then(Response => {
            SetCategorys(Response.data)

        }).catch(() => {

        })
    }, [])

    const AboutUs = [{ head: "About Us" }, { head: "Company" }, { head: "Investor" }, { head: "Help Center" }, { head: "Download App" }]


    const More = [{ head: "Get Started" }, { head: "Brand" }, { head: "Add Business" }, { head: "Contact Us" }]
    const BottomMenuBar = [{ item: "Term & Condition" }, { item: "Careers" }, { item: "Privacy Policy" }]
    function sendEmail() 
    {
        window.location = "mailto://xyz@yourapplicationdomain.com";
    }
    return (
        <>
          <footer>
              
                <div className="container px-0">
                    <div className="footer_main_div_display ">
                      
                            <h2 className=" footer_heading">WeedX</h2>
                            <h3 className="footer_sub_heading ">Your Ultimate Cannabis Guide. Discover Dispensaries, Delivery Services, Brands, and Comprehensive Product Information Near You</h3>
                       
                       
                        <div className="row main_content_logo">
                                <div className=" footer_logo_container">
                                    <div className="footerLogo">
                                        <LazyLoadImage className="footer_logo_image" src="https://api.cannabaze.com/image/images/download/media/BlankImage/3.png" alt="image_not found" />
                                    </div>

                                    <div className="contact_info">
                                        <div className="Footer_Left_side_menu">
                                            <IoLocationSharp color="#31B665" size={22} /><span className="footer_middle_icons_text">United States , Canada</span>
                                        </div>
                                        <div className="Footer_Left_side_menu   ">
                                            <a href="tel:+1 (209) 655-0360">  <CiMobile1 color="#31B665" size={22} /><span className="footer_middle_icons_text">+1 (209) 655-0360</span></a>
                                        </div>
                                        <div className="Footer_Left_side_menu ">
                                    
                                            <Link   to={'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=weedxselnox@gmail.com'}>    <HiOutlineMail color="#31B665" size={22} /><span className="footer_middle_icons_text">weedxselnox@gmail.com</span></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer_list">
                                                    <ol className="footer_main_list">
                                                        <p className="footer_menu_heading">About</p>
                                                        {AboutUs.map((ele, index) => {
                                                            return (
                                                                <Link to="/AboutUs" key={index}><li className="footer_li ellipsis">{ele.head}</li></Link>
                                                            )
                                                        })}
                                                    </ol>
                                </div>
                                <div className="footer_list">
                                    <ol className="footer_main_list">
                                        <p className="footer_menu_heading">Category</p>
                                        {Categorys.map((ele, index) => {
                                            return (
                                                <Link to={`/CategoryProduct/${ele.name}`} state={ele.id} key={index}>
                                                    <li className="footer_li ellipsis" >{ele.name}</li>

                                                </Link>
                                            )
                                        })}
                                    </ol>

                                </div>
                                <div className="footer_list">
                                                    <ol className="footer_main_list">

                                                        <p className="footer_menu_heading">More</p>
                                                        {More.map((ele, index) => {
                                                            return (
                                                                <Link to={`/Brand`} key={index}>
                                                                    <li className="footer_li ellipsis" >{ele.head}</li>
                                                                </Link>
                                                            )

                                                        })}
                                                    </ol>
                                </div>
                               
                        </div>
                        <div className="w-100 bottom_white_line">

                        </div>
                        <div className=" row bottom_menu_items_mainCol mt-2">
                            <div className="col-lg-3 col-12"></div>
                            <div className=" col-lg-6  col-sm-9 bottom_menu_items ">
                                <ul className="px-0 row">
                                    {
                                        BottomMenuBar.map((val, index) => {
                                            return (
                                                <Link key={index}>

                                                    <li className="footer_li" >{val.item}</li>
                                                </Link>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-lg-3 col-sm-3 footer_icons_column ">
                                <ol className="px-0">
                                    <li>
                                        <Link to={"https://www.linkedin.com/company/weedx-io/"}></Link>
                                        <BsLinkedin className={`footer_icons ${classes.footer_icons_color}`} />
                                    </li>
                                    <li>
                                    <Link to={"https://www.facebook.com/profile.php?id=61550742531174"}></Link>
                                        <FaFacebook className={` footer_icons ${classes.footer_icons_color}`} />
                                    </li>
                                    <li>
                                    <Link to={"https://www.instagram.com/weedx_io"}></Link>
                                        <FaInstagram className={` footer_icons ${classes.footer_icons_color}`} />
                                    </li>
                                    <li>
                                        <Link to={"https://twitter.com/Weedx_io"}> 
                                            <span className="x_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#31B665" height="1em" viewBox="0 0 500 500"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                                            </span>
                                        </Link>
                                    </li>

                                </ol>
                            </div>

                        </div>




                    </div>
                    <div className=" footer_bootom_headings_container">
                        <p className="copyright_title">Copyright © 2023 weedx.io</p>

                    </div>

                </div>

            
            </footer>
        </>
    )
}
export default Footer
