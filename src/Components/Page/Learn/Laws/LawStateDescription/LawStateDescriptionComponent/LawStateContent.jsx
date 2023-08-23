import React from "react"
import { Link } from "react-router-dom"
const LawStateContent=()=>{
    const lawStateContents=[{id:1,name:"Is weed legal in Alabama?"},{id:2,name:"Legislation history"},
    {id:3,name:"Where is it safe to purchase?"},{id:4,name:"Where is it safe to consume?"}]
    return(
        <>
        <div className="col-12 weedContentsContainer">
            <ol>{lawStateContents.map((items,index)=>{
                return(
                    <React.Fragment key={index}>
                     <li><Link className="lawStateContentLinkStyle" to={items.id===1?"#isweedLegalHeadings":items.id===2?"#LegislationHistory":""}>{items.name}</Link></li>
                    </React.Fragment>
                )
            })}
               
            </ol>


        </div>
        </>
    )
}
export default LawStateContent