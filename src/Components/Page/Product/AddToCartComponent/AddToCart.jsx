

import React from "react";
import AddToCartReview from "./AddToCartReview"
import AddToCartSummary from "./AddToCartSummary"
const AddToCart = () => {
    const [DeliveryOptionData, SetDeliveryOptionData] = React.useState([])
    const [abcToggle,SetabcToggle]=React.useState(false)

    const [Total, SetTotal] = React.useState([])
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="col-12">
                        <p>Your Items</p>
                    </div>


                    <div className="col-12 AddProductCartContainer">

                        <div className="col-8  AddProductCartContainerinner">
                            <AddToCartReview SetTotal={SetTotal} Total={Total} />

                        </div>
                        <div className="col-4   p-2 Add_product_cart_right_container_summary ">
                            <AddToCartSummary SetDeliveryOptionData={SetDeliveryOptionData} SetTotal={SetTotal} Total={Total} abcToggle={abcToggle} SetabcToggle={SetabcToggle}/>
                            {/* <AddToCartSummary  /> */}
                        </div>




                    </div>




                </div>

            </div>

        </div >
    )
}
export default AddToCart

