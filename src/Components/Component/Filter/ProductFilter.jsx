import React, { useState } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"
import useStyles from "../../../Style"
import ClickAwayListener from 'react-click-away-listener';
import Axios from "axios"
import _ from "lodash"
import { FormControl, Grid, MenuItem, Select } from "@mui/material"
import SearchBar from '@mkyy/mui-search-bar';
import { useParams, useNavigate, useLocation } from "react-router-dom"
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { PriceFilter } from "../../../Api/Api"
import Createcontext from "../../../Hooks/Context"
const ProductFilter = ({ ProductFilterData, arr, Setarr1, Store_id }) => {
    const classes = useStyles()
    const { id } = useParams()
    const { state, dispatch } = React.useContext(Createcontext)
    const [select, setselect] = useState("Sort by A to Z")
    const navigate = useNavigate()
    const [OpenEvent, SetOpenEvent] = useState(null);
    const [OpenSortedData, SetOpenSortedData] = useState(null);
    const [Filter, SetFilter] = useState([])
    const [SubCategory, SetSubCategory] = useState([])
    const [catname, setcatname] = useState('')
    const [catname2, setcatname2] = useState('')
    const SortedArrayData = [{ Id: 1, name: "Sort by" }]
    const SortedData = [{ type: "Sort by A to Z" }, { type: "Sort by Z to A" }, { type: "Sort by low to high" }, { type: "Sort by high to low" }]

    const [value, setValue] = React.useState();
    function valuetext(value) {
        return `${value}°C`;
    }

    const handleChangepp = (event, newValue) => {
      
        setValue(newValue);
    };

    const HandleOpenSortedData = (Id, name) => {
        if (catname2 === name) {
            SetOpenSortedData(null)
            setcatname2(null)
            return false;
        } else {
            SetOpenSortedData(Id)
            setcatname2(name)
        }
    }
    const HandleOpenEvent = (Id, Name) => {
        SetFilter([])
        SetSubCategory([])

        if (catname === Name) {
            SetOpenEvent(null)
            setcatname(null)
            return false;
        } else {
            SetOpenEvent(Id)
            setcatname(Name)
        }

        if (Name === "Category") {
            Axios.post("https://api.cannabaze.com/UserPanel/Get-CategoryByStore/ ",
                {

                    "Store_Id": parseInt(Store_id)

                }
            ).then(async response => {
                const d = []
                response.data.map((data) => {
                    d.push(data[0])
                    var uniqueUsersByID = _.uniqBy(d, 'id'); //removed if had duplicate id

                    SetFilter(uniqueUsersByID)
                    return data
                })

            }).catch(
                function (error) {
                })


        }
        else if (Name === "Brand") {
            Axios(`https://api.cannabaze.com/UserPanel/Get-BrandByStore/${Store_id}`, {


            }).then(response => {
                SetFilter(_.uniqBy(response.data, 'name'))
            }).catch(
                function (error) {

                    alert("SomeThing Goes wrong")
                })

        }
        else if (Name === "Strain") {
            SetFilter([{ id: "N", name: "None", }, { id: "I", name: "Indica", }, { id: "Sativa", name: "Sativa", }, { id: "hybrid", name: "hybrid", }, { id: "CBD", name: "CBD", }])

        }
        //         else if (Name === "Price") {
        //             // SetFilter(<p>fffffffffffffff</p>)
        // }

        SetOpenSortedData(null)


    }
    function Category_Drop(i, name) {
        if (name === "Category") {

            Axios.post(`https://api.cannabaze.com/UserPanel/Get-filterSubcategorybyStoreandCategory/`, {

                "Store_Id": Store_id,
                "Category_Id": i

            }).then(response => {

                SetSubCategory(_.uniqBy(response.data, "id"))



            }).catch(
                function (error) {

                })

        }

        else if (name === "Brand") {
            dispatch({ type: 'Loading', Loading: true })
            Axios(`https://api.cannabaze.com/UserPanel/Get-ProductByStoreAndBrand/${id}/${i}`, {


            }).then(response => {
                Setarr1(response.data)
                dispatch({ type: 'Loading', Loading: false })
            }).catch(
                function (error) {

                })
        }

        // else if (name === "Price") {
        //     Axios(`https://api.cannabaze.com/UserPanel/Get-ProductbyBrand/${id}`, {


        //     }).then(response => {

        //         Setarr1(response.data)




        //     }).catch(
        //         function (error) {

        //         })
        // }

    }
    function FilterSubCategorydata(SubCategoryid, SubCategory_name, categoryName) {
        dispatch({ type: 'Loading', Loading: true })
        Axios.post(`https://api.cannabaze.com/UserPanel/Get-filterProductbyStoreandSubCategory/`, {
            "Store_Id": Store_id,
            "SubCategory_Id": SubCategoryid
        }).then(async response => {
            dispatch({ type: 'Loading', Loading: false })
            Setarr1(response.data)
            // navigate(`${location.pathname.slice(0, 16) === "/weed-deliveries" ? "/weed-deliveries" : "/weed-dispensaries"}/${StoreName.replace(/\s/g, '-').toLowerCase()}/${"menu"}/${categoryName?.toLowerCase()}/${SubCategory_name?.toLowerCase().replace(/\s/g, '-')}/${SubCategoryid}`)
        }).catch(
            function (error) {
                alert("Something Goes Wrong")
            })
    }
    const handleChange = (event) => {

        setselect(event.target.value)
        if (event.target.value === 'Sort by A to Z') {
            Axios.get(`https://api.cannabaze.com/UserPanel/Get-SortingFilterAtoZ/${id}`).then((response) => {
                let newdata = response.data.map((res) => {

                    return res
                })
                Setarr1(newdata)
            }).catch((error) => {
                console.trace(error)

            })
        } else if (event.target.value === 'Sort by Z to A') {
            Axios.get(`https://api.cannabaze.com/UserPanel/Get-SortingFilterAtoZ/${id}`).then((response) => {
                let newdata = response.data.map((res) => {

                    return res
                })
                Setarr1(newdata.reverse())
            }).catch((error) => {
                console.trace(error)

            })
        } else if (event.target.value === 'Price low to high') {
            Axios.get(`https://api.cannabaze.com/UserPanel/HighPriceToLowPrice/${id}`).then((response) => {
                let newdata = response.data.map((res) => {

                    return res[0]
                })
                Setarr1(newdata)

            }).catch((error) => {
                console.trace(error)
            })
        } else {
            Axios.get(`https://api.cannabaze.com/UserPanel/HighPriceToLowPrice/${id}`).then((response) => {
                let newdata = response.data.map((res) => {

                    return res[0]
                })
                Setarr1(newdata.reverse())

            }).catch((error) => {
                console.trace(error)
            })
        }
    };
    const handleClickAway = () => {
        SetOpenEvent(null)
    };

    function searchHnadelchange(e) {

        let timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            if (e !== '') {
                dispatch({ type: 'Loading', Loading: true })
                Axios.get(`https://api.cannabaze.com/UserPanel/Get-SearchFilter/?search=${e}`, {
                }).then(response => {
                    let newdata = response.data.filter((item) => {
                        return item.Store_id === Store_id
                    })
                    Setarr1(newdata)
                    dispatch({ type: 'Loading', Loading: false })
                }).catch(
                    function (error) {
                    })
            } else {
                Setarr1(arr)
            }

        }, 1500);

    };

    React.useEffect(() => {

        
       const timer = setTimeout(() => {
        value !== undefined && dispatch({ type: 'Loading', Loading: true })
        value !== undefined && 

        PriceFilter(value,Store_id).then((res) => {
            Setarr1(res.data)
            dispatch({ type: 'Loading', Loading: false })
            }).catch(() => {
                // navigate('/fourzerothree')   
                dispatch({ type: 'Loading', Loading: false });
            })
        }, 1500);
     
        return () => clearTimeout(timer)
    }, [value])

    return (
        <>
            <div className="col-12 p-0 mt-4 product_search_and_select">
                <div className="col-2 product_search_bar">
                    <SearchBar
                        onChange={(e) => { searchHnadelchange(e) }}
                        style={{ border: "1px solid #dee2e6" }} width={"100%"} />

                </div>
                <div className="col-10 product_select">
                    <Grid container display={{ xs: "none", md: "contents", lg: "contents" }}>

                        <FormControl className={classes.muiSelect}  >
                            <Select
                                labelId="demo-simple-select-label"
                                value={select}
                                onChange={handleChange}

                                size="small"
                                defaultValue={'Sort by A to Z'}
                                style={{ width: "160px", height: "36px" }}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >

                                <MenuItem value={"Sort by A to Z"}>  Sort by A to Z </MenuItem>
                                <MenuItem value={"Sort by Z to A"}>Sort by Z to A</MenuItem>
                                <MenuItem value={"Price low to high"}>Price low to high</MenuItem>
                                <MenuItem value={"Price hight to low"}>Price high to low</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                </div>
            </div>
            <div className="col-lg-2 col-md-12 gap-sm-0 gap-2 prod_cat_left_sec  center">

                {ProductFilterData.map((ele, index) => {

                    const { Id, Name, Icons } = ele;
                    return (
                        <div key={index} className="filter_manu_items">
                            <div className="col-12 d-flex align-items-center prodCat_gap product_category_border " onClick={() => HandleOpenEvent(Id, Name)}>

                                <div className="col-sm-2 prod_filter_icon">
                                    <p>{Icons}</p>
                                </div>
                                <div className="col-sm-6 fontStyle product_filter_name">
                                    <p className="m-0">{Name}</p>
                                </div>
                                <div className="col-sm-2 brand_right_arrow">

                                    <p className="m-0">{(Id === OpenEvent) ? <IoIosArrowDown className={classes.muiIcons} /> : <FiChevronRight className={classes.muiIcons} />}</p>

                                </div>


                            </div>
                            {(Id === OpenEvent) ?
                                (
                                    <ClickAwayListener onClickAway={handleClickAway}>
                                        <div className="col-xl-10 col-xs-4 product_category_border product_category_dropdown" id="Related_Brand_Data" >

                                            {
                                                Filter.length !== 0 ?
                                                    Filter?.map((data) => {
                                                        return (
                                                            <div>
                                                                <div className="col-10 px-2 product_category_dropdown_cursor">
                                                                    <p onClick={() => { Category_Drop(data.id, ele.Name) }}>{data.name}</p>
                                                                </div>
                                                                {



                                                                    SubCategory?.map((SubCategory) => {
                                                                        return (
                                                                            SubCategory.CatgoryId === data.id
                                                                            &&
                                                                            <div className="col-10 px-2 py-0 product_sub_category_dropDown_cursor" style={{ left: "33px", position: "relative" }} >
                                                                                <p onClick={() => { FilterSubCategorydata(SubCategory.id, SubCategory.SubCategory_name, data.name, SubCategory.Store_id) }}>{SubCategory.SubCategory_name}</p>

                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                    :
                                                    Id === 4 ?
                                                        <Box >
                                                            <Slider
                                                                getAriaLabel={() => "Price range"}
                                                                sx={{
                                                                    '& .MuiSlider-thumb': {
                                                                        color: "#31B665"
                                                                    },
                                                                    '& .MuiSlider-track': {
                                                                        color: "#31B665"
                                                                    },
                                                                    '& .MuiSlider-rail': {
                                                                        color: "black"
                                                                    },
                                                                    '& .MuiSlider-active': {
                                                                        color: "green"
                                                                    }
                                                                }}
                                                                value={value}
                                                                onChange={handleChangepp}
                                                                getAriaValueText={valuetext}
                                                                valueLabelDisplay="auto"
                                                                min={1}
                                                                max={1000}
                                                                defaultValue={[100, 500]}
                                                            />
                                                        </Box> :
                                                        <p>No Category Found</p>
                                            }
                                        </div>
                                    </ClickAwayListener>
                                )
                                :
                                ""
                            }
                        </div>
                    )


                })

                }
                <Grid container display={{ xs: "inlineBlock", md: "none", lg: "none" }} style={{ width: 'auto', borderWidth: '1px', borderStyle: 'solid', borderColor: 'gainsboro' }}>

                    {SortedArrayData.map((ele, index) => {
                        const { Id, name } = ele
                        return (
                            <div key={index} onClick={() => HandleOpenSortedData(Id, name)}>

                                <ol className="productFilter_sortedList prodfilterSortedListGap">
                                    <li>
                                        {(Id === OpenSortedData) ? <FiChevronLeft /> : ""}

                                    </li>
                                    <li className="fontStyle">{name}</li>
                                    <li>
                                        {(Id === OpenSortedData) ? "" : <FiChevronRight />}

                                    </li>
                                </ol>



                                {(Id === OpenSortedData) ?
                                    (
                                        <ClickAwayListener onClickAway={() => { SetOpenSortedData(null) }}>
                                            <div className="border product_Sorted_filter_dropdown">
                                                <ol className="productFilter_sortedList">{SortedData.map((ele, index) => {
                                                    return (
                                                        <li key={index}>{ele.type}</li>
                                                    )
                                                })}</ol>
                                            </div>
                                        </ClickAwayListener>
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