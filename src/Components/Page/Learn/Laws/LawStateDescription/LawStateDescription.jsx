import React from "react"
import LawStateContent from "./LawStateDescriptionComponent/LawStateContent"
import IsWeedLegalState from "./LawStateDescriptionComponent/IsWeedLegalState"
import LawStateDecriptionBanner from "./LawStateDescriptionComponent/LawStateDecriptionBanner"
import { useLocation, useParams } from 'react-router-dom';
import Content from "../LawContentsJson"
import _ from "lodash"
import { LawState } from "../../../../Component/ScoPage/LearnSeo";
const LawStateDescription = () => {
    const params = useParams()
    // const location = useLocation()
    const [GetContant, SetContant] = React.useState([])

    React.useEffect(() => {
        Content.filter((data, index) => {
            return (
                data.state.map((d) => {
                    if (d.id === parseInt(params?.id)) {
                        return SetContant(d)
                    }
                    return d
                })
            )
        })

    }, [params.id])
    return (
        <React.Fragment>
            <LawState Title={`Cannabis Law in ${GetContant?.name}`} State={GetContant?.Country}></LawState>
            <div className="container-fluid">
                <div className="row">
                    <LawStateDecriptionBanner />

                    <div className="col-12 lawStateDescriptionHeadings">
                        <h1 className="LawStateDescriptionHeading">Cannabis Law in {GetContant?.name}</h1>
                        <hr />
                    </div>
                    <div className="col-12 d-flex">
                        <div className={"col-xl-8 col-md-12"} >
                            {
                                GetContant?.content?.map((data1, index) => {
                                    return (
                                        <React.Fragment key={index}>
                                            <IsWeedLegalState head={data1.title} description2={data1.content} />
                                        </React.Fragment>
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