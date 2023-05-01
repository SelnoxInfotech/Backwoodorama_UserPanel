import React from "react"
import Createcontext from "../../../../Hooks/Context"


const PreCheckout = () => {
    const {state } = React.useContext(Createcontext)
    return (
        <>
            <div className="row center marginPre_checkout_row ">
                <div className="col-lg-3 col-md-6 col-sm-8 col-8 border preCheckout_container">
                    <div className="center preCheck_heading">
                    <h6>CHECKOUT</h6>

                    </div>
                    <div className="center preCheck_price">
                     <p>{state.AllProduct.length} products ${state.Cart_subTotal}</p>
                    
                    </div>
                </div>

            </div>
        </>
    )
}
export default PreCheckout