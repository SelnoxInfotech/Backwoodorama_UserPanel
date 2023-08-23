import React from "react"
import LawStateDescriptionHeading from "./LawStateDescriptionComponent/LawStateDescriptionHeading"
import LawStateContent from "./LawStateDescriptionComponent/LawStateContent"
import IsWeedLegalState from "./LawStateDescriptionComponent/IsWeedLegalState"
import LegislationHistory from "./LawStateDescriptionComponent/LegislationHistory"
import CannabisSafeStatePurchase from "./LawStateDescriptionComponent/CannabisSafeStatePurchase"
import LabTestings from "./LawStateDescriptionComponent/LabTestings"
import FrequentlyAskedQuestion from "./LawStateDescriptionComponent/FrequentlyAskedQuestion"
import { useRef } from "react"

const LawStateDescription=()=>{
    const elementRef=useRef(null)

    const alabamaHeading="Alabama"
    return(
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                 <LawStateDescriptionHeading heading={alabamaHeading}/>
                 <div className="col-12 lawStateDescription_Laws_Content">
                    <div className="col-lg-8 col-md-12 lawStateLeftSideCol">
                    <IsWeedLegalState elementRef={elementRef}/>
                    <LegislationHistory/>
                    <CannabisSafeStatePurchase/>
                    <LabTestings/>
                    <FrequentlyAskedQuestion/>
                    </div>
                    <div className="col-lg-4 col-md-12 lawStateRightSideCol">
                    <LawStateContent elementRef={elementRef}/>

                    </div>
                    
                 </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default LawStateDescription