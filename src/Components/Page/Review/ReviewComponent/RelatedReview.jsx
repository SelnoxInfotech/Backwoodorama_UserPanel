import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar , AiFillLike } from "react-icons/ai"
import useStyles from "../../../../Style"
import React from 'react';
import ReportReviewPopup from '../ReviewPopup/ReportReviewPopup';
const RelatedReview = ({AllReview, SetReview}) => {
    const [showMore, setShowMore] = React.useState(false);
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
                                        <p className='review_description'>{text}</p>

                                        <button className='more_less_btn'
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
                                        <p className='review_description'>{ele?.comment.slice(0, 120)}</p>
                                         <button className='more_less_btn'
                                            onClick={() => setShowMore(true)}>
                                            Show More
                                        </button>
                                    </React.Fragment>
                                );
                            }
                        };

                        return (
                                              
                               <div className="w-100 related_review_container" key={index}>
                                    <div className="row">
                                        <div className="col-3 col-sm-2 related_img_container">
                                        
                                                <div className="related_review_image">
                                            
                                                    <LazyLoadImage 
                                                    onError={event => {
                                                        event.target.src = "/image/user.webp"
                                                        event.onerror = null
                                                    }}
                                                    className='realted_review_images'
                                                    src={`https://api.cannabaze.com${ele?.userImage}`} 
                                                    alt="userImage"
                                                    />
                                                </div>

                                        </div>
                                        <div className="col-9 col-sm-10 related_review_content">
                                        
                                                <h3 className='reviews_title'>{ele.Title}</h3>


                                                <div className="reviwerName_rating">
                                                    <h4 className='userName'>{ele.username}</h4>
                                                    <div className='reviewSectionRating'>
                                                        <p >{ele.rating}</p><span><AiFillStar color='#fff' className={classes.disp_star_color} /></span>
                                                    </div>
                                                </div>
                                                <div className='review_date'>
                                                    <p>{ele.created_at.slice(0,10).split("-").reverse().join("-")}</p>
                                                </div>
                                             

                                        
                                        </div>

                                    </div>
                                    <div className='review_description_container'>
                                                    <p>{getText()}</p>

                                                </div>
                                    <div className='related_review_footer '>
                                       
                                            <div className='related_review_footer_paragraph ellipsis'>
                                               <button className='review_help_btn'> <AiFillLike/> Help</button>
                                            </div>
                                            <div className='related_review_footer_paragraph ellipsis px-0'>
                                              
                                                <ReportReviewPopup/>
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