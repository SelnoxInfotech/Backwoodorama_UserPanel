

import React from "react";
import AddToCartReview from "./AddToCartReview"
import AddToCartSummary from "./AddToCartSummary"
const AddToCart = () => {
<<<<<<< HEAD
    const [DeliveryOptionData, SetDeliveryOptionData] = React.useState([])

=======
    const [Total, SetTotal] = React.useState([])
>>>>>>> 118350c (Adtocard)
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
<<<<<<< HEAD
                            <AddToCartSummary SetDeliveryOptionData={SetDeliveryOptionData}/>
=======
                            <AddToCartSummary  />
>>>>>>> 118350c (Adtocard)
                        </div>




                    </div>




                </div>

            </div>

        </div >
    )
}
export default AddToCart

