import React from 'react';
import useStyles from "../../../Style"
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
    const today = new Date(location.state.OrderDate);
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // month is zero-based
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formatted = dd + '/' + mm + '/' + yyyy;
console.log(formatted);
   let pricess = {
    Subtotal:0,
    Delivery :0,
    Taxes:0,
    Total:0,
    Paid:0,
    DueLater:0
   }
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
                            {/* <p className="card_message">Your <b>order ID</b> is <b>#{location.state.OrderId}</b> </p>
                             */}
                        </div>
                       
                        <div className='d-flex justify-content-between align-items-center'>
                        <p className="card_message m-0"> <b>order ID</b> : #{location.state.OrderId} </p>
                        <p className="card_message m-0"> <b>order Date</b> : {formatted} </p>
                        </div>
                        <div className=' '>
                            <div className='border p-3 mb-3'>

                                {
                                    location.state.Product.map((item)=>{
                                        pricess.Subtotal = pricess.Subtotal + item.Price.SalePrice;
                                        pricess.Delivery += 0
                                        pricess.Taxes += 0
                                      
                                        pricess.Paid += 0 
                                        pricess.DueLater += pricess.Subtotal + item.Price.SalePrice


                                    return  <div className="row border-bottom p-3">
                                        <div className="col-2 col-sm-2">
                                        <LazyLoadImage onError={event => {
                                                    event.target.src = "/image/blankImage.jpg"
                                                   
                                                    event.onerror = null
                                                }} className='w-100' src={`${item.Image}`} alt="imag not found" />
                                            {/* <img src={item.Image} alt="" className='w-100' /> */}
                                        </div>
                                        <div className="col-md-9">
                                          <div className='d-flex justify-content-between align-items-center'>  <h4>{item.ProductName}</h4>  <p className="price">$ {item.Price.SalePrice}</p>  </div>
                                            <p><b>Qty</b> : {item.Cart_Quantity}</p>
                                        </div>
                                       </div>
                                    })

                                }
                                <div className='d-flex justify-content-end'>
                                    <div className="order_price_details col-4 ml-auto p-sm-3 mt-3 p-2 border">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Subtotal</span>
                                            <span>${pricess.Subtotal}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Delivery</span>
                                            <span>${pricess.Delivery}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Taxes</span>
                                            <span>${pricess.Delivery}</span>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Total</span>
                                            <span>${pricess.Subtotal}</span>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Paid</span>
                                            <span>${pricess.Delivery}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>Due later</span>
                                            <span>${pricess.Subtotal}</span>
                                        </div>
                                    
                                    </div>
                               </div>
                            </div>
                        
                        </div>
                    
                            <div className="row border ">
                                <div className="col-md-4 p-sm-4 p-2">
                                    <h4>Delivery Address</h4>
                                    <p>{location.state.Address}</p>

                                </div>
                                <div className="col-md-4 p-sm-4 p-2">
                                    <h4>Billing Address</h4>
                                    <p>{location.state.StoreAddress}</p>

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