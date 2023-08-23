import React from "react"
import { Link } from "react-router-dom"
import {AiOutlineMail} from "react-icons/ai"
import {SlSocialFacebook} from "react-icons/sl"
import { IconButton } from "@mui/material"
const LawStateContent=({elementRef})=>{
    const [Selected,SetSelected]=React.useState(1)
    const LawSelectedFun=(ids)=>{
        SetSelected(ids)
        // elementRef.current.scrollIntoView()

    }
  
    const lawStateContents=[{id:1,name:"Is weed legal in Alabama?"},{id:2,name:"Legislation history"},
    {id:3,name:"Where is it safe to purchase?"},{id:4,name:"Where is it safe to consume?"}]
    
    return(
        <>
        <div className="col-lg-11 col-md-12 LawStateContentsContainer bg-light">
            <ol className="caontentSocialIcon_Ol">
              <li><IconButton><AiOutlineMail color="#FFFFFF"/></IconButton></li>
              <li><IconButton><SlSocialFacebook color="#FFFFFF"/></IconButton></li>

            </ol>
            <ol>{lawStateContents.map((items,index)=>{
                return(
                    <React.Fragment key={index}>
                        <Link  className="lawStateContentLinkStyle" to={items.id===1?"#isweedLegalHeadings":items.id===2?"#LegislationHistory":""}>
                     <li  style={{color:Selected===items.id?"#31B665":""}} onClick={()=>LawSelectedFun(items.id)}>{items.name}</li>
                     </Link>
                    </React.Fragment>
                )
            })}
               
            </ol>


        </div>
        </>
    )
}
export default LawStateContent