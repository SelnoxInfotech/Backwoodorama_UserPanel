import React from "react"
import { Link } from "react-router-dom"
import {FaFacebookF} from "react-icons/fa"
import {IoMailSharp} from "react-icons/io5"
import { IconButton } from "@mui/material"
import { ImShare2 } from "react-icons/im"
const LawStateContent = ({ elementRef }) => {
    const [Selected, SetSelected] = React.useState(1)
    const LawSelectedFun = (ids) => {
        SetSelected(ids)
        // elementRef.current.scrollIntoView()

    }

    const lawStateContents = [{ id: 1, name: " Is weed legal in Alabama?" }, { id: 2, name: " Legislation history" },
    { id: 3, name: "  Where is it safe to purchase?" }, { id: 4, name: " Where is it safe to consume?" }]

    return (
        <>
            <div className="col-lg-11 col-md-12 LawStateContentsContainer ">

                <div className="col-12  socialIconsContainer">
                    <div className="col-6">
                        <ol className="caontentSocialIcon_Ol">
                            <li><IconButton><FaFacebookF color="#FFFFFF" /></IconButton></li>
                            <li><IconButton><IoMailSharp color="#FFFFFF" /></IconButton></li>
                        </ol>
                    </div>
                    <div className="col-6 text-end sharIcons">
                        <ImShare2 size={20} color="#FFFFFF" />
                    </div>


                </div>
                <div className="col-12 LawStateContentOlsCol">
                    <ol className="LawStateContentOls">{lawStateContents.map((items, index) => {
                       
                        return (
                            <React.Fragment key={index}>
                                <div>
                                    <Link className="lawStateContentLinkStyle" to={items.id === 1 ? "#isweedLegalHeadings" : items.id === 2 ? "#LegislationHistory" : ""}>
                                        <li className="py-3" style={{ color: Selected === items.id ? "#31B665" : "" }} onClick={() => LawSelectedFun(items.id)}>{items.name}</li>
                                    </Link>
                                </div>
                                 
                              

                            </React.Fragment>
                        )
                    })}

                    </ol>
                </div>




            </div>
        </>
    )
}
export default LawStateContent