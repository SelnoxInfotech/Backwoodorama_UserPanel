import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"
import Axios from "axios"
import Createcontext from "../../../../Hooks/Context"
const AddToCartSummary = ({ SubmitData , CheckOut_Loading ,SetLoading}) => {
    const classes = useStyles()
    const { state} = React.useContext(Createcontext)
    const navigate = useNavigate()
    const location = useLocation();
    const [OpenDelivery, SetOpenDelivery] = React.useState(false);
    const [OpenPickup, SetOpenPickup] = React.useState(false)
    const [PickupAddress, SetPickupAddress] = React.useState("")
    const [InputValues, SetInputValues] = React.useState({
        delivery: "",
        contact: ""
    })
    const InputFieldHandler = (e) => {
        const { name, value } = e.target
        SetInputValues({ ...InputValues, [name]: value })

    }

    const HandlePickupAndDelivery = (e) => {
        if (e.currentTarget.id === "pickup_btn") {
            SetOpenPickup(true)
            SetOpenDelivery(false)
            const items = localStorage.getItem('items')
            Axios(`http://backend.sweede.net/UserPanel/Get-DispensaryByid/${JSON.parse(items)[0].Store_id}`, {


            }).then(response => {
                SetPickupAddress(response.data[0].Store_Address)
            }).catch(
                function (error) {
                })

        }
        else if (e.currentTarget.id === "delivery_btn") {

            SetOpenDelivery(true)
            SetOpenPickup(false)
            // SetabcToggle(true)


        }
    }
    const CheckoutProcess = () => {
        if(location.pathname === "/AddToCart"){

            navigate("/CheckOutMainPage", { state: { InputValues, abc:state.Cart_subTotal} })
        }
        else{
          if (state.DeliveryOption === false) {
            alert("First Fill form ")
          }
         else if (state.DeliveryInformation === false) {
            alert("First Fill form ")
          }
        }
        if(location.pathname === "/CheckOutMainPage"){
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
                        <div className="col-6">
                            <Box
                                className={` add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}

                            >
                                <LoadingButton onClick={HandlePickupAndDelivery} id='delivery_btn' variant="outlined">Delivery</LoadingButton>
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
                    <div className="col-md-6 col-12">
                        {OpenDelivery && (<div className="col-12 mt-4 ">

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
                                <p>{PickupAddress}</p>

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