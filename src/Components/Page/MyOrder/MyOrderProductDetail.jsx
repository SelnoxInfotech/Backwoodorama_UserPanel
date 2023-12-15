import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import AllOrder from "./MyOrderComponent/AllOrder";
import MyOrderProductRating from "./MyOrderProductDetailComponent/MyOrderProductRating";
import OrderTracking from "./MyOrderProductDetailComponent/OrderTracking";
import OrderDetails from "./MyOrderProductDetailComponent/OrderDetails";
import MyOrderDeliveryAddress from "./MyOrderProductDetailComponent/MyOrderDeliveryAddress";
import MyOrderProductDetailStoreName from "./MyOrderProductDetailComponent/MyOrderProductDetailStoreName";
import MyOrderProductDetailCustomerName from "./MyOrderProductDetailComponent/MyOrderProductDetailCustomerName";
import Rating from "@mui/material/Rating";
import { OrderBYID } from "../MyOrder/MyorderApi";
import { IconButton } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillCircleFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import useStyles from "../../../Style";
const MyOrderProductDetail = () => {
  const params = useParams();
  const classes = useStyles();
  const [AllOrder_data, SetAllOrder_data] = React.useState([]);
  const [statuscolor, Setstatuscolor] = React.useState("#31B655");
  const navigate = useNavigate();
  React.useEffect(() => {
    OrderBYID(params.id)
      .then((res) => {
        SetAllOrder_data(res.data.reverse());

        if (AllOrder_data[0]?.Order_Status === "Cancel") {
          Setstatuscolor("#d33");
        } else if (AllOrder_data[0]?.Order_Status === "Delivered") {
          Setstatuscolor("gold");
        }
      })
      .catch();
  }, []);
  console.log(AllOrder_data, "AllOrder_data");
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-12 d-flex px-0  productDetails_heading_container">
          <IconButton onClick={() => navigate(-1)}>
            {" "}
            <AiOutlineLeft color="#000000" size={20} />{" "}
          </IconButton>
          <span
            onClick={() => navigate(-1)}
            className="productDetails_headings"
          >
            Product Details
          </span>
        </div>
        {/* <div className="col-12  myOrder_orderId mt-4">
                        <h1 className="orderId_span">Order ID : {AllOrder_data[0]?.OrderId}</h1>
                    </div>
                    <div className="col-12  myOrder_orderId">
                        <h1 className="orderId_span">Payment Method : Cash on delivery</h1>
                    
                    </div> */}
        <div className="p-2 mt-4">
          <div className="col-12 allOrderCard_container border p-3 ">
            <div className="imageSectionWrapper">
              <section className="allOrder_Card_Image_section">
                <div className="Allorder_img_container">
                  <LazyLoadImage
                    className="Allorder_img"
                    onError={(event) => {
                      event.target.src = "/image/blankImage.jpg";
                      event.onerror = null;
                    }}
                    src={`${AllOrder_data[0]?.Product[0]?.Image}`}
                  />
                </div>
              </section>
              <section className="allOrder_Card_Content_section">
                <div className="col-12">
                  <h1 className="AllOrder_heading">
                    {AllOrder_data[0]?.Product[0]?.ProductName}
                  </h1>
                </div>
                <div className="w-100  allOrder_span_quantity_div">
                  <span className="allOrder_span_quantity">
                    Quantity : {AllOrder_data[0]?.Product[0]?.Cart_Quantity}
                  </span>
                  <span className="allOrder_span_quantity">
                    Brand : {AllOrder_data[0]?.Product[0]?.Brand_Name}
                  </span>
                </div>
                <div className="w-100 allOrder_icons_container">
                  <span className="allOrder_spanName">
                    Amount :
                    <span className="Amount_price">
                      {" "}
                      {AllOrder_data[0]?.Product[0]?.Price.SalePrice}
                    </span>
                  </span>
                  <div className="allOrder_icons_div">
                    <BsFillCircleFill color={statuscolor} size={20} />
                    <span className="allOrder_spanName">
                      {AllOrder_data[0]?.Order_Status}
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* <AllOrder props={AllOrder_data} /> */}
        {/* <MyOrderProductRating  props={AllOrder_data}/> */}
      </div>
     <div className="row">
     <div className="col-12 d-lg-flex orderdetailscontainer d-block "> 
            <OrderTracking AllOrder_data={AllOrder_data} />
            <div className="col ">
            <div className=" border px-3 mt-lg-0 mt-3">
                <div className="w-100 MyOrderProductRating_innerContainer">
                <h1 className="productRating_heading">How was the product?</h1>
                <Rating
                    name="read-only"
                    className={classes.myOrderRatingStarIcons}
                    color="#31B665"
                    value={4}
                    readOnly
                />
                </div>
            </div>
            <div className="orderTracking_container mt-4">
                <section className="">
                <span className="customerNameFontss">Delivery Address : </span>

                <span className="MyOrderDeliveryAddress_subHeading">
                    {" "}
                    {AllOrder_data[0]?.Address}
                </span>
                </section>
                <div className="">
                <span className="customerNameFontss">Store Name :</span>

                <span className=""> {AllOrder_data[0]?.SellerName}</span>
                </div>
                <div className=" ">
                <span className="customerNameFontss">Customer Name : </span>
                <span className="customerName">
                    {" "}
                    {AllOrder_data[0]?.username}
                </span>
                </div>
                <div className=" ">
                <span className="customerNameFontss">Customer Number : </span>
                <span className="customerNumber">
                    {" "}
                    {AllOrder_data[0]?.MobileNo}
                </span>
                </div>
                <div className=" ">
                <span className="customerNameFontss">Order ID : </span>
                <span className="customerNumber">
                    {" "}
                    {AllOrder_data[0]?.OrderId}
                </span>
                </div>
                <div className=" ">
                <span className="customerNameFontss">Payment Method : </span>
                <span className="customerNumber"> Cash On Delivery </span>
                </div>

                <section className="orderDetails_innerSection1">
                <div className="ordetailAmount_container">
                    <span className="amount_spanss">Amount</span>
                    <span className="amount_spanss">
                    $ {AllOrder_data[0]?.subtotal}
                    </span>
                </div>
                </section>
                <section className="orderDetails_innerSection2">
                <div className="ordetailAmount_container">
                    <span className="amount_spanss">Total</span>
                    <span className="totalAmounts">
                    $ {AllOrder_data[0]?.subtotal}
                    </span>
                </div>
                </section>
            </div>
            </div>
        </div>
     </div>

    
    </div>
  );
};
export default MyOrderProductDetail;
