import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
import React from "react"
import WriteReviewPopup from "./ReviewPopup/WriteReviewPopup"
import './Review.css'
const Review = ({ reviewloading, handleEdit, delBtn, Rating, handleDelete, onSubmit, api, SetApi, GetProductReview, SetGetProductReview, AllReview, SetReview, HellFull }) => {

    let noofreview = AllReview.length
    return (
        <React.Fragment>

            <div className="review_secton">
                <h2 className="section_main_title">Product Reviews</h2>
                {
                    noofreview !== 0 ?
                        <div className="row">
                            <div className="col-md-5 reviews_description">



                                <OverAllReview
                                    Rating={Rating}
                                    noReview={noofreview}
                                    GetProductReview={GetProductReview}
                                    SetGetProductReview={SetGetProductReview}
                                    onSubmit={onSubmit}
                                    api={api}
                                    SetApi={SetApi}
                                />

                            </div>
                            <div className="col-md-7">
                                <RelatedReview
                                    HellFull={HellFull}
                                    storeDetails={delBtn}
                                    handleEdit={handleEdit}
                                    handleDelete={handleDelete}
                                    AllReview={AllReview}
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