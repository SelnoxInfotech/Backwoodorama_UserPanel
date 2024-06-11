import React from "react"
import Createcontext from "../../../../Hooks/Context"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const PreCheckout = () => {
    const { state } = React.useContext(Createcontext)
    const params = useLocation()
    return (
        <>
            {
                state.AllProduct?.length !== 0 &&
                <div className="row">
                    <div className="col-12">
                        <div className="row preCheckOut_center">
                            <Link to={params.pathname.includes('menu-integration') ? '/carts' :"/cart"}>
                                <div className="col-lg-3 col-md-6 col-sm-8 col-8  border preCheckout_container">
                                    <div className=" preCheck_heading">
                                        <h6>CHECKOUT</h6>
                                    </div>

                                    <div className=" preCheck_price">
                                        {
                                            state.LoadingApi ? <div className="loader"></div> : <p>{state.AllProduct?.length} products ${state.Cart_subTotal}</p>
                                        }
                                    </div>

                                </div>
                            </Link>
                        </div>

                    </div>


                </div>
            }
        </>
    )
}
export default PreCheckout