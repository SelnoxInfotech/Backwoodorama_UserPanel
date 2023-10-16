import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar , AiOutlineStar, AiFillLike } from "react-icons/ai"
import useStyles from "../../../../Style"
import React from 'react';
import ReportReviewPopup from '../ReviewPopup/ReportReviewPopup';
const RelatedReview = ({AllReview, SetReview}) => {
    const [showMore, setShowMore] = React.useState(false);
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className='container-fluid'>

                <div className="row center reviewCardWrapper">
                    {AllReview?.map((ele, index) => {
                        const text = ele.comment;
                    //   let rating =  ''
                    //   for(let i= 0;i<5;i++){
                    //      if(i <= ele.rating){
                    //         rating += <AiFillStar color='#31B665' className={classes.disp_star_color} />
                    //      }else{
                    //         rating += <AiOutlineStar color='#31B665'  className={classes.disp_star_color} />
                    //      }
                    //   }

                        return (
                                              
                               <div className="w-100 related_review_container" key={index}>
                                    <div className="d-flex gap-2">
                                        <div className="related_img_container">
                                        
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
                                        <div className="related_review_content">
                                        
                                                <h3 className='reviews_title'>{ele.Title}</h3>


                                                <div className="reviwerName_rating">
                                                    <h4 className='userName'>{ele.username}</h4>
                                                    <div className='reviewSectionRating'>
                                                        <p >{ele.rating}</p><span><AiFillStar color='#fff' className={classes.disp_star_color} /></span>
                                                    </div>
                                                    {/* {rating} */}
                                                </div>
                                                <div className='review_date'>
                                                    <p>{ele.created_at.slice(0,10).split("-").reverse().join("-")}</p>
                                                </div>
                                             

                                        
                                        </div>

                                    </div>
                                    <div className='review_description_container'>
                                        <p>{text}</p>
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