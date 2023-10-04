import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
import React from "react"
import './Review.css'
const Review = ({Rating, onSubmit ,api ,SetApi, GetProductReview, SetGetProductReview ,AllReview, SetReview} ) => {

    return (
        <React.Fragment>

        <div className="review_secton">
            
            <div className="row">
                <div className="col-md-5 reviews_description">
                    <OverAllReview Rating={Rating}  GetProductReview={GetProductReview} SetGetProductReview={SetGetProductReview} onSubmit={onSubmit} api ={api} SetApi ={ SetApi}/>
                </div>
                <div className="col-md-7">
                    <RelatedReview AllReview={AllReview} SetReview ={SetReview}/>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Review