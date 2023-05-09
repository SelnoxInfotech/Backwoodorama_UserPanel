import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillHeartFill } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import useStyles from "../../../../Style";

const NewProductDetails = () => {
    const classes = useStyles()
    return (
        <div className="container-fluid">
            <div className="row mx-4">
                <div className="col-lg-8 newProductDetailsContainer">
                    <div className="row">
                        <div className="col-12 mt-2 text-end">
                            <BsFillHeartFill />
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-12 newProductDetailsUpperimage_container">
                                    <LazyLoadImage className="newProductDetails_upper_image" src="/image/flower2.webp" />
                                </div>
                                <div className="col-12 newProductDetailsLowerImage_container">
                                  
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-8 newProductdetails_rightSideContent_container">
                            <div className="row">
                                <div className="col-12 newProductDetails_heading">
                                    <h1>Urban Flavours Delivery</h1>
                                </div>
                                <div className="col-12 newProductDetails_paragraph">
                                    <p>By Tribe Tokes</p>
                                </div>
                                <div className="col-12 newProductDetailsButon">
                                    <button className="newProductdetailsButtonss">15% THC</button>
                                    <button className="newProductdetailsButtonss">0.2% CBD</button>
                                    <button className="newProductdetailsButtonss">INDICA</button>


                                </div>
                                <div className="col-12 ">
                                    <p><span><IoMdStar className={classes.disp_star_color} /></span><span className="mx-2">4.5 Rating</span></p>
                                </div>
                                <div className="col-12 ">
                                    <p><span className="newProduct_Weight">weight</span><span className="mx-3 newProd_grms">100gm</span></p>
                                </div>
                                <div className="col-12 ">
                                    <p><span className="newProduct_Weight">Quantity</span><span className="mx-3 newProduct_Weight">1</span></p>
                                </div>
                                <div className="col-12 ">
                                    <p><span className="newProduct_doller_price">$80.00</span><span className="mx-3 newProduct_Gms">Per 1 Z</span></p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default NewProductDetails