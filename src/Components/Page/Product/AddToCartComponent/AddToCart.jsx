import "./AddToCart.css";
import React from "react";
import AddToCartReview from "./AddToCartReview"
import AddToCartSummary from "./AddToCartSummary"
import Createcontext from "../../../../Hooks/Context"
import { Link } from "react-router-dom";
import EmptyCard from "../EmptyCard/EmptyCard"
const AddToCart = () => {
    const { state } = React.useContext(Createcontext)
    const[anyoutstock,setanyoutstock]=React.useState(false)
    React.useEffect(()=>{
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    },[])

    
    return (

        <div className="container">

            {
                state?.AllProduct?.length !== 0
                 ?

                    <div className="row mt-4">
                        <div className="col-12 addTocard_main_container_height">
                            <div className="col-12 addtoCart_headingss">
                                <p className="mb-0">Your Cart from</p>
                                <Link to={`/weed-deliveries/${state.AllProduct[0]?.StoreName.replaceAll(' ' ,'-')}/${state.AllProduct[0]?.Store_id}`}>          <h3 className="addToCartHeadingss"> {state.AllProduct[0]?.StoreName} </h3> </Link>
                            </div>
                            <div className="row  AddProductCartContainer">

                                <div className="col-sm-8 AddProductCartContainerinner">

                                    <AddToCartReview setanyoutstock={setanyoutstock} />

                                </div>
                                <div className="col-sm-4   p-2 Add_product_cart_right_container_summary">
                                    <AddToCartSummary anyoutstock={anyoutstock}/>
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

