import LearnBanner from "../LearnComponent/LearnBanner"
import Product from "../../Product/Product"
import Newsletter from "../../../Component/Newsletter/HomePageDealsSignup"
const Products = () => {
    return (
        <div className="container-fluid">
            <div className="row px-2">
                <LearnBanner />
                <Product />
            </div>
            <div className="row px-4">
                <Newsletter />
            </div>
        </div>
    )
}
export default Products