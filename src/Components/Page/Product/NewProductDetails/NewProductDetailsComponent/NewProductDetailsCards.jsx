import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsFillHeartFill } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import useStyles from "../../../../../Style";
import { Swiper, SwiperSlide } from "swiper/react";
import IconButton from '@mui/material/IconButton';
import axios from "axios";
import Cookies from 'universal-cookie';
import Createcontext from "../../../../../Hooks/Context"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import _ from "lodash"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import AddToCartPopUp from "../../AddToCartPopUp/AddToCartPopUp";
const NewProductDetailsCards = ({ Product }) => {
    const cookies = new Cookies();
    const p = Product?.images === undefined ? "" : Product?.images[0].image
    const classes = useStyles()

    const token_data = cookies.get('Token_access')
    const [CartClean, SetCartClean] = React.useState(false)
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
                Image_id: Event?.images[0]?.id,
                Price: PriceIndex,
                Cart_Quantity: 1,
                PriceId: PriceIndex.id

            })
            await axios.post("https://sweede.app/UserPanel/Add-AddtoCart/",

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
    return (
        <div className="row center mx-1">
            <div className="col-lg-10 col-sm-10 col-12 newProductDetailsContainer mt-4">
                <div className="row">
                    <div className="col-12 mt-2 text-end">
                        {/* <IconButton><BsFillHeartFill color="grey" size={20} /></IconButton> */}
                    </div>
                    <div className="col-lg-4 newProductDetailsCardLeftCol">
                        <div className="row">
                            <div className="col-12 newProductDetailsUpperimage_container">
                                <LazyLoadImage className="newProductDetails_upper_image" src={`https://sweede.app/` + p} />
                            </div>
                            <div className="col-12 newProductDetailsLowerImage_container">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: false,
                                    }}

                                    breakpoints={{
                                        540: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                            freeMode: true,

                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                            freeMode: true,

                                        },
                                        991: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                            freeMode: true,

                                        },
                                        1124: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                            freeMode: true,

                                        },
                                        1490: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                            freeMode: true,

                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {Product?.images?.map((items, index) => {
                                        return (
                                            <SwiperSlide >

                                                <div key={index} className="col-12 NewProductDetails_image_container">
                                                    <LazyLoadImage className="NewProductDetails_image" height={"100px"} src={`https://sweede.app/` + items.image} />

                                                </div>

                                            </SwiperSlide>

                                        )
                                    })}

                                </Swiper>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-8 newProductdetails_rightSideContent_container">

                        <div className="col-12 newProductDetails_heading">

                            <h1>{Product?.Product_Name}</h1>


                        </div>
                        <div className="col-12 newProductDetails_paragraph">
                            <Link to={`/DispensoriesProduct/${Product.Store_id}/${"Menu"}`}>
                                <p>By {Product.StoreName}</p>
                            </Link>
                        </div>
                        <div className="col-12 newProductDetailsButon">
                            <button className="newProductdetailsButtonss">{Product.THC}% THC</button>
                            <button className="newProductdetailsButtonss">{Product.CBD}% CBD</button>
                            <button className="newProductdetailsButtonss">{Product.strain}</button>


                        </div>
                        <div className="col-12 ">
                            <p><span><IoMdStar className={classes.disp_star_color} /></span><span className="mx-2">4.5 Rating</span></p>
                        </div>
                        <div className="col-12 ">
                            <p><span className="newProduct_Weight">weight</span><span className="mx-3 newProd_grms">100gm</span></p>
                        </div>
                        <div className="col-12 ">
                            <p><span className="newProduct_Weight">Quantity</span><span className="mx-3 newProduct_Weight">1</span></p>
                        </div>
                        <div className="col-12 ">
                            <p><span className="newProduct_doller_price">$80.00</span><span className="mx-3 newProduct_Gms">Per 1 Z</span></p>
                        </div>
                        <div className="col-12">
                            <Box
                                className={` add_product_btn addProduct_btn ${classes.loadingBtnTextAndBack}`}

                            >
                                <LoadingButton onClick={() => { Addtocard(Product) }} variant="outlined">Add To Cart</LoadingButton>
                            </Box>

                            {
                                CartClean && <AddToCartPopUp CartClean={"center"} SetCartClean={SetCartClean} NewData={NewData} SetAddToCard={SetAddToCard} />
                            }
                        </div>




                    </div>

                </div>
            </div>

        </div>
    )
}
export default NewProductDetailsCards