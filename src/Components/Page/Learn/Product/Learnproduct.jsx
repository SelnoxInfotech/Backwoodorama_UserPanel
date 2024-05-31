import LearnBanner from "../LearnComponent/LearnBanner"
import { Link } from "react-router-dom";
import { ProductSeo } from "../../../Component/ScoPage/LearnSeo";

const Learnproduct = () => {
    return (
        <div className="container-fluid">
            <ProductSeo></ProductSeo>
            <div className="row px-2">
                <LearnBanner heading="Learn" />
            </div>
            <div className="learn_product_card_wrapper">
                <Link to='/learn/product/1'>
                <div className="learn_product_card">
                    <div className="card_ig"><img src="/image/learnproduct1.jpg" alt="" /></div>
                    <div className="card_titile_box"><h1 className="card_title">Do Edibles Lose Their Freshness Over Time?</h1></div>
                </div>
                </Link>
                <Link to='/learn/product/2'>
                <div className="learn_product_card">
                    <div className="card_ig"><img src="/image/learnproduct1.jpg" alt="" /></div>
                    <div className="card_titile_box"><h3 className="card_title">How Long Do The Effects Of Edible Substances Last?</h3></div>
                </div>
                </Link>
                <Link to='/learn/product/3'>
                <div className="learn_product_card">
                    <div className="card_ig"><img src="/image/learnproduct1.jpg" alt="" /></div>
                    <div className="card_titile_box"><h3 className="card_title">How Long Do The Effects Of Edible Substances Last?</h3></div>
                </div>
                </Link>
             
            </div>
        </div>
    )
}
export default Learnproduct