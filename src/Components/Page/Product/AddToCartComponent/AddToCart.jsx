

import React from "react";
import AddToCartReview from "./AddToCartReview"
import AddToCartSummary from "./AddToCartSummary"
import Createcontext from "../../../../Hooks/Context"
import EmptyCard from "../EmptyCard/EmptyCard"
const AddToCart = () => {
    const { state } = React.useContext(Createcontext)

    return (

        <div className="container">

            {
                state.AllProduct.length !== 0
                 ?

                    <div className="row mt-4">
                        <div className="col-12 addTocard_main_container_height">
                            <div className="col-12 addtoCart_headingss">
                                <p>Your Items</p>
                            </div>


                            <div className="col-12 AddProductCartContainer">

                                <div className="col-8  AddProductCartContainerinner">
                                    <AddToCartReview />

                                </div>
                                <div className="col-4   p-2 Add_product_cart_right_container_summary">
                                    <AddToCartSummary />
                                </div>




                            </div>




                        </div>

                    </div>
                    :
                    <EmptyCard></EmptyCard>
            }
        </div >
    )
}
export default AddToCart

