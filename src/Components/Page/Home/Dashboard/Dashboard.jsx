import Map from "../../../Component/Map/map"
import CategoryProduct from "./ComponentDashboard/Category/CategoryProduct";
import DispensoriesAddress from "./ComponentDashboard/Dispensories/DispensoriesAddress";
import LatestServices from "./ComponentDashboard/LatestArticle/LatestServices";
import WeedProduct from "./ComponentDashboard/Weed/WeedProduct";
import CommunityType from "./ComponentDashboard/Community/CommunityType";
// import Flavour from "../../Delivery/Flavour/Flavour";
export default function Dashboard() {

    return (
        <div>

            <CategoryProduct></CategoryProduct>
            <DispensoriesAddress></DispensoriesAddress>
            <div  className="col-12 mt-5" style={{ height: '500px'  }}>
                <Map></Map>
            </div>
             <WeedProduct></WeedProduct>
            <LatestServices></LatestServices>
            
            <CommunityType></CommunityType> 
        </div>
    )
}