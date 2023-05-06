import React from "react";
import CategoryProduct from "../Home/Dashboard/ComponentDashboard/CategoryProduct"
import { useLocation } from "react-router-dom";
import  Axios  from "axios";
import NewProductCategorySlider from "./NewProductCategorySlider";
const CategoryFilter = () => {

    const location = useLocation()
    const Id = location.state
const [Category , SetCategory] = React.useState([])
    React.useEffect(() => {
        Axios(`http://52.3.255.128:8000/UserPanel/Get-SubCategoryByCategory/${Id}`, {
        }).then(response => {
            SetCategory(response.data.data)
        }).catch(
            function (error) {

                alert("Something Goes Wrong")
                // SetProduct(Product => ({ ...Product, discount: "None" }))
            })
    },[Id])
    return (
        <div>
            <CategoryProduct></CategoryProduct>
            <NewProductCategorySlider flowerArray={Category}></NewProductCategorySlider>
        </div>
    )
}



export default CategoryFilter; 
