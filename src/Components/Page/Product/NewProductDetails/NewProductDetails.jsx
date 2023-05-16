import NewProductDetailsCards from "./NewProductDetailsComponent/NewProductDetailsCards"
import CategoryProduct from "../../Home/Dashboard/ComponentDashboard/CategoryProduct"
import RelatedReview from "../../Review/ReviewComponent/RelatedReview"
import OverAllReview from "../../Review/ReviewComponent/OverAllReview"
import NewProductDescription from "./NewProductDetailsComponent/NewProductDescription"
import NewProductAboutUs from "./NewProductDetailsComponent/NewProductAboutUs"
const NewProductDetails = () => {
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