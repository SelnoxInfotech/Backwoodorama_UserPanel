import Map from "../../../Component/Map/map"
import CategoryProduct from "./ComponentDashboard/CategoryProduct";
import DispensoriesAddress from "../../Dispansires/DispansiresComponent/DispensoriesAddress";
import LatestServices from "./ComponentDashboard/LatestServices";
import WeedProduct from "./ComponentDashboard/WeedProduct";
import CommunityType from "./ComponentDashboard/CommunityType";
import Footer from "../../../Component/Footer/Footer";
import HomePageBanner from "./ComponentDashboard/HomePageBanner";
import DeliveryServices from "../../Delivery/HomePageDelivery/DeliveryServices";
import { useNavigate } from "react-router-dom";
import React from "react";
import HomePageWeedBanner from "./ComponentDashboard/HomePageWeedBanner";
import HomePageDealsSignup from "./ComponentDashboard/HomePageDealsSignup";
import StrainTypeCards from "../../Strain/StrainComponent/StrainTypeCards";
import FeaturedBrand from "./ComponentDashboard/FeaturedBrand";
import Axios from "axios";

export default function Dashboard() {
    const [FeaturedBrandArray,SetFeaturedBrandArray]=React.useState([])
    const Navigate = useNavigate()
    function ShowCategoryProduct(id, name) {

        Navigate(`/CategoryProduct/${name}`, { state: { id } });
    }
    const [Category, SetCategory] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            const apidata = await fetch("http://backend.sweede.net/UserPanel/Get-Categories/");
            const data = await apidata.json()
            SetCategory(data)
        }
        fetchData()

    }, [])
    React.useEffect(() => {
        Axios("http://backend.sweede.net/UserPanel/Get-AllBrand/ ",{})
        .then((response)=>{

            SetFeaturedBrandArray(response.data)

        })
        .catch((error)=>{
        })
    }, [])

    const StrainTypeCardArray = [
        { imgUrl: "./image/indica.png", head1: "Indica" },
        { imgUrl: "./image/sativa.png", head1: "Hybrid" },
        { imgUrl: "./image/social.png", head1: "Sativa" },
        { imgUrl: "./image/Leafly March Promo.png", head1: "Indica" },
        { imgUrl: "./image/Leafly Promo.png", head1: "Hybrid" },
        { imgUrl: "./image/Leafly Promo.png", head1: "Sativa" },
    ]
    return (
        <div >
            <HomePageBanner></HomePageBanner>
            <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct}></CategoryProduct>
            <DeliveryServices></DeliveryServices>
            <HomePageWeedBanner></HomePageWeedBanner>
            <DispensoriesAddress></DispensoriesAddress>
            <div className="col-12 mt-2  border" style={{ height: "300px", position: "relative" }}>
                <Map height={"300px"} width={"100%"}></Map>
            </div>
            <FeaturedBrand CardDataArray={FeaturedBrandArray}/>
            <HomePageDealsSignup></HomePageDealsSignup>
            {/* <WeedProduct></WeedProduct> */}
            <LatestServices></LatestServices>
            <div className="w-90">
                <p className="mx-2 mt-4 dashBoard_strain_paragraph">Strain Type</p>
                <StrainTypeCards ArrayData={StrainTypeCardArray} />

            </div>



            {/* <CommunityType></CommunityType> */}
            <Footer></Footer>
        </div>
    )
}