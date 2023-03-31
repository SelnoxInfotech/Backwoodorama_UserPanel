import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../Style"
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Add } from "@mui/icons-material";

const ProductList = ({ arr, btn }) => {
    const [ProductImage, SetProductImage] = React.useState('')
     const method = useForm()

    const Addtocard = (Event) => {
        const element = document.getElementById(Event);
        console.log(element)
    }

    const classes = useStyles()
    return (
        <div className="col-12  prod_cat_display">
            {arr.map((ele, index) => {
                   
               
                
                return (
                    <div className="col-3 prod_inner_cont" key={index}>
                      <form onSubmit ={method.handleSubmit(Addtocard)} >
                      <div className="col-12 prod_main_cont  p-2">
                            <Link to="/ProductDetail" >
                                <div className="col-4 prod_cat_cont">
                                    <div className="col-12 p-2 prod_cat_img">
                                        <img id={ele.id} src={`http://52.3.255.128:8000/${ele.images[0]?.image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />
                                    
                                        <div className="col prod_img_btn prodCat_gap d-flex">
                                            <button className="mx-2 cat_prod_inner_btn btn2">THC 70%</button>
                                        </div>
                                        <button  className="cat_prod_inner_btn btn1">Indica</button>

                                    </div>
                                </div>
                            </Link>
                            <div className="col-8 product_cat_allProduct">
                                <div className="col-12 px-2 prod_para " style={{ marginBottom: "-10px" }}>
                                    <p className="comm_head_prop fontStyle">{ele.address}</p>
                                </div>
                                <div className="col-12 px-2 prod_para" style={{ marginBottom: "-10px" }}>
                                    <p className='fontStyle common_sub_head'>{ele.Product_Name}</p>
                                </div>
                                <div className="col-12 px-2 d-flex prod_para" style={{ marginBottom: "0px" }}>
                                    <p className='fontStyle common_sub_head'>Rating</p><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>
                                </div>
                                <div className="col-12   prod_cat_cont_btn px-2">
                                    {btn.map((ele, index) => {
                                        return (
                                            <div className="col-3 prod_cat_btn_cont mt-2 d-flex" key={index} >
                                                <button className="prod_cat_btns" value={ele.rs} >
                                           {ele.quant} 
                                              <p  className="rs">   {ele.rs}$</p>
                                                 </button>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="col-12 d-flex mt-3 mb-2">
                          
                                <MdOutlineShoppingCart  className={classes.muiIcons} />
                               
                                    <Box
                                        className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                        style={{ width: "83%" }}
                                    >
                                        <LoadingButton onClick={() => Addtocard(ele.id)} variant="outlined">Buy Now</LoadingButton>
                                    </Box>
                                </div>
                            </div>
                        </div> 
                      </form>
                    </div>
                )
            })}


        </div>
    )
}
export default ProductList