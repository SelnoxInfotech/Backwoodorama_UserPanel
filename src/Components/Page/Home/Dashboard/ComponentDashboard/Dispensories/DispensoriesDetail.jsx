import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Flavour from "../../../../Delivery/Flavour/Flavour";
import ProductCategorySlider from "../../../../Product/ProductCategorySlider";
import SearchBar from "material-ui-search-bar";
import useStyles from "../../../../../../Style"
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ProductFilter from "../../../../Product/ProductFilter";
import ProductList from "../../../../Product/ProductList";
import { BsLayoutSplit } from "react-icons/bs"
import { BsDropletHalf } from "react-icons/bs"
import { MdOutlineBrandingWatermark } from "react-icons/md"
import { MdOutlinePriceChange } from "react-icons/md"
import { BsStripe } from "react-icons/bs"
import { GiWeightScale } from "react-icons/gi"
import { RiProductHuntLine } from "react-icons/ri"
export default function DispensoriesProduct() {
    const { id } = useParams();
    const classes = useStyles()
    const [Product, SetProduct] = React.useState('');
    const [DespensariesData, SetDespensariesProductData] = React.useState([])
    const [Despen , SetDespens] = React.useState([])
    const handleChange = (event) => {
        SetProduct(event.target.value);
    };



    React.useEffect(() => {

        axios.get(`http://52.3.255.128:8000/UserPanel/Get-ProductAccordingToDispensaries/${id}`, {
        }).then(response => {

            SetDespensariesProductData(response.data)
        })
        axios.get(`http://52.3.255.128:8000/UserPanel/Get-DispensaryByid/${id}`, {
        }).then(response => {

            SetDespens(response.data)
            
        })
    }, [])
    const ProductFilterData = [{ Id: 1, Name: "Category", Type1: "Flower", Type2: "CBD", Icons: <BsLayoutSplit className={classes.muiIcons} /> },
    { Id: 2, Name: "Brand", Type1: "Leafly", Type2: "CBD", Icons: <MdOutlineBrandingWatermark className={classes.muiIcons} /> },
    { Id: 3, Name: "Strain", Type1: "Indica", Type2: "Hybrid", Icons: <BsStripe className={classes.muiIcons} /> },
    { Id: 4, Name: "Price", Type1: "Any", Type2: "$25", Price: "$100", Icons: <MdOutlinePriceChange className={classes.muiIcons} /> },
    { Id: 5, Name: "Weight", Type1: "Any", Type2: "$25", Price: "$100", Icons: <GiWeightScale className={classes.muiIcons} /> },
    { Id: 6, Name: "Product", Type1: "Medical", Type2: "Recreational", Icons: <RiProductHuntLine className={classes.muiIcons} /> },
    ]
    const delBtn = [{ del: "Delivery Only" }, { del: "Closed Open" }, { del: "Medical and recreational" }, { del: "Licence and Information" }
        , { del: "order only delivery" }]
    return (
        <div>
            <div className="container-fluid product_container" style={{ padding: "7px" }}>
                <Flavour delBtn={Despen}></Flavour>
                <div className="row">
                    <div className="col-12 mt-4">
                        {/* <ProductCategorySlider></ProductCategorySlider> */}

                    </div>

                </div>

                <div className="row center  mt-2 p-2">
                    <div className="col-12 mt-4 product_search_and_select">
                        <div className="col-2 product_search_bar">
                            <SearchBar className={classes.muiSearchIcon} />

                        </div>
                        <div className="col-10 product_select">
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
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
                            <ProductList arr={DespensariesData} />


                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}