import Map from "../../Component/Map/map";
import CategoryProduct from "../Home/Category/CategoryProduct";
import DispensoriesAddress from "../Home/Dispensories/DispensoriesAddress";
import LatestServices from "../Home/LatestArticle/LatestServices";
import WeedProduct from "../Home/Weed/WeedProduct"
export default function Dashboard() {

    return (
        <div>

            <CategoryProduct></CategoryProduct>
            <DispensoriesAddress></DispensoriesAddress>
            <div style={{ width: '100%', height: '500px' }}>
                <Map></Map>
            </div>
              <WeedProduct></WeedProduct>
            <LatestServices></LatestServices>
        </div>
    )
}