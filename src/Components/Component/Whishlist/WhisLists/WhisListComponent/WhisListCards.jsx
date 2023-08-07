import { LazyLoadImage } from "react-lazy-load-image-component"
import { AiOutlineHeart } from "react-icons/ai"
import { IconButton } from "@mui/material"
import { MdOutlinePlace } from "react-icons/md"
import Rating from '@mui/material/Rating';
import { LoadingButton } from "@mui/lab";
import Box from "@mui/material/Box";
import React from "react";
import useStyles from "../../../../../Style";
import { WishListget } from "../../WishListApi_";
import { useNavigate } from "react-router-dom";
const WhisListCard = () => {
    const Navigate=useNavigate()
    const [GetApiData,SetGetApiData]=React.useState([])
    React.useEffect(()=>{
        WishListget().then((val)=>{
            SetGetApiData(val.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    console.log(GetApiData)
    const whishlistCardArray = [
        { name: "Canna cabana", address: "2917 Broadway Astoria, NY 11106", secAddress: "Tyonek Alaska  | 110 mi" },
        { name: "Canna cabana", address: "2917 Broadway Astoria, NY 11106", secAddress: "Tyonek Alaska  | 110 mi" },
        { name: "Canna cabana", address: "2917 Broadway Astoria, NY 11106", secAddress: "Tyonek Alaska  | 110 mi" },
        { name: "Canna cabana", address: "2917 Broadway Astoria, NY 11106", secAddress: "Tyonek Alaska  | 110 mi" },
        { name: "Canna cabana", address: "2917 Broadway Astoria, NY 11106", secAddress: "Tyonek Alaska  | 110 mi" }

    ]
    const classes = useStyles()

    return (
        <div className="col-12 whislistCard_Container">
            {GetApiData.map((items, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className="col_xl_width col-lg-4 col-md-5 col-sm-5 col-12" >
                            <div className="col-12 whislistCard">
                                <div className="col-12 whislist_iconsContainer">
                                    <IconButton><AiOutlineHeart /></IconButton>
                                </div>
                                <div className="col-12 whislistImgCenter">
                                    <div className="whislist_innerImgContainer">
                                        <LazyLoadImage src="./image/cat_pro_7.jpg" className="whislist_imageStyle" alt="imgs-not-found" onClick={()=>Navigate(`/NewProductDetails/${items.product}`)} />
                                    </div>
                                </div>
                                <div className="col-12 whislistCard_Content_Container">
                                    <div className="roductWhislist_nameCol" onClick={()=>Navigate(`/NewProductDetails/${items.product}`)}>
                                        <p className="whislistProductName multine-ellipsis">{items.ProductName}</p>
                                    </div>
                                    <div className="spaceIcons_content_Container" >
                                        <MdOutlinePlace color="#31B665" /><span className="whislistAddress">2917 Broadway Astoria, NY 11106</span>
                                    </div>
                                    <div className="WhishListCard_paddingLeft">
                                        <p className="whislistAddress multine-ellipsis">Tyonek Alaska  | 110 mi</p>
                                    </div>
                                    <div className="spaceIcons_content_Container WhishListCard_paddingLeft">
                                        <span className="whislistAddress">Rating</span><Rating name="read-only" className={classes.homePageStarIcons} value={4} readOnly />
                                    </div>
                                    <div className="col-12 whislistBtnCol">
                                        <Box className={`center ${classes.whishlistBtn}`}>
                                            <LoadingButton>Order now</LoadingButton>
                                        </Box>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </React.Fragment>
                )
            })}





        </div>
    )
}
export default WhisListCard