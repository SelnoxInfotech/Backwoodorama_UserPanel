import WeedDealsByProduct from "./MainDealsComponent/WeedDealsByProduct";
import NewProductSearchResult from "../Product/NewProductDetails/NewProductDetailsComponent/NewProductSearchResult";
import DealByStrainType from "./MainDealsComponent/DealByStrainType";
import BestDealCards from "../Deals/DealsComponent/BestDealCards";
import PromoCode from "../Deals/DealsComponent/PromoCode";
const MainDeals=()=>{
    const SliderDataArray=[{imgUrl:"./image/sativa.png",name:"flower"},{imgUrl:"./image/indica.png",name:"pre roll"},
    {imgUrl:"./image/sativa.png",name:"flower"},{imgUrl:"./image/indica.png",name:"pre roll"},
    {imgUrl:"./image/sativa.png",name:"flower"},{imgUrl:"./image/indica.png",name:"pre roll"},
    {imgUrl:"./image/sativa.png",name:"flower"},{imgUrl:"./image/indica.png",name:"pre roll"},
    {imgUrl:"./image/sativa.png",name:"flower"},{imgUrl:"./image/indica.png",name:"pre roll"}

]
    const weedDealsByProduct_heading="Weed deals By product"
    const NewProductSearchRseultArray = [{ imgUrl: "./image/social.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" },
    { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }, { imgUrl: "./image/sativa.png" }
    ]
    const NewProductSearchResult_Heading="Best deals near by you"
    const DealByStrainTypeCardArray = [
        { imgUrl: "./image/indica.png", name: "Indica" },
        { imgUrl: "./image/sativa.png", name: "Hybrid" },
        { imgUrl: "./image/social.png", name: "Sativa" },
        { imgUrl: "./image/Leafly March Promo.png", name: "Indica" },
        { imgUrl: "./image/Leafly Promo.png", name: "Hybrid" },
        { imgUrl: "./image/Leafly Promo.png", name: "Sativa" },
        { imgUrl: "./image/sativa.png", name: "Hybrid" },
        { imgUrl: "./image/social.png", name: "Sativa" },
        { imgUrl: "./image/Leafly March Promo.png", name: "Indica" },
        { imgUrl: "./image/Leafly Promo.png", name: "Hybrid" },
        { imgUrl: "./image/Leafly Promo.png", name: "Sativa" },
    ]
    const DealByStrainTypeHeading="Deals by strain type"
    const DispensoriesDealHeading="Find dispensories deals"
    const BestDealsCardArray = [
        { imgUrl: "./image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/social.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "./image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },

        { imgUrl: "/image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },

    ]
    const bestDealsHeading="Near by offers"
    const PromoCardArray = [
        { imgUrl: "/image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/social.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
    ]
    const promoCodeHeading="Promo code use"
    return(
        <div className="container">
            <div className="row mx-2">
           <WeedDealsByProduct ArrayData={SliderDataArray} heading={weedDealsByProduct_heading}/>
           <NewProductSearchResult NewProductSearchRseultArray={NewProductSearchRseultArray} heading={NewProductSearchResult_Heading}/>
           <DealByStrainType ArrayData={DealByStrainTypeCardArray} heading={DealByStrainTypeHeading}/>
           <NewProductSearchResult NewProductSearchRseultArray={NewProductSearchRseultArray} heading={DispensoriesDealHeading}/>
           <BestDealCards CardDataArray={BestDealsCardArray} Heading={bestDealsHeading}/>
           <PromoCode CardDataArray={PromoCardArray} Heading={promoCodeHeading}/>
        </div>
        </div>
    )
}
export default MainDeals