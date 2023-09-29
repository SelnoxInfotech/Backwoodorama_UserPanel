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
    const [subcategories , setsubcategories] = useState([])
    const [subcategoriesproducts , setsubcategoriesproducts] = useState({})
    const [isproduct, setisproduct] = useState(true)
    function ShowCategoryProduct(id, name) {
        navigate(`/products/${name.toLowerCase()}/${id}`);
    }
    const [Product, SetProduct] = React.useState([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const selectOption = (option) => {
      setSelectedOption(option);
      setIsDropdownOpen(false);
      subcategorieschange(option.id)
      
    };
    async  function  subcategorieschange(id,name){
          SetLoading(true)
          Axios.get(`https://api.cannabaze.com/UserPanel/Get-ProductBySubCategory/${id}`).then((res)=>{
            SetProduct(res.data) 
            SetLoading(false)
           
          }).catch((err)=>{
            setisproduct(false)
            SetLoading(false)
          })
          await navigate(`/products/${name.toLowerCase()}/${id}`);
    }
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
        setIsDropdownOpen(false)

        if (params.id) {
            Axios(`https://api.cannabaze.com/UserPanel/Get-ProductByCategory/${params.id}`, {
            }
            ).then(response => {
                SetLoading(false)
                setisproduct(true)
                SetProduct(response.data)
               f(params.categoryname.charAt(0).toUpperCase() + params.categoryname.slice(1))
               setSelectedOption(null)
            }).catch(
                function (error) {
                    SetLoading(false)   
                    setisproduct(false)
            })
          
           
            Axios.get(`https://api.cannabaze.com/UserPanel/Get-SubCategoryByCategory/${params.id}`).then((res)=>{
               return res
            }).then((response)=>{
               console.log(response.data.data , 'response data')
                setsubcategories(response.data.data)
               
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
                    {
                        subcategories.length ?
                        <div className="col-12 my-sm-4 my-2">
                            <div className="d-flex justify-content-end align-items-center">
                                <div className="mydropdown ">
                                    <div className="dropdown-toggle" onClick={()=>{
                                        setIsDropdownOpen(!isDropdownOpen)
                                    }}>
                                            {selectedOption && (
                                                <img src={`https://api.cannabaze.com/${selectedOption.SubCategoryImage}`} alt={selectedOption.name} className="dropdown-option-image" />
                                            )}
                                            <span className="dropdown-option-label">
                                                {selectedOption ? selectedOption.name : 'Select Subcategory '}
                                            </span>
                                            <span className="dropdown-caret"></span>
                                    </div>
                                    <ul className={`dropdown-menu image_dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                        {subcategories?.map((option, index) => (
                                            <li key={index} onClick={() => selectOption(option)}>
                                                <img src={`https://api.cannabaze.com/${option.SubCategoryImage}`} alt={option.name} className="dropdown-option-image" />
                                                <span className="dropdown-option-label">{option.name}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            
                            </div>
                        </div>:
                        null
                    }
                    <div className="col-12 center">
                        {
                            loading ?
                                <div className="loaderFLower"></div>
                                :
                                isproduct ?
                                
                            
                                <div className="col-12 mt-4">
                                    <ProductSearchResult RelatedProductResult={Product} CategoryName={C}  />
                                </div> :
                                 <div className="no_product">
                                    <h2>No Product Found</h2>
                                </div>
                        }
                    </div>                  
                </div>
            </div>
        </>
    )
}
export default Product