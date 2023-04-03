import React from "react";
import { AiOutlinePlus } from "react-icons/ai"
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"

const AddToCart = () => {
    const classes = useStyles()

     React.useEffect(()=>{
      const item =    localStorage.getItem('item')
      console.log(item)
     },[])


    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="col-12">
                        <p>Your Items</p>
                    </div>
                    <div className="col-12  AddProductCartContainer">

                        <div className="col-10  AddProductCartContainerinner">
                            {/* {AddProduct_CartArr.map((ele, index) => {
                                return (
                                    <div className="col-12 border Add_product_cart_left_container_item" key={index}>

                                        <div className="col-12  Add_prod_item_image">

                                            <div className="col-1 Add_prod_item_image_cont">
                                                <img src="./image/wee_img1.jpeg" alt="imag not found" />
                                            </div>
                                            <div className="col-8 Add_prod_content_cont p-2">
                                                <div className="col-12 fontStyle  add_prod_para_font">
                                                    <h5>{ele.head} </h5>

                                                </div>

                                                <div className="col-12 fontStyle  add_prod_para_margin add_prod_cart_p">
                                                    <p>by careleaf</p>

                                                </div>
                                                <div className="col-12 fontStyle  add_prod_para_margin d-flex">
                                                    <span className="add_prod_span_amount fontStyle">$64</span>

                                                </div>
                                                <div className="col-12 add_prod_btn_amount">
                                                    <div className="col-2 border Add_prod_sub_minus_cont d-flex">
                                                        <div className="col-4">
                                                            <button className="add_prod_cart_btn"><GrFormSubtract  /></button>

                                                        </div>
                                                        <div className="col-2 addprod_quant">
                                                            <p>1</p>
                                                        </div>
                                                        <div className="col-4">
                                                            <button className="add_prod_cart_btn"><AiOutlinePlus  /></button>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>
                                            <div className="col-3 ">
                                                <div className="col-10 fontStyle Add_prod_cart_amount  mt-4 ">
                                                    <RiDeleteBin6Line />
                                                </div>

                                                <div className="col-10 fontStyle Add_prod_cart_amount_right_side   d-flex">
                                                    <p>Amount</p>  <span className="add_prod_span_amount fontStyle">$64</span>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })} */}
                        </div>
                        <div className="col-2 border  p-2 Add_product_cart_right_container_summary ">
                            <div className="col-12 fontStyle AddProdCartFont_weight">
                            <h5>Order Summmary</h5>

                            </div>
                            <div className="col-12 order_summary_flex">
                                <div className="col-6 add_prod_cart_summary_p">
                                    <p>Subtotal</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>$233</p>
                                </div>


                            </div>
                            <div className="col-12 order_summary_flex">
                                <div className="col-6 add_prod_cart_summary_p">
                                    <p>Est. excise tax</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>$233</p>
                                </div>


                            </div>
                            <div className="col-12 order_summary_flex">
                                <div className="col-6 add_prod_cart_summary_p">
                                    <p>State tax</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>$233</p>
                                </div>


                            </div>
                            <div className="col-12 order_summary_flex">
                                <div className="col-6 add_prod_cart_summary_p">
                                    <p>Delivery free</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>free</p>
                                </div>


                            </div>
                            <div className="col-12 order_Summary_total_container">

                            <div className="col-12 order_summary_flex">
                                <div className="col-6 fontStyle add_prod_cart_summary_p">
                                    <p>Total</p>
                                </div>
                                <div className="col-2 fontStyle">
                                    <p>$1200</p>
                                </div>

                            </div>
                            <div className="col-12 add_prod_cart_p">
                            <p>Taxes are Shows</p>

                            </div>
                            <div className="col-12 AddProd_cart_center_btn">
                            <Box
                                className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                            >
                                <LoadingButton variant="outlined">Checkout</LoadingButton>
                            </Box>

                            </div>
                            </div>


                        </div>

                    </div>



                </div>

            </div>

        </div>
    )
}
export default AddToCart