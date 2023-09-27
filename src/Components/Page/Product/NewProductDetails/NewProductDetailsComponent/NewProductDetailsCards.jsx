import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import useStyles from "../../../../../Style";
import { Swiper, SwiperSlide } from "swiper/react";
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
    const [Price] = React.useState([])
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
                Brand_Name:Event.Brand_Name,
                Product_id: Event.id,
                Store_id: Event.Store_id,
                Image_id: Event?.images[0]?.id,
                Price: PriceIndex,
                Cart_Quantity: 1,
                PriceId: PriceIndex.id

            })
            await axios.post("https://api.cannabaze.com/UserPanel/Add-AddtoCart/",

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
        <div className=" mx-1 w-100">
            <div className=" newProductDetailsContainer  mt-4">                  
                    <div className="newProductDetailsCardLeftCol">
                        <div className="">
                            <div className="newProductDetailsUpperimage_container">
                                <LazyLoadImage className="newProductDetails_upper_image" src={`https://api.cannabaze.com/` + p} />
                            </div>
                            {
                                Product?.images?.length >  1 ?   <div className=" newProductDetailsLowerImage_container">
                                <Swiper
                                breakpoints={{
                                    540: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                    991: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1124: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                    1490: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                    slidesPerView={4}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: false,
                                    }}

                                    
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {Product?.images?.map((items, index) => {
                                        return (
                                            <SwiperSlide key={index}>

                                                <div  className="col-12 NewProductDetails_image_container">
                                                    <LazyLoadImage className="NewProductDetails_image" height={"100px"} src={`https://api.cannabaze.com/` + items.image} />

                                                </div>

                                            </SwiperSlide>

                                        )
                                    })}

                                </Swiper>
                              </div> : ""
                            }
                         

                        </div>
                    </div>
                    <div className="newProductdetails_rightSideContent_container">
                            <h1 className="newProductDetails_heading">{Product?.Product_Name}</h1>
                        <div className=" ">
                            <Link to={`/DispensoriesProduct/${Product.Store_id}/${"Menu"}`}>
                                <h3 className="newProductDetails_subHeadingss">By {Product.StoreName}</h3>
                            </Link>
                        </div>
                        <div className="newProductDetailsButon">
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
                            <p><span className="newProduct_Weight">Quantity</span><span className="mx-3 newProd_grms">1</span></p>
                        </div>
                        <div className="col-12 ">
                            <p><span className="newProduct_doller_price">$80.00</span><span className="mx-3 newProduct_Gms">Per 1 Z</span></p>
                        </div>
                        <div className="col-12">
                            <Box
                                className={`   ${classes.loadingBtnTextAndBack}`}

                            >
                                <LoadingButton onClick={() => { Addtocard(Product) }} variant="outlined" >Add To Cart</LoadingButton>
                            </Box>

                            {
                                CartClean && <AddToCartPopUp CartClean={"center"} SetCartClean={SetCartClean} NewData={NewData} SetAddToCard={SetAddToCard} />
                            }
                        </div>




                    </div>              
            </div>
        </div>
    )
}
export default NewProductDetailsCards