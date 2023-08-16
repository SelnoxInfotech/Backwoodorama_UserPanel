import React from "react";
import { AiOutlineLeft } from "react-icons/ai"
import AllOrder from "./MyOrderComponent/AllOrder"
import MyOrderProductRating from "./MyOrderProductDetailComponent/MyOrderProductRating";
import OrderTracking from "./MyOrderProductDetailComponent/OrderTracking";
import OrderDetails from "./MyOrderProductDetailComponent/OrderDetails";
import MyOrderDeliveryAddress from "./MyOrderProductDetailComponent/MyOrderDeliveryAddress";
import MyOrderProductDetailStoreName from "./MyOrderProductDetailComponent/MyOrderProductDetailStoreName";
import MyOrderProductDetailCustomerName from "./MyOrderProductDetailComponent/MyOrderProductDetailCustomerName";
import {OrderBYID} from "../MyOrder/MyorderApi"
import { IconButton } from "@mui/material";
 import { useNavigate,useParams } from "react-router-dom";

const MyOrderProductDetail = () => {
    const params = useParams();
    const [AllOrder_data, SetAllOrder_data] = React.useState([])
     const navigate = useNavigate()
    React.useEffect(() => {
        OrderBYID(params.id).then((res) => {
            SetAllOrder_data(res.data.reverse())
        }).catch()
    }, [])
     


    return (
        <div className="container-fluid">
            <div className="row mx-0">
                <div className="col-12 d-flex px-0  productDetails_heading_container">
                <IconButton onClick={()=>navigate(-1)} >  <AiOutlineLeft color="#000000" size={20} /> </IconButton ><span  onClick={()=>navigate(-1) }className="productDetails_headings">Product Details</span>
                </div>
                <div className="col-12  myOrder_orderId mt-4">
                    <h1 className="orderId_span">Order ID : {AllOrder_data[0]?.OrderId}</h1>


                </div>
                <div className="col-12  myOrder_orderId">
                    <h1 className="orderId_span">Payment Method : Cash on delivery</h1>

                </div>
                <div className="col-12 myOrder_orderId mt-4">
                    <h1 className="productDetails_headingss">Product Detail</h1>
                </div>
                <AllOrder  props={AllOrder_data}/>


                <MyOrderProductRating  props={AllOrder_data}/>
                <OrderTracking props={AllOrder_data} />
                <OrderDetails  props={AllOrder_data}/>
                <MyOrderDeliveryAddress props={AllOrder_data} />
                <MyOrderProductDetailStoreName  props={AllOrder_data}/>
                <MyOrderProductDetailCustomerName  props={AllOrder_data}/>

            </div>

        </div>
    )
}
export default MyOrderProductDetail