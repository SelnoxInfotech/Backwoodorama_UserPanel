import WeedDealsByProduct from "./MainDealsComponent/WeedDealsByProduct"
const MainDeals=()=>{
    const SliderDataArray=[{imgUrl:"./image/sativa.png"},{imgUrl:"./image/indica.png"}]
    return(
        <div className="container">
           <WeedDealsByProduct ArrayData={SliderDataArray}/>
        </div>
    )
}
export default MainDeals