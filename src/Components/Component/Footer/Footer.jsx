import { BsWhatsapp } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component";
import useStyles from "../../../Style"
const Footer = () => {
    const classes=useStyles()
    const AboutUs = [{ head1: "About us" }, { head: "company" }, { head: "Investor" }, { head: "Help Center" }, { head: "Download App" }]
    const Category = [{ head2: "Category" }, { head: "Flower" }, { head: "CBD" }, { head: "Concentrate" }, { head: "Edible" }]
    const Legal = [{ head3: "Legal" }, { head: "Term 7 conditions" }, { head: "Carrier" }, { head: "Privacy Policy" }]
    const More = [{ head4: "More" }, { head: "Get started" }, { head: "Brand" }, { head: "Add business" }, { head: "Contact us" }]



    return (
        <>
            <div className="container-fluid">
                <div className="row footer_Main_row">
                    <div className="col-12 footer_main_div_display">
                        <div className="col-4 footer_logo_container px-4">
                            <div className="col-12 footer_logo footer_logo_height">
                                <LazyLoadImage className="footer_logo_image" src="/image/logo.webp" alt="image_not found"/>

                            </div>
                            <div className="col-12 footer_logo footer_log_heading_height">
                                <p>Build a modern and creative  website</p>
                            </div>
                            <div className="col-4  footer_logo_icons_height">
                                <div className="col-2">
                                    <BsWhatsapp className={`footer_icons ${classes.footer_icons_color}`}/>
                                </div>
                                <div className="col-2 ">
                                    <FaFacebook className={` footer_icons ${classes.footer_icons_color}`}/>
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
                                        <div className="col-6">
                                            {AboutUs.map((ele, index) => {
                                                return (
                                                    <>
                                                        <div className="col-12 fontStyle footer_heading footer_font_size">
                                                            <p>{ele.head1}</p>

                                                        </div>
                                                        <div className="col-12 Footer_fontStyle footer_font_size footer_heading">

                                                            <p key={index}>{ele.head}</p>
                                                        </div>
                                                    </>

                                                )
                                            })}
                                        </div>
                                        <div className="col-6">
                                            {Category.map((ele, index) => {
                                                return (
                                                    <>
                                                        <div className="col-12  fontStyle footer_font_size footer_heading">

                                                            <p>{ele.head2}</p>
                                                        </div>
                                                        <div className="col-12 Footer_fontStyle footer_font_size footer_heading">
                                                            <p key={index}>{ele.head}</p>

                                                        </div>

                                                    </>

                                                )
                                            })}
                                        </div>

                                    </div>

                                </div>
                                <div className="col-6 footer_content_width_small">
                                    <div className="col-12  footer_inner_container">
                                        <div className="col-6">
                                            {Legal.map((ele, index) => {
                                                return (
                                                    <>
                                                        <div className="col-12 footer_font_size fontStyle footer_heading">
                                                            <p>{ele.head3}</p>

                                                        </div>
                                                        <div className="col-12 Footer_fontStyle footer_font_size footer_heading">
                                                            <p key={index}>{ele.head}</p>

                                                        </div>

                                                    </>

                                                )

                                            })}
                                        </div>
                                        <div className="col-6">
                                            {More.map((ele, index) => {
                                                return (
                                                    <>
                                                        <div className="col-12 footer_font_size fontStyle footer_heading">
                                                            <p>{ele.head4}</p>

                                                        </div>
                                                        <div className="col-12 Footer_fontStyle footer_font_size footer_heading">
                                                            <p key={index}>{ele.head}</p>

                                                        </div>

                                                    </>
                                                )

                                            })}
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