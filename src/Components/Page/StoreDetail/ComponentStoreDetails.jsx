import React from "react";
import StoreDetailInformation from "./StoreDetailComponent/StoreDetailInformation"
import StoreDetailContact from "./StoreDetailComponent/StoreDetailContact"
import StoreDetailSideMenuBar from "./StoreDetailComponent/StoreDetailSideMenuBar"
import Amenities from "./StoreDetailComponent/Amenities"
const StoreDetail1 = () => {
    return (
        <>
            <div className="row mt-4 center">
                <div className="col-lg-10 store_detail_heading fontStyle">
                    <p>Store details</p>
                </div>
            </div>
            <hr />
            <Amenities />
            <div className="row m-2 center storeDetailGap">
                <StoreDetailSideMenuBar />
                <StoreDetailInformation />
                <StoreDetailContact />
            </div>



        </>
    )
}
export default StoreDetail1