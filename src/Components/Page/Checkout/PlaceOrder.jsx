import React from 'react';
import useStyles from "../../../Style"
import Createcontext from "../../../Hooks/Context"
import Cookies from 'universal-cookie';
import { FaRegPaperPlane } from "react-icons/fa";
import {useLocation} from 'react-router-dom';

import Axios from 'axios';
const PlaceOrder = () => {
    const location = useLocation();
console.log(location ,'location')
    const classes = useStyles()
    const { state  , dispatch} = React.useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [Order , SetOrder] =React.useState([])
    console.log(state  , 'my state')
    React.useEffect( ()=>{
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
      
        Axios.get(`https://api.cannabaze.com/UserPanel/Get-Order/`,
            config,

        )
            .then((res) => {
                SetOrder(res.data.reverse()[0])
                dispatch({ type: 'ApiProduct' , ApiProduct:!state.ApiProduct })
               
            })
            .catch((error) => {
                console.error(error)    
            })
    },[])

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row center p-2">
                    <div className="col-12 col-lg-8 col-sm-10">
                        <div className="order_conform_card">
                            <span><FaRegPaperPlane className='order_conform_card_icons'/></span>
                            <h3 className="card_title">Thank You!</h3>
                            <p className="card_message">You'll receive a confirmation email soon</p>
                            <p className="card_message">Your <b>order ID</b> is <b>#{Order.OrderId}</b> </p>
                            <p className="card_message"></p>

                        </div>
                       

                     
                        <div className='row mt-4 p-2'>
                            <div className='col-7 border padding-4'>
                              <div className="row">
                                <div className="col-md-3">
                                    <img src="/image/cat_pro_7.jpg" alt="" className='w-100' />
                                </div>
                                <div className="col-md-9">
                                    <h4>100MG Pineapple Melon </h4>
                                    <p><b>Qty</b> : 2</p>
                                </div>
                              </div>
                            </div>
                            <div className='col-5 '>
                               <div className="order_price_details p-sm-3 p-2 border">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Subtotal</span>
                                    <span>$60.00</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Delivery</span>
                                    <span>$20.00</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Taxes</span>
                                    <span>$0.00</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Total</span>
                                    <span>$80.00</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Paid</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span>Due later</span>
                                    <span>$80.00</span>
                                </div>
                              
                               </div>
                            </div>
                        </div>
                        <div className="row border ">
                            <div className="col-md-4 p-sm-4 p-2">
                                <h4>Delivery Address</h4>
                                <p>123 William St, New York, NY 10038, USA</p>

                            </div>
                            <div className="col-md-4 p-sm-4 p-2">
                                <h4>Billing Address</h4>
                                <p>123 William St, New York, NY 10038, USA</p>

                            </div>
                            <div className="col-md-4 p-sm-4 p-2">
                               <h4>Payment Method</h4>
                               <p>Offline</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </React.Fragment>
    )
}
export default PlaceOrder