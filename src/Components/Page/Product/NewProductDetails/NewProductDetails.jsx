import React from "react"
import NewProductDetailsCards from "./NewProductDetailsComponent/NewProductDetailsCards"
import RelatedReview from "../../Review/ReviewComponent/RelatedReview"
import OverAllReview from "../../Review/ReviewComponent/OverAllReview"
import NewProductinfoText from "./NewProductDetailsComponent/NewProductinfoText"
import ProductSearchResult from "../ProductSearchResult/ProductSearchResult"
import NewProductSearchResult from "./NewProductDetailsComponent/NewProductSearchResult"
import Axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';
import NewFlavourBanner from "../../../Component/NewFlavour/NewFlavourBanner"
import Review from "../../Review/Review"
import { AiOutlineLeft } from "react-icons/ai";
import { ProductDetailsSeo } from "../../../Component/ScoPage/ProductSeo"
import { product_OverAllGet_Review  , Product_Add_Review ,  Product_Get_UserComment, Product_Get_Review} from "../ProductApi"
import Createcontext from "../../../../Hooks/Context"
const NewProductDetails = () => {
  const { id } = useParams();
  const { state } = React.useContext(Createcontext)
  const navigate = useNavigate();
  const heading = "You may also like"
  const [Product, SetProduct] = React.useState([])
  const [StoreProduct, SetStoreProduct] = React.useState([])
  const [Despen, SetDespens] = React.useState([])
  const [api, SetApi] = React.useState(false)
  const [Rating, SetRating] = React.useState()
  const [AllReview, SetReview] =  React.useState([])
  const [GetProductReview, SetGetProductReview] = React.useState({
    value: 0,
    comment: '',
    Title: "",
    popup:true
  })
    
  // const Navigate = useNavigate()
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    Axios(`https://api.cannabaze.com/UserPanel/Get-ProductById/${id}`, {
    }).then(response => {
      SetProduct(()=>{
        return response.data[0]
      })

      Axios.get(`https://api.cannabaze.com/UserPanel/Get-StoreById/${response.data[0]?.Store_id}`, {
      }).then(response => {
        SetDespens(response.data[0])
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      })
      Axios.post(`https://api.cannabaze.com/UserPanel/YouMayAlsoLike/`,
        {
          category: response.data[0].category_id,
          store_id: response.data[0].Store_id
        }
      ).then(response => {
        SetStoreProduct(response.data)
      }).catch(
        function (error) {
        })
    }).catch(
      function (error) {

        alert("Something Goes Wrong")

      })


  }, [id])
  React.useEffect(() => {
    product_OverAllGet_Review(Product.id).then((res) => {

      SetRating(res?.data)
    }).catch(() => { })
  }, [Product.id, api])

  React.useEffect( ()=>{
    
        if(state.login &&  state.Profile.id !== undefined && Product.id !== undefined){
          Product_Get_UserComment(state.Profile.id , Product.id).then((res)=>{
        
                if(res.data.length !== 0 )
                {   
                    SetGetProductReview({...GetProductReview , "comment": res.data[0]?.comment , 
                     "Title" : res.data[0]?.Title , "value":res.data[0]?.rating})
                }
            }).catch((error)=>{
              console.log(error)
            })

        }
    },[ state.Profile, Product ,api])

  const onSubmit = (data) => {
    const Review = {
      product: Product.id,
      rating: GetProductReview.value,
      Title: GetProductReview.Title,
      comment: GetProductReview.comment
    }
    Product_Add_Review(Review).then((res) => {
      // setOpen(false);
      SetGetProductReview({ ...GetProductReview, 'value': 0  , 'popup':false })
      SetApi(!api)
    }).catch(() => {

    })
  };
  React.useEffect(() => {
    Product_Get_Review( Product.id).then((res) => {
        SetReview(()=>{
          return res.data
        })
    }).catch((e) => {
        console.error(e)
    })
}, [ Product, api])

  // Productname , ProductCategory , StoreName
  return (
    <div className="container-fluid">
      <ProductDetailsSeo Productname={Product.Product_Name} ProductCategory={Product.category_name} StoreName={Product.StoreName} City={Product.Store_City} State={Product.Store_State}  ></ProductDetailsSeo>

      <span onClick={() => navigate(-1)} className="BackPageBtn"> <AiOutlineLeft size={22} /> <span className="backPgBtnImg"><img src={`${Despen.Store_Image}`} alt="" /></span> {Despen.Store_Name}</span>
      <NewProductDetailsCards Product={Product} />

      <NewProductinfoText Product={{ heading: "Product Description", text: Product?.Product_Description }} />

      <ProductSearchResult RelatedProductResult={StoreProduct} currentProductID={Product.id} CategoryName={heading} />
      <Review Rating={Rating} onSubmit={onSubmit} GetProductReview={GetProductReview} SetGetProductReview={SetGetProductReview} AllReview={AllReview} SetReview ={SetReview}></Review>


    </div>
  )
}
export default NewProductDetails