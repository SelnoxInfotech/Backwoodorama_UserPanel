import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
import React from "react"
const Review = ({Rating, onSubmit ,api ,SetApi, GetProductReview, SetGetProductReview ,AllReview, SetReview} ) => {

    return (
        <React.Fragment>

            <div className="">
                <div className="col-10 fontStyle Review_paragraph">
                    {/* <p>Store details</p> */}
                </div>
            </div>
            
            <OverAllReview Rating={Rating}  GetProductReview={GetProductReview} SetGetProductReview={SetGetProductReview} onSubmit={onSubmit} api ={api} SetApi ={ SetApi}/>
            <RelatedReview AllReview={AllReview} SetReview ={SetReview}/>
        </React.Fragment>
    )
}
export default Review