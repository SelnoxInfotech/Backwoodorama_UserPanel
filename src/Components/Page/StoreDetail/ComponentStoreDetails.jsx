import React from "react";
import StoreDetailInformation from "./StoreDetailComponent/StoreDetailInformation"
import StoreDetailContact from "./StoreDetailComponent/StoreDetailContact"
import StoreDetailSideMenuBar from "./StoreDetailComponent/StoreDetailSideMenuBar"
import Amenities from "./StoreDetailComponent/Amenities"
const StoreDetail1 = () => {
    return (
        <>
        <div className="container">

            {/* <div className="row mt-4 center"> */}
                <div className="col-lg-12 store_detail_heading fontStyle">
                    <p>Store details</p>
                </div>
            {/* </div> */}
            <hr />
            <Amenities />
            <div className="row mx-1 my-2">
                <StoreDetailSideMenuBar />
                <StoreDetailInformation />
                <StoreDetailContact />
            </div>
            </div>



        </>
    )
}
export default StoreDetail1