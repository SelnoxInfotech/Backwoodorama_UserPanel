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
import { Store_Add_Review, Store_OverAllGet_Review , Store_Get_UserComment, Store_Get_Review } from "../../../../Api/Api";
import Createcontext from "../../../../Hooks/Context"
export default function DispensoriesDetails() {
    const navigate = useNavigate()
    const { state } = React.useContext(Createcontext)
    const location = useLocation()
    const params = useParams();
    const { id, tab, Category, SubCategory } = params
    const classes = useStyles()
    const [category, SetCategory] = React.useState([])
    const [DespensariesData, SetDespensariesProductData] = React.useState([])
    const [Despen, SetDespens] = React.useState([])
    const [Rating, SetRating] = React.useState()
    const [api, SetApi] = React.useState(false)
    const [AllReview, SetReview] =  React.useState([])
    const [GetProductReview, SetGetProductReview] = React.useState({
      value: 0,
      comment:'',
      Title: "",
      popup:true
    })
    // const [Tab, SetTab] = React.useState()
    React.useEffect(() => {
        axios.get(`https://api.cannabaze.com/UserPanel/Get-StoreById/${id}`, {
        }).then(response => {
            SetDespens(response.data)
            //  navigate(`/Weed-DispensoriesDetails/${id}/${"Menu"}/${response.data[0].Store_Name.replace(/\s/g,'-')}`)
        })

        axios.post("https://api.cannabaze.com/UserPanel/Get-CategoryByStore/ ",
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


        axios.get(`https://api.cannabaze.com/UserPanel/Get-ProductAccordingToDispensaries/${id}`, {
        }).then(response => {
            SetDespensariesProductData(response.data)
        })
    }, [id])

    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
          if (str.includes("--")) {
            str = str.replaceAll("--", "-")
          } else if (str.includes("//")) {
            str = str.replaceAll("//", "/")
          } else if (str.includes("//")) {
            str = str.replaceAll("-/", "/")
          } else if (str.includes("//")) {
            str = str.replaceAll("/-", "/")
          } else {
            a++
          }
        }
    
        return str
      }

    function SelectionTab(item) {
        // SetTab(item)
        // if (item === "Menu") {
        //     item = "products"
        //     navigate(`${location.pathname.slice(0, 14) === "/weed-delivery" ? "/weed-delivery" : "/weed-dispensaries"}/${Despen[0]?.Store_Name.replace(/\s/g, '-').toLowerCase()}/${item.replace(/\s/g, '-').toLowerCase()}/${id}`)
        // }
        // else {
            navigate(`${location.pathname.slice(0, 16) === "/weed-deliveries" ? "/weed-deliveries" : "/weed-dispensaries"}/${modifystr(Despen[0]?.Store_Name.toLowerCase())}/${modifystr(item.toLowerCase())}/${id}`)
        // }
    }
    function ShowCategoryProduct(Id, name) {
        axios.post(`https://api.cannabaze.com/UserPanel/Get-filterProductbyStoreandCategory/`,
            {
                "Store_Id": parseInt(id),
                "Category_Id": Id
            }
        ).then(response => {
            if (Category !== name) {

                navigate(`${location.pathname.slice(0, 16) === "/weed-deliveries" ? "/weed-deliveries" : "/weed-dispensaries"}/${modifystr(Despen[0].Store_Name.toLowerCase())}/${"menu"}/${modifystr(name.toLowerCase())}/${id}`)
            }
            SetDespensariesProductData(response.data)

        }).catch(
            function (error) {

            })
    }

    function ProductNavigate(Product_Name, category_name, ProductId) {
        const Route = location.pathname.slice(0, 16) === "/weed-deliveries" ? "/weed-deliveries" : "/weed-dispensaries"
        if (SubCategory === undefined) {
            navigate(`${Route}/${modifystr(Despen[0].Store_Name.toLowerCase())}/menu/${modifystr(category_name.toLowerCase())}/${modifystr(Product_Name.toLowerCase())}/${ProductId}`)
        }
        else {
            navigate(`${Route}/${modifystr(Despen[0].Store_Name.toLowerCase())}/menu/${modifystr(category_name.toLowerCase())}/${modifystr(SubCategory.toLowerCase())}/${modifystr(Product_Name.toLowerCase())}/${ProductId}`)
        }
    }

    const ProductFilterData = [{ Id: 1, Name: "Category", Type1: "Flower", Type2: "CBD", Icons: <BsLayoutSplit className={classes.muiIcons} /> },
    { Id: 2, Name: "Brand", Type1: "Leafly", Type2: "CBD", Icons: <MdOutlineBrandingWatermark className={classes.muiIcons} /> },
    { Id: 3, Name: "Strain", Type1: "Indica", Type2: "Hybrid", Icons: <BsStripe className={classes.muiIcons} /> },
    { Id: 4, Name: "Price", Type1: "Any", Type2: "$25", Price: "$100", Icons: <MdOutlinePriceChange className={classes.muiIcons} /> },
    { Id: 5, Name: "Weight", Type1: "Any", Type2: "$25", Price: "$100", Icons: <GiWeightScale className={classes.muiIcons} /> },
    { Id: 6, Name: "Product", Type1: "Medical", Type2: "Recreational", Icons: <RiProductHuntLine className={classes.muiIcons} /> },
    ]


    React.useEffect(() => {
        Store_OverAllGet_Review(id).then((res) => {
          SetRating(res)
        }).catch(() => { })
      }, [id , api])

      React.useEffect( ()=>{
    
        if(state.login &&  state.Profile.id !== undefined && id!== undefined){
            Store_Get_UserComment(state.Profile.id , id).then((res)=>{
        
                if(res.data.length !== 0 )
                {   
                    SetGetProductReview({...GetProductReview , "comment": res.data[0]?.comment , 
                     "Title" : res.data[0]?.Title , "value":res.data[0]?.rating})
                }
            }).catch((error)=>{
              console.log(error)
            })

        }
    },[ state.Profile, id ,api])




      const onSubmit = () => {
        const Review = {
            Store: id,
          rating: GetProductReview.value,
          Title: GetProductReview.Title,
          comment: GetProductReview.comment
        }
        Store_Add_Review(Review).then((res) => {
          // setOpen(false);
          SetGetProductReview({ ...GetProductReview, 'value': 0  , 'popup':false })
          SetApi(!api)
        }).catch(() => {
    
        })
      };

      React.useEffect(() => {
        Store_Get_Review(id).then((res) => {
            SetReview(()=>{
              return res.data
            })
        }).catch((e) => {
            console.error(e)
        })
    }, [ id, api])
    

    return (
        <div>
            <StoreDetails Despen={Despen}></StoreDetails>
            <div className="container-fluid product_container" >
                <NewFlavourBanner delBtn={Despen}></NewFlavourBanner>
                <div className="row">
                    <div className="col-12 mt-4 "   >
                        <StoreDetailMenuItem tab={tab} SelectionTab={SelectionTab}></StoreDetailMenuItem>


                    </div>
                    {
                        (tab === 'menu' || tab === undefined) &&
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
                        tab === 'review' &&  <Review Rating={Rating} onSubmit={onSubmit} GetProductReview={GetProductReview} SetGetProductReview={SetGetProductReview}  AllReview={AllReview} SetReview ={SetReview}></Review>
                    }
                    {
                        tab === 'deals' && <>Deal</>
                    }
                    {
                        tab === 'media' && <Media></Media>
                    }
                </div>

            </div>
        </div>
    )
}


