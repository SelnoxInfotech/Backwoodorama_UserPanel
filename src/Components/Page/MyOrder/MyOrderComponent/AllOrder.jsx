import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillCircleFill, BsTypeH2 } from "react-icons/bs";
import React from "react";
import { LoadingButton } from "@mui/lab";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { order } from "../MyorderApi";
import { useLocation } from "react-router-dom";
import useStyles from '../../../../Style'
const AllOrder = ({ AllOrder_data,ordertype,CencelOrder ,loading}) => {
  const location = useLocation();
  const classes = useStyles()
  const [Loading, SetLoading] = React.useState(false)
 
  return (
    <div className="container-fluid">
      {loading?
          <div className="center" >
                        <div className="loaderFLower"></div>
          </div>
            :
          <div className="row center  ">
            {AllOrder_data?.map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <div className=" col-lg-10    AllOrderContainer px-0 mt-4">
                    <div className="row  mx-0">
                      <div className="col-6 AllOrderCol1_height">
                        <p className="orderId_heading">Order ID :{val.OrderId}</p>
                      </div>
                      <div className="col-6 AllOrderCol1_height text-end">
                        <h2 className="orderId_heading">{val.trackOrder}</h2>
                      </div>
                    </div>
                    <div className="row mx-0">
                      <div className="col-8 AllOrderCol_height">
                        <h2 className="sellerName_date">
                          Seller Name : {val.SellerName}
                        </h2>
                      </div>
                      <div className="col-4 AllOrderCol_height text-end">
                        <span className="sellerName_date ">
                          {val.OrderDate.slice(0, 10)}
                        </span>
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
                                      onError={(event) => {
                                        event.target.src = "/image/blankImage.jpg";
                                        event.onerror = null;
                                      }}
                                      src={`${items?.Image}`}
                                    />
                                  </div>
                                </section>
                                <section className="allOrder_Card_Content_section">
                                  <div className="col-12">
                                    <h2 className="AllOrder_heading">
                                      {items.ProductName}
                                    </h2>
                                  </div>
                                  <div className="w-100  allOrder_span_quantity_div">
                                    <span className="allOrder_span_quantity">
                                      Quantity : {items.Cart_Quantity}
                                    </span>
                                    <span className="allOrder_span_quantity">
                                      Brand : {items?.Brand_Name}
                                    </span>
                                  </div>
                                  <div className="w-100 allOrder_icons_container">
                                    <span className="allOrder_spanName">
                                      Amount :
                                      <span className="Amount_price">
                                        {" "}
                                        {items.Price.SalePrice}
                                      </span>
                                    </span>
                                    <div className="allOrder_icons_div">
                                      <BsFillCircleFill color={val.Order_Status === "Cancel" ? "#d33" : "#31B665"} size={20} />
                                      <span className="allOrder_spanName">
                                        {val.Order_Status}
                                      </span>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                    <div className="row mx-0 py-2">
                      <div className="col-6 viewOrderDetals d-flex align-items-center gap-4">
                        {location.pathname.slice(0, 21) ===
                        "/MyOrderProductDetail" ? (
                          ""
                        ) : (
                          <>
                          <div className=" ">
                            <Link to={`/MyOrderProductDetail/${val.OrderId}`}>
                              <LoadingButton className={classes.cncelbtnorder}>view details</LoadingButton>
                            </Link>
                          </div>
                          {
                            val.Order_Status !=="Cancel" &&
                         
                          <div><LoadingButton loading={Loading} className={classes.cncelbtnorder}  onClick={() => { CencelOrder(val.OrderId) }}>Cancel </LoadingButton></div>}
                         </>
                        )}
                      </div>
                      <div className="col-6 text-end viewOrderDetals">
                        <h2 className="allOrderTotals">{val.subtotal}</h2>
                      </div>
                    </div>
                  </div>
                  {
                ordertype==="Pending Order" && 
                <div className=" col-lg-10  text-end   border-0 p-0">
                <Box className={`  ${classes.Cencell}  `}
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "10px"

                    }}   >  <LoadingButton loading={Loading} onClick={() => { CencelOrder(val.OrderId) }}>Cancel </LoadingButton> </Box>
                    </div>
            }
                </React.Fragment>
              );
            })}
          
          </div>
      }
    </div>
  );
};
export default AllOrder;
