import React from "react"

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
import { useLocation, useParams } from 'react-router-dom';
import Content from "../LawContentsJson"
import _ from "lodash"
const LawStateDescription = () => {
    const location = useLocation()
    const [GetContant, SetContant] = React.useState([])

    React.useEffect(() => {
        Content.filter((data, index) => {
            return (
                data.state.map((d) => {
                    if (d.id === location?.state?.id) {

                        SetContant(d)
                    }
                    return d
                })
            )
        })

    }, [])

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <LawStateDecriptionBanner />
                    <LawStateDescriptionHeading heading={GetContant?.name} />
                    <div className="col-12 d-flex">
                        <div className={"col-xl-8 col-md-12"} >
                            {
                                GetContant?.content?.map((data1, index) => {
                                    console.log(data1)
                                    return (
                                        <>
                                            {/* <DescriptionAndIntro description1={index === 0 && data1.title} description2={index === 0 && data1.content} /> */}

                                            <IsWeedLegalState head={data1.title} description2={data1.content} />


                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className={"col-4 hidiingBLog "}>
                            <LawStateContent head={GetContant?.content} />
                        </div>
                    </div>



                </div>

            </div>
        </React.Fragment >
    )
}
export default LawStateDescription