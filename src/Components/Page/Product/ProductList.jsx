import React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../Style"
import { Link } from "react-router-dom";
import _ from "lodash";
import PreCheckout from "./PreCheckout/PreCheckout"
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
import AddToCartPopUp from "./AddToCartPopUp/AddToCartPopUp"
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import { WishListPost } from "../../Component/Whishlist/WishListApi_"
import {WhisList} from "../../Component/Whishlist/WhisList"
const ProductList = ({ arr , ProductNavigate }) => {
  
    const cookies = new Cookies();
    const [CartClean, SetCartClean] = React.useState(false)
    const token_data = cookies.get('Token_access')
    const { state, dispatch } = React.useContext(Createcontext)
    const [Whishlist, SetWishList] = React.useState(false)
    const [Price, SetPrice] = React.useState([])
    const [AddTOCard, SetAddToCard] = React.useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })
    const [NewData, SetNewData] = React.useState([])
    const Addtocard = async (Event) => {
        if (token_data) {
            const AddData = _.filter(Price, Price => Price?.Product_id === Event?.id);
            const PriceArrry = _.find(Event?.Prices[0]?.Price, Price => AddData[0]?.Product_id === Event?.id && AddData[0]?.Item_id === Price?.id);
            let PriceIndex = PriceArrry === undefined ? Event?.Prices[0]?.Price[0] : PriceArrry;
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };
            SetNewData({
                Product_id: Event?.id,
                Store_id: Event?.Store_id,
                Image_id: Event?.images[0]?.id,
                Price: PriceIndex,
                Cart_Quantity: 1,
                PriceId: PriceIndex?.id

            })
            await axios.post("https://api.cannabaze.com/UserPanel/Add-AddtoCart/",

                {
                    Brand_Id:Event.Brand_id,
                    Product_id: Event.id,
                    Store_id: Event.Store_id,
                    Image_id: Event.images[0].id,
                    Price: PriceIndex,
                    Cart_Quantity: 1,
                    PriceId: PriceIndex?.id

                }
                , config
            ).then(response => {
                if (response.data === "Empty Add to Cart") {
                    SetCartClean(true)
                }
                dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
            }).catch(
                function (error) {
                    if (error.response.status === 406) {
                        alert("This Product" + error.response.data[0])
                    }
                })
        }
        else {
            const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
            const PriceArrry = _.find(Event?.Prices[0].Price, Price => AddData[0]?.Product_id === Event.id && AddData[0]?.Item_id === Price.id);
            let PriceIndex = PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;

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
                StoreAddress: Event.StoreAddress




            }
            SetNewData(Arry)
            if (AddTOCard.length !== 0) {
                if (AddTOCard.find((data) => { return data.Store_id === Event.Store_id })) {
                    const t = AddTOCard.filter((data) => { return data.Product_id === Event.id && data.Price.id === PriceIndex.id })
                    if (t.length > 0) {
                        SetAddToCard(AddTOCard.map((Cart) => {
                            if (Cart.Product_id === Event.id && Cart.Price.id === PriceIndex.id) {
                                return { ...Cart, Cart_Quantity: Cart.Cart_Quantity + 1 }
                            }
                            return Cart
                        }))
                        dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                    }
                    else {
                        SetAddToCard([...AddTOCard, Arry])
                        dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                    }
                }
                else {
                    SetCartClean(true)
                }
            }
            else {
                SetAddToCard([Arry])
                dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
            }
            // dispatch({ type: 'Cart_subTotal' })
        }
    }
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        localStorage.setItem('items', JSON.stringify(AddTOCard))
    }, [AddTOCard])
    async function PriceSelect(Product, Item) {
        SetPrice(Price => {
            return Price.filter(Price => Price.Product_id !== Product)
        })
        SetPrice(Price => [...Price, { Product_id: Product, Item_id: Item }]);
    }
    const classes = useStyles()

    const handleWhishList = (id) => {
        if (state.login === false) {
            SetWishList(!Whishlist)
        }
        else {
            WishListPost(id).then(async (res) => {
                if (res.data.data === 'Remove From WishList') {
                    dispatch({ type: 'WishList', WishList: { ...state.WishList, [id]: !state.WishList[id] } })
                }
                else {
                    dispatch({ type: 'WishList', WishList: { ...state.WishList, [id]: true } })
                }
            }).catch((err) => { });
        }
    }
    return (
        <>
            <div className="row  mx-2" style={{ height: "auto", marginBottom: "100px" }}>
                {arr?.map((ele, index) => {
                    return (
                        <div className="col-12 col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12   " key={index}>
                               <div className="prod_inner_cont  product_inner_row">
                                    <span className="product_inner_rowspan">
                                    <IconButton  onClick={() => { handleWhishList(ele.id) }} aria-label="Example">
                                                {
                                                  state.login?   state.WishList[ele.id]? <AiFillHeart color="#31B665"></AiFillHeart> : <AiOutlineHeart /> : <AiOutlineHeart /> 
                                                }

                                            </IconButton>
                                    </span  >
                                <div className="prod_cat_cont" >
                                    {/* <Link to={`/products/${ele.category_name}/${ele.Product_Name.replace(/%20| /g, "-")  }/${ele.id}`}> */}
                                        <div className="col-12 p-2 prod_cat_img position-relative">
                                        <LazyLoadImage
                                        onClick={()=>ProductNavigate(ele.Product_Name ,ele.category_name ,ele.id )}
                                            className="product_search_result_image"
                                            onError={event => {
                                                event.target.src = "/image/blankImage.jpg"
                                                event.onerror = null
                                            }}
                                            src={`https://api.cannabaze.com/${ele?.images[0]?.image}`}
                                           
                                        />
                                            {/* // <img src={`https://api.cannabaze.com/${ele?.images[0]?.image}`} alt="img_not_found" style={{ pointerEvents: "none" }} /> */}
                                            <div className="prod_img_btn d-flex">
                                                <button className=" cat_prod_inner_btn btn2">THC {ele.THC}%</button>
                                                <button className="cat_prod_inner_btn btn1">{ele.strain}</button>
                                            </div>
                                           

                                        </div>
                                    {/* </Link> */}
                                </div>
                                <div className="product_cat_allProduct">

                                    <div className="col-12 px-2 prod_para_name" style={{ marginBottom: "" }}>
                                    <Link to={`/products/${ele.category_name}/${ele.Product_Name.replace(/%20| /g, "-")  }/${ele.id}`}>
                                        <h3 className='productListHeadings ellipsis'>{ele.Product_Name}</h3>
                                        </Link>
                                    </div>
                                    <div className="col-12 px-2 prod_para prod_sub_heading_height ellipsis">
                                        <p className='fontStyle common_sub_head'>{ele.StoreName}</p>
                                    </div>
                                    <div className="col-12 px-2 d-flex prod_para prod_sub_heading_height ellipsis" style={{ marginBottom: "0px" }}>
                                        <span className='fontStyle productlist_rating'>Rating</span><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>
                                    </div>
                                    <div className="mobile_view_weigth">
                                    <div className="row   prod_cat_cont_btn product_price_tabs">
                                        {ele.Prices?.map((ele1, index) => {
                                            return (
                                                ele1.Price?.map((data, index) => {
                                                    let s = false
                                                    if (Price.length === 0) {

                                                        if (data.id === 1) {
                                                            s = true
                                                        }

                                                    }
                                                    else (
                                                        Price?.map((Price) => {
                                                            if (ele.id === Price?.Product_id && data.id === Price?.Item_id) {
                                                                s = true
                                                            }
                                                            else {

                                                                s = false
                                                            }
                                                            return s
                                                        })
                                                    )
                                                    return (
                                                        <div className="col-sm-4 col-2  prod_cat_btn_cont mt-2" id="" key={index} >
                                                            <section
                                                                className={"prod_cat_btns " + (s ? "active" : "")}
                                                                value={data.id} onClick={() => PriceSelect(ele.id, data.id)} >
                                                                {data.Weight || data.Unit}
                                                                <p className="rs">${data?.SalePrice?.toFixed()}</p>
                                                            </section>
                                                        </div>
                                                    )
                                                })
                                            )
                                        })}
                                    </div>
                                    </div>
                                    <div className="col-12 d-flex mt-3 mb-2 Fly">


                                        <Box
                                            className={` ${classes.loadingBtnTextAndBack}`}
                                            style={{ width: "93%" }}
                                        >

                                            {/* <FlyingButton src={AiOutlineShoppingCart} targetTop={'00%'} targetLeft={'100%'}> */}

                                            <LoadingButton onClick={() => { Addtocard(ele) }} variant="outlined"> AddToCart</LoadingButton>
                                            {/* </FlyingButton> */}
                                        </Box>

                                        {
                                            CartClean && <AddToCartPopUp CartClean={"center"} SetCartClean={SetCartClean} NewData={NewData} SetAddToCard={SetAddToCard} />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            {Whishlist && <WhisList open1={Whishlist} SetWishList={SetWishList}></WhisList>}
            <PreCheckout />
        </>
    )
}
export default ProductList


