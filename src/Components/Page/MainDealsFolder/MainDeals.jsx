import NewProductSearchResult from "../Product/NewProductDetails/NewProductDetailsComponent/NewProductSearchResult";
import { DealsSeo } from "../../Component/ScoPage/DealsSeo";
import ProductSearchResult from "../Product/ProductSearchResult/ProductSearchResult"
import axios from "axios";
import React from "react";
const MainDeals=()=>{

const [deals,setdeals]= React.useState([])

    React.useEffect(()=>{
     
       axios.get('https://api.cannabaze.com/UserPanel/BuyXGetYDiscount/').then((res)=>{
        setdeals(res.data)
       }).catch((error)=>{
        console.trace(error)
       })
    } , [])



   
    const NewProductSearchRseultArray = [{ imgUrl: "./image/social.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" },
    { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }
    ]
    const NewProductSearchResult_Heading="Best Deals Near By You"
  

    const DispensoriesDealHeading="Find dispensories Deals"
    
    return(
        <div className="container">
            <DealsSeo></DealsSeo>
            <div className="row mx-2">
         
           <ProductSearchResult RelatedProductResult={deals} CategoryName={"Best Deals Near By You"} /> 
        </div>
        </div>
    )
}
export default MainDeals