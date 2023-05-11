import RelatedVerifyBanner from "./RelatedVerifyComponent/RelatedVerifyBrandBanner"
import SearchBar from '@mkyy/mui-search-bar';
import ProductSearchResult from "../../Product/ProductSearchResult/ProductSearchResult";
const RelatedVerifyBrand=()=>{
    return(
        <div className="container-fluid">
            <RelatedVerifyBanner/>
            <div className="row center  mt-4 mb-4">
                <div className="col-lg-10">
                <SearchBar style={{ background: "#FFFFF", border: "1px solid gray" }} width={"100%"} placeholder="Search Menu" />
                </div>

            </div>
            {/* <ProductSearchResult/> */}
        </div>
    )
}
export default RelatedVerifyBrand