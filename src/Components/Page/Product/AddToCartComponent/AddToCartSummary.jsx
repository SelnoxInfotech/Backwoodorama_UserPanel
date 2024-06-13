import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import useStyles from "../../../../Style";
import Createcontext from "../../../../Hooks/Context";
import DeliverAutoCompleteAddress from "./DeliverAutoCompleteAddress";
// import { useForm, FormProvider, Controller } from "react-hook-form";
import PromoCode from "../Promocode/Promocode";
import { Menuintegration_login } from "../../Login/menu-integration_login";
const AddToCartSummary = ({ SubmitData, CheckOut_Loading, SetLoading, SetDetails, Details }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = React.useContext(Createcontext);
  const [anyoutstock, setanyoutstock] = React.useState([])
  const navigate = useNavigate();
  const location = useLocation();
  const [OpenDelivery, SetOpenDelivery] = React.useState(false);
  const [OpenPickup, SetOpenPickup] = React.useState(false);
  const [InputValues, SetInputValues] = React.useState({
    delivery: "",
    contact: "",
  });
  const InputFieldHandler = (e) => {
    const { name, value } = e.target;
    SetInputValues({ ...InputValues, [name]: value });
  };
  const HandlePickupAndDelivery = (e) => {
    SetOpenPickup(!OpenPickup);
    SetOpenDelivery(false);
    if (e.currentTarget.id === "pickup_btn") {
      SetOpenPickup(!OpenPickup);
      SetOpenDelivery(false);
      if (state.AllProduct[0]?.StoreCurbsidePickup) {
        dispatch({
          type: "selectDeliveryoptions",
          selectDeliveryoptions: "CurbsidePickup",
        });
      } else {
        dispatch({
          type: "selectDeliveryoptions",
          selectDeliveryoptions: "pickup_btn",
        });
      }

    } else if (e.currentTarget.id === "delivery_btn") {
      SetOpenDelivery(!OpenDelivery);
      SetOpenPickup(false);
      dispatch({
        type: "selectDeliveryoptions",
        selectDeliveryoptions: "delivery_btn",
      });
    }

  };
  // console.log(state)
  const CheckoutProcess = (event, j) => {
    if (state.login) {
      if (state.selectDeliveryoptions === "delivery_btn") {
        if (state.DeliveryAddress === "") {
          alert("Select Delivery address");
        } else {
          if (Boolean(location.pathname === "/cart") || Boolean(location.pathname === "/carts")) {
            if (state.login) {
              navigate(location.pathname === "/carts" ? '/menu-integration/checkout' : "/checkout", {
                state: { InputValues, abc: state.Cart_subTotal, orderBtn: state.selectDeliveryoptions },
              });
            } else {
              navigate("/login", {
                state: {
                  location
                }
              });
            }
          } else {
            if (state.DeliveryOption === false) {
              alert("First Fill form ");
            } else if (state.DeliveryInformation === false) {
              alert("First Fill form ");
            }
          }

          if (Boolean(location.pathname === "/checkout") || Boolean(location.pathname === "/menu-integration/checkout")) {
            SubmitData();
          }
        }
      } else {
        if (state.selectDeliveryoptions === "pickup_btn" || state.selectDeliveryoptions === "CurbsidePickup") {
          if (Boolean(location.pathname === "/cart") || Boolean(location.pathname === "/carts")) {
            navigate(location.pathname === "/carts" ? '/menu-integration/checkout' : "/checkout", {
              state: { InputValues, abc: state.Cart_subTotal, orderBtn: state.selectDeliveryoptions },
            });
          } else {
            if (state.DeliveryOption === false) {
              alert("First Fill form ");
            } else if (state.DeliveryInformation === false) {
              alert("First Fill form ");
            }
          }
          if (Boolean(location.pathname === "/checkout") || Boolean(location.pathname === "/menu-integration/checkout")) {
            SubmitData();
          }
        } else {
          alert("Select Delivery address");
        }
      }
    } else {
      if (location.pathname === '/carts') {
        setOpen((open) => true)
      }
      else {

        navigate("/login", {
          state: { location }
        });
      }
    }

  };
  React.useEffect(() => {
    if (location.pathname === "/cart") {
      if (state.selectDeliveryoptions === "pickup_btn") {
        SetOpenDelivery(false);
        SetOpenPickup(true);
      } else if (state.selectDeliveryoptions === "delivery_btn") {
        SetOpenDelivery(true);
        SetOpenPickup(false);
      }
    }
  }, [state.selectDeliveryoptions]);
  function ChnageDeliveryAddress() {
    navigate("/cart");
  }
  useEffect(() => {
    let nss = state?.AllProduct?.map((ele) => {
      if (ele?.Price?.Stock !== "IN Stock") {
        return 'oos'
      } else {
        return 'ins'
      }
    })
    setanyoutstock(nss)
  }, [state?.AllProduct])


  return (
    <div className="col-12 Add_product_cart_right_container_summary">
      <div className="col-12 fontStyle AddProdCartFont_weight">
        <h5>Order Summary</h5>
      </div>
      {(Boolean(location.pathname !== "/checkout") || Boolean(location.pathname !== "/checkout")) ? (
        <div className="col-12 d-flex addToCart_deliver">
          {state.AllProduct[0]?.StoreDelivery && (
            <div className="col-6">
              <Box
                className={`px-1 add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}
              >
                <LoadingButton
                  style={{
                    backgroundColor: OpenDelivery && "#00b96a",
                    color: OpenDelivery && "white",
                  }}
                  onClick={HandlePickupAndDelivery}
                  id="delivery_btn"
                  variant="outlined"
                >
                  Delivery
                </LoadingButton>
              </Box>
            </div>
          )}

          <div className="col-6">
            {(state.AllProduct[0]?.StoreCurbsidePickup ||
              state.AllProduct[0]?.StorePickup) && (
                <Box
                  className={`px-1 add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`} >
                  <LoadingButton
                    style={{
                      backgroundColor: OpenPickup && "#00b96a",
                      color: OpenPickup && "white",
                    }}
                    variant="outlined"
                    id="pickup_btn"
                    onClick={HandlePickupAndDelivery}
                  >
                    {state.AllProduct[0]?.StoreCurbsidePickup
                      ? "Curbside Pickup"
                      : "Store Pickup"}
                  </LoadingButton>
                </Box>
              )}
          </div>
        </div>
      ) : (
        <Box
          className={`add_product_btn AddProduct_Cart_Btn ${classes.loadingBtnTextAndBack}`}
        >
          <LoadingButton
            sx={{
              color: "#00b96a",
              "&:hover": {
                color: "white",
              },
            }}
            variant="outlined"
            id="pickup_btn"
            onClick={ChnageDeliveryAddress}
          >
            Change Method
          </LoadingButton>
        </Box>
      )}

      <div className="col-12">
        {OpenDelivery && (
          <div className="col-12 mt-4 ">
            <div className=" addtocart_textfield mt-2">
              <label htmlFor="name-field">MY STREET ADDRESS</label>
              <DeliverAutoCompleteAddress
                OpenDelivery={OpenDelivery}
                className={classes.textFieldcartsummeryPage}
                Store={state.AllProduct[0].Store_id}
              ></DeliverAutoCompleteAddress>
            </div>
            <div className=" addtocart_textfield mt-3">
              <label htmlFor="name-field">
                APARTMENT OR SUITE NUMBER
                <TextField
                  className={classes.textFieldcartsummeryPage}
                  name="contact"
                  value={InputValues.contact}
                  onChange={InputFieldHandler}
                  id="outlined-basic"
                  placeholder="APARTMENT OR SUITE NUMBER"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </label>
            </div>
          </div>
        )}
      </div>
      <div className="col-12 mt-2">
        {OpenPickup && (
          <div className="col-lg-12  pickup_div fontStyle">
            <h3 className="addresHeading"> Pickup Address</h3>
            <p>{state.AllProduct[0]?.StoreAddress}</p>
          </div>
        )}
      </div>
      <div className="col-12 order_summary_flex mt-4">
        <div className=" add_prod_cart_summary_p">
          <p>Subtotal</p>
        </div>
        <div className=" fontStyle">
          <p>${state.Cart_subTotal}</p>
        </div>
      </div>
      <div className="col-12 order_summary_flex">
        <div className=" add_prod_cart_summary_p">
          <p>Est. excise tax</p>
        </div>
        <div className=" fontStyle">
          <p>$0</p>
        </div>
      </div>
      <div className="col-12 order_summary_flex">
        <div className=" add_prod_cart_summary_p">
          <p>State tax</p>
        </div>
        <div className=" fontStyle">
          <p>$0</p>
        </div>
      </div>
      <div className="col-12 order_summary_flex">
        <div className=" add_prod_cart_summary_p">
          <p>Delivery fee</p>
        </div>
        <div className=" fontStyle">
          <p>${state.DeliveryPrice}</p>
        </div>
      </div>
      <div className="col-12 order_Summary_total_container">
        <div className=" order_summary_flex">
          <div className=" fontStyle add_prod_cart_summary_p">
            <p className="m-0">Total Amount</p>
            {Boolean(state.CoupounAmount) && <p className="m-0">Discount Amount</p>}
          </div>
          <div className=" fontStyle">
            {Boolean(state.CoupounAmount) ? <del   ><span className="m-0" style={{ color: '#fff', textDecoration: 'line-through 2px #000' }}>${state.Cart_subTotal}</span></del> : <p className="m-0">${state.Cart_subTotal}</p>}
            {Boolean(state.CoupounAmount) && <p className="m-0">${state.Cart_subTotal - state.CoupounAmount}</p>}
          </div>
        </div>

      </div>
      <div className="add_prod_cart_p">
        {
          state.DeliveryPrice === 0 ?
            <p>Taxes are Shows</p>
            :
            <p style={{ color: "#e78d8d" }}> Minimum order card value {state.MinimumOrderPrice}</p>
        }
      </div>
      <PromoCode />
      <div className="col-12 AddProd_cart_center_btn">
        {location.pathname === "/cart" ? (
          (OpenDelivery || OpenPickup) && (
            <Box
              className={` add_product_btn floatingbtn AddProduct_Cart_Btn `}
            >
              <LoadingButton
                variant="outlined"
                loading={CheckOut_Loading}
                disabled={anyoutstock.includes('oos') ? true : false}
                onClick={(e) => {
                  CheckoutProcess(e);
                }}
                className={classes.flotchceckoutbtn}
                type="submit"
              >
                {" "}
                proceed to checkout{" "}
              </LoadingButton>
            </Box>
          )
        ) : (
          <Box
            className={` add_product_btn floatingbtn AddProduct_Cart_Btn`}
          >
            <LoadingButton
              loading={CheckOut_Loading}
              onClick={(e) => {
                CheckoutProcess(e);
              }}
              className={classes.flotchceckoutbtn}

              type="submit"
            >
              checkout
            </LoadingButton>
          </Box>
        )}
      </div>
      {
        open && <Menuintegration_login open={open} setOpen={setOpen}></Menuintegration_login>
      }
    </div>
  );
};
export default AddToCartSummary;
