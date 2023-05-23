import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import ProductIncDecQuantity from "./ProductIncDecQuantity"
import PreCheckout from "../PreCheckout/PreCheckout";
import axios from "axios";
import Cookies from 'universal-cookie';
import Createcontext from "../../../../Hooks/Context"
import _ from "lodash";
import AddToCartPopUp from "../AddToCartPopUp/AddToCartPopUp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
const ProductSearchResult = ({ RelatedProductResult, CategoryName }) => {

    const { state, dispatch } = React.useContext(Createcontext)
    const classes = useStyles()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [CartClean, SetCartClean] = React.useState(false)
    const [NewData, SetNewData] = React.useState([])
    const [AddTOCard, SetAddToCard] = React.useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })


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
            await axios.post("http://backend.sweede.net/UserPanel/Add-AddtoCart/",

                {
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

            // console.log(AddTOCard.length !== 0)  
            const Arry = {
                Image: Event.images[0].image,
                Product_id: Event.id,
                Store_id: Event.Store_id,
                Image_id: Event.images[0].id,
                Price: FinalSelection,
                Cart_Quantity: counter || 1,
                ProductName: Event.Product_Name
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
                console.log(Arry)
                SetAddToCard([Arry])
                dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
            }
            dispatch({ type: 'Cart_subTotal' })
        }




    }
    React.useEffect(() => {

        localStorage.setItem('items', JSON.stringify(AddTOCard))
    }, [AddTOCard])
    return (
        <>
            <div className="row mx-2 marginProductSearchResult">
                <div className="col-12 mt-4 productSlider_headings fontStyle">
                    <h1>{CategoryName}</h1>
                </div>

                {RelatedProductResult.map((items, index) => {

                    return (
                        <div className=" col-xxl-3  col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4  productSearch_result_container" key={index}>
                            <div className="row productsearch_result_inner_container mx-1">

                                <div className="col-12  productSearchResultImage_container">
                                    <div className="col-12 product_whish_list text-end">
                                        <Box className={classes.productSearchIcons}>
                                            <IconButton aria-label="Example">
                                                {
                                                    false ? <AiFillHeart></AiFillHeart> : <AiOutlineHeart />
                                                }

                                            </IconButton>

                                        </Box>
                                    </div>
                                    <Link to={"/NewProductDetails"} state={items.id}>
                                        <LazyLoadImage

                                            className="product_search_result_image"
                                            onError={event => {
                                                event.target.src = "/image/blankImage.jpg"
                                                event.onerror = null
                                            }}
                                            src={`http://backend.sweede.net/${items?.images[0].image}`}
                                            height={"100px"}
                                        />
                                    </Link>

                                </div>
                                <div className="col-12 product_search_result_content_div ">
                                    <div className="row gap-0">
                                        <div className="col-12 productSearchResultParagraph ">
                                            <Link to={"/ProductDetail"} state={items.id}>
                                                <p className="text-truncate">{items.Product_Name}</p>
                                            </Link>
                                        </div>
                                        <div className="col-12 product_search_result_sub_heading ">
                                            <p className=" text-truncate">by {items.StoreName}</p>
                                        </div>
                                        <div className="col-12 product_category_list">
                                            <span className="product_search_result_span1">15% THC | 0.2% CBD</span>
                                            <span className="product_search_result_span2"><span className={` ${classes.disp_star_color}`}><IoMdStar className="product_search_rating_star" /></span>4.5 rating</span>

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
                })}
            </div>
            <PreCheckout />
        </>
    )
}
export default ProductSearchResult