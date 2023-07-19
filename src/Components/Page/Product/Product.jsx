import React from "react"
import CategoryProduct from "../../../Components/Page/Home/Dashboard/ComponentDashboard/CategoryProduct"
import Axios from "axios"
import NewProductCategorySlider from "./NewProductCategorySlider"
import RecentViewProduct from "./RecentViewProduct/RecentViewProduct"
import { useNavigate } from "react-router-dom"
const Product = () => {
    const navigate = useNavigate();
    const [SubCategory, SetSubCategory] = React.useState([])
    React.useEffect(() => {
        Axios("https://sweede.app/UserPanel/Get-AllSubCategory/", {


        }).then(response => {
            SetSubCategory(response.data)

        }).catch(
            function (error) {

            })
       
    }, [])


    // const FilterCategory = (id) => {
    //     Axios(`https://sweede.app/UserPanel/Get-ProductByCategory/${id}`, {


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
    //     Axios(`https://sweede.app/UserPanel/Get-SearchFilter/?search=${Searchvalue}`, {


    //     }).then(response => {

    //         Setarr1(response.data)




    //     }).catch(
    //         function (error) {

    //         })
    // }

    // const SearchA2Z = () => {
    //     Axios(`https://sweede.app/UserPanel/Get-SortingFilterAtoZ/`, {


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
            const apidata = await fetch("https://sweede.app/UserPanel/Get-Categories/");
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