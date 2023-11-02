import { LazyLoadImage } from "react-lazy-load-image-component"
import { AiOutlineHeart , AiFillHeart } from "react-icons/ai"
import { IconButton } from "@mui/material"
import { MdOutlinePlace } from "react-icons/md"
import Rating from '@mui/material/Rating';
import ProductIncDecQuantity from "../../../../Page/Product/ProductSearchResult/ProductIncDecQuantity"
import { LoadingButton } from "@mui/lab";
import { BsStar ,BsStarFill } from "react-icons/bs";
import { BiStore } from "react-icons/bi"
import Box from "@mui/material/Box";
import ProductSearchResult from "../../../../Page/Product/ProductSearchResult/ProductSearchResult";
import React from "react";
import axios from "axios";
import useStyles from "../../../../../Style";
import { WishListget,WishListPost } from "../../WishListApi_";
import Createcontext from "../../../../../Hooks/Context"
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'; 
import AddToCartPopUp from "../../../../Page/Product/AddToCartPopUp/AddToCartPopUp";
import _ from "lodash"
import { Link } from "react-router-dom";
import {WhisList} from "../../../../Component/Whishlist/WhisList"
import EmptyCard from '../../../../Page/Product/EmptyCard/EmptyCard'
const WhisListCard = () => {
    const cookies = new Cookies();
    const { state, dispatch } = React.useContext(Createcontext)
    const [Whishlist, SetWishList] = React.useState(false)
  
    const [popup , SetPopup] = React.useState(true)
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
    // function modifystr(str) {
    //     str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    //     str = str.trim().replaceAll(' ', "-");
    //     let a = 0;
    //     while (a < 1) {
    //       if (str.includes("--")) {
    //         str = str.replaceAll("--", "-")
    //       } else if (str.includes("//")) {
    //         str = str.replaceAll("//", "/")
    //       } else if (str.includes("//")) {
    //         str = str.replaceAll("-/", "/")
    //       } else if (str.includes("//")) {
    //         str = str.replaceAll("/-", "/")
    //       } else {
    //         a++
    //       }
    //     }
    
    //     return str.toLowerCase()
    //   }
    // async function AddToCart(Event, counter, SelectWeight , handleClose) {
     
    //     const AddData = _.filter(Event.Prices, Price => Price);
    //     const PriceArrry = _.find(AddData[0].Price, Price => Price.id === SelectWeight);
    //     const FinalSelection = PriceArrry === undefined ? Event.Prices[0].Price[0] : PriceArrry
    //     const FinalPriceId = PriceArrry === undefined ? Event.Prices[0].Price[0].id : PriceArrry.id

    //     const FinalQuantity = counter === undefined ? 1 : counter
    //     if (token_data) {
           
    //         const config = {
    //             headers: { Authorization: `Bearer ${token_data}` }
    //         };
    //         SetNewData({
                
    //             Product_id: Event.id,
    //             Store_id: Event.Store_id,
    //             Image_id: Event.images[0].id,
    //             Price: FinalSelection,
    //             Cart_Quantity: FinalQuantity,
    //             PriceId: FinalPriceId,
    //             category:Event.category_name,
    //             Sub_Category_id:Event.Sub_Category_id,
    //             SubcategoryName:Event.SubcategoryName,
    //             StoreName:Event.StoreName


    //         })
    //         await axios.post("https://api.cannabaze.com/UserPanel/Add-AddtoCart/",

    //             {
    //                 Brand_Id:Event.Brand_id,
    //                 Product_id: Event.id,
    //                 Store_id: Event.Store_id,
    //                 Image_id: Event.images[0].id,
    //                 Price: FinalSelection,
    //                 Cart_Quantity: FinalQuantity,
    //                 PriceId: FinalPriceId,
    //                 category:Event.category_name,
    //                 StoreName:Event.StoreName,
    //                 Sub_Category_id:Event.Sub_Category_id,
    //                 SubcategoryName:Event.SubcategoryName,
                   
    //             }
    //             , config
    //         ).then(response => {
               
    //             if (response.data === "Empty Add to Cart") {
    //                 SetPopup( false)
    //                 SetCartClean(true)

    //             }
    //             SetPopup(false)
    //             dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    //         }).catch(
    //             function (error) {
    //                 SetPopup(false)
    //                 if (error.response.status === 406) {
    //                     alert("This Product" + error.response.data[0])
    //                 }
    //             })
    //     }
    //     else {

            
    //         const Arry = {
    //             Image: Event.images[0].image,
    //             Product_id: Event.id,
    //             Store_id: Event.Store_id,
    //             Image_id: Event.images[0].id,
    //             Price: FinalSelection,
    //             Cart_Quantity: counter || 1,
    //             ProductName: Event.Product_Name,
    //             StoreCurbsidePickup: Event.StoreCurbsidePickup,
    //             StoreDelivery: Event.StoreDelivery,
    //             StorePickup: Event.StorePickup,
    //             StoreAddress: Event.StoreAddress,
    //             category:Event.category_name,
    //             Sub_Category_id:Event.Sub_Category_id,
    //             SubcategoryName:Event.SubcategoryName,
    //             StoreName:Event.StoreName

    //         }
    //         SetNewData(Arry)
    //         if (AddTOCard.length !== 0) {
    //             if (AddTOCard.find((data) => { return data.Store_id === Event.Store_id })) {
    //                 const t = AddTOCard.filter((data) => { return data.Product_id === Event.id && data.Price.id === FinalPriceId })
    //                 if (t.length > 0) {
    //                     SetAddToCard(AddTOCard.map((Cart) => {
    //                         if (Cart.Product_id === Event.id && Cart.Price.id === FinalPriceId) {
    //                             return { ...Cart, Cart_Quantity: Cart.Cart_Quantity + 1 }
    //                         }
    //                         return Cart
    //                     }))
    //                     SetPopup(false)
    //                     dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    //                 }
    //                 else {
    //                     SetPopup(false)
    //                     SetAddToCard([...AddTOCard, Arry])
    //                     dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    //                 }
    //             }
    //             else {
    //                 SetPopup(false)
    //                 SetCartClean(true)
    //             }
    //         }
    //         else {
    //             SetPopup(false)
    //             SetAddToCard([Arry])
    //             dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    //         }
    //         dispatch({ type: 'Cart_subTotal' })
    //     }




    // }
    return (                                                                                                                            
        <div className="whislistCard_wrapper1">
            {
                GetApiData.length ? <ProductSearchResult RelatedProductResult={GetApiData} CategoryName={"Wishlist"} /> : <EmptyCard/>
            }
             
        </div>
    )
}
export default WhisListCard