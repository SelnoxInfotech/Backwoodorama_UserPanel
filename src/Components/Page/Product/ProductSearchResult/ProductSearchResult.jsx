import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CircularProgress from '@mui/material/CircularProgress';
import { BsStar, BsStarFill } from "react-icons/bs";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
import { AiOutlineHeart, AiFillHeart, AiOutlineLeft } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import IconButton from '@mui/material/IconButton';
import ProductIncDecQuantity from "./ProductIncDecQuantity"
import { FaShoppingCart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import "swiper/css";
import PreCheckout from "../PreCheckout/PreCheckout";
import axios from "axios";
import Cookies from 'universal-cookie';
import Createcontext from "../../../../Hooks/Context"
import './ProductSearchResult.css'
import 'swiper/css/navigation';
import _ from "lodash";
import AddToCartPopUp from "../AddToCartPopUp/AddToCartPopUp";
import { Link ,useLocation} from "react-router-dom";
import { WishListPost } from "../../../Component/Whishlist/WishListApi_"
import { WhisList } from "../../../Component/Whishlist/WhisList"
import { Navigation } from 'swiper/modules';
import { modifystr } from "../../../../Hooks/Function";

const ProductSearchResult = ({ RelatedProductResult, CategoryName, currentProductID, title , link="products" }) => {

    const { state, dispatch } = React.useContext(Createcontext)
    const classes = useStyles()
    const cookies = new Cookies();
    const location = useLocation()
       let token_data = cookies.get('User_Token_access')
    let accessToken = localStorage.getItem('User_Token_access');
    if(  Boolean(accessToken) ){ token_data  =  accessToken}
    const [CartClean, SetCartClean] = useState(false)
    const [adding, setadding] = React.useState('')
    const [popup, SetPopup] = useState(true)
    const [NewData, SetNewData] = useState([])
    const [showdata, Setshowdata] = useState([])
    const [Whishlist, SetWishList] = useState(false)
    const [AddTOCard, SetAddToCard] = useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })

    async function AddToCart(Event, counter, SelectWeight, handleClose) {
       
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
        localStorage.setItem('items', JSON.stringify(AddTOCard))
        const scrollToTop = () => {
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: "instant", // Optional if you want to skip the scrolling animation
          });
        }
    }, [AddTOCard])

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
    function discountshoer(CategoryCoupoun, ProductCoupoun) {
        let newarr = CategoryCoupoun.concat(ProductCoupoun)
        if (newarr[0].DiscountType === "Amount off Order") {
            let showdata = ''
            newarr[0].PercentageAmount === null ? showdata = "Flat " + newarr[0].ValueAmount + " Off" : showdata = `Save ${newarr[0].PercentageAmount} %`
            return showdata

        } else if (newarr[0].DiscountType === "Amount off Products") {
            let showdata = ''
            newarr[0].PercentageAmount === null ? showdata = "Flat " + newarr[0].ValueAmount + " Off" : showdata = `Save ${newarr[0].PercentageAmount} %`
            return showdata
        } else if (newarr[0].DiscountType === "Buy X get Y") {
            return "Buy X get Y"
        } else if (newarr[0].DiscountType === "Free Shipping") {
            return "Free Shipping"
        }
    }
    React.useEffect(()=>{
       let a =  RelatedProductResult.filter((item)=>{
            return item?.Prices[0]?.Price[0]?.Stock === "IN Stock" && item.rating !== 0
        })
        let b =  RelatedProductResult.filter((item)=>{
            return item?.Prices[0]?.Price[0]?.Stock !== "IN Stock" && item.rating === 0
        })
        Setshowdata(a.concat(b))
        const scrollToTop = () => {
            document.documentElement.scrollTo({
              top: 0,
              left: 0,
              behavior: "instant", // Optional if you want to skip the scrolling animation
          });
        }
    },[RelatedProductResult])


    return (
        <React.Fragment>
            <div className="row mx-0 marginProductSearchResult">
                <div className="col-12 mt-sm-4 mt-2 p-0 fontStyle">
                   {CategoryName?.length !== undefined  && <h1 className="section_main_title ">{CategoryName}</h1>}
                </div>
               { location.pathname.includes('/menu-integration') ? 
                    <div className="product_card_wrapper p-0">
                          <Swiper className="mySwiper similerproduxt"
                           spaceBetween={50}
                           slidesPerView={6}
                           navigation={true} modules={[Navigation]}
                           breakpoints={{
                             0: {
                               slidesPerView: 1,
                             },
                             480:{
                               slidesPerView:3,
                               spaceBetween:20,
                             },
                             768:{
                               slidesPerView:3,
                               spaceBetween:20,
                             },
                             992:{
                               slidesPerView:4
                             },
                             1296:{
                               slidesPerView:5
                             },
                             
                           }}
                           >
                        {
                            showdata?.map((items, index) => {
                                if (items.id !== currentProductID) {
                                    return (
                                        <SwiperSlide>
                                            <div className="productSearch_result_container" key={index}>
                                                {parseInt(items.Prices[0].Price[0].Price) > parseInt(items.Prices[0].Price[0].SalePrice) && <span className="discountTag">{((parseInt(items.Prices[0].Price[0].Price) - parseInt(items.Prices[0].Price[0].SalePrice)) / parseInt(items.Prices[0].Price[0].Price) * 100).toFixed(1)}% OFF</span>}
                                                <div className="productSearchResultImage_container">
                                                    <div className="product_whish_list">

                                                        <Box className={classes.productSearchIcons2}>
                                                            <IconButton onClick={() => { handleWhishList(items.id) }} aria-label="Example">
                                                                {
                                                                    state.login ? state.WishList[items.id] ? <AiFillHeart color="31B665"></AiFillHeart> : <AiOutlineHeart color="31B665" /> : <AiOutlineHeart color="31B665" />
                                                                }
                                                            </IconButton>
                                                        </Box>
                                                    </div>
                                                    <Link to={`/${link}/${modifystr(items.category_name.toLowerCase())}/${items.SubcategoryName.replace(/%20| /g, "-").toLowerCase()}/${modifystr(items.Product_Name.toLowerCase())}/${items.id}`}

                                                    state={{
                                                        prevuisurl: location.pathname,
                                                        id:items.id
                                                        }}  >
                                                        <LazyLoadImage
                                                            className="product_search_result_image"
                                                            onError={event => {
                                                                event.target.src = "/image/blankImage.jpg"
                                                                event.onerror = null
                                                            }}
                                                            src={`${items?.images[0]?.image}`}
                                                            height={"100px"}
                                                            alt={items.Product_Name}
                                                            title={items.Product_Name}
                                                        />
                                                    </Link>
                                                </div>
                                                <div className=" product_search_result_content_div ">
                                                    <Link to={`/${link}/${items.category_name.toLowerCase()}/${items.SubcategoryName.replace(/%20| /g, "-").toLowerCase()}/${items.Product_Name.replace(/%20| /g, "-").toLowerCase()}/${items.id}`}  state={{
                                                        prevuisurl: location.pathname,
                                                        id:items.id
                                                        }} >
                                                        <p className="productSearchResultParagraph text-truncate">{items.Product_Name}</p>

                                                        <p className="product_search_result_sub_heading text-truncate">by {items.StoreName}</p>
                                                        <div className="product_category_list">
                                                            <span className="product_search_result_span1">15{items.lab_Result !== "Magnesium" ? '%' : "Mg."} THC | 0.2{items.lab_Result !== "Magnesium" ? '%' : "Mg."} CBD</span>
                                                            <div className="product_cart_review">
                                                                { new Array(items.rating).fill(null).map((itwm , index) => (
                                                                    <BsStarFill key={index +1}  size={16} color="#31B665" className="product_search_rating_star" />
                                                                ))}

                                                                {new Array(5 - items.rating).fill(null).map((item , index) => (
                                                                    <BsStar  key={index +1} size={16} color="#31B665" className="product_search_rating_star" />
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className=" productPriceDivHeight">
                                                            <p className="productSearch text-truncate"><span className="productSearchPrice">${parseInt(items.Prices[0]?.Price[0]?.SalePrice)}  {parseInt(items.Prices[0].Price[0].Price) > parseInt(items.Prices[0].Price[0].SalePrice) && <del className="text-muted">${parseInt(items.Prices[0].Price[0].Price)}</del>} </span> per {items.Prices[0].Price[0].Weight ? items.Prices[0].Price[0].Weight : `${items.Prices[0].Price[0].Unit} Unit`}</p>
                                                        </div>
                                                        <div className="discount_boc">{
                                                            items?.CategoryCoupoun?.length !== 0 || items?.ProductCoupoun?.length !== 0 && <div className="discountinfo">
                                                                <span className="carddiscountoffer">{discountshoer(items.CategoryCoupoun, items.ProductCoupoun)} </span>  and more Offers
                                                            </div>
                                                        }</div>

                                                    </Link>
                                                    <div className="my-2">
                                                        <Box className={`center ${classes.loadingBtnTextAndBack}`}>
                                                            {
                                                                items?.Prices[0].Price.length > 1
                                                                    ?
                                                                    <ProductIncDecQuantity popup={popup} setadding={setadding}
                                                                        adding={adding} SetPopup={SetPopup} items={items} AddToCart={AddToCart} />
                                                                    :

                                                                    items?.Prices[0].Price[0].Stock === "IN Stock" ?
                                                                            <LoadingButton loading={adding === items.id} loadingIndicator={<CircularProgress color="inherit" size={16} />}
                                                                                onClick={() => { AddToCart(items) }} >
                                                                                <span><FaShoppingCart  size={18} /> </span> Add To Cart
                                                                            </LoadingButton>
                                                                        :
                                                                            <LoadingButton className={`${classes.odsbtn}`} >
                                                                            <span><FaShoppingCart size={18} /> </span>  Out of Stock
                                                                            </LoadingButton>
                                                            }
                                                            {
                                                                CartClean && <AddToCartPopUp CartClean={"center"} SetCartClean={SetCartClean} NewData={NewData} SetAddToCard={SetAddToCard} />
                                                            }
                                                        </Box>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            })
                        }
                        </Swiper>
                    </div>
                  :
                    <div className="product_card_wrapper p-0">
                    {
                        showdata?.map((items, index) => {
                            if (items.id !== currentProductID) {
                                return (
                                    <div className="productSearch_result_container" key={index}>
                                        {parseInt(items.Prices[0].Price[0].Price) > parseInt(items.Prices[0].Price[0].SalePrice) && <span className="discountTag">{((parseInt(items.Prices[0].Price[0].Price) - parseInt(items.Prices[0].Price[0].SalePrice)) / parseInt(items.Prices[0].Price[0].Price) * 100).toFixed(1)}% OFF</span>}
                                        <div className="productSearchResultImage_container">
                                            <div className="product_whish_list">

                                                <Box className={classes.productSearchIcons2}>
                                                    <IconButton onClick={() => { handleWhishList(items.id) }} aria-label="Example">
                                                        {
                                                            state.login ? state.WishList[items.id] ? <AiFillHeart color="31B665"></AiFillHeart> : <AiOutlineHeart color="31B665" /> : <AiOutlineHeart color="31B665" />
                                                        }
                                                    </IconButton>
                                                </Box>
                                            </div>
                                            <Link to={`/${link}/${modifystr(items.category_name.toLowerCase())}/${items.SubcategoryName.replace(/%20| /g, "-").toLowerCase()}/${modifystr(items.Product_Name.toLowerCase())}/${items.id}`}

                                            state={{
                                                prevuisurl: location.pathname,
                                                id:items.id
                                                }}  >
                                                <LazyLoadImage
                                                    className="product_search_result_image"
                                                    onError={event => {
                                                        event.target.src = "/image/blankImage.jpg"
                                                        event.onerror = null
                                                    }}
                                                    src={`${items?.images[0]?.image}`}
                                                    height={"100px"}
                                                    alt={items.Product_Name}
                                                    title={items.Product_Name}
                                                />
                                            </Link>
                                        </div>
                                        <div className=" product_search_result_content_div ">
                                            <Link to={`/${link}/${items.category_name.toLowerCase()}/${items.SubcategoryName.replace(/%20| /g, "-").toLowerCase()}/${items.Product_Name.replace(/%20| /g, "-").toLowerCase()}/${items.id}`}  state={{
                                                prevuisurl: location.pathname,
                                                id:items.id
                                                }} >
                                                <p className="productSearchResultParagraph text-truncate">{items.Product_Name}</p>

                                                <p className="product_search_result_sub_heading text-truncate">by {items.StoreName}</p>
                                                <div className="product_category_list">
                                                    <span className="product_search_result_span1">15{items.lab_Result !== "Magnesium" ? '%' : "Mg."} THC | 0.2{items.lab_Result !== "Magnesium" ? '%' : "Mg."} CBD</span>
                                                    <div className="product_cart_review">
                                                        { new Array(items.rating).fill(null).map((itwm , index) => (
                                                            <BsStarFill key={index +1}  size={16} color="#31B665" className="product_search_rating_star" />
                                                        ))}

                                                        {new Array(5 - items.rating).fill(null).map((item , index) => (
                                                            <BsStar  key={index +1} size={16} color="#31B665" className="product_search_rating_star" />
                                                        ))}
                                                        <span className="product_search_result_sub_heading ">({items.TotalRating})</span>
                                                    </div>
                                                </div>
                                                <div className=" productPriceDivHeight">
                                                    <p className="productSearch text-truncate"><span className="productSearchPrice">${parseInt(items.Prices[0]?.Price[0]?.SalePrice)}  {parseInt(items.Prices[0].Price[0].Price) > parseInt(items.Prices[0].Price[0].SalePrice) && <del className="text-muted">${parseInt(items.Prices[0].Price[0].Price)}</del>} </span> per {items.Prices[0].Price[0].Weight ? items.Prices[0].Price[0].Weight : `${items.Prices[0].Price[0].Unit} Unit`}</p>
                                                </div>
                                                <div className="discount_boc">{
                                                    items?.CategoryCoupoun?.length !== 0 || items?.ProductCoupoun?.length !== 0 && <div className="discountinfo">
                                                        <span className="carddiscountoffer">{discountshoer(items.CategoryCoupoun, items.ProductCoupoun)} </span>  and more Offers
                                                    </div>
                                                }</div>

                                            </Link>
                                            <div className="my-2">
                                                <Box className={`center ${classes.loadingBtnTextAndBack}`}>
                                                    {
                                                        items?.Prices[0].Price.length > 1
                                                            ?
                                                            <ProductIncDecQuantity popup={popup} setadding={setadding}
                                                                adding={adding} SetPopup={SetPopup} items={items} AddToCart={AddToCart} />
                                                            :

                                                            items?.Prices[0].Price[0].Stock === "IN Stock" ?
                                                                    <LoadingButton loading={adding === items.id} loadingIndicator={<CircularProgress color="inherit" size={16} />}
                                                                        onClick={() => { AddToCart(items) }} >
                                                                        <span><FaShoppingCart  size={18} /> </span> Add To Cart
                                                                    </LoadingButton>
                                                                :
                                                                    <LoadingButton className={`${classes.odsbtn}`} >
                                                                        <span><FaShoppingCart size={18} /> </span>  Out of Stock
                                                                    </LoadingButton>
                                                    }
                                                    {
                                                        CartClean && <AddToCartPopUp CartClean={"center"} SetCartClean={SetCartClean} NewData={NewData} SetAddToCard={SetAddToCard} />
                                                    }
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>
                }
            </div>
            {Whishlist && <WhisList open1={Whishlist} SetWishList={SetWishList}></WhisList>}
            <PreCheckout />
        </React.Fragment>
    )
}
export default ProductSearchResult