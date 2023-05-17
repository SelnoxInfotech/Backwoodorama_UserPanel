import React from "react"
// import { BsLayoutSplit } from "react-icons/bs"
import CategoryProduct from "../../../Components/Page/Home/Dashboard/ComponentDashboard/CategoryProduct"
// import { MdOutlineBrandingWatermark } from "react-icons/md"
// import { MdOutlinePriceChange } from "react-icons/md"
// import { BsStripe } from "react-icons/bs"
// import { GiWeightScale } from "react-icons/gi"
// import { RiProductHuntLine } from "react-icons/ri"
// import ProductList from "./ProductList"
import Axios from "axios"
// import ProductFilter from "./ProductFilter"
// import useStyles from "../../../Style"
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import _ from "lodash"
// import Createcontext from "../../../Hooks/Context"
// import SearchBar from '@mkyy/mui-search-bar';
// import { Grid } from "@mui/material"
// import NewFlavourBanner from "../../Component/NewFlavour/NewFlavourBanner"
import NewProductCategorySlider from "./NewProductCategorySlider"
// import AllProductCategory from "./AllProductCategory"
// import ProductSearchResult from "./ProductSearchResult/ProductSearchResult"
import RecentViewProduct from "./RecentViewProduct/RecentViewProduct"
import { useNavigate } from "react-router-dom"
const Product = () => {
    const navigate = useNavigate();

    // const { dispatch } = React.useContext(Createcontext)
    // const [Searchvalue, setSearchvalue] = React.useState()
    // // const classes = useStyles()
    const [SubCategory, SetSubCategory] = React.useState([])
    // const [arr1, Setarr1] = React.useState([])
    // const [Product, SetProduct] = React.useState('');
    React.useEffect(() => {
        Axios("http://backend.sweede.net/UserPanel/Get-AllSubCategory/", {


        }).then(response => {
            SetSubCategory(response.data)

        }).catch(
            function (error) {

            })
        // Axios("http://backend.sweede.net/UserPanel/CategoryOnProduct/ ", {



        // }).then(response => {
        //     var uniqueUsersByID = _.uniqBy(response.data, 'Category_id'); //removed if had duplicate id
        //     var uniqueUsers = _.uniqWith(response.data, _.isEqual);//removed complete duplicates



        // }).catch(
        //     function (error) {


        //     })
    }, [])


    // const FilterCategory = (id) => {
    //     Axios(`http://backend.sweede.net/UserPanel/Get-ProductByCategory/${id}`, {


    //     }).then(response => {

    //         Setarr1(response.data)

    //         // SetProduct(Product => ({ ...Product, Category: response.data?.data[0].id }))


    //     }).catch(
    //         function (error) {

    //             // SetProduct(Product => ({ ...Product, discount: "None" }))
    //         })

    // }

    // const handleChange = (event) => {
    //     SetProduct(event.target.value);
    // };
    // const Search = () => {
    //     Axios(`http://backend.sweede.net/UserPanel/Get-SearchFilter/?search=${Searchvalue}`, {


    //     }).then(response => {

    //         Setarr1(response.data)




    //     }).catch(
    //         function (error) {

    //         })
    // }

    // const SearchA2Z = () => {
    //     Axios(`http://backend.sweede.net/UserPanel/Get-SortingFilterAtoZ/`, {


    //     }).then(response => {

    //         Setarr1(response.data)



    //     }).catch(
    //         function (error) {


    //         })

    // }

    // const SearchZ2A = () => {
    //     Setarr1(arr1?.reverse())
    // }
    function ShowCategoryProduct (id ,name) {
        navigate(`/CategoryProduct/${name}`, { state: {  id  } });
    }
    const [Category, SetCategory] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            const apidata = await fetch("http://backend.sweede.net/UserPanel/Get-Categories/");
            const data = await apidata.json()
            SetCategory(data)
        }
        fetchData()

    }, [])

    return (
        <>
            <div className="container-fluid product_container" >
                <div className="row">
                    <div className="col-12 mt-4">
                        <CategoryProduct  Category={Category} ShowCategoryProduct={ShowCategoryProduct}></CategoryProduct>
                    </div>
                    {
                        SubCategory.map((data) => {
                            return (
                                <div>
                                    <div className="col-12 mt-4 productSlider_headings fontStyle">
                                        <h1>{data.name}</h1>
                                        <NewProductCategorySlider flowerArray={data.subcategories}/>
                                    </div>

                                    <hr />
                                </div>
                            )
                        })
                    }
                    <div className="col-12 mt-4  productSlider_headings fontStyle">
                        <h1>Recent views</h1>
                        <RecentViewProduct />
                    </div>
                </div>


            </div>
        </>
    )
}
export default Product