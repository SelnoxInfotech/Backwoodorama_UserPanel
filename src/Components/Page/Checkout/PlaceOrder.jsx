import { Stepper, Step } from 'react-form-stepper';
import useStyles from "../../../Style"
const PlaceOrder = () => {
    const classes = useStyles()

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
                                        <p>Order number:#122</p>
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
                                <Stepper activeStep={2} className={classes.stepperActiveBtn}>
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
                                        <p>Sub total</p>
                                    </div>
                                    <div className='col-6 col-lg-2 col-md-2 col-sm-6 order_detail_paragraph fontStyle'>
                                        <p>$400</p>
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