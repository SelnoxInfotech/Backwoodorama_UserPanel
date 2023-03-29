import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../../Style"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AllProduct from "./Component/AllProduct"
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
    const arr2 = [{ img_url: "./image/weed_img2.jpeg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/wee_img1.jpeg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo.webp", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/logo2.png", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/cat_prod_5.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/cat_prod_6.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/cat_pro_7.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },
    { img_url: "./image/cat_pro_8.jpg", address: "Canna Cabana", sec_add: "2917 Broadway astoria NY 11106", rating: "Rating" },

    ]
    const weeBtn = [{ quant: "1gms", rs: "121$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" },
    { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" }]
    return (
        <div className="container-fluid p-4  add_prod_cont">
            <div className="row center">
                <div className="col-10  add_product_main_cont">
                    <div className="col-3  add_product_img_continer">
                        <div className="col-12 add_prod_first_img">
                            <img src="./image/cat_prod_6.jpg" alt="img_not_found" />

                        </div>
                        <div className="col-12 add_prod_multiple_img">
                            {arr1.map((ele, index) => {
                                return (
                                    <div className="col-3 p-2" key={index}>
                                        <div className="col-12 add_prod_inner_img ">
                                            <img src={ele.img_url} alt="img_not_found" />
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
                                    <div className="col-1 add_prod_inner_div" key={index}>
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
                        <div className="col-12 d-flex fontStyle add_prod_amount add_prod_rat">
                            <p>Amount</p> <p className="add_prod_span1">$64</p>
                            <span className="add_prod_span">
                                <button className="add_prod_amount_btn"><span className="add_prod_plus_sub">+</span></button><span className="add_prod_amoount_data">1</span><button className="add_prod_amount_btn"><span>-</span></button>
                            </span>

                        </div>
                        <div className="col-12">
                            <Box
                                className={` add_product_btn addProduct_btn ${classes.loadingBtnTextAndBack}`}

                            >
                                <LoadingButton variant="outlined">Add To Cart</LoadingButton>
                            </Box>

                        </div>
                    </div>

                </div>

                <div className="col-10  border mt-4 product_desc_container">
                    <div className="col-10  prod_des_head fontStyle ">
                        <p>Product Description</p>
                    </div>
                    <div className="col-10 center product_des_para ">



                        <p>Durban Thai [DTA] is a favorite of sativa lovers everywhere for its intense mental clarity and super delicious flavor.
                            The Durban Thai feeling is very cerebral in nature,
                            with heady effects that begin almost as soon as the first exhale. Experience a clear headed high without any racing thoughts!</p>



                    </div>
                </div>
                <div className="col-10  border mt-4 product_desc_container">
                    <div className="col-10  prod_des_head fontStyle ">
                        <p>50 Flower reviews</p>
                    </div>
                    <div className="col-12  add_prod_rat mt-2">
                        <p>3.2</p> <span><AiFillStar className={classes.disPen_Icons} /></span>

                    </div>
                    <div className="col-12 prod_desc_review p-2">
                        <div className="col-12   prod_des_head fontStyle ">
                            <p>Maxwell</p>
                        </div>
                        <div className="col-12  add_prod_rat">
                            <p>3.2</p> <span><AiFillStar className={classes.disPen_Icons} /></span>

                        </div>

                        <div className="col-12 mt-4 center product_des_para  p-2 ">

                            <p>
                                By far the best strain I’ve ever tried. I love the energy and stimulating affects to my brain. I have ADHD and
                                I’m I’ve been on the same meds for years so they don’t always work that great.
                                However, I do find sativa strains that help and this has been the best for me thus fa



                            </p>

                        </div>


                    </div>
                </div>
                <div className="col-10 mt-4">
                   <AllProduct arr={arr2} btn={weeBtn}/>
                </div>

            </div>




        </div>
    )
}
export default AddProduct