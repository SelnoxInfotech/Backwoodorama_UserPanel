import NewProductDetailsCards from "./NewProductDetailsComponent/NewProductDetailsCards"
import CategoryProduct from "../../Home/Dashboard/ComponentDashboard/CategoryProduct"
import RelatedReview from "../../Review/ReviewComponent/RelatedReview"
import OverAllReview from "../../Review/ReviewComponent/OverAllReview"
import NewProductDescription from "./NewProductDetailsComponent/NewProductDescription"
import NewProductAboutUs from "./NewProductDetailsComponent/NewProductAboutUs"
import ProductSearchResult from "../ProductSearchResult/ProductSearchResult"
const NewProductDetails = () => {
  const RelatedProductResult1 = [
    { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
    { imgUrl: "/image/weed.png", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
    { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
    { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
  ]
  return (
    <div className="container-fluid">
      <CategoryProduct />
      <NewProductDetailsCards />
      <NewProductDescription />
      <NewProductAboutUs />
      {/* <ProductSearchResult RelatedProductResult={RelatedProductResult1}/> */}

      <OverAllReview />
      <RelatedReview />


    </div>
  )
}
export default NewProductDetails