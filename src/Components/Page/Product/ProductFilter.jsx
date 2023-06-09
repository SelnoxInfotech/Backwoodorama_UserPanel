import React from "react"
import { FiChevronRight } from "react-icons/fi"
import { FiChevronLeft } from "react-icons/fi"
import useStyles from "../../../Style"
import Axios from "axios"
import _ from "lodash"
import { FormControl, Grid, Menu, MenuItem, Select } from "@mui/material"
import SearchBar from '@mkyy/mui-search-bar';

const ProductFilter = ({ ProductFilterData, Setarr1, Category, Store_id }) => {
    const classes = useStyles()
    const [OpenEvent, SetOpenEvent] = React.useState(null);
    const [OpenSortedData, SetOpenSortedData] = React.useState(null);
    const [Searchvalue, setSearchvalue] = React.useState()
    const [Filter, SetFilter] = React.useState([])
    const [SubCategory, SetSubCategory] = React.useState([])

    const SortedArrayData = [{ Id: 1, name: "Sort by" }]
    const SortedData = [{ type: "Sort by A to Z" }, { type: "Sort by Z to A" }, { type: "Sort by low to high" }, { type: "Sort by high to low" }]
    const HandleOpenSortedData = (Id, name) => {
        if (OpenSortedData === Id) {
            SetOpenSortedData(null)
            return false;
        }
        SetOpenSortedData(Id)
    }
    const HandleOpenEvent = (Id, Name) => {

        SetFilter([])
        SetSubCategory([])
        if (OpenEvent === Id) {
            SetOpenEvent(null)
            return false;
        }
        SetOpenEvent(Id)
        if (Name === "Category") {
            Axios.post("https://sweede.app/UserPanel/Get-CategoryByStore/ ",
                {

                    "Store_Id": parseInt(Store_id)

                }
            ).then(async response => {
                const d = []
                response.data.map((data) => {
                    d.push(data[0])
                    var uniqueUsersByID = _.uniqBy(d, 'id'); //removed if had duplicate id
                    SetFilter(uniqueUsersByID)
                })

            }).catch(
                function (error) {
                })


        }
        else if (Name === "Brand") {
            Axios(`https://sweede.app/UserPanel/Get-FilterBrand`, {


            }).then(response => {

                SetFilter(response.data)
            }).catch(
                function (error) {

                    alert("SomeThing Goes wrong")
                })

        }
        else if (Name === "Strain") {
            SetFilter([{ id: "N", name: "None", }, { id: "I", name: "Indica", }, { id: "Sativa", name: "Sativa", }, { id: "hybrid", name: "hybrid", }, { id: "CBD", name: "CBD", }])

        }




    }
    function Category_Drop(id, name) {
        if (name === "Category") {

            Axios.post(`https://sweede.app/UserPanel/Get-filterSubcategorybyStoreandCategory/`, {

                "Store_Id": Store_id,
                "Category_Id": id

            }).then(response => {

                SetSubCategory(response.data)
                console.log(response.data)



            }).catch(
                function (error) {

                })

        }

        else if (name === "Brand") {
            Axios(`https://sweede.app/UserPanel/Get-ProductbyBrand/${id}`, {


            }).then(response => {

                Setarr1(response.data)




            }).catch(
                function (error) {

                })
        }

    }


    function FilterSubCategorydata(id) {
        console.log(id)
        Axios.post(`https://sweede.app/UserPanel/Get-filterProductbyStoreandSubCategory/`, {

            "Store_Id": Store_id,
            "SubCategory_Id": id
        }).then(async response => {
            Setarr1(response.data)

        }).catch(
            function (error) {
                alert("Something Goes Wrongkkk")
            })

    }
    const Search = () => {
        Axios(`https://sweede.app/UserPanel/Get-SearchFilter/?search=${Searchvalue}`, {


        }).then(response => {

            Setarr1(response.data)




        }).catch(
            function (error) {

            })
    }

    const SearchA2Z = () => {
        Axios(`https://sweede.app/UserPanel/Get-SortingFilterAtoZ/`, {


        }).then(response => {

            Setarr1(response.data)



        }).catch(
            function (error) {


            })

    }

    const SearchZ2A = () => {
        // Setarr1(arr1?.reverse())
    }
    const handleChange = (event) => {
        // SetProduct(event.target.value);
    };
    return (
        <>
            <div className="col-12 mt-4 product_search_and_select">
                <div className="col-2 product_search_bar">
                    <SearchBar
                        onChange={newValue => setSearchvalue(newValue)}
                        onSearch={Search}
                        // callback={(Search) => console.log(Search)}

                        style={{ border: "1px solid #dee2e6" }} width={"100%"} />


                </div>
                <div className="col-10 product_select">
                    <Grid container display={{ xs: "none", md: "contents", lg: "contents" }}>
                        <FormControl sx={{ Width: "160px", height: "36px" }}>
                            <Select
                                // value={Product}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                size="small"
                                style={{ width: "160px", height: "36px" }}
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

            </div>

            <div className="col-lg-2 col-md-12 prod_cat_left_sec  center">

                {ProductFilterData.map((ele, index) => {

                    const { Id, Name, Icons } = ele;
                    return (
                        <div key={index}>
                            <div className="col-12 d-flex prodCat_gap product_category_border " onClick={() => HandleOpenEvent(Id, Name)}>
                                <div className="col-1 brand_left_arrow">
                                    <p>{(Id === OpenEvent) ? <FiChevronLeft className={classes.muiIcons} /> : ""}</p>
                                </div>
                                <div className="col-1 prod_filter_icon">
                                    <p>{Icons}</p>
                                </div>
                                <div className="col-6 fontStyle product_filter_name">
                                    <p>{Name}</p>
                                </div>
                                <div className="col-4 brand_right_arrow">

                                    <p>{(Id === OpenEvent) ? "" : <FiChevronRight className={classes.muiIcons} />}</p>

                                </div>

                            </div>
                            {(Id === OpenEvent) ?
                                (

                                    <div className="col-xl-10 col-xs-4 product_category_border product_category_dropdown" id="Related_Brand_Data" >

                                        {
                                            Filter?.map((data) => {
                                                return (
                                                    <div>
                                                        <div className="col-10 px-2 product_category_dropdown_cursor">
                                                            <p onClick={() => { Category_Drop(data.id, ele.Name,) }}>{data.name}</p>
                                                        </div>
                                                        {
                                                            SubCategory?.map((SubCategory) => {
                                                                return (
                                                                    SubCategory.category_id === data.id
                                                                    &&
                                                                    <div className="col-10 px-2 py-0 product_sub_category_dropDown_cursor" style={{ left: "33px", position: "relative" }} >
                                                                        <p onClick={() => { FilterSubCategorydata(SubCategory.id) }}>{SubCategory.name}</p>

                                                                    </div>
                                                                )

                                                            })
                                                        }

                                                    </div>

                                                )
                                            })
                                        }

                                    </div>



                                )
                                :
                                ""
                            }
                        </div>
                    )


                })}
                <Grid container display={{ xs: "block", md: "none", lg: "none" }}>

                    {SortedArrayData.map((ele, index) => {
                        const { Id, name } = ele
                        return (
                            <div key={index}>
                                <div className="col-12" onClick={() => HandleOpenSortedData(Id, name)}>
                                    <ol className="productFilter_sortedList prodfilterSortedListGap">
                                        <li>
                                            {(Id === OpenSortedData) ? <FiChevronLeft /> : ""}

                                        </li>
                                        <li className="fontStyle">{name}</li>
                                        <li>
                                            {(Id === OpenSortedData) ? "" : <FiChevronRight />}

                                        </li>
                                    </ol>
                                </div>


                                {(Id === OpenSortedData) ?
                                    (
                                        <div className="border product_Sorted_filter_dropdown">
                                            <ol className="productFilter_sortedList">{SortedData.map((ele, index) => {
                                                return (
                                                    <li key={index}>{ele.type}</li>
                                                )
                                            })}</ol>
                                        </div>
                                    ) : ""
                                }


                            </div>
                        )
                    })}
                </Grid>

            </div>


        </>
    )

}
export default ProductFilter