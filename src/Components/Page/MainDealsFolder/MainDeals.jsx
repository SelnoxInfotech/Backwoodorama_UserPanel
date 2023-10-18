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


    const SliderDataArray=[{imgUrl:"./image/sativa.png",name:"Flower"},{imgUrl:"./image/indica.png",name:"Pre Roll"},
    {imgUrl:"./image/sativa.png",name:"Flower"},{imgUrl:"./image/indica.png",name:"Pre Roll"},
    {imgUrl:"./image/sativa.png",name:"Flower"},{imgUrl:"./image/indica.png",name:"Pre Roll"},
    {imgUrl:"./image/sativa.png",name:"Flower"},{imgUrl:"./image/indica.png",name:"Pre Roll"},
    {imgUrl:"./image/sativa.png",name:"Flower"},{imgUrl:"./image/indica.png",name:"Pre Roll"}

]
    const weedDealsByProduct_heading="Weed Deals By Product"
    const NewProductSearchRseultArray = [{ imgUrl: "./image/social.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" },
    { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }
    ]
    const NewProductSearchResult_Heading="Best Deals Near By You"
    const DealByStrainTypeCardArray = [
        { imgUrl: "./image/indica.png", name: "Indica" },
        { imgUrl: "./image/sativa.png", name: "Hybrid" },
        { imgUrl: "./image/social.png", name: "Sativa" },
        { imgUrl: "./image/LeaflyMarchPromo.png", name: "Indica" },
        { imgUrl: "./image/LeaflyPromo.png", name: "Hybrid" },
        { imgUrl: "./image/LeaflyPromo.png", name: "Sativa" },
        { imgUrl: "./image/sativa.png", name: "Hybrid" },
        { imgUrl: "./image/social.png", name: "Sativa" },
        { imgUrl: "./image/LeaflyMarch Promo.png", name: "Indica" },
        { imgUrl: "./image/LeaflyPromo.png", name: "Hybrid" },
        { imgUrl: "./image/LeaflyPromo.png", name: "Sativa" },
    ]
    const DealByStrainTypeHeading="Deals By Strain Type"
    const DispensoriesDealHeading="Find dispensories Deals"
    const BestDealsCardArray = [
        { imgUrl: "./image/LeaflyMarchPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/LeaflyPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/social.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/LeaflyMarchPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/LeaflyPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/LeaflyPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },

        { imgUrl: "/image/LeaflyMarchPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },

    ]
    const bestDealsHeading="Near By Offers"
    const PromoCardArray = [
        { imgUrl: "/image/LeaflyMarchPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/LeaflyPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/social.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/LeaflyMarchPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/LeaflyPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/LeaflyPromo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
    ]
    const promoCodeHeading="Promo code use"
      console.log(deals)
    return(
        <div className="container">
            <DealsSeo></DealsSeo>
            <div className="row mx-2">
           {/* <WeedDealsByProduct ArrayData={SliderDataArray} heading={weedDealsByProduct_heading}/> */}
           <NewProductSearchResult NewProductSearchRseultArray={deals} heading={NewProductSearchResult_Heading}/>
           {/* <DealByStrainType ArrayData={DealByStrainTypeCardArray} heading={DealByStrainTypeHeading}/> */}
           <NewProductSearchResult NewProductSearchRseultArray={NewProductSearchRseultArray} heading={DispensoriesDealHeading}/>
           {/* <BestDealCards CardDataArray={BestDealsCardArray} Heading={bestDealsHeading}/> */}
           {/* <PromoCode CardDataArray={PromoCardArray} Heading={promoCodeHeading}/> */}
        </div>
        </div>
    )
}
export default MainDeals