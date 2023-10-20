import LearnBanner from "../LearnComponent/LearnBanner"
import Newsletter from "../../../Component/Newsletter/HomePageDealsSignup"
import { Link } from "react-router-dom";
const Learnproduct = () => {
    return (
        <div className="container-fluid">
            <div className="row px-2">
                <LearnBanner />
            </div>
            <div className="learn_product_card_wrapper">
                <Link to='/learn/product/Do-Edibles-Lose-Their-Freshness-Over-Time?'>
                <div className="learn_product_card">
                    <div className="card_ig"><img src="/image/learnproduct1.jpg" alt="" /></div>
                    <div className="card_titile_box"><h3 className="card_title">Do Edibles Lose Their Freshness Over Time?</h3></div>
                </div>
                </Link>
                <Link to='/learn/product/How-Long-Do-The-Effects-Of-Edible-Substances-Last?'>
                <div className="learn_product_card">
                    <div className="card_ig"><img src="/image/learnproduct1.jpg" alt="" /></div>
                    <div className="card_titile_box"><h3 className="card_title">How Long Do The Effects Of Edible Substances Last?</h3></div>
                </div>
                </Link>
                <Link to='/learn/product/How-Long-Do-The-Effects-Of-Edible-Substances-Last?'>
                <div className="learn_product_card">
                    <div className="card_ig"><img src="/image/learnproduct1.jpg" alt="" /></div>
                    <div className="card_titile_box"><h3 className="card_title">How Long Do The Effects Of Edible Substances Last?</h3></div>
                </div>
                </Link>
             
            </div>
           
                <Newsletter />
          
        </div>
    )
}
export default Learnproduct