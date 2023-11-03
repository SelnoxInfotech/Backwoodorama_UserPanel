import ProductSearchResult from "../../../../Page/Product/ProductSearchResult/ProductSearchResult";
import React from "react";
import axios from "axios";
import { WishListget,WishListPost } from "../../WishListApi_";
import Createcontext from "../../../../../Hooks/Context"
import Cookies from 'universal-cookie'; 
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../../Style"
import {AiFillHeart} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
import _ from "lodash"
const WhisListCard = () => {
    const classes = useStyles()
    const Navigate = useNavigate()

    function ShopNow (){
        Navigate("/")

    }
    const cookies = new Cookies();
    const { state, dispatch } = React.useContext(Createcontext)
  
    const [GetApiData, SetGetApiData] = React.useState([])
    // const [AddTOCard, SetAddToCard] = React.useState(() => {
    //     const saved = localStorage.getItem("items");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || []
    // })

    React.useEffect(() => {
        if(state.login){
            WishListget().then((val) => {
                SetGetApiData(val.data)
            }).catch((error) => {
            
            })
        }
    }, [state.WishList])

    // const handleWhishList = (id) => {
    //     if (state.login === false) {
    //         SetWishList(!Whishlist)
    //     }
    //     else {
    //         WishListPost(id).then(async (res) => {
    //             if (res.data.data === 'Remove From WishList') {
    //                 dispatch({ type: 'WishList', WishList: { ...state.WishList, [id]: !state.WishList[id] } })
    //             }
    //             else {
    //                 dispatch({ type: 'WishList', WishList: { ...state.WishList, [id]: true } })
    //             }
    //         }).catch((err) => { });
    //     }
    // }
    // const Addtocard = async (Event) => {
      
    //     if (token_data) {
    //         const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
    //         const PriceArrry = _.find(Event?.Prices[0].Price, Price => AddData[0]?.Product_id === Event.id && AddData[0]?.Item_id === Price.id);
    //         let PriceIndex = PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;
    //         const config = {
    //             headers: { Authorization: `Bearer ${token_data}` }
    //         };
    //         SetNewData({
    //             Product_id: Event.id,
    //             Store_id: Event.Store_id,
    //             Image_id: Event?.images[0]?.id,
    //             Price: PriceIndex,
    //             Cart_Quantity: 1,
    //             PriceId: PriceIndex.id

    //         })
    //         await axios.post("https://api.cannabaze.com/UserPanel/Add-AddtoCart/",

    //             {
    //                 Product_id: Event.id,
    //                 Store_id: Event.Store_id,
    //                 Image_id: Event.images[0].id,
    //                 Price: PriceIndex,
    //                 Cart_Quantity: 1,
    //                 PriceId: PriceIndex.id

    //             }
    //             , config
    //         ).then(response => {
    //             if (response.data === "Empty Add to Cart") {
    //                 SetCartClean(true)
    //             }
    //             dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    //         }).catch(
    //             function (error) {
    //                 if (error.response.status === 406) {
    //                     alert("This Product" + error.response.data[0])
    //                 }
    //             })
    //     }
    //     else {
    //         const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
    //         const PriceArrry = _.find(Event?.Prices[0].Price, Price => AddData[0]?.Product_id === Event.id && AddData[0]?.Item_id === Price.id);
    //         let PriceIndex = PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;

    //         const Arry = {
    //             Image: Event.images[0].image,
    //             Product_id: Event.id,
    //             Store_id: Event.Store_id,
    //             Image_id: Event.images[0].id,
    //             Price: PriceIndex,
    //             Cart_Quantity: 1,
    //             ProductName: Event.Product_Name,
    //             StoreCurbsidePickup: Event.StoreCurbsidePickup,
    //             StoreDelivery: Event.StoreDelivery,
    //             StorePickup: Event.StorePickup,
    //             StoreAddress: Event.StoreAddress




    //         }
    //         SetNewData(Arry)
    //         if (AddTOCard.length !== 0) {
    //             if (AddTOCard.find((data) => { return data.Store_id === Event.Store_id })) {
    //                 const t = AddTOCard.filter((data) => { return data.Product_id === Event.id && data.Price.id === PriceIndex.id })
    //                 if (t.length > 0) {
    //                     SetAddToCard(AddTOCard.map((Cart) => {
    //                         if (Cart.Product_id === Event.id && Cart.Price.id === PriceIndex.id) {
    //                             return { ...Cart, Cart_Quantity: Cart.Cart_Quantity + 1 }
    //                         }
    //                         return Cart
    //                     }))
    //                     dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    //                 }
    //                 else {
    //                     SetAddToCard([...AddTOCard, Arry])
    //                     dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    //                 }
    //             }
    //             else {
    //                 SetCartClean(true)
    //             }
    //         }
    //         else {
    //             SetAddToCard([Arry])
    //             dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    //         }
    //         // dispatch({ type: 'Cart_subTotal' })
    //     }
    // }
    // React.useEffect(() => {
    //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    //     localStorage.setItem('items', JSON.stringify(AddTOCard))
    // }, [AddTOCard])
   
    return (                                                                                                                            
        <div className="whislistCard_wrapper1">
            {
                GetApiData.length ? <ProductSearchResult RelatedProductResult={GetApiData} CategoryName={"Wishlist"} /> :    <div className="container-fluid Empty_container_margin_top">
                <div className="row">
                    <div className="col-12 EmtyCard_container">
                        <div className="row">
                            <div className="col-12 image_container">
                                <div className="Empty_card_image">
                                  
                                    <Box className={classes.muiIcons}>
                                    <AiFillHeart size={50} color={"#31B665"}/>
                                    </Box>
                                </div>

                            </div>
                            <div className="col-12 center height_empty_div_heading">
                                <h2>You have no favorites.</h2>
                            </div>
                            <div className="col-12 center height_empty_div_paragraph ellipsis">
                                <p>Don't wait to bake. Add items to your favorites  and enjoy</p><br/>

                            </div>
                            <div className="col-12 center height_empty_div_paragraph ellipsis">
                            <p> your weed today.</p>

                            </div>
                            <div className="col-12 center height_Empty_btnDiv mt-2">
                            <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                     <LoadingButton onClick={ShopNow} style={{width:"100%",height:"100%"}} variant="outlined" loading={false} type={'submit'}>Shop now</LoadingButton>
                                </Box>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
            }
             
        </div>
    )
}
export default WhisListCard