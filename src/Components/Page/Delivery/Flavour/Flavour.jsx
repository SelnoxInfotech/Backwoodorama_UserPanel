
import LoadingButton from '@mui/lab/LoadingButton';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../Style"
import Box from '@mui/material/Box';

const Flavour = (Deta) => {
    console.log(Deta.delBtn)
    const classes = useStyles()
    const delBtn = [{ del: "Delivery Only" }, { del: "Closed Open" }, { del: "Medical and recreational" }, { del: "Licence and Information" }
        , { del: "order only delivery" }]

    return (
        <>
            <div className="container-fluid" >
                <div className="row center">
                    <div className="col-12 d-flex border flavCont p-0">
                        <div className="col-2 flav_image_col_two">
                            <div className="col-12 flav_img_div">
                                <div className="col-4 flav_img_inner_div">
                                    <img src={`http://52.3.255.128:8000/${Deta.delBtn[0]?.Store_Image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />

                                </div>
                            </div>
                        </div>
                        <div className="col-10  p-2">
                            <div className="col-12 comm_head_prop fontStyle">
                                <p>{Deta.delBtn[0]?.Store_Name}</p>

                            </div>
                            <div className="col-12 d-flex">
                                <p>Rating</p><span className="mx-2"><AiFillStar className={classes.disPen_Icons} /></span>

                            </div>
                            <div className="col-12 ">
                                <p>{Deta.delBtn[0]?.city_name}</p>
                            </div>
                            {/* <div className="col-12  flav_btn">
                                {delBtn.map((ele, index) => {
                                    return (
                                        <div className="col-2 mt-2" key={index}>
                                            <button className="flavo_btns">{ele.del}</button>

                                        </div>
                                    )
                                })}
                            </div> */}

                            <div className="col-12 flavour_mobile_email_btn">
                                <div className="col-2  flav_mobile_btn">
                                    <Box
                                        className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                    >
                                        <LoadingButton variant="outlined">Mobile no</LoadingButton>
                                    </Box>
                                </div>
                                <div className="col-2  flav_email_btn">
                                    <Box
                                        className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                    >
                                        <LoadingButton  variant="outlined">Email</LoadingButton>
                                    </Box>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Flavour