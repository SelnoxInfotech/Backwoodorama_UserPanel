import React from "react"
import { BsLayoutSplit } from "react-icons/bs"
import { BsDropletHalf } from "react-icons/bs"
import { MdOutlineBrandingWatermark } from "react-icons/md"
import {MdOutlinePriceChange} from "react-icons/md"
import {BsStripe} from "react-icons/bs"
import {GiWeightScale} from "react-icons/gi"
import {RiProductHuntLine} from "react-icons/ri"
import ProductList from "./Component/ProductList"
import Axios from "axios"
import Flavour from "../Delivery/Flavour/Flavour"
import ProductFilter from "./Component/ProductFilter"
import useStyles from "../../../Style"
const Product = () => {
    const classes = useStyles()

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

    const ProductFilterData = [{ Id: 1, Name: "Category", Type1: "Flower", Type2: "CBD", Icons: <BsLayoutSplit className={classes.muiIcons}/> },
    { Id: 2, Name: "Brand", Type1: "Leafly", Type2: "CBD", Icons: <MdOutlineBrandingWatermark className={classes.muiIcons}/> },
    { Id: 3, Name: "Strain", Type1: "Indica", Type2: "Hybrid", Icons: <BsStripe className={classes.muiIcons}/> },
    { Id: 4, Name: "Price Range", Type1: "Any", Type2: "$25",Price:"$100", Icons: <MdOutlinePriceChange  className={classes.muiIcons}/> },
    { Id: 5, Name: "Weight", Type1: "Any", Type2: "$25",Price:"$100", Icons: <GiWeightScale className={classes.muiIcons}/> },
    { Id: 6, Name: "Product Type", Type1: "Medical", Type2: "Recreational", Icons: <RiProductHuntLine  className={classes.muiIcons}/> },




    ]

    return (
        <>
            <div className="container-fluid" style={{ padding: "35px" }}>
                <Flavour></Flavour>
                <div className="row center">
                    <div className="col-12   productCat_cont">
                        <div className="col-2  prod_cat_left_sec center d-block mt-4">
                            <div className="col-12 p-2 fontStyle">
                                <h5>Shop by category</h5>

                            </div>
                            {/* <div className="col-12 d-flex prodCat_gap p-2" >
                                <span><BsLayoutSplit /></span><p>All category</p>

                            </div> */}

                            <ProductFilter ProductFilterData={ProductFilterData} />
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