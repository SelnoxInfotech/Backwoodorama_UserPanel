import React from "react"
import USA from "../LawContents"
import LawStateDescriptionHeading from "./LawStateDescriptionComponent/LawStateDescriptionHeading"
import LawStateContent from "./LawStateDescriptionComponent/LawStateContent"
import IsWeedLegalState from "./LawStateDescriptionComponent/IsWeedLegalState"
import LegislationHistory from "./LawStateDescriptionComponent/LegislationHistory"
import CannabisSafeStatePurchase from "./LawStateDescriptionComponent/CannabisSafeStatePurchase"
import LabTestings from "./LawStateDescriptionComponent/LabTestings"
import FrequentlyAskedQuestion from "./LawStateDescriptionComponent/FrequentlyAskedQuestion"
import LawStateDecriptionBanner from "./LawStateDescriptionComponent/LawStateDecriptionBanner"
import DescriptionAndIntro from "./LawStateDescriptionComponent/DescriptionAndIntro"
import { useRef } from "react"

const LawStateDescription = () => {
    console.log(USA)

    const elementRef = useRef(null)

    const alabamaHeading = "Alabama"
    return (
        <React.Fragment>
            {/* <div className="container-fluid">
                <div className="row">
                    <LawStateDecriptionBanner />
                    <LawStateDescriptionHeading heading={alabamaHeading} />
                    <DescriptionAndIntro description1={alabamadescription} description2={secAlabamadesc} />
                    <div className="col-12 lawStateDescription_Laws_Content">
                        <div className="col-lg-8 col-md-12 lawStateLeftSideCol">
                            <IsWeedLegalState head={isWeedLegal} elementRef={elementRef} />
                            <LegislationHistory />
                            <CannabisSafeStatePurchase />
                            <LabTestings />
                            <FrequentlyAskedQuestion />
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-12 lawStateRightSideCol  ">
                            <LawStateContent elementRef={elementRef} />

                        </div>

                    </div>
                </div>

            </div> */}
        </React.Fragment>
    )
}
export default LawStateDescription