import React from "react";
import CategoryProduct from "../Home/Dashboard/ComponentDashboard/CategoryProduct"
import { useLocation } from "react-router-dom";
import  Axios  from "axios";
import NewProductCategorySlider from "./NewProductCategorySlider";
const CategoryFilter = () => {

    const location = useLocation()
    const Id = location.state
const [Category , SetCategory] = React.useState([])
const  [ Loading  , SetLoading] = React.useState(true)
    React.useEffect(() => {
        SetLoading(true)

        Axios(`http://52.3.255.128:8000/UserPanel/Get-SubCategoryByCategory/${Id}`, {
        }
        
        ).then(response => {
            SetCategory(response.data.data)
            SetLoading(false)
        }).catch(
            function (error) {
                SetLoading(false)
                // SetProduct(Product => ({ ...Product, discount: "None" }))
            })
    },[Id])
    return (
        <div>
            <CategoryProduct></CategoryProduct>
            <div className="col-12 center">

            {
           
            Loading ? <div className="loaderFLower"></div> :  <NewProductCategorySlider flowerArray={Category}></NewProductCategorySlider>
            }
            </div>
        </div>
    )
}



export default CategoryFilter; 
