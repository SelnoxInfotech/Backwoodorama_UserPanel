import React from "react"
import NewProductDetailsCards from "./NewProductDetailsComponent/NewProductDetailsCards"
import CategoryProduct from "../../Home/Dashboard/ComponentDashboard/CategoryProduct"
import RelatedReview from "../../Review/ReviewComponent/RelatedReview"
import OverAllReview from "../../Review/ReviewComponent/OverAllReview"
import NewProductDescription from "./NewProductDetailsComponent/NewProductDescription"
import NewProductAboutUs from "./NewProductDetailsComponent/NewProductAboutUs"
import { useNavigate, useLocation } from "react-router-dom"
import NewProductSearchResult from "./NewProductDetailsComponent/NewProductSearchResult"
import Axios from "axios";

const NewProductDetails = () => {
  const [Category, SetCategory] = React.useState([])
  const [Product, SetProduct] = React.useState([])
  const [StoreProduct, SetStoreProduct] =  React.useState([])
  const location = useLocation()
  const Id = location.state
  const Navigate = useNavigate()

  React.useEffect( () => {
    const fetchData = async () => {
      const apidata = await fetch("http://backend.sweede.net/UserPanel/Get-Categories/");
      const data = await apidata.json()
      SetCategory(data)
    }
    fetchData()
      Axios(`http://backend.sweede.net/UserPanel/Get-ProductById/${Id}`, {
    }).then( response =>  {
      SetProduct(response.data[0])
      Axios(`http://backend.sweede.net/UserPanel/Get-ProductAccordingToDispensaries/${response.data[0].Store_id}`, {
      }).then(response => {
        SetStoreProduct(response.data)

      }).catch(
          function (error) {

              alert("Something Goes Wrong")
              // SetProduct(Product => ({ ...Product, discount: "None" }))
          })  

    }).catch(
      function (error) {

        alert("Something Goes Wrong")

      })
  }, [])
  function ShowCategoryProduct(id, name) {

    Navigate(`/CategoryProduct/${name}`, { state: { id } });
  }


    


  return (
    <div className="container-fluid">
      <CategoryProduct ShowCategoryProduct={ShowCategoryProduct} Category={Category} />
      <NewProductDetailsCards Product={Product} />
      <NewProductDescription Product={Product.Product_Description} />
      <NewProductAboutUs />
      <NewProductSearchResult/>
      {/* <ProductSearchResult RelatedProductResult={RelatedProductResult1}/> */}

      <OverAllReview />
      <RelatedReview />


    </div>
  )
}
export default NewProductDetails