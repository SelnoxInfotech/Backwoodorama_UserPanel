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
// import SearchBar from '@mkyy/mui-search-bar';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import _ from "lodash"
// import Createcontext from "../../../Hooks/Context"
// import { Grid } from "@mui/material"
// import NewFlavourBanner from "../../Component/NewFlavour/NewFlavourBanner"
import NewProductCategorySlider from "./NewProductCategorySlider"
// import AllProductCategory from "./AllProductCategory"
// import ProductSearchResult from "./ProductSearchResult/ProductSearchResult"
import RecentViewProduct from "./RecentViewProduct/RecentViewProduct"
const Product = () => {
    // const { dispatch } = React.useContext(Createcontext)
    // const [Searchvalue, setSearchvalue] = React.useState()
    // // const classes = useStyles()
    const [SubCategory, SetSubCategory] = React.useState([])
    // const [arr1, Setarr1] = React.useState([])
    // const [Product, SetProduct] = React.useState('');
    React.useEffect(() => {
        Axios("http://52.3.255.128:8000/UserPanel/Get-AllSubCategory/", {


        }).then(response => {
            SetSubCategory(response.data)

        }).catch(
            function (error) {

            })
        // Axios("http://52.3.255.128:8000/UserPanel/CategoryOnProduct/ ", {



        // }).then(response => {
        //     var uniqueUsersByID = _.uniqBy(response.data, 'Category_id'); //removed if had duplicate id
        //     var uniqueUsers = _.uniqWith(response.data, _.isEqual);//removed complete duplicates



        // }).catch(
        //     function (error) {


        //     })
    }, [])


    // const FilterCategory = (id) => {
    //     Axios(`http://52.3.255.128:8000/UserPanel/Get-ProductByCategory/${id}`, {


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
    //     Axios(`http://52.3.255.128:8000/UserPanel/Get-SearchFilter/?search=${Searchvalue}`, {


    //     }).then(response => {

    //         Setarr1(response.data)




    //     }).catch(
    //         function (error) {

    //         })
    // }

    // const SearchA2Z = () => {
    //     Axios(`http://52.3.255.128:8000/UserPanel/Get-SortingFilterAtoZ/`, {


    //     }).then(response => {

    //         Setarr1(response.data)



    //     }).catch(
    //         function (error) {


    //         })

    // }

    // const SearchZ2A = () => {
    //     Setarr1(arr1?.reverse())
    // }

    return (
        <>
            <div className="container-fluid product_container" >
                <div className="row">
                    <div className="col-12 mt-4">
                        <CategoryProduct></CategoryProduct>

                    </div>

                    {
                        SubCategory.map((data) => {
                            return (
                                <div>
                                    <div className="col-12 mt-4 productSlider_headings fontStyle">
                                        <h1>{data.name}</h1>
                                        <NewProductCategorySlider flowerArray={data.subcategories} />
                                    </div>

                                    <hr />
                                </div>
                            )
                        })
                    }

                    {/* <div className="col-12 mt-4 productSlider_headings fontStyle">
                        <h1>Edible</h1>
                        {/* <NewProductCategorySlider flowerArray={flowerArray2}/> */}

                    {/* </div>
                    <hr />

                    <div className="col-12 mt-4 productSlider_headings fontStyle">
                        <h1>Vape & Carts</h1>
                        {/* <NewProductCategorySlider flowerArray={flowerArray2}/> */}

                    {/* </div>
                    <hr />

                    <div className="col-12 mt-4 productSlider_headings fontStyle">
                        <h1>Concentrates</h1>
                        {/* <NewProductCategorySlider flowerArray={flowerArray2}/> */}

                    {/* </div>
                    <hr />

                    // <div className="col-12 mt-4 productSlider_headings fontStyle">
                    //     <h1>CBD</h1>
                    //     {/* <NewProductCategorySlider flowerArray={flowerArray2}/> */}

                    {/* // </div> */}

                    {/* <hr /> */}

                    <div className="col-12 mt-4 productSlider_headings fontStyle">
                        <h1>Recent views</h1>
                        <RecentViewProduct />

                    </div>


                </div>

                <div className="row center  mt-2 p-2" >
                    {/* <div className="col-12 mt-4 product_search_and_select">
                        <div className="col-2 product_search_bar">
                            <SearchBar
                                onChange={newValue => setSearchvalue(newValue)}
                                onSearch={Search}
                                // callback={(Search) => console.log(Search)}

                                style={{ border: "1px solid #dee2e6" }} width={"100%"} />


                        </div>
                        <div className="col-10 product_select">
                            <Grid display={{ xs: "none", md: "contents", lg: "contents" }}>
                                <FormControl sx={{Width: "160px",height:"36px"}}>
                                    <Select
                                        value={Product}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        size="small"
                                        style={{width:"160px",height:"36px"}}
                                    >
                                        <MenuItem value="" disabled>
                                            Sort by
                                        </MenuItem>
                                        <MenuItem value={"Sort by A to Z"} onClick={SearchA2Z}>
                                            Sort by A to Z
                                        </MenuItem>
                                        <MenuItem value={"Sort by Z to A"} onClick={SearchZ2A}>Sort by Z to A</MenuItem>
                                        <MenuItem value={"Price low to high"}>Price low to high</MenuItem>
                                        <MenuItem value={"Price hight to low"}>Price hight to low</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>
                        </div>

                    </div> */}

                    {/* <div className="col-12  productCat_cont"> */}

                    {/* <ProductFilter ProductFilterData={ProductFilterData} Setarr1={Setarr1} /> */}
                    {/* <div className="col-12   prod_cat_right_sec">         */}
                    <div className="col-12 mt-4">
                        {/* <ProductSearchResult RelatedProductResult={RelatedProductResult}/> */}
                        {/* <ProductSearchResult/> */}

                    </div>


                    {/* </div>
                    </div> */}




                </div>




            </div>
        </>
    )
}
export default Product