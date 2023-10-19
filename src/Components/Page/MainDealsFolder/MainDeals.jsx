import WeedDealsByProduct from "./MainDealsComponent/WeedDealsByProduct";
import NewProductSearchResult from "../Product/NewProductDetails/NewProductDetailsComponent/NewProductSearchResult";
import DealByStrainType from "./MainDealsComponent/DealByStrainType";
import BestDealCards from "../Deals/DealsComponent/BestDealCards";
import PromoCode from "../Deals/DealsComponent/PromoCode";
import { DealsSeo } from "../../Component/ScoPage/DealsSeo";
import axios from "axios";
import React from "react";
const MainDeals=()=>{

const [deals,setdeals]= React.useState([])

    React.useEffect(()=>{
     
       axios.get('https://api.cannabaze.com/UserPanel/BuyXGetYDiscount/').then((res)=>{
        setdeals(res.data)
       }).catch((error)=>{
        console.log(error)
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
           <NewProductSearchResult NewProductSearchRseultArray={deals} heading={NewProductSearchResult_Heading}/>
           {/* <NewProductSearchResult NewProductSearchRseultArray={NewProductSearchRseultArray} heading={DispensoriesDealHeading}/> */}
           
        </div>
        </div>
    )
}
export default MainDeals