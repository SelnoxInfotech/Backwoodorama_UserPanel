import React,{useEffect, useState} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
import { AiOutlineHeart ,AiFillHeart ,AiOutlineLeft } from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import ProductIncDecQuantity from "./ProductIncDecQuantity"
import PreCheckout from "../PreCheckout/PreCheckout";
import axios from "axios";
import Cookies from 'universal-cookie';
import Createcontext from "../../../../Hooks/Context"
import _ from "lodash";
import AddToCartPopUp from "../AddToCartPopUp/AddToCartPopUp";
import { Link } from "react-router-dom";
import { WishListPost } from "../../../Component/Whishlist/WishListApi_"
import {WhisList} from "../../../Component/Whishlist/WhisList"
import { useNavigate } from "react-router-dom";
const ProductSearchResult = ({ RelatedProductResult, CategoryName, currentProductID ,subcategories }) => {
  
    const navigate = useNavigate()
    const { state, dispatch } = React.useContext(Createcontext)
    const classes = useStyles()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [CartClean, SetCartClean] = useState(false)
    const [NewData, SetNewData] = useState([])
    const [Whishlist, SetWishList] =useState(false)
    
    const [AddTOCard, SetAddToCard] = useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const selectOption = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
    };


    async function AddToCart(Event, counter, SelectWeight) {
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



            })
            await axios.post("https://api.cannabaze.com/UserPanel/Add-AddtoCart/",

                {
                    Brand_Id:Event.Brand_id,
                    Product_id: Event.id,
                    Store_id: Event.Store_id,
                    Image_id: Event.images[0].id,
                    Price: FinalSelection,
                    Cart_Quantity: FinalQuantity,
                    PriceId: FinalPriceId

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
                StoreAddress: Event.StoreAddress


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
            dispatch({ type: 'Cart_subTotal' })
        }




    }
    React.useEffect(() => {
       
        localStorage.setItem('items', JSON.stringify(AddTOCard))
    }, [AddTOCard])
    React.useEffect(()=>{
 window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

    },[])

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
        <React.Fragment>
            <div className="row mx-0 marginProductSearchResult">
                {
                Object.keys(subcategories).length ?
                 <div className="d-flex justify-content-end align-items-center">
               
                  

                    <div className="mydropdown ">
                        <div className="dropdown-toggle" onClick={toggleDropdown}>
                                {selectedOption && (
                                    <img src={`https://api.cannabaze.com/${selectedOption.SubCategoryImage}`} alt={selectedOption.name} className="dropdown-option-image" />
                                )}
                                <span className="dropdown-option-label">
                                    {selectedOption ? selectedOption.name : 'Select Subcategory '}
                                </span>
                                <span className="dropdown-caret"></span>
                        </div>
                        <ul className={`dropdown-menu image_dropdown ${isDropdownOpen ? 'open' : ''}`}>
                            {subcategories.data.map((option, index) => (
                                <li key={index} onClick={() => selectOption(option)}>
                                    <img src={`https://api.cannabaze.com/${option.SubCategoryImage}`} alt={option.name} className="dropdown-option-image" />
                                    <span className="dropdown-option-label">{option.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
              
                </div>
                : null
                }
                <div className="col-12 mt-4  fontStyle">
                    <h2 className="productSlider_headings">{CategoryName}</h2>
                </div>
                {RelatedProductResult.map((items, index) => {
                  if(items.id !== currentProductID){
                    return (
                        <div className=" col-xxl-3  col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4 px-0 productSearch_result_container" key={index}>
                            <div className="row productsearch_result_inner_container mx-1">
                                <div className="col-12  productSearchResultImage_container">
                                    <div className="col-12 product_whish_list text-end">

                                        <Box className={classes.productSearchIcons}>
                                            <IconButton onClick={() => { handleWhishList(items.id) }} aria-label="Example">
                                                {
                                                 state.login ?   state.WishList[items.id] ? <AiFillHeart></AiFillHeart> : <AiOutlineHeart /> : <AiOutlineHeart />
                                                }
                                            </IconButton>
                                        </Box>
                                    </div>
                                    <Link to={`/products/${items.category_name}/${items.Product_Name.replace(/%20| /g, "-")  }/${items.id}`}>
                                        <LazyLoadImage
                                            className="product_search_result_image"
                                            onError={event => {
                                                event.target.src = "/image/blankImage.jpg"
                                                event.onerror = null
                                            }}
                                            src={`https://api.cannabaze.com/${items?.images[0]?.image}`}
                                            height={"100px"}
                                        />
                                    </Link>

                                </div>
                                <div className="col-12 product_search_result_content_div ">
                                    <div className="row gap-0">
                                        <div className="col-12  ">
                                            <Link to={"/ProductDetail"} state={items.id}>
                                                <p className="productSearchResultParagraph text-truncate">{items.Product_Name}</p>
                                            </Link>
                                        </div>
                                        <div className="col-12 product_search_result_sub_heading ">
                                            <p className=" text-truncate">by {items.StoreName}</p>
                                        </div>
                                        <div className="col-12 product_category_list">
                                            <span className="product_search_result_span1">15% THC | 0.2% CBD</span>
                                            <span className="product_search_result_span2"><span className={` ${classes.disp_star_color}`}><IoMdStar className="product_search_rating_star" /></span>{items.rating === null ? 0 : items.rating }</span>

                                        </div>

                                        <div className="col-12 productPriceDivHeight">



                                            <p className="productSearch text-truncate"><span className="productSearchPrice">${parseInt(items.Prices[0].Price.sort((a, b) => a.SalePrice - b.SalePrice)[0].SalePrice)}</span> PER 1z</p>


                                        </div>
                                        <div className="col-12  my-4">
                                            <Box className={`center ${classes.loadingBtnTextAndBack}`}>
                                                {
                                                    items?.Prices[0].Price.length > 1
                                                        ?
                                                        <ProductIncDecQuantity items={items} AddToCart={AddToCart} />
                                                        :
                                                        <LoadingButton style={{ width: "60%", height: "30px", fontSize: "12px" }}
                                                            onClick={() => { AddToCart(items) }}>
                                                            Add To Cart
                                                        </LoadingButton>
                                                }
                                                {
                                                    CartClean && <AddToCartPopUp CartClean={"center"} SetCartClean={SetCartClean} NewData={NewData} SetAddToCard={SetAddToCard} />
                                                }
                                            </Box>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                 }
                })}
            </div>
            {Whishlist && <WhisList open1={Whishlist} SetWishList={SetWishList}></WhisList>}
            <PreCheckout />
        </React.Fragment>
    )
}
export default ProductSearchResult