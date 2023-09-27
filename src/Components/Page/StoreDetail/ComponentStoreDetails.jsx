import React from "react";
import StoreDetailInformation from "./StoreDetailComponent/StoreDetailInformation"
import StoreDetailContact from "./StoreDetailComponent/StoreDetailContact"
import StoreDetailSideMenuBar from "./StoreDetailComponent/StoreDetailSideMenuBar"
import Amenities from "./StoreDetailComponent/Amenities"
const StoreDetail1 = () => {
    return (
        <React.Fragment>
        <div className="container-fluid">

            <div className="row">
            <div className="col-lg-12  fontStyle px-0">
                    <h2 className="store_detail_heading">Store details</h2>
                </div>
            <hr />

            </div>
            <Amenities />
            <div className="row  my-2">
                <StoreDetailSideMenuBar />
                <StoreDetailInformation />
                <StoreDetailContact />
            </div>
            </div>



        </React.Fragment>
    )
}
export default StoreDetail1