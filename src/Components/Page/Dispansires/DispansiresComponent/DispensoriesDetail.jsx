import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import useStyles from "../../../../Style"
import ProductFilter from "../../Product/ProductFilter";
import ProductList from "../../Product/ProductList";
import { BsLayoutSplit } from "react-icons/bs"
import { MdOutlineBrandingWatermark } from "react-icons/md"
import { MdOutlinePriceChange } from "react-icons/md"
import { BsStripe } from "react-icons/bs"
import { GiWeightScale } from "react-icons/gi"
import { RiProductHuntLine } from "react-icons/ri"
import _ from "lodash"
import NewFlavourBanner from "../../../Component/NewFlavour/NewFlavourBanner";
import StoreDetailMenuItem from "../../StoreDetail/StoreDetailComponent/StoreDetailMenuItem";
import CategoryProduct from "../../Home/Dashboard/ComponentDashboard/CategoryProduct";
import ComponentStoreDetails from "../../StoreDetail/ComponentStoreDetails"
import Review from "../../Review/Review";
import Media from "../../Media/Media";
export default function DispensoriesProduct() {
    const navigate = useNavigate()
    const { id, tab } = useParams();
    const classes = useStyles()
    const [Product, SetProduct] = React.useState('');
    const [Category, SetCategory] = React.useState([])
    const [DespensariesData, SetDespensariesProductData] = React.useState([])
    const [Despen, SetDespens] = React.useState([])
    const [Tab, SetTab] = React.useState()
    const handleChange = (event) => {
        SetProduct(event.target.value);
    };



    React.useEffect(() => {


        axios.get(`https://sweede.app/UserPanel/Get-StoreById/${id}`, {
        }).then(response => {
            SetDespens(response.data)
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        })

        axios.post("https://sweede.app/UserPanel/Get-CategoryByStore/ ",
            {

                "Store_Id": parseInt(id)

            }
        ).then(async response => {
            const d =[]
            response.data.map((data) => {
                  d.push(data[0])
                  var uniqueUsersByID = _.uniqBy(d, 'id'); //removed if had duplicate id
                  SetCategory(uniqueUsersByID)
              })

                // SetCategory(d)

        }).catch(
            function (error) {
            })


        axios.get(`https://sweede.app/UserPanel/Get-ProductAccordingToDispensaries/${id}`, {
        }).then(response => {
            SetDespensariesProductData(response.data)
        })
    }, [id])

    const FilterCategory = async (id) => {
        axios(`https://sweede.app/UserPanel/Get-ProductByCategory/${id}`, {
        }).then(response => {
            SetDespensariesProductData(response.data)


        }).catch(
            function (error) {

            })

    }
    function SelectionTab(item) {
        SetTab(item)
        navigate(`/DispensoriesProduct/${id}/${item}`)

    }
    function ShowCategoryProduct(Id, name) {

        axios.post(`https://sweede.app/UserPanel/Get-filterProductbyStoreandCategory/`,

            {
                "Store_Id": parseInt(id),
                "Category_Id": Id
            }
        ).then(response => {
            SetDespensariesProductData(response.data)



        }).catch(
            function (error) {

            })

        // navigate(`/CategoryProduct/${name}`, { state: {  id  } });
    }

    const ProductFilterData = [{ Id: 1, Name: "Category", Type1: "Flower", Type2: "CBD", Icons: <BsLayoutSplit className={classes.muiIcons} /> },
    { Id: 2, Name: "Brand", Type1: "Leafly", Type2: "CBD", Icons: <MdOutlineBrandingWatermark className={classes.muiIcons} /> },
    { Id: 3, Name: "Strain", Type1: "Indica", Type2: "Hybrid", Icons: <BsStripe className={classes.muiIcons} /> },
    { Id: 4, Name: "Price", Type1: "Any", Type2: "$25", Price: "$100", Icons: <MdOutlinePriceChange className={classes.muiIcons} /> },
    { Id: 5, Name: "Weight", Type1: "Any", Type2: "$25", Price: "$100", Icons: <GiWeightScale className={classes.muiIcons} /> },
    { Id: 6, Name: "Product", Type1: "Medical", Type2: "Recreational", Icons: <RiProductHuntLine className={classes.muiIcons} /> },
    ]
    return (
        <div>
            <div className="container-fluid product_container" >
                <NewFlavourBanner delBtn={Despen}></NewFlavourBanner>
                <div className="row">
                    <div className="col-12 mt-4 "   >
                        <StoreDetailMenuItem tab={tab} SelectionTab={SelectionTab}></StoreDetailMenuItem>


                    </div>
                    {
                        tab === 'Menu' &&
                        <>
                            <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct}  ></CategoryProduct>
                            <div className="col-12   productCat_cont" style={{ display: "contents" }}>



                                <ProductFilter Store_id={Despen[0]?.id}
                                    ProductFilterData={ProductFilterData}

                                    Setarr1={SetDespensariesProductData} />
                                <div className="col-12 col-lg-10 prod_cat_right_sec">
                                    <ProductList arr={DespensariesData} />


                                </div>
                            </div>
                        </>
                    }
                    {
                        tab === 'Store Details' && <ComponentStoreDetails></ComponentStoreDetails>
                    }
                    {
                        tab === 'Review' && <Review></Review>
                    }
                    {
                        tab === 'Deal' && <>Deal</>
                    }
                    {
                        tab === 'Media' && <Media></Media>
                    }
                </div>

            </div>
        </div>
    )
}


