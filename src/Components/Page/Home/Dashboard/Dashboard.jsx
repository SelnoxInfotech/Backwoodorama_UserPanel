import Map from "../../../Component/Map/map"
import CategoryProduct from "./ComponentDashboard/Category/CategoryProduct";
import DispensoriesAddress from "./ComponentDashboard/Dispensories/DispensoriesAddress";
import LatestServices from "./ComponentDashboard/LatestArticle/LatestServices";
import WeedProduct from "./ComponentDashboard/Weed/WeedProduct";
import CommunityType from "./ComponentDashboard/Community/CommunityType";
import Footer from "../../../Component/Footer/Footer";
import HomePageBanner from "./ComponentDashboard/Banner/HomePageBanner"
// import Flavour from "../../Delivery/Flavour/Flavour";
import light  from "../../../Component/Map/MapStyle"
export default function Dashboard() {

    return (
        <div>
             <HomePageBanner></HomePageBanner>
            <CategoryProduct></CategoryProduct>
            <DispensoriesAddress></DispensoriesAddress>
            <div  className="col-12 mt-5" style={{ height: '250px'  }}>
                <Map height={"300px"}  ></Map>
            </div>
             <WeedProduct></WeedProduct>
            <LatestServices></LatestServices>
            
            <CommunityType></CommunityType> 
            <Footer></Footer>
        </div>
    )
}