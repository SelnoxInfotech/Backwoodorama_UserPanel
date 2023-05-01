import DeliveryOption from "./DeliveryOption"
import DeliveryInformation from "./DeliveryInformation"
import PlaceOrder from "./PlaceOrder"
import Payment from "./Payment"
import React from "react"
import AddToCartReview from "../Product/AddToCartComponent/AddToCartReview"
import AddToCartSummary from "../Product/AddToCartComponent/AddToCartSummary"
import { useLocation } from 'react-router-dom';
import { useForm , FormProvider } from "react-hook-form";
const CheckOutMainPage = () => {
    const method = useForm()
    const [ShowData, SetShowData] = React.useState(false)
    const [ShowDeliveryInformation, SetShowDeliveryInformation] = React.useState(false)
    const [DeliveryOptionData, SetDeliveryOptionData] = React.useState([])
    const [ShowPlaceOrder,SetShowPlaceOrder]=React.useState(false)
    const location = useLocation();
    const { InputValues, abc } = location.state
    return (
        <>
            <div className="container">
          
               
               <div className="row center">
                    <div className="col-md-8 col-lg-6 col-sm-12 col-12">
                        <div className="row ">
                            <div className="col-lg-12">
                                <DeliveryOption DeliveryOptionData={DeliveryOptionData} address={InputValues.delivery} SetShowData={SetShowData}  />

                            </div>

                        </div>
                        <div className="row ">
                            <div className="col-lg-12">
                                {ShowData === true && <DeliveryInformation SetShowDeliveryInformation={SetShowDeliveryInformation}  Total={abc} address={InputValues.delivery}/>}
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {ShowDeliveryInformation === true && <Payment SetShowPlaceOrder={SetShowPlaceOrder}/>}
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* {ShowPlaceOrder===true && <PlaceOrder/>} */}

                            </div>

                        </div>
                        <div className="row m-2">
                            <div className="col-lg-12 mx-auto checkout_main_page_addtocart_review fontStyle font_size_paragraph">
                                <p>Review</p>
                                <AddToCartReview />
                            </div>

                        </div>

                    </div>
                    <div className="col-md-8 col-lg-4 col-sm-12 col-12">
                        <div className="row checkout_main_page_addtocart_margin">
                            <div className="col-lg-12  checkout_main_page_summary">
                                <AddToCartSummary SetDeliveryOptionData={SetDeliveryOptionData} Total={abc} />

                            </div>

                        </div>
                    </div>

                </div>


        

            </div>
        </>
    )
}
export default CheckOutMainPage