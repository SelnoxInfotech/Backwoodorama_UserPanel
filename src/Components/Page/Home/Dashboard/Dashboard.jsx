import Map from "../../../Component/Map/map"
import CategoryProduct from "./ComponentDashboard/CategoryProduct";
import Dispensorieslider from "../../Dispansires/DispansiresComponent/DispensoriesSlider";
import HomePageWeedBanner from "./ComponentDashboard/HomePageWeedBanner";
import NewsBlog from "./ComponentDashboard/NewsBlog";
import HomePageBanner from "./ComponentDashboard/HomePageBanner";
import DeliveryServices from "../../Delivery/HomePageDelivery/DeliveryServices";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import Newsletter from "../../../Component/Newsletter/HomePageDealsSignup";
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

        Navigate(`/products/${name.replace(/%20| /g, "-").toLowerCase()}/${id}`);
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
            <HomePageSco location ={useLocation().pathname}></HomePageSco>
            <HomePageBanner></HomePageBanner>
            <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct} Skeleton={Skeleton}></CategoryProduct>
            <DeliveryServices Skeleton={Skeleton}></DeliveryServices>
            <HomePageWeedBanner></HomePageWeedBanner>
            <Dispensorieslider></Dispensorieslider>
            <div className="col-12 border" style={{ height: "300px", position: "relative", top: "15px" }}>
                <Map height={"297px"} width={"100%"}></Map>
            </div>
         
            <FeaturedBrand CardDataArray={FeaturedBrandArray} BrandSkeleton={BrandSkeleton} />
           
            {/* <WeedProduct></WeedProduct> */}
         
            <div className="About_weedx">
                <div className="container-fluid">
                    <h2 className="section_main_title">Welcome to weedx.io</h2>
                    <p className="section_main_description">our all-in-one cannabis destination. Discover a world of convenience with our Online Ordering and Delivery   Services. Explore a rich selection of Dispensary and Retailer Listings, all while enjoying the peace of mind that comes with our 
                    full Compliance with Local Laws. Your journey to a seamless, legal, and informed cannabis experience begins here at 
                    weedx.io</p>

                    <div className="about_card_Wraper">
                        <div className="about_card">
                            <div className="about_card_img">
                                <img src="https://selnoxmedia.s3.amazonaws.com/media/BlankImage/about1.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T090205Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=231a92445cafa35c55da6b78ed0b02b4d79acf3cbbc5b91a1f18932d27b57b1c" alt=" Online Ordering" />
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
                                <img src="https://selnoxmedia.s3.amazonaws.com/media/BlankImage/about2.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T090228Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e4b97ab5cb7e45499daef774efc4472f48d836aef934384f0849c7d80cd5c6dd" alt="Delivery Services" />
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
                                <img src="https://selnoxmedia.s3.amazonaws.com/media/BlankImage/about3.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T090310Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=68e14837ca7a537263abfb0d720767c1560912c921c06d99ccbf6a0a081861e9" alt="Dispensary Listings" />
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
                                <img src="https://selnoxmedia.s3.amazonaws.com/media/BlankImage/about4.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T090339Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0f0ba19c5787a64aa8e87a64e1bc616242ae5696223905b7ba0193fd097f3425" alt="Retailer Listings" />
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
            <div className="px-sm-0 px-3 dashBoardStrainType">
                <h3 className=" mt-4 section_main_title">Strain Type</h3>
                <StrainTypeCards ArrayData={StrainTypeCardArray} />

            </div>
           
                <NewsBlog></NewsBlog>
           
                <Newsletter></Newsletter>

            {/* <CommunityType></CommunityType> */}
        </div>
    )
}