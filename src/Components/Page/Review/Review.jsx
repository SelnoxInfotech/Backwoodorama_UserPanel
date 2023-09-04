import OverAllReview from "./ReviewComponent/OverAllReview"
import RelatedReview from "./ReviewComponent/RelatedReview"
const Review = ({Product, api ,SetApi} ) => {
    return (
        <>

            <div className="row center">
                <div className="col-10 fontStyle Review_paragraph">
                    {/* <p>Store details</p> */}
                </div>
            </div>
            <OverAllReview Product={Product} api ={api} SetApi ={ SetApi}/>
            <RelatedReview Product={Product} api ={api} SetApi ={ SetApi} />
        </>
    )
}
export default Review