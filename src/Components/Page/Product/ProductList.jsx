import React, { useContext } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../Style"
import { Link, useNavigate } from "react-router-dom";
import _ from "lodash";
import axios from "axios";
import Cookies from 'universal-cookie';
import FlyingButton from 'react-flying-item'
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

    // const Addtocard = async (Event) => {
    //     const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
    //     var PriceIndex = AddData === [] ? "" : AddData;
    //     const Arry = {
    //         Product_id: Event.id,
    //         Product_Name: Event.Product_Name,
    //         Prices: Event.Prices,
    //         Store_id: Event.Store_id,
    //         Image: Event.images,
    //         Price_index: PriceIndex,
    //         StoreName: Event.StoreName,
    //         Product_Quantity: 1,
    //         SubTotal: state.SubTotal

    //     }

    //     const Status = AddTOCard.find((data) => {
    //         if (data.Product_id === Event.id) {
    //             return true
    //         }
    //         return false
    //     })
    //     const Store = AddTOCard.find((data) => {
    //         if (data.Store_id === Event.Store_id) {
    //             return true
    //         }
    //         return false
    //     })
    //     if (Store !== undefined) {

    //         if (Status !== undefined) {
    //             await SetAddToCard(AddTOCard.map((Add) => {
    //                 if (Add.Product_id === Event.id) {
    //                     if (AddData.length !== 0) {

    //                         if (AddData[0]?.Item_id === Add.Price_index[0]?.Item_id) {

    //                             return { ...Add, Product_Quantity: Add.Product_Quantity + 1 }
    //                         }
    //                         else {
    //                             return { ...Add, Price_index: AddData, Product_Quantity: 1 }
    //                         }
    //                     }
    //                     else {
    //                         return { ...Add, Product_Quantity: Add.Product_Quantity + 1 }
    //                     }
    //                 }

    //                 return Add
    //             }))
    //         }
    //         else (
    //             SetAddToCard([...AddTOCard, Arry])
    //         )
    //     }
    //     else {
    //         SetAddToCard([Arry])
    //     }

    // }




    const Addtocard = async (Event) => {
        console.log(Event)
        if (token_data) {
            const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
            const PriceArrry = _.find(Event?.Prices[0].Price, Price => AddData[0]?.Product_id === Event.id && AddData[0]?.Item_id === Price.id);
            var PriceIndex = PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;
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
            axios.post("http://52.3.255.128:8000/UserPanel/Add-AddtoCart/",

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
                dispatch({ type: 'CartCount' })


            }).catch(
                function (error) {

                })
        }
        else {
            const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
            const PriceArrry = _.find(Event?.Prices[0].Price, Price => AddData[0]?.Product_id === Event.id && AddData[0]?.Item_id === Price.id);
            var PriceIndex = PriceArrry === undefined ? Event?.Prices[0].Price[0] : PriceArrry;

            const Arry = {
                Image : Event.images[0].image,
                Product_id: Event.id,
                Store_id: Event.Store_id,
                Image_id: Event.images[0].id,
                Price: PriceIndex,
                Cart_Quantity: 1,
                ProductName:Event.Product_Name
            }
            SetNewData(Arry)
            if (AddTOCard.length != 0) {
                if (AddTOCard.find((data) => { return data.Store_id === Event.Store_id })) {
                    const t = AddTOCard.filter((data) => { return data.Product_id === Event.id && data.Price.id === PriceIndex.id })
                    if (t.length > 0) {


                        SetAddToCard(AddTOCard.map((Cart) => {
                            if (Cart.Product_id === Event.id && Cart.Price.id === PriceIndex.id) {

                                return { ...Cart, Cart_Quantity: Cart.Cart_Quantity + 1 }
                            }

                            return Cart
                        }))
                    }
                    else {
                        SetAddToCard([...AddTOCard, Arry])
                    }
                }
                else {
                    SetCartClean(true)
                }
            }
            else (
                SetAddToCard([Arry])
            )

        }
    }


    React.useEffect(() => {

        localStorage.setItem('items', JSON.stringify(AddTOCard))
        dispatch({ type: 'CartCount', CartCount: AddTOCard.length })
        // const config = {
        //     headers: { Authorization: `Bearer ${token_data}` }
        // };
        // if (state.login === true) {
        //      AddTOCard.map((a)=>{

        //     axios.post("http://52.3.255.128:8000/UserPanel/Add-AddtoCart/",
        //     a,
        //         config


        //     ).then(response => {


        //     }).catch(
        //         function (error) {

        //         })
        //      })
        // }
    }, [AddTOCard])



    async function PriceSelect(Product, Item) {
        SetPrice(Price => {
            return Price.filter(Price => Price.Product_id !== Product)
        })
        SetPrice(Price => [...Price, { Product_id: Product, Item_id: Item }]);

        // SetItem([Product, Item])
    }

    function Product_Details(ele) {
        navigation("/ProductDetail", { state: { Id: ele.id } })
    }

    const classes = useStyles()
    return (
        <div className="row" style={{height:"auto"}}>
            {arr.map((ele, index) => {
                return (
                    <div className="col-12 col-xl-3 col-lg-4 col-md-4 col-sm-6  prod_inner_cont " key={index}>

                        {/* <div className="col-12 prod_main_cont  p-2"> */}
                        <div className="row product_inner_row">

                            {/* <Link to="/ProductDetail" state={{ Id: ele.id }}> */}
                            <div className="col-4 prod_cat_cont" >
                                <Link to="/ProductDetail" state={{ Id: ele.id }}>
                                    <div className="col-10 p-2 prod_cat_img">
                                        <img id={ele.id} src={`http://52.3.255.128:8000/${ele.images[0]?.image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />
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
                                    <p className='fontStyle common_sub_head'>Rating</p><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>
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
                                                            <p className="rs">${data.SalePrice}</p>
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

                                        <FlyingButton src={`http://52.3.255.128:8000/${ele.images[0]?.image}`} targetTop={'00%'} targetLeft={'100%'}>

                                            <LoadingButton onClick={() => { Addtocard(ele) }} variant="outlined"> AddToCart</LoadingButton>
                                        </FlyingButton>
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
    )
}
export default ProductList


