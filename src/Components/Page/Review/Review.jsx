import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
import React from "react"
const Review = ({Rating, onSubmit ,api ,SetApi, GetProductReview, SetGetProductReview} ) => {
    console.log(Rating)
    return (
        <React.Fragment>

            <div className="">
                <div className="col-10 fontStyle Review_paragraph">
                    {/* <p>Store details</p> */}
                </div>
            </div>
            
            <OverAllReview Rating={Rating}  GetProductReview={GetProductReview} SetGetProductReview={SetGetProductReview} onSubmit={onSubmit} api ={api} SetApi ={ SetApi}/>
            {/* <RelatedReview Product={Product} api ={api} SetApi ={ SetApi} /> */}
        </React.Fragment>
    )
}
export default Review