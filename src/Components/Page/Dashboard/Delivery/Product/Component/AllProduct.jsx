import { MdOutlineShoppingCart } from "react-icons/md"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../../../Style"

const AllProduct = ({ arr, btn }) => {
    // console.log(arr)
    // console.log(btn)
    const classes = useStyles()

    return (
        <div className="col-12  prod_cat_display">
            {arr.map((ele, index) => {
                return (
                    <div className="col-3 prod_inner_cont" key={index}>
                        <div className="col-12 prod_main_cont  p-2">
                            <div className="col-4 prod_cat_cont">
                                <div className="col-12 p-2 prod_cat_img">
                                    <img src={ele.img_url} alt="img_not_found" style={{ pointerEvents: "none" }} />
                                    <div className="col prod_img_btn prodCat_gap d-flex">
                                        <button className="mx-2 cat_prod_inner_btn btn2">THC 70%</button>
                                    </div>
                                    <button className="cat_prod_inner_btn btn1">Indica</button>

                                </div>
                            </div>
                            <div className="col">
                                <div className="col-12 px-2 prod_para " style={{ marginBottom: "-10px" }}>
                                    <p className="comm_head_prop fontStyle">{ele.address}</p>

                                </div>
                                <div className="col-12 px-2 prod_para" style={{ marginBottom: "-10px" }}>
                                    <p className='fontStyle common_sub_head'>Flower</p>

                                </div>
                                <div className="col-12 px-2 d-flex prod_para" style={{ marginBottom: "0px" }}>
                                    <p className='fontStyle common_sub_head'>Rating</p><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons} /></span>

                                </div>
                                <div className="col-12   prod_cat_cont_btn px-2">
                                    {btn.map((ele, index) => {
                                        return (
                                            <div className="col-3 prod_cat_btn_cont mt-2 d-flex" key={index}>

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
    )
}
export default AllProduct