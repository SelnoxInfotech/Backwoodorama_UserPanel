import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillCircleFill } from "react-icons/bs";
import React from "react";
import { Link } from "react-router-dom";
import { order } from "../MyorderApi"
const AllOrder = () => {
    const [AllOrder_data, SetAllOrder_data] = React.useState([])
    React.useEffect(() => {
        order().then((res) => {
            SetAllOrder_data(res.data.reverse())
        }).catch()
    }, [])
    console.log(AllOrder_data)
    return (
        <div className="container-fluid">
            <div className="row">
                {AllOrder_data.map((val, index) => {
                    return (
                        <React.Fragment key={index}>
                            <div className=" col-lg-10 col-xl-7   AllOrderContainer px-0 mt-4">
                                <div className="row  mx-0">
                                    <div className="col-6 AllOrderCol1_height">

                                        <p className="orderId_heading">Order ID :{val.OrderId}</p>


                                    </div>
                                    <div className="col-6 AllOrderCol1_height text-end">

                                        <h1 className="orderId_heading">{val.trackOrder}</h1>

                                    </div>

                                </div>
                                <div className="row mx-0">
                                    <div className="col-6 AllOrderCol_height">
                                        <h1 className="sellerName_date">Seller  Name : {val.SellerName}</h1>
                                    </div>
                                    <div className="col-6 AllOrderCol_height text-end">
                                        <span className="sellerName_date ">{val.OrderDate}</span>
                                    </div>

                                </div>
                                <div className="row mx-0">
                                    {val.Product.map((items, index) => {
                                        return (
                                            <React.Fragment key={index}>
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
                                                                    src={`https://sweede.app/${items?.Image}`}
                                                                  
                                                                />
                                                            </div>
                                                        </section>
                                                        <section className="allOrder_Card_Content_section">
                                                            <div className="col-12">
                                                                <h1 className="AllOrder_heading">{items.ProductName}</h1>
                                                            </div>
                                                            <div className="w-100  allOrder_span_quantity_div">
                                                                <span className="allOrder_span_quantity">Quantity : {items.Cart_Quantity}</span>
                                                                <span className="allOrder_span_quantity">Brand : {items.brand}</span>
                                                            </div>
                                                            <div className="w-100 allOrder_icons_container">
                                                                <span className="allOrder_spanName">Amount :<span className="Amount_price">{items.amountPrice}</span></span>
                                                                <div className="allOrder_icons_div">
                                                                    <BsFillCircleFill color="#31B665" size={20} />
                                                                    <span className="allOrder_spanName">{val.Order_Status}</span>
                                                                </div>

                                                            </div>

                                                        </section>
                                                    </div>


                                                </div>

                                            </React.Fragment>
                                        )
                                    })}


                                </div>
                                <div className="row mx-0">
                                    <div className="col-6 viewOrderDetals">
                                        <div className="viewOrderDetals_container border">
                                            <Link to="/MyOrderProductDetail"><span className="viewDetailsFont">view details</span></Link>

                                        </div>
                                    </div>
                                    <div className="col-6 text-end viewOrderDetals">
                                        <h1 className="allOrderTotals">{val.subtotal}</h1>
                                    </div>

                                </div>



                            </div>
                        </React.Fragment>
                    )
                })}


            </div>

        </div>
    )
}
export default AllOrder