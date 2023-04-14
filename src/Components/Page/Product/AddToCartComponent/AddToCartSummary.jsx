import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import { useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"

const AddToCartSummary = ({ SetDeliveryOptionData,abcToggle,SetabcToggle,abc ,Total}) => {
    console.log(Total)
    const classes = useStyles()
    const navigate = useNavigate()
    const [OpenDelivery, SetOpenDelivery] = React.useState(false);
    const [OpenPickup, SetOpenPickup] = React.useState(false)
    // const [DeliveryOptionData, SetDeliveryOptionData] = React.useState([])
    const [InputValues, SetInputValues] = React.useState({
        delivery: "",
        contact: ""
    })
    const InputFieldHandler = (e) => {
        const { name, value } = e.target
        SetInputValues({ ...InputValues, [name]: value })

    }

    const HandlePickupAndDelivery = (e) => {
        console.log(e.currentTarget.id)
        if (e.currentTarget.id === "pickup_btn") {
            // SetDeliveryOptionData([{ address: "Pickup Address Mata mandir" }])
            // return alert("pickup btn")
            SetOpenPickup(true)
            SetOpenDelivery(false)
            // SetabcToggle(false)
        }
        else if (e.currentTarget.id === "delivery_btn") {
            // SetDeliveryOptionData([{ address: " Delivery address Platinum plaza" }])

            SetOpenDelivery(true)
            SetOpenPickup(false)
            // SetabcToggle(true)
            

        }
    }
    const CheckoutProcess = () => {
        navigate("/CheckOutMainPage", {state : { InputValues,abc:true }})
    }
    return (
        <>
            <div className="col-12   p-2 Add_product_cart_right_container_summary">
                <form>
                    <div className="col-12 fontStyle AddProdCartFont_weight">
                        <h5>Order Summary</h5>

                    </div>
                    <div className="col-12 d-flex addToCart_deliver">
                        <div className="col-6">
                            <Box
                                className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                            >
                                <LoadingButton  onClick={HandlePickupAndDelivery} id='delivery_btn' variant="outlined">Delivery</LoadingButton>
                            </Box>
                        </div>
                        <div className="col-6">
                            <Box
                                className={`add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                            >
                                <LoadingButton variant="outlined" id='pickup_btn' onClick={HandlePickupAndDelivery}>Pickup</LoadingButton>
                            </Box>
                        </div>

                    </div>
                    <div className="col-6">
                        {abc && (<div className="col-12 mt-4 ">

                            <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                                <TextField name='delivery' value={InputValues.delivery} onChange={InputFieldHandler} id="outlined-basic" placeholder="Enter Your Delivery" variant="outlined" fullWidth size='small' />
                            </div>
                            <div className="col-lg-12 col-md-8 col-sm-8 addtocart_textfield mt-2">
                                <TextField name='contact' value={InputValues.contact} onChange={InputFieldHandler} id="outlined-basic" placeholder="Enter Your contact" variant="outlined" fullWidth size='small' />
                            </div>
                        </div>)}

                    </div>
                    <div className='col-12 mt-2'>

                        {OpenPickup && (
                            <div className='col-lg-12  pickup_div fontStyle'>
                                <p>Pickup location- 2917 Broadway Astoria, NY 11106</p>

                            </div>
                        )}

                    </div>
                    <div className="col-12 order_summary_flex mt-4">
                        <div className="col-6 add_prod_cart_summary_p">
                            <p>Subtotal</p>
                        </div>
                        <div className="col-2 fontStyle">
                            <p>${Total}</p>
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
                                <p>${Total}</p>
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
                                <LoadingButton variant="outlined" onClick={CheckoutProcess }>Checkout</LoadingButton>

                            </Box>

                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}
export default AddToCartSummary