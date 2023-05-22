import BestDealCards from "./DealsComponent/BestDealCards"
import PromoCode from "./DealsComponent/PromoCode"
const Deals=()=>{
    return(
        <div className="container-fluid">
            <div className="row ">
                <div className="col-12  bestDeals">
                <h1>Best deals near by you</h1>
                </div>

            </div>
            <BestDealCards/>
            <PromoCode/>
        </div>
    )
}
export default Deals