import { LazyLoadImage } from 'react-lazy-load-image-component';
import {  AiFillLike } from "react-icons/ai"
import { BsStar ,BsStarFill } from "react-icons/bs";
import Button from '@mui/material/Button';
import useStyles from "../../../../Style";
 import React from 'react';
import ReportReviewPopup from '../ReviewPopup/ReportReviewPopup';
const RelatedReview = ({AllReview, SetReview}) => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className='container-fluid'>

                <div className="row center reviewCardWrapper">
                    {AllReview?.map((ele, index) => {
                        const text = ele.comment;
                 

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
                                                    src={`${ele?.userImage}`} 
                                                    alt="userImage"
                                                    />
                                                </div>

                                        </div>
                                        <div className="related_review_content">
                                        
                                                <h3 className='reviews_title'>{ele.Title}</h3>


                                                <div className="reviwerName_rating">
                                                    <h4 className='userName'>{ele.username}</h4>
                                                    {/* <div className='reviewSectionRating'>
                                                        <p >{ele.rating}</p><span><AiFillStar color='#fff' className={classes.disp_star_color} /></span>
                                                    </div> */}
                                                    {/* {rating} */}
                                                    <div className='reviewSectionRating'>
                                                           {ele.rating &&  new Array(ele.rating).fill(null).map(() => (
                                                                <BsStarFill size={10} color="#31B665" className="product_search_rating_star" />  
                                                            ))}
                                                            
                                                            {new Array(5-ele.rating).fill(null).map(() => (
                                                                <BsStar size={10} color="#31B665" className="product_search_rating_star" />  
                                                            ))}
                                                    </div>
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
                                               <Button className={classes.WriteReviewBtn_Color} variant="outlined"> <AiFillLike/> Helpful</Button>
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