import {AiOutlineLeft} from "react-icons/ai"
import AllOrder from "./MyOrderComponent/AllOrder"
import MyOrderProductRating from "./MyOrderProductDetailComponent/MyOrderProductRating";
import OrderTracking from "./MyOrderProductDetailComponent/OrderTracking";
import OrderDetails from "./MyOrderProductDetailComponent/OrderDetails";
import MyOrderDeliveryAddress from "./MyOrderProductDetailComponent/MyOrderDeliveryAddress";
import MyOrderProductDetailStoreName from "./MyOrderProductDetailComponent/MyOrderProductDetailStoreName";
import MyOrderProductDetailCustomerName from "./MyOrderProductDetailComponent/MyOrderProductDetailCustomerName";
const MyOrderProductDetail=()=>{
    return(
        <div className="container-fluid">
            <div className="row mx-0">
                <div className="col-12 d-flex px-0  productDetails_heading_container">
                    <AiOutlineLeft color="#000000" size={20}/><span className="productDetails_headings">Product Details</span>
                </div>
                <div className="col-12  myOrder_orderId mt-4">
                   <h1 className="orderId_span">Order ID : 78248923658635</h1>


                </div>
                <div className="col-12  myOrder_orderId">
                <h1 className="orderId_span">Payment Method : Cash on delivery</h1>

                </div>
                <div className="col-12 myOrder_orderId mt-4">
                 <h1 className="productDetails_headingss">Product Detail</h1>
                </div>
                <AllOrder/>
                <MyOrderProductRating/>
                <OrderTracking/>
                <OrderDetails/>
                <MyOrderDeliveryAddress/>
                <MyOrderProductDetailStoreName/>
                <MyOrderProductDetailCustomerName/>

            </div>

        </div>
    )
}
export default MyOrderProductDetail