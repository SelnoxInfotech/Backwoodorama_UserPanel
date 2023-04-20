import React from "react"
import { FiChevronRight } from "react-icons/fi"
import { FiChevronLeft } from "react-icons/fi"
import useStyles from "../../../Style"
import Axios from "axios"
import _ from "lodash"
const ProductFilter = ({ ProductFilterData, Setarr1 }) => {
    const classes = useStyles()
    const [OpenEvent, SetOpenEvent] = React.useState(null);
    const [Filter, SetFilter] = React.useState([])
    const [SubCategory, SetSubCategory] = React.useState([])
    const HandleOpenEvent = (Id, Name) => {

        SetFilter([])
        SetSubCategory([])
        if (OpenEvent === Id) {
            SetOpenEvent(null)
            return false;
        }
        SetOpenEvent(Id)
        if (Name === "Category") {
            Axios(`http://52.3.255.128:8000/UserPanel/CategoryOnProduct`, {


            }).then(response => {

                var uniqueUsers = _.uniqWith(response.data, _.isEqual);//removed complete duplicates
                SetFilter(uniqueUsers)
            }).catch(
                function (error) {

                    alert("SomeThing Goes wrong")
                })

        }
        else if (Name === "Brand") {
            Axios(`http://52.3.255.128:8000/UserPanel/Get-FilterBrand`, {


            }).then(response => {

                SetFilter(response.data)
            }).catch(
                function (error) {

                    alert("SomeThing Goes wrong")
                })

        }
        else if (Name === "Strain") {
          console.log("ddd")
          SetFilter ([{ id :"None"  , name: "None",  },{ id :"Indica" , name: "Indica",  },{ id :"Sativa" , name: "Sativa",  },{ id :"hybrid" , name: "hybrid",  },{ id :"CBD" , name: "CBD",}])

        } 


      

    }
    function Category_Drop(id, name) {
        console.log(name)
        if (name === "Category") {
            Axios(`http://52.3.255.128:8000/UserPanel/Get-SubCategoryByCategory/${id}`, {


            }).then(response => {

                SetSubCategory(response.data.data)




            }).catch(
                function (error) {

                })

        }

        else if (name === "Brand") {
            Axios(`http://52.3.255.128:8000/UserPanel/Get-ProductbyBrand/${id}`, {


        }).then(response => {
            console.log(response.data.data)
            Setarr1(response.data)




        }).catch(
            function (error) {

            })
        }

    }


    function FilterSubCategorydata(id) {

        Axios(`http://52.3.255.128:8000/UserPanel/Get-ProductBySubCategory/${id}`, {


        }).then(response => {
            Setarr1(response.data)

        }).catch(
            function (error) {
                alert("Something Goes Wrong")
            })

    }

    return (
        <div className="col-lg-2 col-md-12 prod_cat_left_sec  center">

            {ProductFilterData.map((ele, index) => {
                const { Id, Name, Type1, Type2, Price, Icons } = ele;
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

                                <div className="col-12 product_category_border product_category_dropdown" id="Related_Brand_Data" >

                                    {
                                        Filter?.map((data) => {
                                            return (
                                                <div>
                                                    <div className="col-10 px-2 ">
                                                        <p onClick={() => { Category_Drop(data.id, ele.Name , ) }}>{data.name}</p>
                                                    </div>
                                                    {
                                                        SubCategory?.map((SubCategory) => {
                                                            if (SubCategory.category_id === data.id) {
                                                                return (
                                                                    <div className="col-10 px-2 py-0 " style={{ left: "33px", position: "relative" }} >
                                                                        <p onClick={() => { FilterSubCategorydata(SubCategory.id) }}>{SubCategory.name}</p>

                                                                    </div>
                                                                )
                                                            }


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


        </div>
    )
}
export default ProductFilter