import React from "react"
const LawStateDescriptionHeading=({heading})=>{
    return(
        <React.Fragment>
        <div className="col-12 lawStateDescriptionHeadings">
            <h1 className="LawStateDescriptionHeading">Cannabis Law in {heading}</h1>
            <hr/>
        </div>
        </React.Fragment>
    )
}
export default LawStateDescriptionHeading