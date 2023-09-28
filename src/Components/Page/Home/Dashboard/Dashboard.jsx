import Map from "../../../Component/Map/map"
import CategoryProduct from "./ComponentDashboard/CategoryProduct";
import Dispensorieslider from "../../Dispansires/DispansiresComponent/DispensoriesSlider";
import HomePageWeedBanner from "./ComponentDashboard/HomePageWeedBanner";
import NewsBlog from "./ComponentDashboard/NewsBlog";
import HomePageBanner from "./ComponentDashboard/HomePageBanner";
import DeliveryServices from "../../Delivery/HomePageDelivery/DeliveryServices";
import { useNavigate , useLocation } from "react-router-dom";
import React from "react";
import HomePageDealsSignup from "./ComponentDashboard/HomePageDealsSignup";
import StrainTypeCards from "../../Strain/StrainComponent/StrainTypeCards";
import FeaturedBrand from "./ComponentDashboard/FeaturedBrand";
import Axios from "axios";
import {HomePageSco} from "../../../Component/ScoPage/HomePageSco"
import './Home.css';
export default function Dashboard() {
    const [FeaturedBrandArray, SetFeaturedBrandArray] = React.useState([])
    const [Skeleton, SetSkeleton] = React.useState(true)
    const [BrandSkeleton, SetBrandSkeleton] = React.useState(true)
    const Navigate = useNavigate()
    function ShowCategoryProduct(id, name) {

        Navigate(`/products/${name.toLowerCase()}/${id}`);
    }
    const [Category, SetCategory] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            Axios("https://api.cannabaze.com/UserPanel/Get-Categories/")
                .then((response) => {

                    SetCategory(response.data)
                    // CategorySkalaton
                    SetSkeleton(false)

                })
                .catch((error) => {
                })

        }
        fetchData()

    }, [])
    React.useEffect(() => {
        Axios("https://api.cannabaze.com/UserPanel/Get-AllBrand/ ", {})
            .then((response) => {

                SetFeaturedBrandArray(response.data)
                SetBrandSkeleton(false)
            })
            .catch((error) => {
            })
    }, [])
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const StrainTypeCardArray = [
        { imgUrl: "/image/indica.png", head1: "Indica", },
        { imgUrl: "/image/sativa.png", head1: "Hybrid" },
        { imgUrl: "/image/social.png", head1: "Sativa" },
        { imgUrl: "/image/LeaflyMarchPromo.png", head1: "CBD" },
    ]
    return (
        <div >
            <HomePageSco></HomePageSco>
            <HomePageBanner></HomePageBanner>
            <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct} Skeleton={Skeleton}></CategoryProduct>
            <DeliveryServices Skeleton={Skeleton}></DeliveryServices>
            <HomePageWeedBanner></HomePageWeedBanner>
            <Dispensorieslider></Dispensorieslider>
            <div className="col-12 border" style={{ height: "300px", position: "relative", top: "15px" }}>
                <Map height={"297px"} width={"100%"}></Map>
            </div>
         
            <FeaturedBrand CardDataArray={FeaturedBrandArray} BrandSkeleton={BrandSkeleton} />
            <HomePageDealsSignup></HomePageDealsSignup>
            {/* <WeedProduct></WeedProduct> */}
            {/* <div className="dashBoardStrainType">
                <NewsBlog></NewsBlog>
            </div> */}
            <div className="About_weedx">
                <div className="container-fluid">
                    <h2 className="section_main_title">Welcome to weedx.io</h2>
                    <p className="section_main_description">our all-in-one cannabis destination. Discover a world of convenience with our Online Ordering and Delivery   Services. Explore a rich selection of Dispensary and Retailer Listings, all while enjoying the peace of mind that comes with our 
                    full Compliance with Local Laws. Your journey to a seamless, legal, and informed cannabis experience begins here at 
                    weedx.io</p>

                    <div className="about_card_Wraper">
                        <div className="about_card">
                            <div className="about_card_img">
                                <img src="./image/about1.webp" alt="" />
                            </div>
                            <div className="about_text">
                                <h3 className="acard_title">
                                Online Ordering
                                </h3>
                                <p className="acard_description">
                                Experience the convenience of ordering your 
                                favorite cannabis products online. Browse a 
                                wide selection, place your order, and have it 
                                delivered or ready for pickup with just a few 
                                clicks.
                                </p>
                            </div>
                        </div>
                        <div className="about_card">
                            <div className="about_card_img">
                                <img src="./image/about2.webp" alt="" />
                            </div>
                            <div className="about_text">
                                <h3 className="acard_title">
                                Delivery Services
                                </h3>
                                <p className="acard_description">
                                Enjoy the ease of cannabis delivery right 
                                to your doorstep. Whether you're seeking 
                                flowers, edibles, or concentrates, our 
                                delivery services ensure a hassle-free 
                                experience
                                </p>
                            </div>
                        </div>
                        <div className="about_card">
                            <div className="about_card_img">
                                <img src="./image/about3.webp" alt="" />
                            </div>
                            <div className="about_text">
                                <h3 className="acard_title">
                                Dispensary Listings
                                </h3>
                                <p className="acard_description">
                                Explore our comprehensive directory of 
                                cannabis dispensaries. Each listing
                                provides essential details, including 
                                addresses, operating hours, and 
                                customer reviews, to help you make 
                                informed choices.
                                </p>
                            </div>
                        </div>
                        <div className="about_card">
                            <div className="about_card_img">
                                <img src="./image/about4.webp" alt="" />
                            </div>
                            <div className="about_text">
                                <h3 className="acard_title">
                                Retailer Listings
                                </h3>
                                <p className="acard_description">
                                Our retailer listings showcase the best 
                                places to explore, purchase, and learn 
                                about cannabis. Discover the perfect 
                                spot to meet your cannabis 
                                requirements
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-90 dashBoardStrainType">
                <h3 className=" mt-4 section_main_title">Strain Type</h3>
                <StrainTypeCards ArrayData={StrainTypeCardArray} />

            </div>



            {/* <CommunityType></CommunityType> */}
        </div>
    )
}