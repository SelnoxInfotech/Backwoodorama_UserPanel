import React from 'react';
import { Stepper, Step } from 'react-form-stepper';
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

    React.useEffect( ()=>{
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
      
        Axios.get(`http://backend.sweede.net/UserPanel/Get-Order/`,
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
        <>
            <div className="container-fluid">
                <div className="row center p-2">
                    <div className="col-12 col-lg-8 col-md-10 col-sm-10 ThanYouOrder_Container_height">
                        <div className="row p-2">
                            <div className='col-12 top_container '>
                                <div className='row'>
                                    <div className="col-12 ThankYouOrder_paragraph ">
                                        <p>Thank you Maxwell</p>

                                    </div>
                                    <div className="col-12">
                                        <p>You'll receive a confirmation email soon</p>

                                    </div>
                                    <div className="col-12">
                                        <p> Order ID # {Order.OrderId}</p>
                                    </div>
                                </div>

                            </div>


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
                        <div className="row  center p-2">
                            <div className="col-12 stepper_container mt-4">
                                <Stepper activeStep={4} className={classes.stepperActiveBtn}>
                                    <Step  label="Order place"  className={classes.stepperBtn}/>
                                    <Step label="Confirming your order" />
                                    <Step label="order ready" />
                                    <Step label="pickup" />

                                </Stepper>

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
        </>
    )
}
export default PlaceOrder