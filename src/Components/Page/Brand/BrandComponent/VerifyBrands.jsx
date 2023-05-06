import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillHeart } from "react-icons/ai"
import { IoMdStar } from "react-icons/io";
import useStyles from "../../../../Style";
const VerifyBrands = () => {
    const classes = useStyles()

    const VerifyArrayData = [{ imgUrl: "/image/cat_pro_img4.png", name: "All American", num_prod: 112, },
    { imgUrl: "/image/glass.png", name: "All American", num_prod: 112, },
    { imgUrl: "/image/flower2.webp", name: "All American", num_prod: 112, },
    { imgUrl: "/image/glass.png", name: "All American", num_prod: 112, },
    { imgUrl: "/image/flower2.webp", name: "All American", num_prod: 112, },
    { imgUrl: "/image/glass.png", name: "All American", num_prod: 112, },
    ]
    return (
        <>
            <div className="row">
                {VerifyArrayData.map((items, index) => {
                    return (
                        <div className="col-md-6 col-12 verify_brand_container" key={index}>
                            <div className="row verifyBrand_row mx-1 my-1">
                                <div className="col-12 text-end">
                                    <AiFillHeart  className={classes.muiIcons}/>
                                </div>
                                <div className="col-4  verifyBrand_image_container ">
                                    <LazyLoadImage className="verify_brand_image" src={items.imgUrl} alt="image not found" />

                                </div>
                                <div className="col-8 verify_content_container">
                                    <div className="row">
                                        <div className="col-12 verify_content_height verify_brands_heading">
                                            <p>{items.name}</p>

                                        </div>
                                        <div className="col-12 verify_content_height verify_subHead">
                                            <p>{items.num_prod}</p>
                                        </div>
                                        <div className="col-12 verify_ratings verify_content_height">
                                            <span className="verify_rating3"><IoMdStar className={classes.disPen_Icons}/></span><span className="verify_rating1 verify_rating_font">4.5</span><span  className="verify_rating_font verify_rating2">Rating</span>
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
export default VerifyBrands