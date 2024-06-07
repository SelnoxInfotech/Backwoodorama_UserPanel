import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import { BsStar, BsStarFill } from "react-icons/bs";
import useStyles from "../../../Style";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import _ from "lodash";
import PreCheckout from "./PreCheckout/PreCheckout";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import Cookies from "universal-cookie";
import ProductIncDecQuantity from "./ProductSearchResult/ProductIncDecQuantity"
import Createcontext from "../../../Hooks/Context";
import AddToCartPopUp from "./AddToCartPopUp/AddToCartPopUp";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import { WishListPost } from "../../Component/Whishlist/WishListApi_";
import { WhisList } from "../../Component/Whishlist/WhisList";
const ProductList = ({ arr }) => {
  const cookies = new Cookies();
  const Navigate = useNavigate();
  const location = useLocation()
  const [CartClean, SetCartClean] = React.useState(false);
  const [adding, setadding] = React.useState('')
  const [popup, SetPopup] = React.useState(true)
  const [showdata, setShowdata] = React.useState([]);
  const token_data = cookies.get("User_Token_access");
  const { state, dispatch } = React.useContext(Createcontext);
  const [Whishlist, SetWishList] = React.useState(false);
  const [Price, SetPrice] = React.useState([]);
  const [AddTOCard, SetAddToCard] = React.useState(() => {
    const saved = localStorage.getItem("items");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [NewData, SetNewData] = React.useState([]);
 
  const Addtocard = async (Event) => {
  
    if (token_data) {
      const AddData = _.filter(
        Price,
        (Price) => Price?.Product_id === Event?.id
      );
      const PriceArrry = _.find(
        Event?.Prices[0]?.Price,
        (Price) =>
          AddData[0]?.Product_id === Event?.id &&
          AddData[0]?.Item_id === Price?.id
      );
      let PriceIndex =
        PriceArrry === undefined ? Event?.Prices[0]?.Price[0] : PriceArrry;
      const config = {
        headers: { Authorization: `Bearer ${token_data}` },
      };

      SetNewData({
        Product_id: Event?.id,
        Store_id: Event?.Store_id,
        Image_id: Event?.images[0]?.id,
        Price: PriceIndex,
        Cart_Quantity: 1,
        PriceId: PriceIndex?.id,
        category: Event.category_name,
        Sub_Category_id: Event.Sub_Category_id,
        SubcategoryName: Event.SubcategoryName,
        StoreName: Event.StoreName,
        City: Event.Store_City,
        State: Event.Store_State,
        Country: Event.Store_Country

      });
      await axios.post(
          "https://api.cannabaze.com/UserPanel/Add-AddtoCart/",

          {
            Brand_Id: Event.Brand_id,
            Product_id: Event.id,
            Store_id: Event.Store_id,
            Image_id: Event.images[0].id,
            Price: PriceIndex,
            Cart_Quantity: 1,
            PriceId: PriceIndex?.id,
            category: Event.category_name,
            Sub_Category_id: Event.Sub_Category_id,
            SubcategoryName: Event.SubcategoryName,
            StoreName: Event.StoreName,
            City: Event.Store_City,
            State: Event.Store_State,
            Country: Event.Store_Country
          },
          config
        ).then((response) => {
          if (response.data === "Empty Add to Cart") {
            SetCartClean(true);
          }
          SetPopup(false)
          dispatch({ type: "ApiProduct", ApiProduct: !state.ApiProduct });
        })
        .catch(function (error) {
          if (error.response.status === 406) {
            alert("This Product " + error.response.data[0]);
          }
        });
    } else {
  
      const AddData = _.filter(Price, (Price) => Price.Product_id === Event.id);
      const PriceArrry = _.find(
        Event?.Prices[0].Price,
        (Price) =>
          AddData[0]?.Product_id === Event.id &&
          AddData[0]?.Item_id === Price.id
      );
      
      let PriceIndex =
        PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;

      const Arry = {
        Image: Event.images[0].image,
        Product_id: Event.id,
        Store_id: Event.Store_id,
        Image_id: Event.images[0].id,
        Price: PriceIndex,
        Cart_Quantity: 1,
        ProductName: Event.Product_Name,
        StoreCurbsidePickup: Event.StoreCurbsidePickup,
        StoreDelivery: Event.StoreDelivery,
        StorePickup: Event.StorePickup,
        StoreAddress: Event.StoreAddress,
        category: Event.category_name,
        Sub_Category_id: Event.Sub_Category_id,
        SubcategoryName: Event.SubcategoryName,
        StoreName: Event.StoreName,
        City: Event.Store_City,
        State: Event.Store_State,
        Country: Event.Store_Country
      };
      SetNewData(Arry);
      if (AddTOCard.length !== 0) {
       
        if (
          AddTOCard.find((data) => {
            return data.Store_id === Event.Store_id;
          })
        ) {
          const t = AddTOCard.filter((data) => {
            return (
              data.Product_id === Event.id && data.Price.id === PriceIndex.id
            );
          });
          if (t.length > 0) {
            SetAddToCard(
              AddTOCard.map((Cart) => {
                if (
                  Cart.Product_id === Event.id &&
                  Cart.Price.id === PriceIndex.id
                ) {
                  return { ...Cart, Cart_Quantity: Cart.Cart_Quantity + 1 };
                }
                return Cart;
              })
            );
            dispatch({ type: "ApiProduct", ApiProduct: !state.ApiProduct });
        
          } else {
            SetAddToCard([...AddTOCard, Arry]);
            dispatch({ type: "ApiProduct", ApiProduct: !state.ApiProduct });
            SetPopup(false)

          }
        } else {
          SetCartClean(true);
          // console.log(5)
        }
      } else {
        SetAddToCard([Arry]);
        dispatch({ type: "ApiProduct", ApiProduct: !state.ApiProduct });
        SetPopup(false)
       
      }
      // dispatch({ type: 'Cart_subTotal' })
    }
  };
  async function AddToCart2(Event, counter, SelectWeight, handleClose) {
       
    setadding(Event.id)
    const AddData = _.filter(Event.Prices, Price => Price);
    const PriceArrry = _.find(AddData[0].Price, Price => Price.id === SelectWeight);
    const FinalSelection = PriceArrry === undefined ? Event.Prices[0].Price[0] : PriceArrry
    const FinalPriceId = PriceArrry === undefined ? Event.Prices[0].Price[0].id : PriceArrry.id

    const FinalQuantity = counter === undefined ? 1 : counter
    if (token_data) {

        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
        SetNewData({

            Product_id: Event.id,
            Store_id: Event.Store_id,
            Image_id: Event.images[0].id,
            Price: FinalSelection,
            Cart_Quantity: FinalQuantity,
            PriceId: FinalPriceId,
            category: Event.category_name,
            Sub_Category_id: Event.Sub_Category_id,
            SubcategoryName: Event.SubcategoryName,
            StoreName: Event.StoreName,
            Country:Event.Store_Country,
            State: Event.Store_State,
            City:Event.Store_City 

        })
        await axios.post("https://api.cannabaze.com/UserPanel/Add-AddtoCart/",

            {
                Brand_Id: Event.Brand_id,
                Product_id: Event.id,
                Store_id: Event.Store_id,
                Image_id: Event.images[0].id,
                Price: FinalSelection,
                Cart_Quantity: FinalQuantity,
                PriceId: FinalPriceId,
                category: Event.category_name,
                StoreName: Event.StoreName,
                Sub_Category_id: Event.Sub_Category_id,
                SubcategoryName: Event.SubcategoryName,
                Country:Event.Store_Country,
                State: Event.Store_State,
                City:Event.Store_City 

            }
            , config
        ).then(response => {

            if (response.data === "Empty Add to Cart") {
                SetPopup(false)
                setadding('')
                SetCartClean(true)

            }
            SetPopup(false)
            setadding('')
            dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })

        }).catch(
            function (error) {
                SetPopup(false)
                setadding('')
                if (error.response.status === 406) {
                    alert("This Product " + error.response.data[0])
                }
            })
    }
    else {

        const Arry = {
            Image: Event.images[0].image,
            Product_id: Event.id,
            Store_id: Event.Store_id,
            Image_id: Event.images[0].id,
            Price: FinalSelection,
            Cart_Quantity: counter || 1,
            ProductName: Event.Product_Name,
            StoreCurbsidePickup: Event.StoreCurbsidePickup,
            StoreDelivery: Event.StoreDelivery,
            StorePickup: Event.StorePickup,
            StoreAddress: Event.StoreAddress,
            category: Event.category_name,
            Sub_Category_id: Event.Sub_Category_id,
            SubcategoryName: Event.SubcategoryName,
            StoreName: Event.StoreName,
            Country:Event.Store_Country,
            State: Event.Store_State,
            City:Event.Store_City 

        }
        SetNewData(Arry)
        if (AddTOCard.length !== 0) {
            if (AddTOCard.find((data) => { return data.Store_id === Event.Store_id })) {
                const t = AddTOCard.filter((data) => { return data.Product_id === Event.id && data.Price.id === FinalPriceId })
                if (t.length > 0) {
                    SetAddToCard(AddTOCard.map((Cart) => {
                        if (Cart.Product_id === Event.id && Cart.Price.id === FinalPriceId) {
                            return { ...Cart, Cart_Quantity: Cart.Cart_Quantity + 1 }
                        }
                        return Cart
                    }))
                    setadding('')
                    SetPopup(false)
                    dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })


                }
                else {
                    setadding('')
                    SetPopup(false)
                    SetAddToCard([...AddTOCard, Arry])
                    dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })


                }
            }
            else {
                setadding('')
                SetPopup(false)
                SetCartClean(true)
            }
        }
        else {
            setadding('')
            SetPopup(false)
            SetAddToCard([Arry])
            dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
        }
        dispatch({ type: 'Cart_subTotal' })

    }
    
}
  React.useEffect(() => {
    localStorage.setItem("items", JSON.stringify(AddTOCard));
  }, [AddTOCard]);


  async function PriceSelect(Product, Item) {
    SetPrice((Price) => {
      return Price.filter((Price) => Price.Product_id !== Product);
    });
    SetPrice((Price) => [...Price, { Product_id: Product, Item_id: Item }]);
  }
  const classes = useStyles();

  const handleWhishList = (id) => {
    if (state.login === false) {
      SetWishList(!Whishlist);
    } else {
      WishListPost(id)
        .then(async (res) => {
          if (res.data.data === "Remove From WishList") {
            dispatch({
              type: "WishList",
              WishList: { ...state.WishList, [id]: !state.WishList[id] },
            });
          } else {
            dispatch({
              type: "WishList",
              WishList: { ...state.WishList, [id]: true },
            });
          }
        })
        .catch((err) => { });
    }
  };
  function modifystr(str) {
    str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    str = str.trim().replaceAll(" ", "-");
    let a = 0;
    while (a < 1) {
      if (str.includes("--")) {
        str = str.replaceAll("--", "-");
      } else if (str.includes("//")) {
        str = str.replaceAll("//", "/");
      } else if (str.includes("//")) {
        str = str.replaceAll("-/", "/");
      } else if (str.includes("//")) {
        str = str.replaceAll("/-", "/");
      } else {
        a++;
      }
    }

    return str.toLowerCase();
  }



  React.useEffect(() => {
    let newdata = arr.filter((item) => {
      return item.Prices[0]?.Price[0]?.Stock === "IN Stock"
    })
    let newdata2 = arr.filter((item) => {
      return item.Prices[0]?.Price[0]?.Stock !== "IN Stock"
    })
    setShowdata(newdata.concat(newdata2))
  }, [arr]);
  return (
    <>
      {(showdata?.length !== 0 && typeof (showdata) !== "string") ? (
        !state?.Loading ? (
          <React.Fragment>
            <div
              className="row  mx-2"
              style={{ height: "auto", marginBottom: "10px" }}
            >
              {showdata?.map((ele, index) => {
                return (
                  <div
                    className="col-6 col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12   "
                    key={index}
                  >
                    <div className="prod_inner_cont  product_inner_row" >
                      <span className="product_inner_rowspan">
                        <IconButton
                          onClick={() => {
                            handleWhishList(ele.id);
                          }}
                          aria-label="Example"
                        >
                          {state.login ? (
                            state.WishList[ele.id] ? (
                              <AiFillHeart color="#31B665"></AiFillHeart>
                            ) : (
                              <AiOutlineHeart />
                            )
                          ) : (
                            <AiOutlineHeart />
                          )}
                        </IconButton>
                      </span>
                      <div className="prod_cat_cont" onClick={() => {
                        Navigate(`/products/${modifystr(ele.category_name)}/${modifystr(ele.SubcategoryName)}/${modifystr(ele.Product_Name)}/${ele.id}`, {
                          state: {
                            prevuisurl: location.pathname,
                          }
                        })
                      }}>

                        <div className="col-12  p-0 prod_cat_img position-relative">
                          <Link to={`/products/${modifystr(ele.category_name)}/${modifystr(ele.SubcategoryName)}/${modifystr(ele.Product_Name)}/${ele.id}`} state={{
                            prevuisurl: location.pathname,
                          }}>
                            <LazyLoadImage
                              onClick={() => { Navigate(`/products/${modifystr(ele.category_name)}/${modifystr(ele.SubcategoryName)}/${modifystr(ele.Product_Name)}/${ele.id}`) }}
                              className="product_search_result_image"
                              onError={(event) => {
                                event.target.src = "/image/blankImage.jpg";
                                event.onerror = null;
                              }}
                              src={`${ele?.images[0]?.image}`}
                              alt={ele.Product_Name}
                              title={ele.Product_Name}
                            />
                          </Link>

                          <div className="prod_img_btn d-flex">
                            {ele.THC !== 0 && (
                              <button className=" cat_prod_inner_btn btn2">
                                THC {ele.THC} {ele.lab_Result !== "Magnesium" ? '%' : "Mg."}
                              </button>
                            )}
                            {ele.CBD !== 0 && (
                              <button className=" cat_prod_inner_btn btn2">
                                CBD {ele.CBD} {ele.lab_Result !== "Magnesium" ? '%' : "Mg."}
                              </button>
                            )}
                            {ele.CBN !== 0 && (
                              <button className=" cat_prod_inner_btn btn2">
                                CBN {ele.CBN} {ele.lab_Result !== "Magnesium" ? '%' : "Mg."}
                              </button>
                            )}
                            {ele.strain !== "None" && (
                              <button className="cat_prod_inner_btn btn1">
                                {ele.strain}
                              </button>
                            )}
                          </div>
                        </div>

                      </div>
                      <Link to={`/products/${modifystr(ele.category_name)}/${modifystr(ele.SubcategoryName)}/${modifystr(ele.Product_Name)}/${ele.id}`} state={{
                        prevuisurl: location.pathname,
                      }}>

                        <div className="product_cat_allProduct" >
                          <div className="col-12  prod_para_name" style={{ marginBottom: "" }}>
                            <h3 className="productListHeadings ellipsis"  >   {ele.Product_Name} </h3>
                          </div>
                          {/* <div className="col-12  prod_para prod_sub_heading_height ellipsis" >
                            <p className="fontStyle m-0 common_sub_head"> {ele?.StoreName} </p>
                          </div> */}

                          <div className="col-12 py-2 d-flex prod_para prod_sub_heading_height ellipsis" style={{ marginBottom: "0px" }} >
                            {
                              new Array(ele.rating)
                                .fill(null)
                                .map((ine, indesx) => (
                                  <BsStarFill
                                    size={16}
                                    color="#31B665"
                                    className="product_search_rating_star"
                                    key={indesx}
                                  />
                                ))}

                            {new Array(5 - ele.rating).fill(null).map(() => {
                              return (
                                <BsStar
                                  size={16}
                                  color="#31B665"
                                  className="product_search_rating_star"
                                />
                              )
                            })}
                          </div>
                          {/* <div className="mobile_view_weigth">
                            <div className="prod_cat_cont_btn product_price_tabs">
                              {ele.Prices?.map((ele1) => {
                                return ele1.Price?.map((data, index) => {
                                  let s = false;
                                  if (Price.length === 0) {
                                    if (data.id === 1) {
                                      s = true;
                                    }
                                  } else
                                    Price?.map((Price) => {
                                      if (
                                        ele.id === Price?.Product_id &&
                                        data.id === Price?.Item_id
                                      ) {
                                        s = true;
                                      } else {
                                        s = false;
                                      }
                                      return s;
                                    });
                                  return (
                                    <div
                                      className="prod_cat_btn_cont"
                                      id=""
                                      key={index}
                                    >
                                      <section
                                        className={
                                          "prod_cat_btns " + (s ? "active" : "")
                                        }
                                        value={data.id}
                                        onClick={() =>
                                          PriceSelect(ele.id, data.id)
                                        }
                                      >
                                        {data.Weight || data.Unit}
                                        <p className="rs m-0">
                                          ${data?.SalePrice?.toFixed()}
                                        </p>
                                      </section>
                                    </div>
                                  );
                                });
                              })}
                            </div>
                          </div> */}
                           <div className=" productPriceDivHeight">
                                                    <p className="productSearch text-truncate mb-0"><span className="productSearchPrice">${parseInt(ele.Prices[0]?.Price[0]?.SalePrice)}  {parseInt(ele.Prices[0].Price[0].Price) > parseInt(ele.Prices[0].Price[0].SalePrice) && <del className="text-muted">${parseInt(ele.Prices[0].Price[0].Price)}</del>} </span> per {ele.Prices[0].Price[0].Weight ? ele.Prices[0].Price[0].Weight : `${ele.Prices[0].Price[0].Unit} Unit`}</p>
                                                </div>
                        </div>
                      </Link>
                      <div className="col-12 d-flex mt-sm-2 mt-2  Fly">
                      {  ele.Prices[0]?.Price?.length > 1?
                       <Box
                       className={` ${classes.loadingBtnTextAndBack}`}
                       style={{ width: "100%" }}
                     >
                       <ProductIncDecQuantity popup={popup} setadding={setadding}
                       adding={adding} SetPopup={SetPopup} items={ele} AddToCart={AddToCart2} /></Box>
                      : 
                      
                      (ele.Prices[0]?.Price[0]?.Stock === "IN Stock" ? (
                          <Box
                            className={` ${classes.loadingBtnTextAndBack}`}
                            style={{ width: "100%" }}
                          >
                         

                            <LoadingButton
                              onClick={() => {
                                Addtocard(ele);
                              }}
                              variant="outlined"
                            >
                            
                              <span><FaShoppingCart  size={18} /> </span> Add To Cart
                            </LoadingButton>
                           
                          </Box>
                        ) : (
                          <Box
                            className={` ${classes.loadingBtnTextAndBack}`}
                            style={{ width: "100%" }}
                          >
                            <LoadingButton className={`${classes.odsbtn}`}>
                              Out of Stock
                            </LoadingButton>
                          </Box>
                        ))
                      }




                        
                        {CartClean && (
                          <AddToCartPopUp
                            CartClean={"center"}
                            SetCartClean={SetCartClean}
                            NewData={NewData}
                            SetAddToCard={SetAddToCard}
                          />
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
            {Whishlist && (
              <WhisList open1={Whishlist} SetWishList={SetWishList}></WhisList>
            )}
            <PreCheckout />
          </React.Fragment>
        ) : (
          <div className="loader_container">
            <span className="newloader shine"><img src='/image/weedx.io logo.png' alt='weedx.io logo' title='weedx.io logo' /></span>
          </div>
        )
      ) : (
        <div className="col-12 center">
          <p>No Product</p>
        </div>
      )}
    </>
  );
};
export default ProductList;
