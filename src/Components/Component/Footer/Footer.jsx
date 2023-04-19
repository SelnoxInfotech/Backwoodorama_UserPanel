import { BsWhatsapp } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component";
import useStyles from "../../../Style"
import { Link } from "react-router-dom"
const Footer = () => {
    const classes = useStyles()
    const AboutUs = [{ head: "company" }, { head: "Investor" }, { head: "Help Center" }, { head: "Download App" }]
    const Category = [{ head: "Flower" }, { head: "CBD" }, { head: "Concentrate" }, { head: "Edible" }]
    const Legal = [{ head: "Term 7 conditions" }, { head: "Carrier" }, { head: "Privacy Policy" }]
    const More = [{ head: "Get started" }, { head: "Brand" }, { head: "Add business" }, { head: "Contact us" }]



    return (
        <>
            <div className="container-fluid">
                <div className="row footer_Main_row">
                    <div className="col-12 footer_main_div_display">
                        <div className="col-4 footer_logo_container">
                            <div className="col-12 footer_logo footer_logo_height">
                                <LazyLoadImage className="footer_logo_image" src="/image/logo.webp" alt="image_not found" />

                            </div>
                            <div className="col-12 footer_logo footer_log_heading_height">
                                <p>Build a modern and creative  website</p>
                            </div>
                            <div className="col-4  footer_logo_icons_height">
                                <div className="col-2">
                                    <BsWhatsapp className={`footer_icons ${classes.footer_icons_color}`} />
                                </div>
                                <div className="col-2 ">
                                    <FaFacebook className={` footer_icons ${classes.footer_icons_color}`} />
                                </div>
                                <div className="col-2">
                                    <FaInstagram className={` footer_icons ${classes.footer_icons_color}`} />
                                </div>
                            </div>
                        </div>
                        <div className="col-8 footer_content_container">
                            <div className="col-12  footer_inner_flex">
                                <div className="col-6 footer_content_width_small">
                                    <div className="col-12 footer_inner_container">
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">
                                                <h5 className="fontStyle">About us</h5>
                                                {AboutUs.map((ele, index) => {
                                                    return (


                                                        <Link to="/" key={index}><li>{ele.head}</li></Link>


                                                    )
                                                })}
                                            </ol>
                                        </div>
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">
                                                <h5 className="fontStyle">Category</h5>
                                                {Category.map((ele, index) => {
                                                    return (

                                                        <Link to="/" > <li key={index}>{ele.head}</li></Link>



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

                                                        <Link to="/" key={index}> <li>{ele.head}</li></Link>

                                                    )

                                                })}
                                            </ol>
                                        </div>
                                        <div className="col-6 footer_list">
                                            <ol className="footer_list_gap">

                                                <h5 className="fontStyle">More</h5>
                                                {More.map((ele, index) => {
                                                    return (
                                                        <>
                                                        
                                                                <Link to="/" key={index}> <li key="index">{ele.head}</li></Link>

                                                       

                                                        </>
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