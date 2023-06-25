import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillCircleFill } from "react-icons/bs";
import React from "react";
const AllOrder = () => {
    const AllOrderCard=[
    {productName:"Cannabis Flower",quantity:"20mg",brand:"Cannabis",amountPrice:"$100",productDeliverd:"Deliverd"},
    {productName:"Cannabis Flower",quantity:"20mg",brand:"Cannabis",amountPrice:"$100",productDeliverd:"Deliverd"},
    {productName:"Cannabis Flower",quantity:"20mg",brand:"Cannabis",amountPrice:"$100",productDeliverd:"Deliverd"},
    {productName:"Cannabis Flower",quantity:"20mg",brand:"Cannabis",amountPrice:"$100",productDeliverd:"Deliverd"}
]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 col-12  AllOrderContainer px-0">
                    <div className="row  mx-0 ">
                        <div className="col-6 AllOrderCol1_height">
                            <h1 className="orderId_heading">Order ID : 78248923658635</h1>
                        </div>
                        <div className="col-6 AllOrderCol1_height text-end">
                            <h1 className="orderId_heading">Order Track</h1>
                        </div>

                    </div>
                    <div className="row mx-0">
                        <div className="col-6 AllOrderCol_height">
                            <h1 className="sellerName_date">Seller  Name :  Thomas</h1>
                        </div>
                        <div className="col-6 AllOrderCol_height text-end">
                            <span className="sellerName_date ">24-6-2023</span>
                        </div>

                    </div>
                    <div className="row mx-0">
                        {AllOrderCard.map((items,index)=>{
                            return(
                                <React.Fragment key={index}>
                                    <div className="col-12 allOrderCard_container ">
                            <div className="imageSectionWrapper">
                                <section className="allOrder_Card_Image_section">
                                    <div className="Allorder_img_container">
                                        <LazyLoadImage className="Allorder_img" src="./image/allorder.png" />

                                    </div>
                                </section>
                                <section className="allOrder_Card_Content_section">
                                    <div className="col-12">
                                        <h1 className="AllOrder_heading">{items.productName}</h1>
                                    </div>
                                    <div className="w-100  allOrder_span_quantity_div">
                                        <span className="allOrder_span_quantity">Quantity : {items.quantity}</span>
                                        <span className="allOrder_span_quantity">Brand : {items.brand}</span>
                                    </div>
                                    <div className="w-100 allOrder_icons_container">
                                        <span className="allOrder_spanName">Amount :<span className="Amount_price">{items.amountPrice}</span></span>
                                        <div className="allOrder_icons_div">
                                            <BsFillCircleFill />
                                            <span className="allOrder_spanName">{items.productDeliverd}</span>
                                        </div>

                                    </div>

                                </section>
                            </div>


                        </div>

                                </React.Fragment>
                            )
                        })}
                        

                    </div>



                </div>

            </div>

        </div>
    )
}
export default AllOrder