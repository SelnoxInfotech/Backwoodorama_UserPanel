import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
const Review = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row center">
                    <div className="col-10 fontStyle Review_paragraph">
                        <p>Store details</p>
                    </div>
                </div>
                <OverAllReview />
                <RelatedReview/>


            </div>
        </>
    )
}
export default Review