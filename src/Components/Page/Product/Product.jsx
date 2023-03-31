import React from "react"
import { BsLayoutSplit } from "react-icons/bs"
import {BsDropletHalf} from "react-icons/bs"
import ProductList from "./Component/ProductList"
import Axios from "axios"
import Flavour from "../Delivery/Flavour/Flavour"

const Product = () => {
   const [arr1 , Setarr1]  =  React.useState ([])

    React.useEffect(()=>{
        Axios("http://52.3.255.128:8000/UserPanel/Get-Product/", {


    }).then(response => {
        Setarr1(response.data)
        // SetProduct(Product => ({ ...Product, Category: response.data?.data[0].id }))


    }).catch(
        function (error) {

            // SetProduct(Product => ({ ...Product, discount: "None" }))
        })
    },[])


    const weeBtn = [{ quant: "1gms", rs: "121" }, { quant: "2gms", rs: "23" }, { quant: "3gms", rs: "25" },
    { quant: "4gms", rs: "26" }, { quant: "5gms", rs: "27" }, { quant: "6gms", rs: "28" }, { quant: "7gms", rs: "29" }]

    return (
        <>
            <div className="container-fluid" style={{ padding: "35px" }}>
                <Flavour></Flavour>
                <div className="row center">
                    <div className="col-12   productCat_cont p-2">
                        <div className="col-3  prod_cat_left_sec center d-block mt-4 p-2">
                            <div className="col-12 ">
                                <h5>Product Category</h5>

                            </div>
                            <div className="col-12 d-flex prodCat_gap " >
                                <span><BsLayoutSplit /></span><p>All category</p>

                            </div>
                            <div className="col-12 d-flex prodCat_gap " >
                                <span><BsDropletHalf /></span><p>All category</p>

                            </div>

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