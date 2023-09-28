import React, { useState } from "react"
import CategoryProduct from "../../../Components/Page/Home/Dashboard/ComponentDashboard/CategoryProduct"
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { ProductSeo , ProductCategorySeo } from "../../Component/ScoPage/ProductSeo"
import ProductSearchResult from "./ProductSearchResult/ProductSearchResult"
const Product = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [loading ,  SetLoading] =  React.useState(false)
    const [subcategories , setsubcategories] = useState({})
    const [isproduct, setisproduct] = useState(true)
    function ShowCategoryProduct(id, name) {
        navigate(`/products/${name.toLowerCase()}/${id}`);
    }
    const [Product, SetProduct] = React.useState([])
    const [Category, SetCategory] = React.useState([])
    const [C , f] =  React.useState('')
    React.useEffect(() => {
        const fetchData = async () => {
            const apidata = await fetch("https://api.cannabaze.com/UserPanel/Get-Categories/");
            const data = await apidata.json()
            SetCategory(data)
        }
        fetchData() 
    }, [])

    React.useEffect(() => {
        SetLoading(true)
        if (params.id) {
            Axios(`https://api.cannabaze.com/UserPanel/Get-ProductByCategory/${params.id}`, {
            }

            ).then(response => {
                SetLoading(false)
                setisproduct(true)
             SetProduct(response.data)
             f(params.categoryname.charAt(0).toUpperCase() + params.categoryname.slice(1))
            }).catch(
                function (error) {
                    SetLoading(false)   
                    setisproduct(false)
            })
          
           
            Axios.get(`https://api.cannabaze.com/UserPanel/Get-SubCategoryByCategory/${params.id}`).then((res)=>{
               return res
            }).then((response)=>{
                setsubcategories(response.data)
               
            })
       
              
            
        }
        else (
            Axios(`https://api.cannabaze.com/UserPanel/Get-AllProduct/`, {
            }

            ).then(response => {
                SetLoading(false)
                f("All Product")
                SetProduct(response.data)
            }).catch(
                function (error) {
                })
        )

    }, [params.id])
    return (
        <>
           { !params.id ? <ProductSeo></ProductSeo>:
            <ProductCategorySeo categoryname={params.categoryname} ></ProductCategorySeo>}
            <div className="container-fluid product_container" >
                <div className="row">
                    <div className="col-12 mt-4">
                        <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct}></CategoryProduct>
                    </div>
                    <div className="col-12 center">
                        {
                            loading ?
                                <div className="loaderFLower"></div>
                                :
                                isproduct ? <div className="col-12 mt-4">
                                    <ProductSearchResult RelatedProductResult={Product} CategoryName={C} subcategories={subcategories} />
                                </div> : <div className="no_product">
                                    <h2>No Product Found</h2>
                                </div>
                        }
                    </div>
                  
                    {/* {
                        SubCategory.map((data , index) => {
                            return (
                                <div key={index}>
                                    <div className="col-12 mt-4  fontStyle">
                                        <h2 className="productSlider_headings">{data.name}</h2>
                                        <NewProductCategorySlider flowerArray={data.subcategories}/>
                                    </div>

                                    <hr />
                                </div>
                            )
                        })
                    } */}
                    {/* <div className="col-12 mt-4   fontStyle">
                        <h3 className="productSlider_headings">Recent views</h3>
                        <RecentViewProduct />
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default Product