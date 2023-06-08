import RelatedVerifyBanner from "./RelatedVerifyComponent/RelatedVerifyBrandBanner"
import SearchBar from '@mkyy/mui-search-bar';
import ProductSearchResult from "../../Product/ProductSearchResult/ProductSearchResult";
import { useParams } from "react-router-dom";
import React from "react";
import Axios from "axios";
const RelatedVerifyBrand = () => {
    let { id } = useParams();
    const [BrandProduct, SetBrandProduct] = React.useState([])
    const [BrandDetails , GetBrandDetails] = React.useState([])
    React.useEffect(() => {
        Axios.get(`https://sweede.app/UserPanel/Get-ProductbyBrand/${id}`,
        ).then(response => {
            SetBrandProduct(response.data)
        })
        Axios.get(`https://sweede.app/UserPanel/Get-BrandById/${id}`,
        ).then(response => {
            GetBrandDetails(response.data[0])
        })
    }, [id])
    return (
        <div className="container-fluid">
            <RelatedVerifyBanner BrandDetails={BrandDetails} />
            <div className="row center  mt-4 mb-4">
                <div className="col-lg-10">
                    <SearchBar style={{ background: "#FFFFF", border: "1px solid gray" }} width={"100%"} placeholder="Search Menu" />
                </div>

            </div>
            <ProductSearchResult RelatedProductResult={BrandProduct} />
        </div>
    )
}
export default RelatedVerifyBrand