import React, { useState } from "react"
import CategoryProduct from "../../../Components/Page/Home/Dashboard/ComponentDashboard/CategoryProduct"
import ClickAwayListener  from '@mui/base/ClickAwayListener';
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { ProductSeo, ProductCategorySeo } from "../../Component/ScoPage/ProductSeo"
import SkeletonCard from '../../Component/Skeleton/DashBoardSkeleton/DispensoriesAddressSkeleton';
import ProductSearchResult from "./ProductSearchResult/ProductSearchResult"
import Createcontext from "../../../Hooks/Context"
import { GetProduct, CategoryProductsearch, SubCategoryApi, SubcategoryProduct } from "../../../Api/Api"
const Product = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation()
    const { state, dispatch } = React.useContext(Createcontext)
    const [loading, SetLoading] = React.useState(true)
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
        if (params.subCategory) {
            SetLoading(true)
            const object = {
                City: state.City.replace(/-/g, " "),
                Country: state.Country.replace(/-/g, " "),
                State: state.State.replace(/-/g, " ")
            }
            SubcategoryProduct(object, params.id).then((response) => {

                SetLoading(false)
                if (response !== "No Product Found") {
                    f(response[0]?.category_name)
                    SetProduct(response)
                }
                else {                 
                }
            })
        }
        else {
            if (params.categoryname) {
                const object = {
                    City: state.City.replace(/-/g, " "),
                    Country: state.Country.replace(/-/g, " "),
                    State: state.State.replace(/-/g, " ")
                }
                SetLoading(true)
                CategoryProductsearch(object, params.id).then((response) => {
                    if (response !== "No Product Found") {
                        SetLoading(false)
                        f(response[0]?.category_name)
                        SetProduct(response)
                        SubCategoryApi(response[0]?.category_id).then((response) => {
                            setsubcategories(response.data.data)
                        }).catch((error) => {
                            console.trace(error)
                        })
                    }
                    else {
                        SetLoading(false)
                        SetProduct(response.data.data)
                    }
                })
            }
            else {
                // Get All Product
                const object = {
                    City: state.City.replace(/-/g, " "),
                    Country: state.Country.replace(/-/g, " "),
                    State: state.State.replace(/-/g, " ")
                }
                SetLoading(true)
                GetProduct(object).then((response) => {
                    if (response.data !== "No Product Found") {
                        SetProduct(response.data)
                        if (response.data.length !== 0) {
                            SetLoading(false)
                            f("All Product")
                        }
                        else {
                            SetLoading(false)
                            SetProduct(response.data)
                        }
                    }
                })
            }
        }
    }, [state.Location, params])

    return (
        <>
            {!params.id ? <ProductSeo location={location.pathname}></ProductSeo> :
                <ProductCategorySeo categoryname={params.categoryname} location={location.pathname} ></ProductCategorySeo>}
            {/* <div className="product_container"> */}

            <div className="container " >
                <div className="row">
                    <div className="col-12 mt-4">
                        <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct}></CategoryProduct>
                    </div>
                    {
                        params.categoryname &&
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
                                                <img src={`${selectedOption.SubCategoryImage}`} alt={selectedOption.name} className="dropdown-option-image" />
                                            )}
                                            <span className="dropdown-option-label">
                                                {selectedOption ? selectedOption.name : 'Sort by Subcategory '}
                                            </span>
                                            <span className="dropdown-caret"></span>
                                        </div>
                                        <ul className={`dropdown-menu image_dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                            {subcategories?.map((option, index) => (
                                                <li key={index} onClick={() => selectOption(option)}>
                                                    <img src={`${option.SubCategoryImage}`} alt={option.name} className="dropdown-option-image" />
                                                    <span className="dropdown-option-label">{option.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </ClickAwayListener>
                            </div>
                        </div>
                    }
                    <div className="col-12 center">
                        {
                            loading ?
                                // <div className="loaderFLower"></div>
                                <div className="col-12">
                                    <SkeletonCard />
                                </div>
                                :
                                Product?.length !== 0 && Product !== undefined  ?

                                    <div className="col-12 mt-sm-4 mt-0">
                                        <ProductSearchResult RelatedProductResult={Product} CategoryName={C} />
                                    </div> :
                                    <div className="no_product">
                                        <h2>No Product Found</h2>
                                    </div>
                        }
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
export default Product