import React from "react"
import { useLocation } from "react-router-dom";
import Axios from "axios";
import ProductSearchResult from "./ProductSearchResult/ProductSearchResult";
const SubcategoryProduct = () => {
    const location = useLocation()
    const Id = location.state
    const [Product, SetProduct] = React.useState([])
    const [Loading, SetLoading] = React.useState(true)

    React.useEffect(() => {
        SetLoading(true)

        Axios(`http://52.3.255.128:8000/UserPanel/Get-ProductBySubCategory/${Id}`, {
        }

        ).then(response => {
            SetProduct(response.data)
            console.log(response.data)
            SetLoading(false)
        }).catch(
            function (error) {
                SetLoading(false)

            })
    }, [Id])
    return (
        <div>

            <div className="col-12 center">
                {
                   Loading ? 
                   <div className="loaderFLower"></div> 
                   : 
                   <div className="col-12 mt-4">
                   <ProductSearchResult RelatedProductResult={Product}/>
                  

               </div>
                }
            </div>
        </div>
    )
}



export default SubcategoryProduct 