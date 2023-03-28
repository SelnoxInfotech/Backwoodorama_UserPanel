import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../../Style"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
const AddProduct = () => {
    const classes = useStyles()
    const arr1 = [{ img_url: "./image/weed_img2.jpeg" },
    { img_url: "./image/wee_img1.jpeg" },
    { img_url: "./image/logo.webp" },
    { img_url: "./image/logo2.png" },
    ]
    const addProdBtn = [{ type: "CBD", }, { type: "THC" }, { type: "Hybrid" },
    ]
    const addProdQuantBtn = [{ quant: "1gms", rs: "121$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" },

    ]
    return (
        <div className="container-fluid p-4  add_prod_cont">
            <div className="row center">
                <div className="col-10  add_product_main_cont">
                    <div className="col-3  add_product_img_continer">
                        <div className="col-12 add_prod_first_img">
                            <img src="./image/cat_prod_6.jpg" />

                        </div>
                        <div className="col-12 add_prod_multiple_img">
                            {arr1.map((ele, index) => {
                                return (
                                    <div className="col-3 p-2" key={index}>
                                        <div className="col-12 add_prod_inner_img ">
                                            <img src={ele.img_url} />
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <div className="col-7 add_product_content_cont ">
                        <div className="col-12 fontStyle add_prod_para">
                            <p>Alliens Cookies BLUE DREAM  THC FLOWER</p>

                        </div>
                        <div className="col-12 add_prod_p">
                            <p>By careleaf</p>
                        </div>
                        <div className="col-12  add_prod_btn">
                            {addProdBtn.map((ele, index) => {
                                return (
                                    <div className="col-2 add_prod_inner_div" key={index}>
                                        <button className="add_pro_btn add_prod_btn_font">{ele.type}</button>

                                    </div>
                                )
                            })}


                        </div>
                        <div className="col-12  add_prod_rat mt-2">
                            <p>Rating 3.2</p> <span><AiFillStar className={classes.disPen_Icons} /></span>

                        </div>
                        <div className="col-6 add_prod_quant_btn_div">
                            {addProdQuantBtn.map((ele, index) => {
                                return (
                                    <div className="col-3 add_prod_quant_inner_div mt-2 " key={index}>
                                        <button className="add_prod_Quant_btn">
                                            {ele.quant}
                                            <p className="rs">{ele.rs}</p>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-12 d-flex fontStyle add_prod_amount">
                            <p>Amount</p> <p className="add_prod_span1">$64</p>
                            <span className="add_prod_span">
                                <button className="add_prod_amount_btn"><span className="add_prod_plus_sub">+</span></button><span className="add_prod_amoount_data">1</span><button className="add_prod_amount_btn"><span>-</span></button>
                            </span>

                        </div>
                        <div className="col-12">
                            <Box
                                className={` add_product_btn ${classes.loadingBtnTextAndBack}`}
                                style={{ width: "25%" }}
                            >
                                <LoadingButton variant="outlined">Add To Cart</LoadingButton>
                            </Box>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default AddProduct