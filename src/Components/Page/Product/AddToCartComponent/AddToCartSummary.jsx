import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import { Link } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"

const AddToCartSummary = () => {
    const [Total, SetTotal] = React.useState([0])
    const [OpenDelivery, SetOpenDelivery] = React.useState(false);

    const classes = useStyles()
    const HandleDelivery = () => {

        SetOpenDelivery(!OpenDelivery)
    }
    return (
        <>
            <div className="col-12   p-2 Add_product_cart_right_container_summary ">
                <div className="col-12 fontStyle AddProdCartFont_weight">
                    <h5>Order Summary</h5>

                </div>
                <div className="col-12 d-flex addToCart_deliver">
                    <div className="col-6">
                        <Box
                            className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                        >
                            <LoadingButton onClick={HandleDelivery} variant="outlined">Delivery</LoadingButton>
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box
                            className={`add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                        >
                            <LoadingButton variant="outlined">Pickup</LoadingButton>
                        </Box>
                    </div>

                </div>
                <div className="col-12">
                    {OpenDelivery && (<div className="col-12 mt-4 ">

                        <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                            <TextField id="outlined-basic" placeholder="Enter Your Delivery" variant="outlined" fullWidth size='small' />
                        </div>
                        <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                            <TextField id="outlined-basic" placeholder="Enter Your contact" variant="outlined" fullWidth size='small' />
                        </div>
                    </div>)}

                </div>
                <div className="col-12 order_summary_flex mt-4">
                    <div className="col-6 add_prod_cart_summary_p">
                        <p>Subtotal</p>
                    </div>
                    <div className="col-2 fontStyle">
                        <p>{Total}</p>
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
                            <p>{Total}</p>
                        </div>

                    </div>
                    <div className="col-12 add_prod_cart_p">
                        <p>Taxes are Shows</p>

                    </div>
                    <div className="col-6 AddProd_cart_center_btn">
                        <Box
                            className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                        >
                            {/* <Link to="/DeliveryOption"><LoadingButton variant="outlined">Checkout</LoadingButton></Link> */}
                            <Link to="/CheckOutMainPage"><LoadingButton variant="outlined">Checkout</LoadingButton></Link>

                        </Box>

                    </div>
                </div>


            </div>
        </>
    )
}
export default AddToCartSummary