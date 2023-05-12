import React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../Style"
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import PreCheckout from "./PreCheckout/PreCheckout"
import axios from "axios";
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
import AddToCartPopUp from "./AddToCartPopUp/AddToCartPopUp"
const ProductList = ({ arr }) => {
    const navigation = useNavigate()
    const cookies = new Cookies();
    const [CartClean, SetCartClean] = React.useState(false)
    const token_data = cookies.get('Token_access')
    const { state, dispatch } = React.useContext(Createcontext)
    const [Price, SetPrice] = React.useState([])
    const [AddTOCard, SetAddToCard] = React.useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })
    const [NewData, SetNewData] = React.useState([])

    const Addtocard = async (Event) => {

        if (token_data) {
            const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
            const PriceArrry = _.find(Event?.Prices[0].Price, Price => AddData[0]?.Product_id === Event.id && AddData[0]?.Item_id === Price.id);
            let PriceIndex = PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };
            SetNewData({
                Product_id: Event.id,
                Store_id: Event.Store_id,
                Image_id: Event.images[0].id,
                Price: PriceIndex,
                Cart_Quantity: 1,
                PriceId: PriceIndex.id

            })
            await axios.post("http://backend.sweede.net/UserPanel/Add-AddtoCart/",

                {
                    Product_id: Event.id,
                    Store_id: Event.Store_id,
                    Image_id: Event.images[0].id,
                    Price: PriceIndex,
                    Cart_Quantity: 1,
                    PriceId: PriceIndex.id

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
                ProductName: Event.Product_Name
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
        // dispatch({ type: 'ApiProduct' , ApiProduct :!state.ApiProduct })
    }


    React.useEffect(() => {

        localStorage.setItem('items', JSON.stringify(AddTOCard))
    }, [AddTOCard])



    async function PriceSelect(Product, Item) {
        SetPrice(Price => {
            return Price.filter(Price => Price.Product_id !== Product)
        })
        SetPrice(Price => [...Price, { Product_id: Product, Item_id: Item }]);
    }



    const classes = useStyles()
    return (
        <>
            <div className="row" style={{ height: "auto" }}>
                {arr?.map((ele, index) => {
                    return (
                        <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-6  prod_inner_cont " key={index}>
                            <div className="row product_inner_row">
                                <div className="col-4 prod_cat_cont" >
                                    <Link    to={"/ProductDetail"} state={ ele.id }>
                                        <div  className="col-10 p-2 prod_cat_img">
                                            <img  src={`http://backend.sweede.net/${ele?.images[0]?.image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />
                                            <div className="col prod_img_btn prodCat_gap d-flex">
                                                <button className="mx-2 cat_prod_inner_btn btn2">THC 70%</button>
                                            </div>
                                            <button className="cat_prod_inner_btn btn1">Indica</button>

                                        </div>
                                    </Link>
                                </div>

                                <div className="col-8 product_cat_allProduct">

                                    <div className="col-12 px-2 prod_para_name ellipsis" style={{ marginBottom: "" }}>

                                        <p className='fontStyle common_sub_head '>{ele.Product_Name}</p>
                                    </div>
                                    <div className="col-12 px-2 prod_para prod_sub_heading_height ellipsis">
                                        <p className='fontStyle common_sub_head'>{ele.StoreName}</p>
                                    </div>
                                    <div className="col-12 px-2 d-flex prod_para prod_sub_heading_height ellipsis" style={{ marginBottom: "0px" }}>
                                        <span className='fontStyle productlist_rating'>Rating</span><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>
                                    </div>
                                    <div className="col-12   prod_cat_cont_btn px-2">
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
                                                        <div className="col-4 col-lg-3 col-md-4 col-sm-5 prod_cat_btn_cont mt-2 d-flex" id="" key={index} >
                                                            <section
                                                                className={"prod_cat_btns " + (s ? "active" : "")}
                                                                value={data.id} onClick={() => PriceSelect(ele.id, data.id)} >
                                                                {data.Weight || data.Unit}
                                                                <p className="rs">${data.SalePrice.toFixed()}</p>
                                                            </section>
                                                        </div>
                                                    )
                                                })
                                            )
                                        })}
                                    </div>
                                    <div className="col-12 d-flex mt-3 mb-2 Fly">


                                        <Box
                                            className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
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
            <PreCheckout />
        </>
    )
}
export default ProductList


