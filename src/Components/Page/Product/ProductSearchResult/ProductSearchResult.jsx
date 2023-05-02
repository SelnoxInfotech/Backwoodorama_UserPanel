import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
import { AiFillHeart } from "react-icons/ai"

const ProductSearchResult = () => {
    const classes = useStyles()
    const RelatedProductResult = [
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery dsfasfas asfdddddddddddddddddddddddddddd asfafafsdfa", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/weed.png", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },


    ]
    return (
        <>
            <div className="row mx-4">
                {RelatedProductResult.map((items, index) => {
                    return (
                        <div className=" col-xl-2 col-lg-4 col-md-4 col-sm-6 col-12 mb-4 mx-1 productSearch_result_container">
                            <div className="row productsearch_result_inner_container">
                                <div className="col-12 text-end productSearchRes_heart">
                                    <Box className={classes.productSearchIcons}>
                                    <AiFillHeart />
                                    </Box>
                                </div>
                                <div className="col-12  productSearchResultImage_container">
                                    <LazyLoadImage className="product_search_result_image" src={items.imgUrl} alt="image not found" height={"100px"} />


                                </div>
                                <div className="col-12 productSearchResultParagraph fontStyle">
                                    <p className="text-truncate">{items.heading}</p>
                                </div>
                                <div className="col-12 product_search_result_sub_heading fontStyle_weight_fourHundred">
                                    <p className=" text-truncate">{items.subHeading}</p>
                                </div>
                                <div className="col-12 product_category_list">
                                    
                                    <ol>
                                        <li className="product_searchPercentage_list fontStyle">
                                            <p>15% THC | 0.2% CBD</p>
                                        </li>
                                        <li className="Product_search_star_rating">
                                           <span className={classes.disPen_Icons}><IoMdStar /></span><span className="productSearchRating">4.5 rating</span>
                                        </li>
                                    </ol>
                                </div>
                                <div className="col-12 productPriceDivHeight">
                                    <p className="productSearch text-truncate"><span className="productSearchPrice fontStyle">$80</span> per 1z</p>
                                </div>
                                <div className="col-12  my-2">
                                    <Box className={`center ${classes.loadingBtnTextAndBack}`}>
                                        <LoadingButton style={{ width: "60%", height: "30px", fontSize: "12px" }}>Buy Now</LoadingButton>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default ProductSearchResult