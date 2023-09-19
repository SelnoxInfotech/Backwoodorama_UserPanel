import { BsWhatsapp } from "react-icons/bs"
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
import Button from '@mui/material/Button';
import Mailto from 'reactv16-mailto';
const Footer = () => {
    const classes = useStyles()
    const [Categorys, SetCategorys] = React.useState([])
    React.useEffect(() => {
        Axios.get("https://sweede.app/UserPanel/Get-Categories/", {}).then(Response => {
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
            <div className="container-fluid">
                <div className="row footer_Main_row">
                    <div className="col-12 footer_main_div_display px-0">
                        <div className="w-100 footer_center footer_head_height ">
                            <h2 className="ellipsis footer_heading fontWeight_Seven_Hundred">WeedX</h2>
                        </div>
                        <div className="w-100 footer_center  footer_head_height">
                            <h3 className="footer_sub_heading fontWeight_Four_Hundred">A community connecting cannabis consumer retailers, doctors, and brands since 2008.</h3>
                        </div>
                        <div className="col-xl-4 col-sm-4 footer_logo_container px-4">
                            <div className="col-12 footer_log_center footer_logo footer_logo_height">
                                <LazyLoadImage className="footer_logo_image" src="https://sweede.app/image/images/download/media/BlankImage/3.png" alt="image_not found" />
                            </div>

                            <div className="col-12   ">
                                <div className="Footer_Left_side_menu w-100 px-0  gap-2">
                                    <IoLocationSharp color="#31B665" size={18} /><span className="footer_middle_icons_text">United States , Canada</span>
                                </div>
                                <div className="Footer_Left_side_menu w-100  gap-2">
                                    <a href="tel:+1 (209) 655-0360">  <CiMobile1 color="#31B665" size={18} /><span className="footer_middle_icons_text">+1 (209) 655-0360</span></a>
                                </div>
                                <div className="Footer_Left_side_menu w-100  gap-2">
                              
                                    <Link   to={'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=weedxselnox@gmail.com'}>    <HiOutlineMail color="#31B665" size={18} /><span className="footer_middle_icons_text">weedxselnox@gmail.com</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8  col-sm-8 footer_content_container">
                            <div className="col-12  footer_inner_flex">
                                <div className="col-8  footer_content_width_small">
                                    <div className="col-12 footer_inner_container">
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">
                                                <p className="footer_menu_heading">About WeedX</p>
                                                {AboutUs.map((ele, index) => {
                                                    return (
                                                        <Link to="/AboutUs" key={index}><li className="footer_li ellipsis">{ele.head}</li></Link>
                                                    )
                                                })}
                                            </ol>
                                        </div>
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">
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

                                    </div>

                                </div>
                                <div className="col-4 footer_content_width_small">
                                    <div className="col-12  footer_inner_container">

                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">

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
                                </div>
                            </div>
                        </div>
                        <div className="w-100 bottom_white_line">

                        </div>
                        <div className="col-12 bottom_menu_items_mainCol mt-2">

                            <div className="offset-lg-3 col-lg-6  col-12 bottom_menu_items px-4">
                                <ol className="px-0">
                                    {
                                        BottomMenuBar.map((val, index) => {
                                            return (
                                                <Link key={index}>

                                                    <li className="footer_li" >{val.item}</li>
                                                </Link>

                                            )
                                        })
                                    }
                                </ol>
                            </div>
                            <div className="col-lg-3 col-12 footer_icons_column px-4">
                                <ol className="px-0">
                                    <li>
                                        <BsWhatsapp className={`footer_icons ${classes.footer_icons_color}`} />
                                    </li>
                                    <li>
                                        <FaFacebook className={` footer_icons ${classes.footer_icons_color}`} />
                                    </li>
                                    <li>
                                        <FaInstagram className={` footer_icons ${classes.footer_icons_color}`} />
                                    </li>

                                </ol>
                            </div>

                        </div>




                    </div>
                    <div className="col-12  footer_bootom_headings_container">
                        <p className="footer_headingss">Copyright © 2023 weedx.io</p>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Footer
