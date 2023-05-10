import React from "react";
import CategoryProduct from "../Home/Dashboard/ComponentDashboard/CategoryProduct"
import { useLocation , useNavigate } from "react-router-dom";
import  Axios  from "axios";
import NewProductCategorySlider from "./NewProductCategorySlider";
import AllProductCategory from "./AllProductCategory";
const CategoryFilter = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const {id} = location.state
    console.log(location.state)
const [Category , SetCategory] = React.useState([])
const  [ Loading  , SetLoading] = React.useState(true)
    React.useEffect(() => {
        SetLoading(true)

        Axios(`http://52.3.255.128:8000/UserPanel/Get-SubCategoryByCategory/${id}`, {
        }
        
        ).then(response => {
            SetCategory(response.data.data)
            SetLoading(false)
        }).catch(
            function (error) {
                SetLoading(false)
               
            })
    },[id])
    function ShowCategoryProduct (id ,name) {
        navigate(`/CategoryProduct/${name}`, { state: {  id  } });
    }

    return (
        <div>
            <CategoryProduct ShowCategoryProduct={ShowCategoryProduct}></CategoryProduct>
            <div className="col-12 center">

            {
           
            Loading ? <div className="loaderFLower"></div> :  <AllProductCategory flowerArray={Category}></AllProductCategory>
            }
            </div>
        </div>
    )
}



export default CategoryFilter; 
