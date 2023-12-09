import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsStar ,BsStarFill } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Myreview = () => {
    const Navigate= useNavigate()
  return (
    <div className='container'>
        <div className='myreviewContainer'>
            <div>
               <span><IconButton onClick={() => Navigate('-1')}><MdOutlineKeyboardArrowLeft color="#000000"/></IconButton></span><span onClick={() => Navigate(-1)} className="BackPageBtn">Back</span>
            </div>
            
            <div className='reviews'>
                <div className='myreviewBox'>
                    <div className='reviewHeaders mb-sm-4 mb-3 d-flex gap-3'>
                        <div className='productReviewImg'>
                            <div className='productreview_imgcircle'>
                                <img src=""   alt="img" / >
                            </div>
                        </div>
                        <div className='productReviewText'>
                            <h2 className='producRRRtitle'>Product Name</h2>
                            <h4>4 month ago</h4>
                        </div>
                    </div>
                    <div className="product_cart_review">
                                                            {4 &&  new Array(4).fill(null).map(() => (
                                                                <BsStarFill size={16} color="#31B665" className="product_search_rating_star" />  
                                                            ))}
                                                            
                                                            {new Array(5-4).fill(null).map(() => (
                                                                <BsStar size={16} color="#31B665" className="product_search_rating_star" />  
                                                            ))}
                    </div>
                    <h2 className="Myreview_titile">Nice Review</h2>
                    <p className='myreviewComment'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
   </div>
  )
}

export default Myreview