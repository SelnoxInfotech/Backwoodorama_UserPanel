import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import useStyles from "../../../../../Style";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsShareFill } from "react-icons/bs";
import { RWebShare } from "react-web-share";
import axios from "axios";
import Cookies from 'universal-cookie';
import Createcontext from "../../../../../Hooks/Context"
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from '@mui/material';
import { Pagination } from 'swiper/modules';
import _ from "lodash"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { Link, useParams } from "react-router-dom";
import AddToCartPopUp from "../../AddToCartPopUp/AddToCartPopUp";
const NewProductDetailsCards = ({ Product }) => {
    const cookies = new Cookies();
    const params = useParams()
    const [quentity, setquentity] = useState(1);
    const [dynamicWeight, setdynamicWeight] = useState(0);
    const p = Product?.images === undefined ? "" : Product?.images[0].image;
    const classes = useStyles();
    const token_data = cookies.get('Token_access');
    const [CartClean, SetCartClean] = React.useState(false)
    const { state, dispatch } = React.useContext(Createcontext)
    const [Price, SetPrice] = React.useState([])
    const [AddTOCard, SetAddToCard] = React.useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })
    const [NewData, SetNewData] = React.useState([])
    const [SelectVariant, SetSelectVariant] = React.useState('')
    const Addtocard = async (Event) => {
        if (token_data) {
            const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
            const h = Event?.Prices[0].Price
            const PriceArrry = h.find((data)=>data.id === parseInt( AddData[0]?.Item_id) && data)
            let PriceIndex = PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;

            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };

            SetNewData({
                Product_id: Event?.id,
                Store_id: Event?.Store_id,
                Image_id: Event?.images[0]?.id,
                Price: PriceIndex,
                Cart_Quantity: quentity,
                PriceId: PriceIndex?.id,
                category: Event.category_name,
                Sub_Category_id: Event.Sub_Category_id,
                SubcategoryName: Event.SubcategoryName,
                StoreName: Event.StoreName
            })
            await axios.post("https://api.cannabaze.com/UserPanel/Add-AddtoCart/",

                {
                    Brand_Id: Event.Brand_id,
                    Product_id: Event.id,
                    Store_id: Event.Store_id,
                    Image_id: Event.images[0].id,
                    Price: PriceIndex,
                    Cart_Quantity: quentity,
                    PriceId: PriceIndex?.id,
                    category: Event.category_name,
                    Sub_Category_id: Event.Sub_Category_id,
                    SubcategoryName: Event.SubcategoryName,
                    StoreName: Event.StoreName
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
                        alert("This Product " + error.response.data[0])
                    }
                })
        }
        else {
            const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
            const h = Event?.Prices[0].Price
            const PriceArrry = h.find((data)=>data.id === parseInt( AddData[0]?.Item_id) && data)
            let PriceIndex = PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;

            const Arry = {
                Image: Event.images[0].image,
                Product_id: Event.id,
                Store_id: Event.Store_id,
                Image_id: Event.images[0].id,
                Price: PriceIndex,
                Cart_Quantity: quentity,
                ProductName: Event.Product_Name,
                StoreCurbsidePickup: Event.StoreCurbsidePickup,
                StoreDelivery: Event.StoreDelivery,
                StorePickup: Event.StorePickup,
                StoreAddress: Event.StoreAddress,
                category: Event.category_name,
                Sub_Category_id: Event.Sub_Category_id,
                SubcategoryName: Event.SubcategoryName,
                StoreName: Event.StoreName
            }
            SetNewData(Arry)
            if (AddTOCard.length !== 0) {
                if (AddTOCard.find((data) => { return data.Store_id === Event.Store_id })) {
                    const t = AddTOCard.filter((data) => { return data.Product_id === Event.id && data.Price.id === PriceIndex.id })
                    if (t.length > 0) {
                        SetAddToCard(AddTOCard.map((Cart) => {
                            if (Cart.Product_id === Event.id && Cart.Price.id === PriceIndex.id) {
                                return { ...Cart, Cart_Quantity: Cart.Cart_Quantity + quentity }
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
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        localStorage.setItem('items', JSON.stringify(AddTOCard))
    }, [AddTOCard])
    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })    
    }, [params])


    function modifystr(str) {
        str = str === undefined ? "" : str
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str.toLowerCase()
    }

    function k(id) {

        Product?.Prices?.map((item) => {
            let vl = item.Price.filter((items) => {
                if (items.id === parseInt(id)) {
                    SetSelectVariant(items)
                    setdynamicWeight(items.SalePrice)
                    return items.SalePrice
                }
            })
            return vl[0]
        })

    }
    async function PriceSelect(Product, Item) {
        console.log(Product, Item)
        SetPrice(Price => {
            return Price.filter(Price => Price.Product_id !== Product)
        })
        SetPrice(Price => [...Price, { Product_id: Product, Item_id: Item }]);
    }

    console.log(SelectVariant, Price)

    return (
        <div className=" w-100">
            <div className=" newProductDetailsContainer position-relative  mt-4">
                <div className="newProductDetailsCardLeftCol">
                    <div className="">
                        <div className="newProductDetailsUpperimage_container">
                            <LazyLoadImage className="newProductDetails_upper_image"
                                onError={event => {
                                    event.target.src = "/image/blankImage.jpg"
                                    event.onerror = null
                                }}
                                src={p} />
                        </div>
                        {
                            Product?.images?.length > 1 ? <div className=" newProductDetailsLowerImage_container">
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

                                                <div className="col-12 NewProductDetails_image_container">
                                                    <LazyLoadImage
                                                        onError={event => {
                                                            event.target.src = "/image/delivery.png"
                                                            event.onerror = null
                                                        }}
                                                        className="NewProductDetails_image" height={"100px"} src={items.image} />

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
                        <Link to={`/weed-deliveries/${modifystr(Product?.StoreName)}/${Product?.Store_id}`}>
                            <h3 className="newProductDetails_subHeadingss">By {Product.StoreName}</h3>
                        </Link>
                    </div>
                    <div className="newProductDetailsButon">
                        {Product.THC !== 0 && <button className="newProductdetailsButtonss">{Product.THC}% THC</button>}
                        {Product.CBD !== 0 && <button className="newProductdetailsButtonss">{Product.CBD}% CBD</button>}
                        {Product.strain !== "None" && <button className="newProductdetailsButtonss">{Product.strain}</button>}


                    </div>
                    <div className="col-12 mt-2">
                        <p>
                            <Rating name="read-only" className={`mx-2 ${classes.homePageStarIcons}`} value={Product.rating === null ? 0 : parseInt(Product?.rating)} size="small" readOnly />
                            <span>
                            </span><span className="mx-2">{Product.rating === null ? 0 : Product.rating + ".0"} ({Product.TotalRating})

                            </span></p>
                    </div>
                    <div className="col-12 productDetailsCardWeigth">
                        <span className="newProduct_Weight">
                            {Product?.Prices?.map((item) => {
                                let vl = item.Price.map((item) => {
                                    if (item.Weight) {
                                        //    if(!dynamicWeight){setdynamicprice(item.SalePrice); setdynamicWeight(item.Weight)};
                                        return 'Weight :'
                                    } else {
                                        // if(!dynamicWeight){setdynamicprice(item.SalePrice); setdynamicWeight(`${item.Unit} Unit`)}
                                        return ` Unit :`
                                    }

                                })
                                return vl[0]
                            })
                            }
                        </span><span className="mx-3 newProd_grms productDetailsCardWeigthOptions">
                            {
                                Product?.Prices?.map((data) => data.Price.length)[0] > 1 ?
                                    <select className="form-select" aria-label="Default select example" onChange={(e) => {

                                        k(e.target.value)
                                    }}
                                        onClick={(e) => PriceSelect(Product.id, e.target.value)}
                                    >
                                        {
                                            Product?.Prices[0]?.Price?.map((item, index) => {

                                                if (item.Weight) {
                                                    return <option value={item.id} key={index}>{item.Weight}</option>
                                                } else {
                                                    return <option n value={item.id} key={index} >{item.Unit} Unit</option>
                                                }

                                            })
                                        }
                                    </select> :
                                    Product?.Prices?.map((item) => {
                                        let vl = item.Price.map((item) => {
                                            if (item.Weight) {
                                                return item.Weight
                                            } else {
                                                return `${item.Unit} Unit`
                                            }
                                        })
                                        return vl[0]
                                    })
                            }
                        </span>
                    </div>
                    <div className="col-12 productDetailsCardQuestity">
                        <span className="newProduct_Weight">Quantity : </span><span className="mx-3 newProd_grms">
                            <div className="qty_selector">
                                <span className="qty_btn" onClick={() => { if (quentity > 1) { setquentity(quentity - 1) } }}>-</span>
                                <span className="qty_input">{quentity}</span>
                                <span className="qty_btn" onClick={() => { setquentity(quentity + 1) }}>+</span>
                            </div>
                        </span>
                    </div>
                    <div className="col-12 ">
                        <p><span className="newProduct_doller_price">
                            $ {parseInt(dynamicWeight) !== 0 ?

                                dynamicWeight * quentity

                                : Product?.Prices?.map((data) => data.Price[0].SalePrice * quentity)}
                        </span><span className="mx-3 newProduct_Gms">/ {quentity} piece</span></p>
                    </div>
                    <div className="col-12">
                        {
                            Product?.Prices?.map((data) => {
                                if (dynamicWeight === 0) {
                                    if (data.Price[0]) {
                                        if (data.Price[0].Stock === "IN Stock") {
                                            return (
                                                <Box className={`   ${classes.loadingBtnTextAndBack}`} >
                                                    <LoadingButton onClick={() => { Addtocard(Product) }} variant="outlined" >Add To Cart</LoadingButton>
                                                </Box>
                                            )
                                        }
                                        else {
                                            return (
                                                <Box >
                                                    <LoadingButton className={`${classes.odsbtn}`}>Out of Stock</LoadingButton>
                                                </Box>
                                            )
                                        }
                                    }
                                }
                                else {
                                    return (
                                        data.Price.map((arry) => {
                                            if (SelectVariant.id === arry.id) {
                                                if (arry.Stock === "IN Stock") {
                                                    return (
                                                        <Box className={`${classes.loadingBtnTextAndBack}`} >
                                                            <LoadingButton onClick={() => { Addtocard(Product) }} variant="outlined" >Add To Cart</LoadingButton>
                                                        </Box>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <Box >
                                                            <LoadingButton className={`${classes.odsbtn}`}>Out of Stock</LoadingButton>
                                                        </Box>
                                                    )
                                                }

                                            }
                                        })
                                    )


                                }
                            })

                        }


                        {
                            CartClean && <AddToCartPopUp CartClean={"center"} SetCartClean={SetCartClean} NewData={NewData} SetAddToCard={SetAddToCard} />
                        }
                    </div>
                </div>
                <div className='position-absolute w-auto top-0 p-2  end-0'>

                    <RWebShare
                        data={{ url: window.location.href }}
                        sites={["facebook", "twitter", "whatsapp", "telegram", "linkedin", 'mail', 'copy']}
                        onClick={() => console.info("share successful!")}
                        color="#31B665" >
                        <BsShareFill />
                    </RWebShare>

                </div>
            </div>
        </div>
    )
}
export default NewProductDetailsCards