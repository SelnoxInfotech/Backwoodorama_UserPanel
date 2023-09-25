import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import useStyles from "../../../../Style"
import ProductFilter from "../../../Component/Filter/ProductFilter";
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
import { StoreDetails } from "../../../../Components/Component/ScoPage/StoreDetails"
export default function DispensoriesDetails() {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams();
    const { id, tab, Category, SubCategory } = params
    const classes = useStyles()
    const [category, SetCategory] = React.useState([])
    const [DespensariesData, SetDespensariesProductData] = React.useState([])
    const [Despen, SetDespens] = React.useState([])
    const [MetaTag, SetMetaTag] = React.useState(
        {
            title: "",
            discription: ""
        }
    )
    // const [Tab, SetTab] = React.useState()
    React.useEffect(() => {
        axios.get(`https://sweede.app/UserPanel/Get-StoreById/${id}`, {
        }).then(response => {
            SetDespens(response.data)
            //  navigate(`/Weed-DispensoriesDetails/${id}/${"Menu"}/${response.data[0].Store_Name.replace(/\s/g,'-')}`)
        })

        axios.post("https://sweede.app/UserPanel/Get-CategoryByStore/ ",
            {
                "Store_Id": parseInt(id)
            }
        ).then(async response => {
            const d = []
            response.data.map((data) => {
                d.push(data[0])
                var uniqueUsersByID = _.uniqBy(d, 'id'); //removed if had duplicate id
                SetCategory(uniqueUsersByID)
                if (Category !== undefined) {
                    uniqueUsersByID.map((data) => {
                        if (Category === data.name.toLowerCase()) {
                            // SetFilterCategory(uniqueUsersByID)
                            ShowCategoryProduct(data.id, Category)
                        }
                        return data

                    })
                }

                return data
            })
        }).catch(
            function (error) {
            })


        axios.get(`https://sweede.app/UserPanel/Get-ProductAccordingToDispensaries/${id}`, {
        }).then(response => {
            SetDespensariesProductData(response.data)
        })
    }, [id])

    console.log(location.pathname, params)

    React.useEffect(() => {
        if (location.pathname.slice(0, 14) !== "/weed-delivery") {
            if (tab === undefined) {

                SetMetaTag({
                    ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| Weedx.io`,
                    discription: `Shop your favorite cannabis products from ${Despen[0]?.Store_Name} Weed dispensary ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality marijuana products near you. Get the best deals and offers now. `
                })
            }
            else {
                switch (tab) {
                    case 'products':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab} | Weedx.io`,
                            discription: `Browse Product of ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality cannabis products near you `
                        })
                        break;
                    case 'store-details':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab} | Weedx.io`,
                            discription: `Checkout Store Details of ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. Get to know store timings, services, contact information and more. `
                        })
                        break;
                    case 'review':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab} | Weedx.io`,
                            discription: `Customer Reviews of ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. Checkout how customers find the dispensary products. 100% true insights `
                        })
                        break;
                    case 'deal':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab} | Weedx.io`,
                            discription: `Best deals from ${Despen[0]?.Store_Name} marijuana dispensary in ${Despen[0]?.City}, ${Despen[0]?.State}. Get the best deals, offers and discounts on your favorite cannabis products.`
                        })
                        break;
                    case 'media':
                        SetMetaTag({
                            ...MetaTag, title: `Weed dispensary in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| ${tab} | Weedx.io`,
                            discription: `Browse media and updates from ${Despen[0]?.Store_Name} marijuana dispensary in  ${Despen[0]?.City}, ${Despen[0]?.State}. Get the best cannabis dispensary services with high quality products`
                        })
                        break;
                    default:
                    // code block
                }
            }
        }
        else {
            if (tab === undefined) {

                SetMetaTag({
                    ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}| Weedx.io`,
                    discription: `Shop your favorite cannabis products from ${Despen[0]?.Store_Name} Weed delivery ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality marijuana products near you. Get the best deals and offers now. 
                    `
                })

            }
            else {
                switch (tab) {
                    case 'products':
                        SetMetaTag({
                            ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Products | Weedx.io`,
                            discription: `Browse Store Menu of ${Despen[0]?.Store_Name} marijuana delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. High Quality cannabis products near you `
                        })
                        break;
                    case 'store-details':
                        SetMetaTag({
                            ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name}  | Store Details | Weedx.io`,
                            discription: `Checkout Store Details of ${Despen[0]?.Store_Name} marijuana delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. Get to know store timings, services, contact information and more `
                        })
                        break;
                    case 'review':
                        SetMetaTag({
                            ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Reviews | Weedx.io`,
                            discription: `Customer Reviews of ${Despen[0]?.Store_Name} marijuana delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. Checkout how customers find the delivery products. 100% true insights`
                        })
                        break;
                    case 'deal':
                        SetMetaTag({
                            ...MetaTag, title: `Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Deals | Weedx.io`,
                            discription: `Best deals from ${Despen[0]?.Store_Name} marijuana Delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. Get the best deals, offers and discounts on your favorite cannabis products.`
                        })
                        break;
                    case 'media':
                        SetMetaTag({
                            ...MetaTag, title: ` Weed Delivery in ${Despen[0]?.City}, ${Despen[0]?.State} | ${Despen[0]?.Store_Name} | Media | Weedx.io`,
                            discription: ` Browse media and updates from ${Despen[0]?.Store_Name}  marijuana delivery in ${Despen[0]?.City}, ${Despen[0]?.State}. Get the best cannabis delivery services with high qualtiy products.`
                        })
                        break;
                    default:
                    // code block
                }
            }
        }

    }, [params, Despen])

    function SelectionTab(item) {
        // SetTab(item)
        if (item === "Menu") {
            item = "products"
            navigate(`${location.pathname.slice(0, 14) === "/weed-delivery" ? "/weed-delivery" : "/weed-dispensarie"}/${Despen[0]?.Store_Name.replace(/\s/g, '-').toLowerCase()}/${item.replace(/\s/g, '-').toLowerCase()}/${id}`)
        }
        else {
            navigate(`${location.pathname.slice(0, 14) === "/weed-delivery" ? "/weed-delivery" : "/weed-dispensarie"}/${Despen[0]?.Store_Name.replace(/\s/g, '-').toLowerCase()}/${item.replace(/\s/g, '-').toLowerCase()}/${id}`)
        }
    }

    function ShowCategoryProduct(Id, name) {
        axios.post(`https://sweede.app/UserPanel/Get-filterProductbyStoreandCategory/`,
            {
                "Store_Id": parseInt(id),
                "Category_Id": Id
            }
        ).then(response => {
            if (Category !== name) {

                navigate(`${location.pathname.slice(0, 14) === "/weed-delivery" ? "/weed-delivery" : "/weed-dispensarie"}/${Despen[0].Store_Name.replace(/\s/g, '-').toLowerCase()}/${"products"}/${name.toLowerCase()}/${id}`)
            }
            SetDespensariesProductData(response.data)

        }).catch(
            function (error) {

            })
    }

    function ProductNavigate(Product_Name, category_name, ProductId) {
        const Route = location.pathname.slice(0, 14) === "/weed-delivery" ? "/weed-deliverys" : "/weed-dispensaries"
        if (SubCategory === undefined) {
            navigate(`${Route}/${Despen[0].Store_Name.replace(/\s/g, '-').toLowerCase()}/${"products"}/${category_name.toLowerCase()}/${Product_Name.replace(/\s/g, '-').toLowerCase()}/${ProductId}`)
        }
        else {
            navigate(`${Route}/${Despen[0].Store_Name.replace(/\s/g, '-').toLowerCase()}/${"products"}/${category_name.toLowerCase()}/${SubCategory.toLowerCase()}/${Product_Name.replace(/\s/g, '-').toLowerCase()}/${ProductId}`)
        }
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
            <StoreDetails MetaTag={MetaTag}></StoreDetails>
            <div className="container-fluid product_container" >
                <NewFlavourBanner delBtn={Despen}></NewFlavourBanner>
                <div className="row">
                    <div className="col-12 mt-4 "   >
                        <StoreDetailMenuItem tab={tab} SelectionTab={SelectionTab}></StoreDetailMenuItem>


                    </div>
                    {
                        (tab === "products" || tab === undefined) &&
                        <React.Fragment>
                            <CategoryProduct Category={category} ShowCategoryProduct={ShowCategoryProduct}> </CategoryProduct>
                            <div className="col-12 productCat_cont" style={{ display: "contents" }}>



                                <ProductFilter Store_id={Despen[0]?.id}
                                    ProductFilterData={ProductFilterData}
                                    Setarr1={SetDespensariesProductData}
                                // FilterCategoryArry={FilterCategory}


                                />

                                <div className="col-12 col-lg-10 prod_cat_right_sec">
                                    <ProductList arr={DespensariesData}
                                        ProductNavigate={ProductNavigate}
                                    />


                                </div>
                            </div>
                        </React.Fragment>
                    }
                    {
                        tab === 'store-details' && <ComponentStoreDetails></ComponentStoreDetails>
                    }
                    {
                        tab === 'review' && <Review></Review>
                    }
                    {
                        tab === 'deal' && <>Deal</>
                    }
                    {
                        tab === 'media' && <Media></Media>
                    }
                </div>

            </div>
        </div>
    )
}


