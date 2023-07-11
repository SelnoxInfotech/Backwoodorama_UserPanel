import Map from "../../../Component/Map/map"
import CategoryProduct from "./ComponentDashboard/CategoryProduct";
import DispensoriesAddress from "../../Dispansires/DispansiresComponent/DispensoriesAddress";
import LatestServices from "./ComponentDashboard/LatestServices";
import WeedProduct from "./ComponentDashboard/WeedProduct";
import CommunityType from "./ComponentDashboard/CommunityType";
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
    const [Skeleton , SetSkeleton]= React.useState(true)
    const Navigate = useNavigate()
    function ShowCategoryProduct(id, name) {

        Navigate(`/CategoryProduct/${name}`, { state: { id } });
    }
    const [Category, SetCategory] = React.useState([])
    React.useEffect(() => {
        const fetchData = async () => {
            // const apidata = await fetch("https://sweede.app/UserPanel/Get-Categories/");
            // const data = await apidata.json()
            // SetCategory(data)
            Axios("https://sweede.app/UserPanel/Get-Categories/")
        .then((response)=>{

            SetCategory(response.data)
            // CategorySkalaton
            SetSkeleton(false)

        })
        .catch((error)=>{
        })

        }
        fetchData()

    }, [])
    React.useEffect(() => {
        Axios("https://sweede.app/UserPanel/Get-AllBrand/ ",{})
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
        { imgUrl: "./image/LeaflyMarchPromo.png", head1: "CBD" },
        
    ]
    return (
        <div >
            <HomePageBanner></HomePageBanner>
            <CategoryProduct Category={Category} ShowCategoryProduct={ShowCategoryProduct} Skeleton={Skeleton}></CategoryProduct>
            <DeliveryServices></DeliveryServices>
            <HomePageWeedBanner></HomePageWeedBanner>
            <DispensoriesAddress></DispensoriesAddress>
            <div className="col-12 mt-5 border" style={{ height: "300px", position: "relative" }}>
                <Map height={"300px"} width={"100%"}></Map>
            </div>
            <FeaturedBrand CardDataArray={FeaturedBrandArray}/>
            <HomePageDealsSignup></HomePageDealsSignup>
            {/* <WeedProduct></WeedProduct> */}
            <div className="dashBoardStrainType">
            <LatestServices></LatestServices>
            </div>
            <div className="w-90 dashBoardStrainType">
                <p className=" mt-4 dashBoard_strain_paragraph">Strain Type</p>
                <StrainTypeCards ArrayData={StrainTypeCardArray} />

            </div>



            {/* <CommunityType></CommunityType> */}
        </div>
    )
}