import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
import NewFlavourBanner from "../../Component/NewFlavour/NewFlavourBanner"
const Review = () => {
    return (
        <>
            <div className="container-fluid">
                <NewFlavourBanner/>
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