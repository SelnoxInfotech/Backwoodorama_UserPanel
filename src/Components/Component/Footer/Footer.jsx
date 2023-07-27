import { BsWhatsapp } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component";
import useStyles from "../../../Style"
import Axios from "axios"
import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { IoLocationSharp } from "react-icons/io5"
import { CiMobile1 } from "react-icons/ci"
import { HiOutlineMail } from "react-icons/hi"
const Footer = () => {
    const Navigate = useNavigate()
    const classes = useStyles()
    const [Categorys, SetCategorys] = React.useState([])
    React.useEffect(() => {
        Axios.get("https://sweede.app/UserPanel/Get-Categories/", {}).then(Response => {
            SetCategorys(Response.data)

        }).catch(() => {

        })
    }, [])

    const AboutUs = [{ head: "About Us" }, { head: "company" }, { head: "Investor" }, { head: "Help Center" }, { head: "Download App" }]
    const Category = [{ head: "Flower" }, { head: "CBD" }, { head: "Concentrate" }, { head: "Edible" }]
    const Legal = [{ head: "Term & conditions" }, { head: "Carrier" }, { head: "Privacy Policy" }]
    const More = [{ head: "Get started" }, { head: "Brand" }, { head: "Add business" }, { head: "Contact us" }]
    const BottomMenuBar = [{ item: "Term & Condition" }, { item: "Careers" }, { item: "Privacy Policy" }]

    // function Redirect(title) {
    //     if (title === "Brand") {

    //         Navigate("/Brand")
    //     }

    // }

    // function ShowCategoryProduct(id, name) {
    //     Navigate(`/CategoryProduct/${name}`, { state: { id } });
    // }
    return (
        <>
            <div className="container-fluid">
                <div className="row footer_Main_row">
                    <div className="col-12 footer_main_div_display px-0">
                        <div className="w-100 footer_center footer_head_height ">
                            <h1 className="ellipsis footer_heading fontWeight_Seven_Hundred">BACKWOODAROMA</h1>
                        </div>
                        <div className="w-100 footer_center  footer_head_height">
                            <h2 className="footer_sub_heading fontWeight_Four_Hundred">A community connecting cannabis consumer retailers, doctors, and brands since 2008.</h2>
                        </div>
                        <div className="col-xl-4 col-sm-4 footer_logo_container px-4">
                            <div className="col-12 footer_log_center footer_logo footer_logo_height">
                                <LazyLoadImage className="footer_logo_image" src="/image/logo.webp" alt="image_not found" />
                            </div>
                            <div className="col-12 footer_logo footer_log_heading_height footer_log_center">
                                <p>Build a modern and creative  website</p>
                            </div>
                            <div className="col-12   ">
                                <div className="Footer_Left_side_menu w-100 px-0  gap-2">
                                    <IoLocationSharp color="#31B665" size={18} /><span className="footer_middle_icons_text">2917 Broadway Astoria, NY 11106</span>
                                </div>
                                <div className="Footer_Left_side_menu w-100  gap-2">
                                    <CiMobile1 color="#31B665" size={18} /><span className="footer_middle_icons_text">+1 432(182)35</span>
                                </div>
                                <div className="Footer_Left_side_menu w-100  gap-2">
                                    <HiOutlineMail color="#31B665" size={18} /><span className="footer_middle_icons_text">backwoodaroma@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8  col-sm-8 footer_content_container">
                            <div className="col-12  footer_inner_flex">
                                <div className="col-8  footer_content_width_small">
                                    <div className="col-12 footer_inner_container">
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">
                                                <h5 className="footer_menu_heading">About Backwoodaroma</h5>
                                                {AboutUs.map((ele, index) => {
                                                    return (
                                                        <Link to="/" key={index}><li className="footer_li ellipsis">{ele.head}</li></Link>
                                                    )
                                                })}
                                            </ol>
                                        </div>
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">
                                                <h5 className="footer_menu_heading">Category</h5>
                                                {Categorys.map((ele, index) => {
                                                    return (
                                                        <Link to={`/CategoryProduct/${ele.name}`} state={ele.id} >
                                                            <li className="footer_li ellipsis" key={index}>{ele.name}</li>

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

                                                <h5 className="footer_menu_heading">More</h5>
                                                {More.map((ele, index) => {
                                                    return (
                                                        <Link to={`/Brand`}   >
                                                            <li className="footer_li ellipsis" key={index}>{ele.head}</li>
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
                                                <Link>
                                                
                                                <li className="footer_li" key={index}>{val.item}</li>
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
                        <h1 className="footer_headingss">Design by Backwoodaroma 2023</h1>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Footer