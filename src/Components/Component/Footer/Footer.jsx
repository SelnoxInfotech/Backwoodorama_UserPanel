import { BsWhatsapp } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component";
import useStyles from "../../../Style"
import Axios from "axios"
import React from "react";
import { Link, useNavigate } from "react-router-dom"
const Footer = () => {
    const Navigate = useNavigate()
    const classes = useStyles()
    const [Categorys,SetCategorys]=React.useState([])
    React.useEffect(()=>{
        Axios.get("https://sweede.app/UserPanel/Get-Categories/",{}).then(Response => {
            console.log(Response)
            SetCategorys(Response.data)

        }).catch(()=>{

        })
    },[])
    const AboutUs = [{ head: "company" }, { head: "Investor" }, { head: "Help Center" }, { head: "Download App" }]
    const Category = [{ head: "Flower" }, { head: "CBD" }, { head: "Concentrate" }, { head: "Edible" }]
    const Legal = [{ head: "Term 7 conditions" }, { head: "Carrier" }, { head: "Privacy Policy" }]
    const More = [{ head: "Get started" }, { head: "Brand" }, { head: "Add business" }, { head: "Contact us" }]


    function Redirect(title) {
        if (title === "Brand") {

            Navigate("/Brand")
        }

    }



    return (
        <>
            <div className="container-fluid">
                <div className="row footer_Main_row">
                    <div className="col-12 footer_main_div_display">
                        <div className="col-xl-3 col-sm-4 footer_logo_container">
                            <div className="col-12 footer_log_center footer_logo footer_logo_height">
                                <LazyLoadImage className="footer_logo_image" src="/image/logo.webp" alt="image_not found" />
                            </div>
                            <div className="col-12 footer_logo footer_log_heading_height footer_log_center">
                                <p>Build a modern and creative  website</p>
                            </div>
                            <div className="col-12   footer_logo_icons_height">
                            <BsWhatsapp className={`footer_icons ${classes.footer_icons_color}`} />
                            <FaFacebook className={` footer_icons ${classes.footer_icons_color}`} />
                            <FaInstagram className={` footer_icons ${classes.footer_icons_color}`} />
                            </div>
                        </div>
                        <div className="col-xl-7 col-sm-8 footer_content_container">
                            <div className="col-12  footer_inner_flex">
                                <div className="col-6 footer_content_width_small">
                                    <div className="col-12 footer_inner_container">
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">
                                                <h5 className="fontStyle">About us</h5>
                                                {AboutUs.map((ele, index) => {
                                                    return (
                                                        <Link to="/" key={index}><li className="footer_li ellipsis">{ele.head}</li></Link>
                                                    )
                                                })}
                                            </ol>
                                        </div>
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">
                                                <h5 className="fontStyle">Category</h5>
                                                {Category.map((ele, index) => {
                                                    return (
                                                        <Link to="/" > <li className="footer_li ellipsis" key={index}>{ele.head}</li></Link>
                                                    )
                                                })}
                                            </ol>

                                        </div>

                                    </div>

                                </div>
                                <div className="col-6 footer_content_width_small">
                                    <div className="col-12  footer_inner_container">
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap ">
                                                <h5 className="fontStyle">Legal</h5>

                                                {Legal.map((ele, index) => {
                                                    return (
                                                        <Link to="/" key={index}> <li className="footer_li ellipsis">{ele.head}</li></Link>
                                                    )

                                                })}
                                            </ol>
                                        </div>
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">

                                                <h5 className="fontStyle">More</h5>
                                                {More.map((ele, index) => {
                                                    return (
                                                        <li className="footer_li ellipsis" key={index} onClick={() => Redirect(ele.head)}>{ele.head}</li>
                                                    )

                                                })}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}
export default Footer