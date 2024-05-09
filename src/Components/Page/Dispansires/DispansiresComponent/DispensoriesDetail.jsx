import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import useStyles from "../../../../Style"
import ProductFilter from "../../../Component/Filter/ProductFilter";
import ProductList from "../../Product/ProductList";
import { BsLayoutSplit } from "react-icons/bs"
import { MdOutlineBrandingWatermark } from "react-icons/md"
import { MdOutlinePriceChange } from "react-icons/md"
import { BsStripe } from "react-icons/bs"
import { GiWeightScale } from "react-icons/gi"
import _ from "lodash"
import NewFlavourBanner from "../../../Component/NewFlavour/NewFlavourBanner";
import StoreDetailMenuItem from "../../StoreDetail/StoreDetailComponent/StoreDetailMenuItem";
import CategoryProduct from "../../Home/Dashboard/ComponentDashboard/CategoryProduct";
import ComponentStoreDetails from "../../StoreDetail/ComponentStoreDetails"
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { ProductHelpFull } from '../../Product/ProductApi'
import Review from "../../../Component/Review/Review";
import { StoreDetails } from "../../../../Components/Component/ScoPage/StoreDetails"
import { Store_Add_Review, Store_OverAllGet_Review, Store_Get_UserComment, Store_Get_Review, Delete_StoreReview, StoreHelpFull } from "../../../../Api/Api";
import Createcontext from "../../../../Hooks/Context"
export default function DispensoriesDetails() {
    const navigate = useNavigate()
    const { state, dispatch } = React.useContext(Createcontext)
    const location = useLocation()
    const params = useParams();
    const [reviewtype, setReviewtype] = React.useState('All')
    const { id, tab, Category, SubCategory } = params
    const classes = useStyles()
    const [category, SetCategory] = React.useState([])
    const [DespensariesData, SetDespensariesProductData] = React.useState([])
    const [reviewloading, setReviewloading] = React.useState(false)
    const [Despen, SetDespens] = React.useState([])
    const [Rating, SetRating] = React.useState()
    const [api, SetApi] = React.useState(false)
    const [AllReview, SetReview] = React.useState([])
    const [GetProductReview, SetGetProductReview] = React.useState({
        value: 0,
        comment: '',
        Title: "",
        media:[],
        popup: false
    })
    React.useEffect(() => {
        axios.get(`https://api.cannabaze.com/UserPanel/Get-StoreById/${id}`, {
        }).then(response => {
            if (response.data.length === 0) {
                navigate("/404")
            } else {

                SetDespens(response.data)
            }

        }).catch((error) => {
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
    }, [params])
    function modifystr(str) {
        str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str?.trim()?.replaceAll(' ', "-");
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

        return str.toLowerCase()
    }
    useEffect(()=>{
        console.log(reviewtype)
        if(reviewtype === "All"){
            axios.get(`https://api.cannabaze.com/UserPanel/Get-AllAverage/${id}`).then((res) => {
                SetRating(res.data)

            }).catch(() => { })
        } else if (reviewtype === "product") {
            axios.get(`https://api.cannabaze.com/UserPanel/Get-AverageofProduct/${id}`).then((res) => {
                SetRating(res.data)

            }).catch(() => { })
        } else {
            Store_OverAllGet_Review(id).then((res) => {
                SetRating(res)

            }).catch(() => { })
        }
    }, [reviewtype, id, api])
    function SelectionTab(item) {

        navigate(`${location.pathname.slice(0, 16) === "/weed-deliveries" ? "/weed-deliveries" : "/weed-dispensaries"}/${modifystr(Despen[0]?.Store_Name.toLowerCase())}/${modifystr(item.toLowerCase())}/${id}`)

    }
    function ShowCategoryProduct(Id, name) { //https://api.cannabaze.com/UserPanel/Get-filterProductbyStoreandCategory/`,
        dispatch({ type: 'Loading', Loading: true })
        axios.post(`https://api.cannabaze.com/UserPanel/Get-filterProductbyStoreandCategory/`,
            {
                "Store_Id": parseInt(id),
                "Category_Id": Id
            }
        ).then(response => {
            dispatch({ type: 'Loading', Loading: false })
            if (Category !== name) {

                navigate(`${location.pathname.slice(0, 16) === "/weed-deliveries" ? "/weed-deliveries" : "/weed-dispensaries"}/${modifystr(Despen[0]?.Store_Name.toLowerCase())}/${"menu"}/${modifystr(name.toLowerCase())}/${id}`)
            }
            SetDespensariesProductData(response.data)

        }).catch(
            function (error) {

            })
    }

    function ProductNavigate(Product) {
        // const Route = location.pathname.slice(0, 16) === "/weed-deliveries" ? "/weed-deliveries" : "/weed-dispensaries"
        navigate(`/products/${modifystr(Product.category_name)}/${modifystr(Product.SubcategoryName)}/${modifystr(Product.Product_Name)}/${Product.id}`)
    }

    const ProductFilterData = [{ Id: 1, Name: "Category", Type1: "Flower", Type2: "CBD", Icons: <BsLayoutSplit className={classes.muiIcons} /> },
    { Id: 2, Name: "Brand", Type1: "Leafly", Type2: "CBD", Icons: <MdOutlineBrandingWatermark className={classes.muiIcons} /> },
    { Id: 3, Name: "Strain", Type1: "Indica", Type2: "Hybrid", Icons: <BsStripe className={classes.muiIcons} /> },
    { Id: 4, Name: "Price", Type1: "Any", Type2: "$25", Price: "$100", Icons: <MdOutlinePriceChange className={classes.muiIcons} /> },
    { Id: 5, Name: "Weight", Type1: "Any", Type2: "$25", Price: "$100", Icons: <GiWeightScale className={classes.muiIcons} /> },
    { Id: 6, Name: "Unit", Type1: "Any", Type2: "$25", Price: "$100", Icons: <AiOutlineDeploymentUnit className={classes.muiIcons} /> },
    ]
    useEffect(() => {
        if (reviewtype === "product") {
            axios.post('https://api.cannabaze.com/UserPanel/GetallProductReviewbyStore/', {
                "store": id
            }).then((res) => {
                SetReview(res.data)
            })
        } else if (reviewtype === "store") {
            Store_Get_Review(id).then((res) => {
                SetReview(() => {
                    return res.data
                })
                var Obj = _.find(res.data, { user: state.Profile.id });
                SetGetProductReview({ ...GetProductReview, 'popup': false, 'value': Obj.rating, 'Title': Obj.Title, 'comment': Obj.comment })
            }).catch((e) => {
                console.error(e)
            })
        } else {

            Store_Get_Review(id).then((res) => {

                // SetReview(res.data)
                // var Obj = _.find(res.data, { user: state.Profile.id });
                // SetGetProductReview({ ...GetProductReview, 'popup': false, 'value': Obj.rating, 'Title': Obj.Title, 'comment': Obj.comment })

                axios.post('https://api.cannabaze.com/UserPanel/GetallProductReviewbyStore/', {
                    "store": id
                }).then((response) => {
                    SetReview([...res.data, ...response.data])
                })
            }).catch((e) => {
                console.error(e)
            })

        }
    }, [reviewtype, id, api])
    // React.useEffect(() => {
    //     Store_OverAllGet_Review(id).then((res) => {
    //         SetRating(res)
           
    //     }).catch(() => { })
    // }, [id, api])


    React.useEffect(() => {
        if (state.login && state.Profile.id !== undefined && id !== undefined) {
            Store_Get_UserComment(state.Profile.id, id).then((res) => {

                if (res.data.length !== 0) {
                    SetGetProductReview({
                        ...GetProductReview, "comment": res.data[0]?.comment,
                        "Title": res.data[0]?.Title, "value": res.data[0]?.rating
                    })
                }
                else {
                    SetGetProductReview({
                        ...GetProductReview, "comment": '',
                        "Title": '', "value": 0
                    })
                }
            }).catch((error) => {
                console.trace(error)
            })

        }
    }, [state.Profile, id, api])


    const onSubmit = () => {
        const formdata = new FormData();
    let a =GetProductReview?.media?.filter((item)=>{
        return item?.type.includes('image')
      })
    let b =GetProductReview?.media?.filter((item)=>{
        return item?.type.includes('video')
  })
    formdata.append('product' ,id )
    formdata.append('rating' ,GetProductReview.value )
    formdata.append('Title' ,GetProductReview.Title )
    formdata.append('comment' ,GetProductReview.comment )
    console.log(a)
    console.log(b)
    for (let i = 0; i < a.length; i++) {
      formdata.append('multipleimages', a[i]);
    }
    for (let i = 0; i < b.length; i++) {
      formdata.append('multiplevideos', b[i]);
    }

        // const Review = {
        //     Store: id,
        //     rating: GetProductReview.value,
        //     Title: GetProductReview.Title,
        //     comment: GetProductReview.comment
        // }
        setReviewloading(true)
        Store_Add_Review(formdata).then((res) => {
            // setOpen(false)
            SetGetProductReview({ ...GetProductReview, 'popup': false })
            SetApi(!api)
            setReviewloading(false)

        }).catch(() => {
            setReviewloading(false)

        })
    };

    React.useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
        console.log(location)
    }, [])

    const Swal = require('sweetalert2')

    function handleDelete(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You are sure to want to delete this comment",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#31B655",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Delete_StoreReview(id).then((response) => {
                    response.data.status === 'success' && SetApi(!api)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your comment has been deleted.",
                        icon: "success"
                    });
                })

            }
        });

    }

    function handleEdit() {
        SetGetProductReview({ ...GetProductReview, 'popup': true })
    }
    function HellFull(ReviewId) {
        if ("ProductName" in ReviewId) {
            ProductHelpFull(ReviewId.id, state.Profile.id).then((res) => {
                SetApi(!api)
            }).catch(() => {
            })
        } else {
            StoreHelpFull(ReviewId.id, state.Profile.id).then((res) => {
                SetApi(!api)
            }).catch(() => {
            })
        }
    }
    function navigationtab(route ,store, id) {
        if (Boolean(store)) {

            navigate(`/${route}/${store.toLowerCase()}/${id}`)
        }
        else if (Boolean(route)) {
            if (Boolean(state.City)) {
                navigate(`/${route}/in/${state.Country.toLowerCase()}/${state.State.toLowerCase()}/${state.City.toLowerCase()}`)
            }
            else if (Boolean(state.State)) {
                navigate(`/${route}/in/${modifystr(state.Country)}/${modifystr(state.State)}`)
            }
            else {
                navigate(`/${(route)}/in/${modifystr(state.Country)}`)
            }
        }
    }
    if (!Despen.length) {
        return <p>Loading....</p>
    }

    return (
        <div>
            <p> {(location.pathname.slice(0, 18) === "/weed-dispensaries" ||  location.pathname.slice(0, 16) === "/weed-deliveries")   &&
                <div style={{ fontSize: '12px' }} > <span style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => navigationtab("/weed-deliveries")}>weed-dispensaries</span> 
                {" >"} <span style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => navigationtab("/weed-deliveries", params.StoreName, id)}> {params.StoreName}</span> 
                {" >"}  <span> {params?.tab}</span> </div>
            }</p>
            <StoreDetails Despen={Despen} locationStore={location.pathname}></StoreDetails>
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
                                    arr={DespensariesData}
                                />
                                <div className="col-12 col-lg-9 col-xxl-10 prod_cat_right_sec">
                                    <ProductList arr={DespensariesData}
                                        ProductNavigate={ProductNavigate}
                                    />
                                </div>
                            </div>
                        </React.Fragment>
                    }
                    {
                        tab === 'store-details' && <ComponentStoreDetails storeDetails={Despen}></ComponentStoreDetails>
                    }
                    {
                        tab === 'review' && <Review
                            HellFull={HellFull}
                            type={`store`}
                            reviewtype={reviewtype}
                            setReviewtype={setReviewtype}
                            delBtn={Despen}
                            handleEdit={handleEdit}
                            reviewloading={reviewloading}
                            handleDelete={handleDelete}
                            Rating={Rating}
                            onSubmit={onSubmit}
                            GetProductReview={GetProductReview}
                            SetGetProductReview={SetGetProductReview}
                            AllReview={AllReview}
                            SetReview={SetReview}></Review>
                    }
                    {
                        tab === 'deals' && <div className="noReview">
                            <div className="noreviewicon">
                                <div className="iconcircl"><img src={'/image/nodeal.png'} className="nodealsicon" alt="no Deals" /></div>
                            </div>
                            <h3 className="noreview_title">Discover More Savings Soon!</h3>
                            <p className="noreview_description w-lg-50 ">It looks like there are no active deals at the moment at <Link target="_blank" to={`/weed-dispensaries/${Despen[0]?.Store_Name.toLowerCase().replaceAll(" ", "-")}/${Despen[0]?.id}`}><b>{Despen[0]?.Store_Name}</b></Link>. Don't worry, though – our partnered stores frequently update their promotions. Be sure to check back regularly for exciting discounts and special offers on your favorite products.</p>
                            <p className="noreview_description w-lg-50">In the meantime, explore the diverse range of products available at <Link target="_blank" to={`/weed-dispensaries/${Despen[0]?.Store_Name.toLowerCase().replaceAll(" ", "-")}/${Despen[0]?.id}`}><b>{Despen[0]?.Store_Name}</b></Link>. We're constantly working to bring you the best deals, so stay tuned for upcoming promotions.</p>
                        </div>
                    }
                    {/* {
                        tab === 'media' && <Media></Media>
                    } */}
                </div>
            </div>
        </div>
    )
}


