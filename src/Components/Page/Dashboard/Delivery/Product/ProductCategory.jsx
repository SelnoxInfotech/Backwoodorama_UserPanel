import { BsLayoutSplit } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../../Style"
import { MdOutlineShoppingCart } from "react-icons/md"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';

const ProductCategory = () => {
    const classes = useStyles()

    const arr1 = [{ img_url: "./image/weed_img2.jpeg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/wee_img1.jpeg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo.webp", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo2.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/cat_prod_5.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/cat_prod_6.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/cat_pro_7.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/cat_pro_8.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },

    ]
    const weeBtn = [{ quant: "1gms", rs: "1$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }]

    return (
        <>
            <div className="container-fluid" style={{ padding: "35px" }}>
                <div className="row center">
                    <div className="col-12   productCat_cont p-2">
                        <div className="col-3  prod_cat_left_sec center d-block p-2">
                            <div className="col-12 ">
                                <h5>Product Category</h5>

                            </div>
                            <div className="col-12 d-flex prodCat_gap" >
                                <span><BsLayoutSplit /></span><p>All category</p>

                            </div>

                        </div>
                        <div className="col-9   prod_cat_right_sec p-2">
                            <div className="col-12  prod_cat_display">
                                {arr1.map((ele, index) => {
                                    return (
                                        <div className="col-3 prod_inner_cont" key={index}>
                                            <div className="col-12 prod_main_cont  p-2">
                                                <div className="col-4 prod_cat_cont">
                                                    <div className="col-12 p-2 prod_cat_img">
                                                        <img src={ele.img_url} alt="img_not_found" style={{ pointerEvents: "none" }} />
                                                        <div className="col prod_img_btn prodCat_gap d-flex">
                                                            <button className="cat_prod_inner_btn btn1">Indica</button>
                                                            <button className="mx-2 cat_prod_inner_btn btn2">Sativa</button>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="col-12 px-2 " style={{ marginBottom: "-10px" }}>
                                                        <p className="comm_head_prop fontStyle">{ele.address}</p>

                                                    </div>
                                                    <div className="col-12 px-2" style={{ marginBottom: "-10px" }}>
                                                        <p className='fontStyle common_sub_head'>Flower</p>

                                                    </div>
                                                    <div className="col-12 px-2 d-flex" style={{ marginBottom: "0px" }}>
                                                        <h5 className='fontStyle common_sub_head'>Rating</h5><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>

                                                    </div>
                                                    <div className="col-12   prod_cat_cont_btn px-2">
                                                        {weeBtn.map((ele, index) => {
                                                            return (
                                                                <div className="col-3  mt-2 d-flex" key={index}>

                                                                    <button className="prod_cat_btns">

                                                                        {ele.quant}
                                                                        <p className="rs">{ele.rs}</p>
                                                                    </button>
                                                                </div>

                                                            )
                                                        })}
                                                    </div>
                                                    <div className="col-12 d-flex mt-3 mb-2">
                                                        <MdOutlineShoppingCart className={classes.muiIcons} />
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

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default ProductCategory