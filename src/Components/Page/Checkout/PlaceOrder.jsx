import { Stepper, Step } from 'react-form-stepper';
import useStyles from "../../../Style"
const PlaceOrder = () => {
    const classes = useStyles()

    return (
        <>
            <div className="container-fluid">
                <div className="row center">
                    <div className="col-8 ThanYouOrder_Container_height">
                        <div className="row top_container">
                            <div className="col-12 ThankYouOrder_paragraph">
                                <p>Thank you Maxwell</p>

                            </div>
                            <div className="col-12">
                                <p>You'll receive a confirmation email soon</p>

                            </div>
                            <div className="col-12">
                                <p>Order number:#122</p>
                            </div>

                        </div>
                        <div className="row  center">
                            <div className="col-10 stepper_container mt-4">
                                <Stepper activeStep={1}>
                                    <Step className={classes.stepperBtn} label="Order place" />
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
                                    <div className='col-2 order_detail_paragraph fontStyle'>
                                      <p>Sub total</p>
                                    </div>
                                    <div className='col-2 order_detail_paragraph fontStyle'>
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