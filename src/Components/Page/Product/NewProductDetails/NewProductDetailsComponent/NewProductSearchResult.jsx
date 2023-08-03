import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoMdStar } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai"
import { AiFillHeart } from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import { IoShareSocialSharp } from "react-icons/io5"
import useStyles from '../../../../../Style';
import { WhisList } from '../../../../Component/Whishlist/WhisList';
import Createcontext from "../../../../../Hooks/Context"
import { WishListPost, WishListget } from "../../../../Component/Whishlist/WishListApi_"
const NewProductSearchResult = ({ NewProductSearchRseultArray, heading }) => {
    const classes = useStyles()
    const [Whishlist, SetWishList] = React.useState(false)
    const { state, dispatch } = React.useContext(Createcontext)
    const [WhisProduct, SetWhisProduct] = React.useState([])

    const handleWhishList = (id) => {
        console.log(id)
        if (state.login === false) {

            SetWishList(!Whishlist)
        }
        else {
            WishListPost(id).then((res) => {
                api()
            }).catch((err) => { });
            const api = () => {
                WishListget().then((res) => {
                    console.log(res.data[0].product)
                    const g = state.WishList
                    const h = res.data[0].product
                    g.push(h)
                    console.log(g)
                    dispatch({ type: 'WishList', WishList: g })
                }).catch((err) => { });
            }
        }
    }
    console.log(state.WishList)
    const handleWhishListRemove = (e) => {
        console.log(state.WishList)
        // const secondRemoved = state.WishList.filter((data) => data !== e);
        // console.log(secondRemoved)
        // dispatch({ type: 'WishList', WishList: secondRemoved })

    }
    console.log(state.WishList)
    const ref = React.useRef(null);
    return (

        // <div className='container-fluid'>
        //     <div className='row '>
        <React.Fragment>
            <div className='col-lg-12 col-12 newProductDetailsHeading mx-0 px-0'>
                <p className='newProductDetailsParagraph'>{heading}</p>
            </div>
            <div className="col-lg-12 col-12   recentViewProductSlider" id="width" ref={ref}>
                <ScrollContainer className=" newProductSearchResult_ScrollContainerRelative">
                    {NewProductSearchRseultArray?.map((items, index) => {
                        console.log(state.WishList[items.id])
                        return (
                            <div className=" col-xxl-3  col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4  productSearch_result_container" key={index}>
                                <div className="row productsearch_result_inner_container mx-1">

                                    <div className="col-12  productSearchResultImage_container px-0">
                                        <div className="col-12 product_whish_list text-end">
                                            {state.WishList[index] === items.id ?
                                                <Box className={classes.productSearchIcons}>
                                                    <IconButton onClick={() => { handleWhishListRemove(items.id) }} aria-label="Example">

                                                        <AiFillHeart></AiFillHeart>

                                                    </IconButton>
                                                </Box>
                                                :
                                                <Box className={classes.productSearchIcons}>
                                                    <IconButton onClick={() => { handleWhishList(items.id) }} aria-label="Example">

                                                        <AiOutlineHeart />

                                                    </IconButton>
                                                </Box>}
                                        </div>
                                        <div className="col-12 product_whish_list text-end ">
                                            <Box className={classes.productSearchIcons}>
                                                <IconButton aria-label="Example">
                                                    <IoShareSocialSharp />
                                                </IconButton>
                                            </Box>
                                        </div>

                                        <LazyLoadImage

                                            className="product_search_result_image"
                                            onError={event => {
                                                event.target.src = "/image/blankImage.jpg"
                                                event.onerror = null
                                            }}
                                            src={items?.images ? `https://sweede.app/${items?.images[0]?.image}` : items.imgUrl}
                                            // src={items.imgUrl}
                                            height={"100px"}
                                        />

                                    </div>
                                    <div className="col-12 product_search_result_content_div mt-4">
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
                                                <p className="productSearch text-truncate"><span className="productSearchPrice">$35</span> <span className='productSearchPerDoller'>PER 1z</span></p>
                                            </div>
                                            <div className="col-12  my-4">
                                                <Box className={`center ${classes.loadingBtnTextAndBack}`}>
                                                    <LoadingButton style={{ width: "60%", height: "30px", fontSize: "12px" }}
                                                    >
                                                        Buy now
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
            {Whishlist && <WhisList open1={Whishlist} SetWishList={SetWishList}></WhisList>}
        </React.Fragment>

        //     </div>

        // </div>
    )
}
export default NewProductSearchResult