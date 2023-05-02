import React from "react"
import Createcontext from "../../../../Hooks/Context"
import { Link } from "react-router-dom"


const PreCheckout = () => {
    const { state } = React.useContext(Createcontext)
    console.log(state.AllProduct)
    return (
        <>  
        {
            state.AllProduct.length != 0 &&
            <div className="row center marginPre_checkout_row ">
                <Link to="/AddToCart">

                <div className="col-lg-3 col-md-6 col-sm-8 col-8 border preCheckout_container">
                    <div className="center preCheck_heading">
                        <h6>CHECKOUT</h6>

                    </div>

                    <div className="center preCheck_price">
                        {
                            state.LoadingApi ? <div className="loader"></div> : <p>{state.AllProduct.length} products ${state.Cart_subTotal}</p>
                        }

                    </div>

                </div>
        </Link>

            </div>
        }
        </>
    )
}
export default PreCheckout