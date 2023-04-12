import React from "react";
import AddToCartReview from "../AddToCartComponent/AddToCartReview"
import AddToCartSummary from "../AddToCartComponent/AddToCartSummary"
const AddToCart = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="col-12">
                        <p>Your Items</p>
                    </div>


                    <div className="col-12 AddProductCartContainer">

                        <div className="col-8  AddProductCartContainerinner">
                            <AddToCartReview />

                        </div>
                        <div className="col-4   p-2 Add_product_cart_right_container_summary ">
                            <AddToCartSummary />
                        </div>




                    </div>
                    <div className="col-12">


                    </div>



                </div>

            </div>

        </div >
    )
}
export default AddToCart