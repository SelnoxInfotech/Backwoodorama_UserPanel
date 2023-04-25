import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
import NewFlavour from "../../Component/NewFlavour/NewFlavour"
const Review = () => {
    return (
        <>
            <div className="container-fluid">
                <NewFlavour/>
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