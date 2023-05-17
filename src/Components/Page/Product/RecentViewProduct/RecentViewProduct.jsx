import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdPlace } from "react-icons/md"
import {GoStar} from "react-icons/go"
import useStyles from "../../../../Style"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import React from "react"
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
const RecentViewProduct = () => {
    const classes = useStyles()
    const ref = React.useRef(null);
    const FlowerArray = [{ imgUrl: "/image/cat_pro_img4.png", name: "flower" },
    { imgUrl: "/image/glass.png", name: "Capsules" },
    { imgUrl: "/image/flower2.webp", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/flower2.webp", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },


    ]
 
    return (
       
        <div className="container-fluid" >
            <div className="row">
                <div className="col-12   recentViewProductSlider"    id="width"ref={ref}>
            <ScrollContainer className="ScrollContainerRelative">
                    {FlowerArray.map((items, index) => {
                        return (
                        
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-12   recentViewProductCard "    key={index} >
                                <div className="row border mx-1">
                                    <div className="col-12 center recentViewImageContainer p-2">
                                        <LazyLoadImage className="recentView_images" src={items.imgUrl} alt="image not availble" />
                                    </div>
                                    <div className="col-12 recentViewProductContent_container mx-1">

                                        <div className="row">
                                            <div className="col-12 recentViewProduct_heading">
                                                <h1>Urban flavour delivery</h1>

                                            </div>
                                            <div className="col-12">
                                                <p><span><MdPlace className={`${classes.homePage_iconsColor}`}/></span> <span className="recentView_place">Berkeley California</span></p>

                                            </div>
                                            <div className="col-12">
                                                <p><span><GoStar className={`${classes.disp_star_color}`}/></span><span className="mx-1 recentView_rating">4.5 Rating</span></p>
                                            </div>
                                            <div className="col-12">
                                            <Box
                                            className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                            style={{ width: "100%" }}
                                        >


                                           
                                            <LoadingButton   style={{ width: "90%" }} variant="outlined"> Order Now</LoadingButton>
                                        </Box>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </ScrollContainer>
                </div>
            </div>
          
        </div>
                 
    )
}
export default RecentViewProduct