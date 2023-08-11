import RelatedVerifyBanner from "./RelatedVerifyComponent/RelatedVerifyBrandBanner"
import SearchBar from '@mkyy/mui-search-bar';

import { useParams } from "react-router-dom";
import React from "react";
import Axios from "axios";
import useStyles from "../../../../Style";
const RelatedVerifyBrand = () => {
    const classes=useStyles()
    let { id } = useParams();
    const [ SetBrandProduct] = React.useState([])
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
            <div className="row  center mx-0 mt-4 mb-4">
                <div className="col-lg-12 px-0">
                    <SearchBar style={{ background: "#FFFFF", border: "1px solid #31B665" }} className={classes.strainTypSearchBar} width={"100%"} placeholder="Search Menu" />
                </div>

            </div>
            {/* <ProductSearchResult RelatedProductResult={BrandProduct} /> */}
        </div>
    )
}
export default RelatedVerifyBrand