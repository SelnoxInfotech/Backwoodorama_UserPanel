import React, { useState } from "react"
import CategoryProduct from "../../../Components/Page/Home/Dashboard/ComponentDashboard/CategoryProduct"
import Axios from "axios";
import ClickAwayListener from 'react-click-away-listener';
import { useNavigate, useParams } from "react-router-dom"
import { ProductSeo, ProductCategorySeo } from "../../Component/ScoPage/ProductSeo"
import ProductSearchResult from "./ProductSearchResult/ProductSearchResult"
const Product = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [loading, SetLoading] = React.useState(false)
    const [subcategories, setsubcategories] = useState([])
    const [Product, SetProduct] = React.useState([])
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
          if (str.includes("--")) {
            str = str.replaceAll("--", "-")
          } else if (str.includes("//")) {
            str = str.replaceAll("//", "/")
          } else if (str.includes("//")) {
            str = str.replaceAll("-/", "/")
          } else if (str.includes("//")) {
            str = str.replaceAll("/-", "/")
          } else {
            a++
          }
        }
    
        return str
      }


    async function ShowCategoryProduct(id, name) {
        await navigate(`/products/${modifystr(name.toLowerCase())}/${id}`);
        await setSelectedOption(null)
        setsubcategories([])
    }

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        navigate(`/products/${modifystr(params.categoryname.toLowerCase())}/${modifystr(option.name.toLowerCase())}/${option.id}`)

    };

    const [Category, SetCategory] = React.useState([])
    const [C, f] = React.useState('')
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
       



        if (params.subCategory) {
            Axios.get(`https://api.cannabaze.com/UserPanel/Get-ProductBySubCategory/${params.id}`).then((res) => {
                SetProduct(res.data)
                SubCategoryApi(res.data[0].category_id)
                SetLoading(false)

            }).catch((err) => {
                SetLoading(false)
                SetProduct([])
            })
         function SubCategoryApi(_id){
            Axios.get(`https://api.cannabaze.com/UserPanel/Get-SubCategoryByCategory/${_id}`).then((res) => {
                return res
            }).then((response) => {
                setsubcategories(response.data.data)

            })
         }

        }
        else {
            if (params.categoryname) {
                Axios(`https://api.cannabaze.com/UserPanel/Get-ProductByCategory/${params.id}`, {}
                ).then(response => {

                    SetLoading(false)

                    SetProduct(response.data)
                    f(params.categoryname.charAt(0).toUpperCase() + params.categoryname.slice(1))
                    setSelectedOption(null)
                }).catch(

                    function (error) {
                        SetProduct([])
                        SetLoading(false)

                    })

                Axios.get(`https://api.cannabaze.com/UserPanel/Get-SubCategoryByCategory/${params.id}`).then((res) => {
                    return res
                }).then((response) => {
                    setsubcategories(response.data.data)

                })

            }
            else {
                Axios(`https://api.cannabaze.com/UserPanel/Get-AllProduct/`, {
                }

                ).then(response => {
                    SetLoading(false)
                    f("All Product")
                    SetProduct(response.data)
                }).catch(
                    
                    function (error) {
                        SetProduct([])
                    })
            }
        }


    }, [params])


  
    return (
        <>
            {!params.id ? <ProductSeo></ProductSeo> :
                <ProductCategorySeo categoryname={params.categoryname} ></ProductCategorySeo>}
            <div className="container-fluid product_container" >
                <div className="row">
                    <div className="col-12 mt-4">
                        <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct}></CategoryProduct>
                    </div>
                    {
                        params.categoryname ?
                            <div className="col-12 mt-sm-4 mt-2">
                                <div className="d-flex justify-content-end align-items-center">
                                    <ClickAwayListener onClickAway={() => {
                                        setIsDropdownOpen(false)
                                    }}>
                                        <div className="mydropdown ">
                                            <div className="dropdown-toggle" onClick={() => {
                                                setIsDropdownOpen(!isDropdownOpen)
                                            }}>
                                                {selectedOption && (
                                                    <img src={`https://api.cannabaze.com${selectedOption.SubCategoryImage}`} alt={selectedOption.name} className="dropdown-option-image" />
                                                )}
                                                <span className="dropdown-option-label">
                                                    {selectedOption ? selectedOption.name : 'Short by Subcategory '}
                                                </span>
                                                <span className="dropdown-caret"></span>
                                            </div>
                                            <ul className={`dropdown-menu image_dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                                {subcategories?.map((option, index) => (
                                                    <li key={index} onClick={() => selectOption(option)}>
                                                        <img src={`https://api.cannabaze.com${option.SubCategoryImage}`} alt={option.name} className="dropdown-option-image" />
                                                        <span className="dropdown-option-label">{option.name}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </ClickAwayListener>
                                </div>
                            </div>
                            :
                            null
                    }
                    <div className="col-12 center">
                        {
                            loading ?
                                <div className="loaderFLower"></div>
                                :
                                Product.length ?

                                    <div className="col-12 mt-4">
                                        <ProductSearchResult RelatedProductResult={Product} CategoryName={C} />
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