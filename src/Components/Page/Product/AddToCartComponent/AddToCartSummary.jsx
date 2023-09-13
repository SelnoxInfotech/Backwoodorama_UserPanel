import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"
import Createcontext from "../../../../Hooks/Context"
import DeliverAutoCompleteAddress from './DeliverAutoCompleteAddress';
// import { useForm, FormProvider, Controller } from "react-hook-form";
import PromoCode from '../Promocode/Promocode';
const AddToCartSummary = ({ SubmitData, CheckOut_Loading, SetLoading }) => {
    const classes = useStyles()
    // const method = useForm()
    const { state, dispatch } = React.useContext(Createcontext)
    const navigate = useNavigate()
    const location = useLocation();
    const [OpenDelivery, SetOpenDelivery] = React.useState(false);
    const [OpenPickup, SetOpenPickup] = React.useState(false)
    const [InputValues, SetInputValues] = React.useState({
        delivery: "",
        contact: ""
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
            dispatch({ type: 'selectDeliveryoptions', selectDeliveryoptions: "pickup_btn" })
        }
        else if (e.currentTarget.id === "delivery_btn") {
            SetOpenDelivery(!OpenDelivery)
            SetOpenPickup(false)
            dispatch({ type: 'selectDeliveryoptions', selectDeliveryoptions: "delivery_btn" })
        }
    }
    const CheckoutProcess = (event, j) => {
        if (state.selectDeliveryoptions === "delivery_btn") {
            if (state.DeliveryAddress === "") {
                alert("Select Delivery address")
            }
            else {
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
                    // SetLoading(true)DeliveryAddress
                }
            }
        }
        else {
            if (state.selectDeliveryoptions === "pickup_btn") {
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
                    // SetLoading(true)DeliveryAddress
                }
            }
            else {
                alert("Select Delivery address")
            }
        }
    }


    React.useEffect(() => {
        if (location.pathname === "/AddToCart") {


            if (state.selectDeliveryoptions === "pickup_btn") {
                SetOpenDelivery(false)
                SetOpenPickup(true)
            }
            else if (state.selectDeliveryoptions === "delivery_btn") {
                SetOpenDelivery(true)
                SetOpenPickup(false)
            }
        }
    }, [state.selectDeliveryoptions])
    function ChnageDeliveryAddress() {
        navigate("/AddToCart")
    }




    return (
        <React.Fragment>
            <div className="col-12   p-2 Add_product_cart_right_container_summary">

                <div className="col-12 fontStyle AddProdCartFont_weight">
                    <h5>Order Summary</h5>

                </div>
                {location.pathname !== "/CheckOutMainPage" ?
                    <div className="col-12 d-flex addToCart_deliver">

                        {state.AllProduct[0]?.StoreDelivery &&
                            <div className="col-6">
                                <Box
                                    className={`px-1 add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                                >
                                    <LoadingButton style={{ backgroundColor: OpenDelivery && "#00b96a", color: OpenDelivery && "white" }} onClick={HandlePickupAndDelivery} id='delivery_btn' variant="outlined">Delivery</LoadingButton>
                                </Box>
                            </div>
                        }

                        <div className="col-6">
                            {(state.AllProduct[0]?.StoreCurbsidePickup || state.AllProduct[0]?.StorePickup) &&

                                <Box
                                    className={`px-1 add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                                >
                                    <LoadingButton style={{ backgroundColor: OpenPickup && "#00b96a", color: OpenPickup && "white" }} variant="outlined" id='pickup_btn' onClick={HandlePickupAndDelivery}>
                                        {state.AllProduct[0]?.StoreCurbsidePickup ? 'Curbside Pickup' : "Store Pickup"}

                                    </LoadingButton>
                                </Box>
                            }
                        </div>

                    </div>
                    : <Box
                        className={`add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                    >
                        <LoadingButton style={{ backgroundColor: "#00b96a", color: "white" }} variant="outlined" id='pickup_btn' onClick={ChnageDeliveryAddress}>
                            Change Address

                        </LoadingButton>
                    </Box>
                }
                <div className="col-12">
                    {OpenDelivery && (<div className="col-12 mt-4 ">

                        <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                            <label htmlFor="name-field">
                                MY STREET ADDRESS
                            </label>
                            <DeliverAutoCompleteAddress OpenDelivery={OpenDelivery}></DeliverAutoCompleteAddress>
                        </div>
                        <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                            <label htmlFor="name-field">
                                APARTMENT OR SUITE NUMBER
                                <TextField className={classes.textFieldFocusBorderColor} name='contact' value={InputValues.contact} onChange={InputFieldHandler} id="outlined-basic" placeholder="APARTMENT OR SUITE NUMBER" variant="outlined" fullWidth size='small' />
                            </label>
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
                    <PromoCode />

                </div>
                <div className="col-6 AddProd_cart_center_btn">
                    {location.pathname === "/AddToCart"  ?(OpenDelivery || OpenPickup) &&
                        <Box
                            className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                        >

                            <LoadingButton variant="outlined"
                                loading={CheckOut_Loading}
                                onClick={(e) => {
                                    CheckoutProcess(e)

                                }}

                                type='submit'
                            >Checkout</LoadingButton>

                        </Box> : <Box
                            className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                        >

                        <LoadingButton variant="outlined"
                            loading={CheckOut_Loading}
                            onClick={(e) => {
                                CheckoutProcess(e)

                            }}

                            type='submit'
                        >Checkout</LoadingButton>

                    </Box>

                    }

                </div>


            </div>
        </React.Fragment>
    )
}
export default AddToCartSummary