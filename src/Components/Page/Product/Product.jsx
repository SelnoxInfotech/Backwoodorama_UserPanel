import React from "react"
import { BsLayoutSplit } from "react-icons/bs"
import { BsDropletHalf } from "react-icons/bs"
import { MdOutlineBrandingWatermark } from "react-icons/md"
import { MdOutlinePriceChange } from "react-icons/md"
import { BsStripe } from "react-icons/bs"
import { GiWeightScale } from "react-icons/gi"
import { RiProductHuntLine } from "react-icons/ri"
import ProductList from "./Component/ProductList"
import Axios from "axios"
import Flavour from "../Delivery/Flavour/Flavour"
import ProductFilter from "./Component/ProductFilter"
import useStyles from "../../../Style"
import SearchBar from "material-ui-search-bar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductCategorySlider from "./ProductCategorySlider"

const Product = () => {
    const classes = useStyles()
 const [Category , SetCategory] = React.useState([])
    const [arr1, Setarr1] = React.useState([])
    const [Product, SetProduct] = React.useState('');
    React.useEffect(() => {
        Axios("http://52.3.255.128:8000/UserPanel/Get-Product/", {


        }).then(response => {
            Setarr1(response.data)
            // SetProduct(Product => ({ ...Product, Category: response.data?.data[0].id }))


        }).catch(
            function (error) {

                // SetProduct(Product => ({ ...Product, discount: "None" })) 52.3.255.128:8000/UserPanel/Get-Categories/ 
            })
            Axios("http://52.3.255.128:8000/UserPanel/Get-Categories/ ", {


        }).then(response => {
            SetCategory(response.data)
        }).catch(
            function (error) {

                // SetProduct(Product => ({ ...Product, discount: "None" })) 52.3.255.128:8000/UserPanel/Get-Categories/ 
            })
    }, [])


    const weeBtn = [{ quant: "1gms", rs: "121" }, { quant: "2gms", rs: "23" }, { quant: "3gms", rs: "25" },
    { quant: "4gms", rs: "26" }, { quant: "5gms", rs: "27" }, { quant: "6gms", rs: "28" }, { quant: "7gms", rs: "29" }]

    const delBtn = [{ del: "Delivery Only" }, { del: "Closed Open" }, { del: "Medical and recreational" }, { del: "Licence and Information" }
    , { del: "order only delivery" }]

    const ProductFilterData = [{ Id: 1, Name: "Category", Type1: "Flower", Type2: "CBD", Icons: <BsLayoutSplit className={classes.muiIcons} /> },
    { Id: 2, Name: "Brand", Type1: "Leafly", Type2: "CBD", Icons: <MdOutlineBrandingWatermark className={classes.muiIcons} /> },
    { Id: 3, Name: "Strain", Type1: "Indica", Type2: "Hybrid", Icons: <BsStripe className={classes.muiIcons} /> },
    { Id: 4, Name: "Price", Type1: "Any", Type2: "$25", Price: "$100", Icons: <MdOutlinePriceChange className={classes.muiIcons} /> },
    { Id: 5, Name: "Weight", Type1: "Any", Type2: "$25", Price: "$100", Icons: <GiWeightScale className={classes.muiIcons} /> },
    { Id: 6, Name: "Product", Type1: "Medical", Type2: "Recreational", Icons: <RiProductHuntLine className={classes.muiIcons} /> },
    ]

       const FilterCategory = (id) =>{
      
        Axios(`http://52.3.255.128:8000/UserPanel/Get-ProductByCategory/${id}`, {


    }).then(response => {
        Setarr1(response.data)
        // SetProduct(Product => ({ ...Product, Category: response.data?.data[0].id }))


    }).catch(
        function (error) {

            // SetProduct(Product => ({ ...Product, discount: "None" }))
        })

       }

    const handleChange = (event) => {
        SetProduct(event.target.value);
    };

    return (
        <>
            <div className="container-fluid product_container" style={{ padding: "7px" }}>
                <Flavour delBtn={delBtn}></Flavour>
                <div className="row">
                    <div className="col-12 mt-4">
                        <ProductCategorySlider FilterCategory ={FilterCategory} Category={Category}></ProductCategorySlider>

                    </div>

                </div>

                <div className="row center  mt-2 p-2">
                    <div className="col-12 mt-4 product_search_and_select">
                        <div className="col-2 product_search_bar">
                            <SearchBar className={classes.muiSearchIcon} />

                        </div>
                        <div className="col-10 product_select">
                            <FormControl  sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={Product}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size="small"
                                >
                                    <MenuItem value="">
                                        Sort by A to Z
                                    </MenuItem>
                                    <MenuItem value={"Sort by Z to A"}>Sort by Z to A</MenuItem>
                                    <MenuItem value={"Price low to high"}>Price low to high</MenuItem>
                                    <MenuItem value={"Price hight to low"}>Price hight to low</MenuItem>
                                </Select>
                            </FormControl>

                        </div>

                    </div>
                   
                    <div className="col-12   productCat_cont">



                        <ProductFilter ProductFilterData={ProductFilterData} />
                        <div className="col-10  prod_cat_right_sec">
                            <ProductList arr={arr1} btn={weeBtn} />


                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}
export default Product