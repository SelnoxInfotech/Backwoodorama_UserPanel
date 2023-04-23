import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
const Review = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
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