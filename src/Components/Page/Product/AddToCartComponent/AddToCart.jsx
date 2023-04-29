

import React from "react";
import AddToCartReview from "./AddToCartReview"
import AddToCartSummary from "./AddToCartSummary"
import Createcontext from "../../../../Hooks/Context"
const AddToCart = () => {
    const { state,dispatch } = React.useContext(Createcontext)
    const [Total, SetTotal] = React.useState([])
    
    let AllTotal = 0
    Total.forEach((item) => {
        AllTotal += item.Price
  
    })

    React.useEffect(()=>{
        dispatch({ type: 'Cart_subTotal', Cart_subTotal: AllTotal })

    },[ state.Cart_subTotal])

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
                            <AddToCartSummary  SetTotal={SetTotal} Total={AllTotal}   />
                        </div>




                    </div>




                </div>

            </div>

        </div >
    )
}
export default AddToCart

