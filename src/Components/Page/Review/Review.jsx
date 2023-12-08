import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
import sortBy from "lodash/sortBy";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import style from "../../../Style"
import Select from '@mui/material/Select';
import React,{useEffect, useState} from "react"
import WriteReviewPopup from "./ReviewPopup/WriteReviewPopup"
import './Review.css'
const Review = ({ reviewloading, handleEdit, delBtn,reviewtype, setReviewtype, type, Rating, handleDelete, onSubmit, api, SetApi, GetProductReview, SetGetProductReview, AllReview, SetReview, HellFull }) => {
    const [short,setSort] = useState(' ')
    const [sorteddata , setsorteddata] = useState([])
    let noofreview = AllReview.length
    const classes = style()
    useEffect(()=>{
       if(short === "helpful"){
        setsorteddata(sortBy(AllReview, [function(o) { return o.count; }]).reverse())
       }else if(short === "newest"){
        setsorteddata(sortBy(AllReview, [function(o) { return o.created_at; }]).reverse())
       
       }else if(short === "highrate"){
        setsorteddata(sortBy(AllReview, [function(o) { return o.rating; }]).reverse())
       }else if(short === "lowrate"){
        setsorteddata(sortBy(AllReview, [function(o) { return o.rating; }]))
       }
    },[short , AllReview])

  
    return (
        <React.Fragment>

            <div className="review_secton">
                <h2 className="section_main_title">Product Reviews</h2>
                {
                    noofreview !== 0 ?
                        <div className="row">
                            <div className="col-12">
                                <div className="filter_review gap-3 d-flex justify-content-end">
                               { type=== "store" &&
                                 <FormControl className={`${classes.reviewFilter}`} >
                                <Select value={reviewtype}   onChange={(e)=>{setReviewtype(e.target.value)}} >
                                    <MenuItem value={' '}>All Review</MenuItem>
                                    <MenuItem value={"product"}>Product Review</MenuItem>
                                    <MenuItem value={"store"}>Store Review</MenuItem>
                                </Select></FormControl>
                                }
                                  <FormControl className={`${classes.reviewFilter}`} >
                                <Select value={short}   onChange={(e)=>{setSort(e.target.value)}}  >
                                    <MenuItem value={' '}><span>Short By</span></MenuItem>
                                    <MenuItem value={'helpful'}>Most Relevant</MenuItem>
                                    <MenuItem value={'newest'}>Newest Rating</MenuItem>
                                    <MenuItem value={'highrate'}>Highest Rating</MenuItem>
                                    <MenuItem value={'lowrate'}>Lowest Rating</MenuItem>
                                </Select>
                                </FormControl>
                                </div>
                            </div>
                            <div className="col-md-5 reviews_description">
                                <OverAllReview
                                    Rating={Rating}
                                    noReview={noofreview}
                                    GetProductReview={GetProductReview}
                                    SetGetProductReview={SetGetProductReview}
                                    onSubmit={onSubmit}
                                    api={api}
                                    SetApi={SetApi}
                                    reviewloading={reviewloading}
                                />
                            </div>
                            <div className="col-md-7">
                                <RelatedReview
                                    HellFull={HellFull}
                                    storeDetails={delBtn}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                    AllReview={sorteddata?.length !== 0 ? sorteddata : AllReview } 
                                    SetReview={SetReview}
                                    GetProductReview={GetProductReview}
                                    SetGetProductReview={SetGetProductReview}
                                />
                            </div>
                        </div>
                        :
                        <div className="noReview">
                            <h3 className="noreview_title">Be the first to review</h3>
                            <p className="noreview_description">Share your experience with the weedx community.</p>
                            <WriteReviewPopup onSubmit={onSubmit} button className={'noReviewBtn'} GetProductReview={GetProductReview} SetGetProductReview={SetGetProductReview} api={api} SetApi={SetApi} />
                        </div>
                }

            </div>
        </React.Fragment>
    )
}
export default Review