import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../Style"
import { Link } from "react-router-dom";
import _ from "lodash";
const ProductList = ({ arr }) => {

    const [Price, SetPrice] = React.useState([])


    const Addtocard = (Event) => {
        // const johnArr = _.filter(Price, Price => Price.Event.id === Event.id - 1)
        // console.log(johnArr);
        // SetPrice(Price.map((price)=>{


        // }))


    }



    const PriceSelect = (Product, Item) => {
        //          Price.forEach((item) =>{ 
        // console.log(Product)
        //        item.Product_id === Product_id 
        //        ?  SetPrice({...Price, Item_id: Item_id })
        //        : SetPrice([...Price, { Product_id, Item_id }])
        //    })

        if (Price.length === 0) {
            SetPrice([...Price, { Product_id: Product, Item_id: Item }])
        }

        if (Price.map((friend) => { return friend.Product_id === Product })) {
            console.log(Price)
           
             SetPrice(
                Price.map((friend) =>
                    friend.Product_id === Product
                        ? { ...friend, Item_id: Item }
                        : { ...friend }
                )
            )
        }
        else  {

            SetPrice([...Price, { Product_id: Product, Item_id: Item }])
            // SetPrice(
            //     Price.map((friend) =>
            //         friend.Product_id === Product
            //             ? { ...friend, Item_id: Item }
            //             : { ...friend }
            //     )
            // )
              console.log(Price)`   `
        }
        
            //   
        

        // SetPrice((prev)=>prev.map((task)=>{
        //     if(task.Product_id === Product_id){
        //       return { ...Price, Item_id: Item_id }
        //     }  
        //     else{
        //       return [...Price, { Product_id, Item_id }];
        //     }
        // }))

        // console.log(Price)
        // // SetPrice(
        //     Price?.map((data) => { 
        //     console.log(data.Product_id)
        //     if (data.Product_id === Product_id) {
        //         return SetPrice({ ...Price, Item_id: Item_id })
        //     }
        //     // else {
        //     return( [...Price, { Product_id, Item_id }])
        // }

        //   return  data.Product_id === Product_id ? { ...Price, Item_id: Item_id } : [...Price, { Product_id, Item_id }]
        // })   
        // )
        //  }

    }
    // console.log(Price)

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
                                </div>
                            </Link>
                            <div className="col-8 product_cat_allProduct">
                                <div className="col-12 px-2 prod_para " style={{ marginBottom: "-10px" }}>
                                </div>
                                <div className="col-12 px-2 prod_para" style={{ marginBottom: "-10px" }}>
                                    <p className='fontStyle common_sub_head'>{ele.Product_Name}</p>
                                </div>
                                <div className="col-12 px-2 d-flex prod_para" style={{ marginBottom: "0px" }}>
                                    <p className='fontStyle common_sub_head'>Rating</p><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>
                                </div>
                                <div className="col-12   prod_cat_cont_btn px-2">
                                    {ele.Prices?.map((ele1, index) => {
                                        var JsonObject = JSON.parse(JSON.stringify(ele1))
                                        var jsondata = JSON.parse(JsonObject.Price)
                                        return (
                                            jsondata.map((data, index) => {
                                                return (
                                                    <div className="col-3 prod_cat_btn_cont mt-2 d-flex" key={index} >
                                                        <section className="prod_cat_btns " id="active" value={data.id} onClick={() => PriceSelect(ele.id, data.id, data.id)} >
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

                                    <MdOutlineShoppingCart onClick={() => { Addtocard(ele) }} className={classes.muiIcons} />

                                    <Box
                                        className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                        style={{ width: "83%" }}
                                    >
                                        <LoadingButton variant="outlined">Buy Now</LoadingButton>
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