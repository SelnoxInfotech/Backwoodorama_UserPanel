import React from 'react';
import useStyles from "../../../Style"
import Createcontext from "../../../Hooks/Context"
import Cookies from 'universal-cookie';
import Axios from 'axios';
const PlaceOrder = () => {
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
                    <div className="col-12 col-lg-8 col-md-10 col-sm-10 ThanYouOrder_Container_height">
                        <div className="order_conform_card">
                            <h3 className="card_title">Thank You!</h3>
                            <p className="card_message">You'll receive a confirmation email soon</p>
                            <p className="card_message">Your order ID is {Order.OrderId} </p>
                            <p className="card_message"></p>
                            {/* <div className='col-12 top_container '>
                                <div className='row'>
                                    <div className="col-12  ">
                                        <h1 className='ThankYouOrder_paragraph'>Thank you {state?.Profile.username}</h1>

                                    </div>
                                    <div className="col-12">
                                        <p>You'll receive a confirmation email soon</p>

                                    </div>
                                    <div className="col-12">
                                        <p> Order ID # {Order.OrderId}</p>
                                    </div>
                                </div>
                            // </div> */}
                        </div>
                        <div className='row'>
                            <div className='col-12 important_message_div_height'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <p>Important message for your order</p>
                                    </div>
                                    <div className='col-12'>
                                        <p>Due to social distancing guidlines only the patient in
                                            the dispansary</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                     
                        <div className='row mt-4 p-2'>
                            <div className='col-12 order_details'>
                                <div className='row'>
                                    <div className='col-12 order_detail_paragraph1'>
                                        <p>View order details</p>

                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-6 col-lg-2 col-md-2 col-sm-6 order_detail_paragraph fontStyle'>
                                        <p>Sub Total</p>
                                    </div>
                                    <div className='col-6 col-lg-2 col-md-2 col-sm-6 order_detail_paragraph fontStyle'>
                                        <p>$ {Order.subtotal}</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </React.Fragment>
    )
}
export default PlaceOrder