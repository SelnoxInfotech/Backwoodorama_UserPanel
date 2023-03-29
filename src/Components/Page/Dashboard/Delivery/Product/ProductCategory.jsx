import { BsLayoutSplit } from "react-icons/bs"
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../../Style"
import { MdOutlineShoppingCart } from "react-icons/md"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import AllProduct from "./Component/AllProduct"
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
    const weeBtn = [{ quant: "1gms", rs: "121$" }, { quant: "1gms", rs: "2$" }, { quant: "1gms", rs: "2$" },
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
                        <div className="col-9   prod_cat_right_sec ">
                              <AllProduct arr={arr1} btn={weeBtn} />


                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default ProductCategory