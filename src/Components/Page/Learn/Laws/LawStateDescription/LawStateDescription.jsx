import React from "react"
import LawStateDescriptionHeading from "./LawStateDescriptionComponent/LawStateDescriptionHeading"
import LawStateContent from "./LawStateDescriptionComponent/LawStateContent"
import IsWeedLegalState from "./LawStateDescriptionComponent/IsWeedLegalState"
import LegislationHistory from "./LawStateDescriptionComponent/LegislationHistory"
const LawStateDescription=()=>{
    const alabamaHeading="Alabama"
    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                 <LawStateDescriptionHeading heading={alabamaHeading}/>
                 <div className="col-12 lawStateDescription_Laws_Content">
                    <div className="col-8">
                    <IsWeedLegalState/>
                    <LegislationHistory/>
                    </div>
                    <div className="col-4">
                    <LawStateContent/>

                    </div>
                    
                 </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default LawStateDescription