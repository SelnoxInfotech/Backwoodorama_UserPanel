import React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../Style"
import { Link } from "react-router-dom";
import _ from "lodash";



const ProductList = ({ arr }) => {
    const [Price, SetPrice] = React.useState([])
    const [Item_idq, SetItem] = React.useState('')
    const [AddTOCard, SetAddToCard] = React.useState(() => {
        const saved = localStorage.getItem("items");
        const initialValue = JSON.parse(saved);
        return initialValue || []
    })
    const Addtocard = (Event) => {
        const AddData = _.filter(Price, Price => Price.Product_id === Event.id);
        var PriceIndex = AddData === [] ? "" : AddData;
        const Arry = {
            Product_id: Event.id,
            Product_Name: Event.Product_Name,
            Prices: Event.Prices,
            Store_id: Event.Store_id,
            Image: Event.images,
            Price_index: PriceIndex,
            StoreName: Event.StoreName,
            Product_Quantity: 1
        }
        const Status = AddTOCard.find((data) => {
            if (data.Product_id === Event.id) {
                return true
            }
            return false
        })
        if (Status !== undefined) {
            SetAddToCard(AddTOCard.map((Add) => {
                if (Add.Product_id === Event.id) {
                    if (AddData.length !== 0) {

                        if (AddData[0]?.Item_id === Add.Price_index[0]?.Item_id) {
                        
                             return { ...Add, Product_Quantity: Add.Product_Quantity + 1 }
                        }
                        else {
                            return { ...Add, Price_index: AddData, Product_Quantity: 1 }
                        }
                    }
                    else {
                        return { ...Add, Product_Quantity: Add.Product_Quantity + 1 }
                    }
                }
                
                return Add
            }))
        }
        else (
            SetAddToCard([...AddTOCard, Arry])
        )
    }
    React.useEffect(() => {
        localStorage.setItem('items', JSON.stringify(AddTOCard))
    }, [AddTOCard])

    async function PriceSelect(Product, Item) {
        SetPrice(Price => {
            return Price.filter(Price => Price.Product_id !== Product)
        })
        SetPrice(Price => [...Price, { Product_id: Product, Item_id: Item }]);

        SetItem([Product, Item])
    }



    const classes = useStyles()
    return (
        <div className="col-12  prod_cat_display">
            {arr.map((ele, index) => {
                return (
                    <div className="col-3 prod_inner_cont" key={index}>

                        <div className="col-12 prod_main_cont  p-2">
                            <Link to="/ProductDetail" >
                                <div className="col-4 prod_cat_cont">
                                    <div className="col-12 p-2 prod_cat_img">
                                        <img id={ele.id} src={`http://52.3.255.128:8000/${ele.images[0]?.image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />

                                        <div className="col prod_img_btn prodCat_gap d-flex">
                                            <button className="mx-2 cat_prod_inner_btn btn2">THC 70%</button>
                                        </div>
                                        <button className="cat_prod_inner_btn btn1">Indica</button>

                                    </div>
                                    <div className="col-12">

                                    </div>
                                </div>
                            </Link>
                            <div className="col-8 product_cat_allProduct">
                                <div className="col-12 px-2 prod_para " style={{ marginBottom: "-10px" }}>
                                </div>
                                <div className="col-12 px-2 prod_para_name" style={{ marginBottom: "" }}>
                                    <p className='fontStyle common_sub_head'>{ele.Product_Name}</p>
                                </div>
                                <div className="col-12 px-2 d-flex prod_para" style={{ marginBottom: "0px" }}>
                                    <p className='fontStyle common_sub_head'>Rating</p><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>
                                </div>
                                <div className="col-12   prod_cat_cont_btn px-2">
                                    {ele.Prices?.map((ele1, ndex) => {
                                        var JsonObject = JSON.parse(JSON.stringify(ele1))
                                        var jsondata = JSON.parse(JsonObject.Price)
                                        return (
                                            jsondata.map((data, index) => {
                                                let s = false
                                           
                                                console.log(s)
                                                if ( Price.length=== 0){
                                                    
                                                          if(data.id === 1)
                                                        {
                                                          s = true
                                                        }
                                                    
                                                }
                                                else (
                                                    Price?.map((Price)=>{
                                                        if(ele.id === Price?.Product_id && data.id === Price?.Item_id) {
                                                             s = true
                                                        }
                                                        else {
                                                                
                                                          s = false
                                                        }
                                                        return s
                                                    })
                                                )
                                                return (
                                                    <div className="col-3 prod_cat_btn_cont mt-2 d-flex" id="" key={index} >
                                                        <section
                                                        className={ "prod_cat_btns " + (s ? "active" : "") }
                                                            value={data.id} onClick={() => PriceSelect(ele.id, data.id)} >
                                                            {data.Weight}
                                                            <p className="rs">{data.Price}$</p>
                                                        </section>
                                                    </div>
                                                )
                                            })
                                        )
                                    })}
                                </div>
                                <div className="col-12 d-flex mt-3 mb-2">


                                    <Box
                                        className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                        style={{ width: "93%" }}
                                    >
                                        <LoadingButton onClick={() => { Addtocard(ele) }} variant="outlined">Add to cart</LoadingButton>
                                    </Box>


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


