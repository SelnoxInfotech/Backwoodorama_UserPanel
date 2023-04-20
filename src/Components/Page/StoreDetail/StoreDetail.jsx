import Amenities from "./StoreDetailComponent/Amenities"
import StoreDetailSideMenuBar from "./StoreDetailComponent/StoreDetailSideMenuBar"
import StoreDetailMenuItem from "./StoreDetailComponent/StoreDetailMenuItem"
const StoreDetail = () => {
    return (
        <>
            <div className="container-fluid">
                <StoreDetailMenuItem />
                <div className="row mt-4 center">
                    <div className="col-lg-10 store_detail_heading fontStyle">
                        <p>Store details</p>

                    </div>
                </div>

                <hr />
                <Amenities />
                <div className="row m-2 center">
                    <StoreDetailSideMenuBar />
                    <div className="col-lg-6 store_detail_container">
                        <p>Introduction</p>
                    </div>
                    <div className="col-lg-2 store_detail_container_right_container">
                     <p>map</p>
                    </div>

                </div>


            </div>
        </>
    )
}
export default StoreDetail