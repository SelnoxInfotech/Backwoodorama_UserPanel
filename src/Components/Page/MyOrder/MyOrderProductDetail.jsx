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
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillCircleFill } from "react-icons/bs";
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
    console.log(AllOrder_data ,'AllOrder_data')
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
                    <div className="col-12 allOrderCard_container ">
                        <div className="imageSectionWrapper">
                            <section className="allOrder_Card_Image_section">
                                <div className="Allorder_img_container">
                                    <LazyLoadImage
                                        className="Allorder_img"
                                        onError={event => {
                                            event.target.src = "/image/blankImage.jpg"
                                            event.onerror = null
                                        }}
                                        src={`${AllOrder_data[0]?.Product[0]?.Image}`}

                                    />
                                </div>
                            </section>
                            <section className="allOrder_Card_Content_section">
                                <div className="col-12">
                                    <h1 className="AllOrder_heading">{AllOrder_data[0]?.Product[0]?.ProductName}</h1>
                                </div>
                                <div className="w-100  allOrder_span_quantity_div">
                                    <span className="allOrder_span_quantity">Quantity : {AllOrder_data[0]?.Product[0]?.Cart_Quantity}</span>
                                    <span className="allOrder_span_quantity">Brand : {AllOrder_data[0]?.Product[0]?.Brand_Name}</span>
                                </div>
                                <div className="w-100 allOrder_icons_container">
                                    <span className="allOrder_spanName">Amount :<span className="Amount_price"> {AllOrder_data[0]?.Product[0]?.Price.SalePrice}</span></span>
                                    <div className="allOrder_icons_div">
                                        <BsFillCircleFill color="#31B665" size={20} />
                                        <span className="allOrder_spanName">{AllOrder_data[0]?.Order_Status}</span>
                                    </div>

                                </div>

                            </section>
                        </div>
                    </div>
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