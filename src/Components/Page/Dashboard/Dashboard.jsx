import Map from "../../Component/Map/map";
import CategoryProduct from "./Home/Category/CategoryProduct";
import DispensoriesAddress from "./Home/Dispensories/DispensoriesAddress";
import LatestServices from "./Home/LatestArticle/LatestServices";
import WeedProduct from "./Home/Weed/WeedProduct";
import CommunityType from "./Home/Community/CommunityType";
import Flavour from "./Delivery/Flavour/Flavour";
import ProductCategory from "./Delivery/Product/ProductCategory"
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
            <Flavour></Flavour>
            <CommunityType></CommunityType> 
        </div>
    )
}