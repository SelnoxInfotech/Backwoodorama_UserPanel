import VerifyBrands from "./BrandComponent/VerifyBrands"
import React from "react";
const Brand=()=>{
    return(
        <React.Fragment>
        <div className="container-fluid">
            <div className="row center brands_containers_height">
                <div className="col-12 col-sm-10 brandHeading">
                    <h1>Verify brands</h1>
                    <VerifyBrands/>
                </div>
            </div>

        </div>
        </React.Fragment>
    )
}
export default Brand