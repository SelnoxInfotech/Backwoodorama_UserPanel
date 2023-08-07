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
import NewFlavourBanner from "../../../Component/NewFlavour/NewFlavourBanner"
const NewProductDetails = () => {
  const { id } = useParams();
  const NewProductSearchRseultArray = [{ imgUrl: "./image/social.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" },
  { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }
  ]
  const heading = "You may also like"
  const [Category, SetCategory] = React.useState([])
  const [Product, SetProduct] = React.useState([])
  const [StoreProduct, SetStoreProduct] = React.useState([])
  const [Despen, SetDespens] = React.useState([])
  const Navigate = useNavigate()
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    const fetchData = async () => {
      const apidata = await fetch("https://sweede.app/UserPanel/Get-Categories/");
      const data = await apidata.json()
      SetCategory(data)
    }
    fetchData()
    Axios(`https://sweede.app/UserPanel/Get-ProductById/${id}`, {
    }).then(response => {
      SetProduct(response.data[0])
      Axios.get(`https://sweede.app/UserPanel/Get-StoreById/${response.data[0]?.Store_id}`, {
      }).then(response => {
        SetDespens(response.data)
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      })


      Axios.post(`https://sweede.app/UserPanel/YouMayAlsoLike/`,
      {
        category:response.data[0].category_id,
        store_id:response.data[0].Store_id
        }
      ).then(response => {
        // SetStoreProduct(response.data)
        SetStoreProduct(response.data)

      }).catch(
        function (error) {

          // alert("Something Goes Wrong")
          // SetProduct(Product => ({ ...Product, discount: "None" }))
        })

    }).catch(
      function (error) {

        alert("Something Goes Wrong")

      })


  }, [id])
  return (
    <div className="container-fluid">
      {/* <CategoryProduct ShowCategoryProduct={ShowCategoryProduct} Category={Category} /> */}
      <NewFlavourBanner delBtn={Despen}></NewFlavourBanner>
      <NewProductDetailsCards Product={Product} />
      <NewProductDescription Product={Product?.Product_Description} />
      <NewProductAboutUs />
      <NewProductSearchResult NewProductSearchRseultArray={StoreProduct} heading={heading} />
      {/* <ProductSearchResult RelatedProductResult={RelatedProductResult1}/> */}

      <OverAllReview />
      <RelatedReview />


    </div>
  )
}
export default NewProductDetails