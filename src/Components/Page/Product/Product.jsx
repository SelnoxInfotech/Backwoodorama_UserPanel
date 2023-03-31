import React from "react"
import { BsLayoutSplit } from "react-icons/bs"
import { BsDropletHalf } from "react-icons/bs"
import {MdOutlineBrandingWatermark} from "react-icons/md"
import ProductList from "./Component/ProductList"
import Axios from "axios"
import Flavour from "../Delivery/Flavour/Flavour"
import ProductFilter from "./Component/ProductFilter"
const Product = () => {
    const [arr1, Setarr1] = React.useState([])
    React.useEffect(() => {
        Axios("http://52.3.255.128:8000/UserPanel/Get-Product/", {


        }).then(response => {
            Setarr1(response.data)
            // SetProduct(Product => ({ ...Product, Category: response.data?.data[0].id }))


        }).catch(
            function (error) {

                // SetProduct(Product => ({ ...Product, discount: "None" }))
            })
    }, [])


    const weeBtn = [{ quant: "1gms", rs: "121" }, { quant: "2gms", rs: "23" }, { quant: "3gms", rs: "25" },
    { quant: "4gms", rs: "26" }, { quant: "5gms", rs: "27" }, { quant: "6gms", rs: "28" }, { quant: "7gms", rs: "29" }]

const ProductFilterData=[{Name:"Category",Type1:"Flower",Type2:"CBD",Icons:<BsDropletHalf/>},{Name:"Brand",Type1:"Leafly",Type2:"CBD",Icons:<MdOutlineBrandingWatermark/>}]

    return (
        <>
            <div className="container-fluid" style={{ padding: "35px" }}>
                <Flavour></Flavour>
                <div className="row center">
                    <div className="col-12   productCat_cont">
                        <div className="col-2  prod_cat_left_sec center d-block mt-4">
                            <div className="col-12 p-2">
                                <h5>Product Category</h5>

                            </div>
                            <div className="col-12 d-flex prodCat_gap p-2" >
                                <span><BsLayoutSplit /></span><p>All category</p>

                            </div>
                            
                            <ProductFilter ProductFilterData={ProductFilterData}/>
                        </div>
                        <div className="col-9  mt-4 prod_cat_right_sec ">
                            <ProductList arr={arr1} btn={weeBtn} />


                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}
export default Product