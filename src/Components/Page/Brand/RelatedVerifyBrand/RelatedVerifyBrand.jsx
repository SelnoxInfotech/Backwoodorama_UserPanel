import RelatedVerifyBanner from "./RelatedVerifyComponent/RelatedVerifyBrandBanner"
import SearchBar from '@mkyy/mui-search-bar';

import { useParams ,useLocation} from "react-router-dom";
import React from "react";
import Axios from "axios";
import useStyles from "../../../../Style";

import { BrandDetailsSeo } from "../../../Component/ScoPage/BrandsSeo";
const RelatedVerifyBrand = () => {
    const classes=useStyles()
    const {pathname} =  useLocation()
    let { id  , Name} = useParams();
    const [ SetBrandProduct] = React.useState([])
    const [BrandDetails , GetBrandDetails] = React.useState([])
    React.useEffect(() => {
        Axios.get(`https://api.cannabaze.com/UserPanel/Get-ProductbyBrand/${id}`,
        ).then(response => {
            SetBrandProduct(response.data)
        })
        Axios.get(`https://api.cannabaze.com/UserPanel/Get-BrandById/${id}`,
        ).then(response => {
            GetBrandDetails(response.data[0])
        })
        window.scrollTo(0, 0)
    }, [id])
    return (
        <div className="container-fluid">
            <BrandDetailsSeo brandname={Name} location={pathname}></BrandDetailsSeo>
            <RelatedVerifyBanner BrandDetails={BrandDetails} />
            <div className="row  center mx-0 mt-4 mb-4">
                <div className="col-md-3 px-0">
                {/* <ProductFilter/> */}
                </div>
                <div className="col-md-9">
               <div>  <SearchBar style={{ background: "#FFFFF", border: "1px solid #31B665" }} className={classes.strainTypSearchBar} width={"100%"} placeholder="Search Menu" />
                </div>
                </div>

            </div>
            {/* <ProductSearchResult RelatedProductResult={BrandProduct} /> */}
        </div>
    )
}
export default RelatedVerifyBrand