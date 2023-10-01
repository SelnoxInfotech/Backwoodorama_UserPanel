import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from "react-icons/ai"
import useStyles from "../../../../Style"
import React from 'react';
import { Get_Review } from "../ReviewApi"
import ReportReviewPopup from '../ReviewPopup/ReportReviewPopup';
const RelatedReview = ({AllReview, SetReview}) => {
    const [showMore, setShowMore] = React.useState(false);
    
     console.log(AllReview)
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className='container-fluid'>

                <div className="row center ">
                    {AllReview?.map((ele, index) => {
                        const text = ele.comment;
                        const getText = (getValue) => {
                            // For Text that is shorter than desired length
                            if (text.length <= 20) return text;
                            // If text is longer than desired length & showMore is true
                            if (text.length > 20 && showMore) {
                                return (
                                    <>
                                        <p>{text}</p>

                                        <button className='related_review_view_less_more_button'
                                            onClick={() => setShowMore(false)}>
                                            Show Less
                                        </button>
                                    </>
                                );
                            }
                            // If text is longer than desired length & showMore is false
                            if (ele?.comment.length > 20) {
                                return (
                                    <React.Fragment>
                                        <p>{ele?.comment.slice(0, 20)}</p>

                                        <button className='related_review_view_less_more_button'
                                            onClick={() => setShowMore(true)}>
                                            Show Full Description
                                        </button>
                                    </React.Fragment>
                                );
                            }
                        };

                        return (
                            <div className="mx-1">                            <div className="w-100 related_review_container mt-4" key={index}>
                                <div className="row">
                                    <div className="col-3 col-sm-2 related_img_container">
                                        <div className="row">
                                            <div className="col-12 related_review_image">
                                            {/* onError={event => {
                                                    event.target.src = "/image/blankImage.jpg"
                                                    event.onerror = null
                                                }}
                                                className="newProductCategory_image"
                                                 src={`https://api.cannabaze.com/${items?.SubCategoryImage}`} */}
                                                <LazyLoadImage 
                                                onError={event => {
                                                    event.target.src = "/image/user.webp"
                                                    event.onerror = null
                                                }}
                                                className='realted_review_images'
                                                src={`https://api.cannabaze.com/${ele?.userImage}`} 
                                                alt="userImage"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-9 col-sm-10 related_review_content">
                                        <div className="row">
                                            <div className="col-12 RelatedReview_TextCol_height fontStyle related_review_heading ellipsis overflow-string ">
                                                <p>{ele.username}</p>
                                            </div>
                                            <div className='col-12 RelatedReview_TextCol_height related_review_paragraph ellipsis'>
                                                <p>{ele.created_at.slice(0,10).split("-").reverse().join("-")}</p>
                                            </div>
                                            <div className='col-12  related_review_rate_star_flex RelatedReview_TextCol_height related_review_paragraph ellipsis'>
                                                <p>{ele.rating}</p><span><AiFillStar className={classes.disp_star_color} /></span>

                                            </div>
                                            <div className='col-12  related_review_Comment'>
                                                <p>{ele.Title}</p>

                                            </div>
                                            <div className='col-12  related_review_Comment'>
                                                <p>{getText()}</p>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div className='row border '>
                                    <div className='offset-sm-2  col-sm-10 offset-2 col-10 related_review_footer '>
                                        <div className='row'>
                                            <div className='col-3 col-sm-3 col-lg-1 my-2 related_review_footer_paragraph ellipsis'>
                                                <p>{ele.footer_h1}</p>

                                            </div>
                                            <div className='col-3 col-sm-3 col-lg-1 my-2 related_review_footer_paragraph ellipsis px-0'>
                                                {/* <p>{ele.footer_h2}</p> */}
                                                <ReportReviewPopup/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                        )
                    })}
                </div>
            </div>

        </React.Fragment>
    )
}
export default RelatedReview