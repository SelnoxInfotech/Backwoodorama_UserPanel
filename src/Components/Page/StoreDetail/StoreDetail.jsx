import Amenities from "./StoreDetailComponent/Amenities"
import StoreDetailSideMenuBar from "./StoreDetailComponent/StoreDetailSideMenuBar"
import StoreDetailMenuItem from "./StoreDetailComponent/StoreDetailMenuItem"
import StoreDetailInformation from "./StoreDetailComponent/StoreDetailInformation"
import StoreDetailContact from "./StoreDetailComponent/StoreDetailContact"
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
                <div className="row m-2 center storeDetailGap">
                    <StoreDetailSideMenuBar />
                    <StoreDetailInformation/>
                    <StoreDetailContact/>
                  

                </div>


            </div>
        </>
    )
}
export default StoreDetail