import React from 'react';
import useStyles from "../../../Style"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Createcontext from "../../../Hooks/Context"
import Cookies from 'universal-cookie';
import { FaRegPaperPlane } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

import Axios from 'axios';
const PlaceOrder = () => {
    const location = useLocation();
    const classes = useStyles()
    const { state, dispatch } = React.useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    const [Order, SetOrder] = React.useState([])
    const today = new Date(location.state.OrderDate);
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // month is zero-based
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formatted = dd + '/' + mm + '/' + yyyy;

    let pricess = {
        Subtotal: 0,
        Delivery: 0,
        Taxes: 0,
        Total: 0,
        Paid: 0,
        discount:0,
        DueLater: 0
    }
    React.useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };

        Axios.get(`https://api.cannabaze.com/UserPanel/Get-Order/`,
            config,
        )
            .then((res) => {
                SetOrder(res.data.reverse()[0])
                dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })

            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    console.log(Boolean(state.CoupounAmount) , location)
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row center p-2">
                    <div className="col-12 col-lg-8 col-sm-10">
                        <div className="order_conform_card">
                            <span><FaRegPaperPlane className='order_conform_card_icons' /></span>
                            <h3 className="card_title">Thank You!</h3>
                            <p className="card_message">You'll receive a confirmation email soon</p>
                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <p className="card_message m-0"> <b>Order ID</b> : #{location.state.OrderId} </p>
                            <p className="card_message m-0"> <b>Order Date</b> : {formatted} </p>
                        </div>
                        <div className='row '>
                            <div className='border p-3 mb-3'>

                                {
                                    location.state.Product.map((item) => {
                                        pricess.Subtotal += item.TotalPrice
                                        pricess.Delivery += 0
                                        pricess.Taxes += 0
                                        pricess.Paid += 0
                                        pricess.discount += item.DiscountedAmount
                                        pricess.DueLater += pricess.Subtotal + item.Price.SalePrice
                                        
                                        return (<div className="place_order_product_cart  row border-bottom py-3">
                                            <div className="col-sm-2 col-3 col-sm-2">
                                                <LazyLoadImage onError={event => {
                                                    event.target.src = "/image/blankImage.jpg"

                                                    event.onerror = null
                                                }} className='w-100' src={`${item.Image}`} alt="imag not found" />
                                                {/* <img src={item.Image} alt="" className='w-100' /> */}
                                            </div>
                                            <div className="col-sm-10 col-9">
                                                <div className='d-flex justify-content-between align-items-start'>  <h4 className='w-75 text-wrap text-break'>{item.ProductName}</h4>  <p className="price">$ {item.TotalPrice}</p>  </div>
                                                <p><b>Qty</b> : {item.Cart_Quantity}</p>
                                            </div>
                                        </div>)
                                    })

                                },
                                      {
                            // console.log( pricess.Subtotal - (pricess.Subtotal-pricess.discount))
                        }
                                <div className='d-flex justify-content-end'>
                                    <div className="order_price_details col-md-4 col-12 ml-auto p-sm-3 mt-3 p-2 border">
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
                                            <div style={{ display: "grid" }}>
                                                <span>Total</span>
                                              {Boolean(pricess.discount)&&  <span>Discount Amount</span>
}
                                            </div >
                                            <div style={{ display: "grid" }}>
                                                {Boolean(pricess.discount)?  <del>${pricess.Subtotal}</del> :   <span>${pricess.Subtotal}</span>}
                                            {Boolean(pricess.discount)&& <span>${(pricess.Subtotal-pricess.discount) }</span>}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row border place-order_address">

                            <div className="col-md-4 p-sm-4 p-2">
                                <h4>Seller Info</h4>
                                <p>Name : {location.state.Product[0].StoreName}</p>
                                <p>Address : {location.state.Product[0].StoreAddress}</p>

                            </div>
                            <div className="col-md-4 p-sm-4 p-2">
                                <h4>{location.state.orterbtn === "pickup_btn" ? "Curbside Pickup" : "Delivery "} Address</h4>
                                <p>{location.state.Address}</p>
                            </div>
                            <div className="col-md-4 p-sm-4 p-2">
                                <h4>Payment Method</h4>
                                <p>Offline</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center py-4'>
                            <Link to={`/MyOrderProductDetail/${location?.state?.OrderId}`}>
                                <button className='trackorderbtn'>Track Order</button>
                            </Link>
                        </div>
                    </div>

                </div>


            </div>
        </React.Fragment>
    )
}
export default PlaceOrder