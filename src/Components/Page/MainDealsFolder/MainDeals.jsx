import NewProductSearchResult from "../Product/NewProductDetails/NewProductDetailsComponent/NewProductSearchResult";
import { DealsSeo } from "../../Component/ScoPage/DealsSeo";
import ProductSearchResult from "../Product/ProductSearchResult/ProductSearchResult"
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import { FaIdeal } from "react-icons/fa";

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
         {
            deals.length ?
       
             <ProductSearchResult RelatedProductResult={deals} CategoryName={"Best Deals Near By You"} /> 
               : <div className="noReview">
                                <div className="noreviewicon">
                                    <div className="iconcircl"><FaIdeal size={70} color="gray" /></div>
                                </div>
                                <h3 className="noreview_title">Discover More Savings Soon!</h3>
                                <p className="noreview_description w-lg-50 ">It looks like there are no active deals at the moment from [Store Name]. Don't worry, though – our partnered stores frequently update their promotions. Be sure to check back regularly for exciting discounts and special offers on your favorite products.</p>
                                <p className="noreview_description w-lg-50">In the meantime, explore the diverse range of products available at [Store Name]. We're constantly working to bring you the best deals, so stay tuned for upcoming promotions.</p>
                </div>
                  }
            </div>
        </div>
    )
}
export default MainDeals