import React from "react";
import StoreDetailInformation from "./StoreDetailComponent/StoreDetailInformation"
import StoreDetailContact from "./StoreDetailComponent/StoreDetailContact"
import StoreDetailSideMenuBar from "./StoreDetailComponent/StoreDetailSideMenuBar"
import Amenities from "./StoreDetailComponent/Amenities"
const StoreDetail1 = () => {
    return (
        <>
        <div className="container-fluid">

                <div className="col-lg-12  fontStyle">
                    <h1 className="store_detail_heading">Store details</h1>
                </div>
            <hr />
            <Amenities />
            <div className="row  my-2">
                <StoreDetailSideMenuBar />
                <StoreDetailInformation />
                <StoreDetailContact />
            </div>
            </div>



        </>
    )
}
export default StoreDetail1