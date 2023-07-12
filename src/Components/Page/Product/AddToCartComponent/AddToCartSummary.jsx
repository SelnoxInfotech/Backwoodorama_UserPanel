import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"
import Axios from "axios"
import Createcontext from "../../../../Hooks/Context"
import DeliverAutoCompleteAddress from './DeliverAutoCompleteAddress';
const AddToCartSummary = ({ SubmitData, CheckOut_Loading, SetLoading }) => {
    const classes = useStyles()
    const { state } = React.useContext(Createcontext)
    const navigate = useNavigate()
    const location = useLocation();
    const [OpenDelivery, SetOpenDelivery] = React.useState(false);
    const [OpenPickup, SetOpenPickup] = React.useState(false)
    const [InputValues, SetInputValues] = React.useState({
        delivery:"",
        contact:""
    })
    const InputFieldHandler = (e) => {
        const { name, value } = e.target
        SetInputValues({ ...InputValues, [name]: value })
        
    }

    const HandlePickupAndDelivery = (e) => {
        SetOpenPickup(!OpenPickup)
        SetOpenDelivery(false)
        if (e.currentTarget.id === "pickup_btn") {
            SetOpenPickup(!OpenPickup)
            SetOpenDelivery(false)
        }
        else if (e.currentTarget.id === "delivery_btn") {
            SetOpenDelivery(!OpenDelivery)
            SetOpenPickup(false)
        }
    }
    const CheckoutProcess = () => {
        if (location.pathname === "/AddToCart") {

            navigate("/CheckOutMainPage", { state: { InputValues, abc: state.Cart_subTotal } })
        }
        else {
            if (state.DeliveryOption === false) {
                alert("First Fill form ")
            }
            else if (state.DeliveryInformation === false) {
                alert("First Fill form ")
            }
        }
        if (location.pathname === "/CheckOutMainPage") {
            SubmitData()
            // SetLoading(t rue)
        }
    }
    return (
        <>
            <div className="col-12   p-2 Add_product_cart_right_container_summary">
                <form>
                    <div className="col-12 fontStyle AddProdCartFont_weight">
                        <h5>Order Summary</h5>

                    </div>
                    <div className="col-12 d-flex addToCart_deliver">

                           { state.AllProduct[0]?.StoreDelivery &&
                        <div className="col-6">
                             <Box
                             className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                         >
                             <LoadingButton style={{ backgroundColor: OpenDelivery && "#00b96a", color: OpenDelivery && "white" }} onClick={HandlePickupAndDelivery} id='delivery_btn' variant="outlined">Delivery</LoadingButton>
                         </Box>
                        </div>
                           }

                        <div className="col-6">
                        { (state.AllProduct[0]?.StoreCurbsidePickup || state.AllProduct[0]?.StorePickup) &&

                                <Box
                                className={`add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                            >
                                <LoadingButton style={{ backgroundColor: OpenPickup && "#00b96a", color: OpenPickup && "white" }} variant="outlined" id='pickup_btn' onClick={HandlePickupAndDelivery}>
                                    {state.AllProduct[0]?.StoreCurbsidePickup ? 'Curbside Pickup' : "Store Pickup"}

                                </LoadingButton>
                            </Box>
                        }
                        </div>

                    </div>
                    <div className="col-12">
                        {OpenDelivery && (<div className="col-12 mt-4 ">

                            <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                  
                                    <DeliverAutoCompleteAddress></DeliverAutoCompleteAddress>
                            </div>
                            <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                                <TextField name='contact' value={InputValues.contact} onChange={InputFieldHandler} id="outlined-basic" placeholder="Enter Your contact" variant="outlined" fullWidth size='small' />
                            </div>
                        </div>)}

                    </div>
                    <div className='col-12 mt-2'>

                        {OpenPickup && (
                            <div className='col-lg-12  pickup_div fontStyle'>
                                <p>{state.AllProduct[0]?.StoreAddress}</p>

                            </div>
                        )}

                    </div>
                    <div className="col-12 order_summary_flex mt-4">
                        <div className="col-6 add_prod_cart_summary_p">
                            <p>Subtotal</p>
                        </div>
                        <div className="col-2 fontStyle">
                            <p>${state.Cart_subTotal}</p>
                        </div>


                    </div>
                    <div className="col-12 order_summary_flex">
                        <div className="col-6 add_prod_cart_summary_p">
                            <p>Est. excise tax</p>
                        </div>
                        <div className="col-2 fontStyle">
                            <p>$0</p>
                        </div>


                    </div>
                    <div className="col-12 order_summary_flex">
                        <div className="col-6 add_prod_cart_summary_p">
                            <p>State tax</p>
                        </div>
                        <div className="col-2 fontStyle">
                            <p>$0</p>
                        </div>


                    </div>
                    <div className="col-12 order_summary_flex">
                        <div className="col-6 add_prod_cart_summary_p">
                            <p>Delivery fee</p>
                        </div>
                        <div className="col-2 fontStyle">
                            <p>$0</p>
                        </div>


                    </div>
                    <div className="col-12 order_Summary_total_container">

                        <div className="col-12 order_summary_flex">
                            <div className="col-6 fontStyle add_prod_cart_summary_p">
                                <p>Total</p>
                            </div>
                            <div className="col-2 fontStyle">
                                <p>${state.Cart_subTotal}</p>
                            </div>

                        </div>
                        <div className="col-12 add_prod_cart_p">
                            <p>Taxes are Shows</p>

                        </div>
                        <div className="col-6 AddProd_cart_center_btn">
                            <Box
                                className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                            >

                                <LoadingButton variant="outlined"
                                    loading={CheckOut_Loading}
                                    onClick={CheckoutProcess}>Checkout</LoadingButton>

                            </Box>

                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}
export default AddToCartSummary