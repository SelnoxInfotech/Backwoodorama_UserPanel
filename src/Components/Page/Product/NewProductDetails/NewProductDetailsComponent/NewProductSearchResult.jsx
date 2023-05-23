import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';

import { Rating } from '@mui/material';
import useStyles from '../../../../../Style';
import Axios from "axios"
const NewProductSearchResult = () => {
    const classes = useStyles()


    const ref = React.useRef(null);
    const NewProductSearchRseultArray = [{ imgUrl: "./image/social.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" },
    { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }
    ]

    return (

        <div className='container-fluid'>
            <div className='row center'>
                <div className='col-lg-10 col-12 newProductDetailsHeading'>
                    <p>You may also like</p>

                </div>
                <div className="col-lg-10 col-12   recentViewProductSlider" id="width" ref={ref}>
                    <ScrollContainer className="ScrollContainerRelative">
                        {NewProductSearchRseultArray.map((items, index) => {
                            return (
                                <div className=" col-xxl-3  col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4  productSearch_result_container" key={index}>
                                    <div className="row productsearch_result_inner_container mx-1">

                                        <div className="col-12  productSearchResultImage_container">
                                            <div className="col-12 product_whish_list text-end">
                                                <Box className={classes.productSearchIcons}>
                                                    <IconButton aria-label="Example">
                                                        {
                                                            false ? <AiFillHeart></AiFillHeart> : <AiOutlineHeart />
                                                        }

                                                    </IconButton>

                                                </Box>
                                            </div>

                                            <LazyLoadImage

                                                className="product_search_result_image"
                                                onError={event => {
                                                    event.target.src = "/image/blankImage.jpg"
                                                    event.onerror = null
                                                }}
                                                src={items.imgUrl}
                                                height={"100px"}
                                            />

                                        </div>
                                        <div className="col-12 product_search_result_content_div ">
                                            <div className="row gap-0">
                                                <div className="col-12 productSearchResultParagraph ">
                                                    <p className="text-truncate">Black runtz 5gm</p>
                                                </div>
                                                <div className="col-12 product_search_result_sub_heading ">
                                                    <p className=" text-truncate">by Good weed Nyc</p>
                                                </div>
                                                <div className="col-12 product_category_list">
                                                    <span className="product_search_result_span1">15% THC | 0.2% CBD</span>
                                                    <span className="product_search_result_span2"><span className={` ${classes.disp_star_color}`}><IoMdStar className="product_search_rating_star" /></span>4.5 rating</span>

                                                </div>

                                                <div className="col-12 productPriceDivHeight">

                                                    <p className="productSearch text-truncate"><span className="productSearchPrice">$35</span> PER 1z</p>




                                                </div>
                                                <div className="col-12  my-4">
                                                    <Box className={`center ${classes.loadingBtnTextAndBack}`}>

                                                        <LoadingButton style={{ width: "60%", height: "30px", fontSize: "12px" }}
                                                        >
                                                            Add To Cart
                                                        </LoadingButton>


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
export default NewProductSearchResult