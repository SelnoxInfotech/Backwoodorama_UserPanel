import { LazyLoadImage } from "react-lazy-load-image-component"
import { AiOutlineHeart } from "react-icons/ai"
import { IconButton } from "@mui/material"
import { MdOutlinePlace } from "react-icons/md"
import Rating from '@mui/material/Rating';
import { LoadingButton } from "@mui/lab";
import { AiFillHeart } from "react-icons/ai"
import Box from "@mui/material/Box";
import React from "react";
import axios from "axios";
import useStyles from "../../../../../Style";
import { WishListget,WishListPost } from "../../WishListApi_";
import Createcontext from "../../../../../Hooks/Context"
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'; 
import AddToCartPopUp from "../../../../Page/Product/AddToCartPopUp/AddToCartPopUp";
import _ from "lodash"
import {WhisList} from "../../../../Component/Whishlist/WhisList"
const WhisListCard = () => {
    const cookies = new Cookies();
    const { state, dispatch } = React.useContext(Createcontext)
    const [Whishlist, SetWishList] = React.useState(false)
    const Navigate = useNavigate()
    const classes = useStyles()
    const [Price, SetPrice] = React.useState([])
    const token_data = cookies.get('Token_access')
    const [CartClean, SetCartClean] = React.useState(false)
    const [GetApiData, SetGetApiData] = React.useState([])
    const [AddTOCard, SetAddToCard] = React.useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })
    const [NewData, SetNewData] = React.useState([])
    React.useEffect(() => {
    if(state.login){
        WishListget().then((val) => {
            SetGetApiData(val.data)
        }).catch((error) => {
          
        })
    }
    }, [state.WishList])

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
    function modifystr(str) {
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

    return (                                                                                                                            
        <div className="col-12 whislistCard_Container">
            {GetApiData?.map((items, index) => {
             return (                                                                                    
                    <React.Fragment key={index}>
                        <div className="wis" >
                            <div className="col-12 whislistCard">
                                <div className="col-12 whislist_iconsContainer">
                                    {state.WishList[items.id] ?
                                        <Box className={classes.productSearchIcons}>
                                            <IconButton onClick={() => { handleWhishList(items.id) }} aria-label="Example">

                                                <AiFillHeart></AiFillHeart>

                                            </IconButton>
                                        </Box>
                                        :
                                        <Box className={classes.productSearchIcons}>
                                            <IconButton onClick={() => { handleWhishList(items.id) }} aria-label="Example">

                                                <AiOutlineHeart />

                                            </IconButton>
                                        </Box>}
                                </div>
                                <div className="col-12 whislistImgCenter">
                                    <div className="whislist_innerImgContainer">

                                        <LazyLoadImage
                                            onError={event => {
                                                event.target.src = "/image/blankImage.jpg"
                                                event.onerror = null
                                            }}
                                            src={`${items?.images[0]?.image}`}
                                            className="whislist_imageStyle"
                                            alt="imgs-not-found"
                                            onClick={() => Navigate(`/products/${modifystr(items.category_name.toLowerCase())}/${items.SubcategoryName.replace(/%20| /g, "-").toLowerCase()}/${modifystr(items.Product_Name.toLowerCase())}/${items.id}`)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 whislistCard_Content_Container">
                                    <div className="roductWhislist_nameCol" onClick={() => Navigate(`/NewProductDetails/${items.product}`)}>
                                        <p className="whislistProductName multine-ellipsis">{items.ProductName}</p>
                                    </div>
                                    <div className="spaceIcons_content_Container" >
                                        <MdOutlinePlace size={18} color="#31B665" /><span className="whislistAddress">{items.StoreAddress}</span>
                                    </div>
                                    <div className="WhishListCard_paddingLeft">
                                        <h3 className="whislistAddress multine-ellipsis"> by {items.StoreName}</h3>
                                    </div>
                                    <div className="spaceIcons_content_Container WhishListCard_paddingLeft">
                                        <span className="whislistAddress">Rating</span><Rating name="read-only" className={classes.homePageStarIcons} value={4} readOnly />
                                    </div>
                                    <div className="col-12 whislistBtnCol">
                                        <Box className={`center ${classes.whishlistBtn}`}>
                                            <LoadingButton onClick={() => { Addtocard(items) }}>Add To Card</LoadingButton>
                                        </Box>
                                        {
                                CartClean && <AddToCartPopUp CartClean={"center"} SetCartClean={SetCartClean} NewData={NewData} SetAddToCard={SetAddToCard} />
                            }
                                    </div>

                                </div>
                            </div>

                        </div>
                        {Whishlist && <WhisList open1={Whishlist} SetWishList={SetWishList}></WhisList>}
                    </React.Fragment>
                )
            })}





        </div>
    )
}
export default WhisListCard