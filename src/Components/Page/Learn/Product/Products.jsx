import LearnBanner from "../LearnComponent/LearnBanner"
import Product from "../../Product/Product"
import HomePageDealsSignup from "../../Home/Dashboard/ComponentDashboard/HomePageDealsSignup"
const Products = () => {
    return (
        <div className="container-fluid">
            <div className="row px-2">
                <LearnBanner />
                <Product />
            </div>
            <div className="row px-4">
                <HomePageDealsSignup />
            </div>
        </div>
    )
}
export default Products