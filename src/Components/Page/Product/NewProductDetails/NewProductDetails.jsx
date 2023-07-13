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
import { useParams } from 'react-router-dom';
const NewProductDetails = () => {
  const { id } = useParams();
  const NewProductSearchRseultArray = [{ imgUrl: "./image/social.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" },
  { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }
  ]
  const heading="You may also like"
  const [Category, SetCategory] = React.useState([])  
  const [Product, SetProduct] = React.useState([])
  const [StoreProduct, SetStoreProduct] =  React.useState([])

  const Navigate = useNavigate()
  React.useEffect( () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    const fetchData = async () => {
      const apidata = await fetch("https://sweede.app/UserPanel/Get-Categories/");
      const data = await apidata.json()
      SetCategory(data)
    }
    fetchData()
      Axios(`https://sweede.app/UserPanel/Get-ProductById/${id}`, {
    }).then( response =>  {
      SetProduct(response.data[0])
      Axios(`https://sweede.app/UserPanel/Get-ProductAccordingToDispensaries/${response.data[0].Store_id}`, {
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
  }, [id])


  function ShowCategoryProduct(id, name) {

    Navigate(`/CategoryProduct/${name}`, { state: { id } });
  }


    


  return (
    <div className="container-fluid">
      <CategoryProduct ShowCategoryProduct={ShowCategoryProduct} Category={Category} />
      <NewProductDetailsCards Product={Product} />
      <NewProductDescription Product={Product.Product_Description} />
      <NewProductAboutUs/>
      <NewProductSearchResult NewProductSearchRseultArray={NewProductSearchRseultArray} heading={heading}/>
      {/* <ProductSearchResult RelatedProductResult={RelatedProductResult1}/> */}

      <OverAllReview />
      <RelatedReview />


    </div>
  )
}
export default NewProductDetails