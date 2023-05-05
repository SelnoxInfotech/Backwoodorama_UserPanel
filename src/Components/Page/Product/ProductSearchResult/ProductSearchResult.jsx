import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
import { AiFillHeart } from "react-icons/ai"
import ProductIncDecQuantity from "./ProductIncDecQuantity"
const ProductSearchResult = () => {
    const classes = useStyles()
    const RelatedProductResult = [
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery dsfasfas asfdddddddddddddddddddddddddddd asfafafsdfa", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/weed.png", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },

        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },

        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },

        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },

        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },



    ]
    return (
        <>
            <div className="row mx-2">
                {RelatedProductResult.map((items, index) => {
                    return (
                        <div className=" col-xxl-2  col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4  productSearch_result_container">
                            <div className="row productsearch_result_inner_container mx-1">

                                <div className="col-12  productSearchResultImage_container">
                                    <div className="col-12 product_whish_list text-end">
                                        <Box className={classes.productSearchIcons}>
                                            <AiFillHeart />
                                        </Box>
                                    </div>

                                    <LazyLoadImage className="product_search_result_image" src={items.imgUrl} alt="image not found" height={"100px"} />


                                </div>
                                <div className="col-12 product_search_result_content_div ">
                                    <div className="row gap-0">
                                        <div className="col-12 productSearchResultParagraph ">
                                            <p className="text-truncate">{items.heading}</p>
                                        </div>
                                        <div className="col-12 product_search_result_sub_heading ">
                                            <p className=" text-truncate">{items.subHeading}</p>
                                        </div>
                                        <div className="col-12 product_category_list">
                                        <span className="product_search_result_span1">15% THC | 0.2% CBD</span>
                                        <span className="product_search_result_span2"><span className={` ${classes.disp_star_color}`}><IoMdStar className="product_search_rating_star"/></span>4.5 rating</span>
                                          
                                        </div>

                                        <div className="col-12 productPriceDivHeight">
                                            <p className="productSearch text-truncate"><span className="productSearchPrice">$80</span> PER 1z</p>
                                        </div>
                                        <div className="col-12  my-4">
                                            <Box className={`center ${classes.loadingBtnTextAndBack}`}>
                                                <LoadingButton style={{ width: "60%", height: "30px", fontSize: "12px" }}><ProductIncDecQuantity/></LoadingButton>
                                            </Box>
                                        </div>
                                    </div>

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