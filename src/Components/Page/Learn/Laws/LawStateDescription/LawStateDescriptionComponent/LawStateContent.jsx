import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { IoMailSharp } from "react-icons/io5"
import { IconButton } from "@mui/material"
import { ImShare2 } from "react-icons/im"
const LawStateContent = ({ head }) => {
    const [Selected, SetSelected] = React.useState(1)
    const LawSelectedFun = (ids) => {
        SetSelected(ids)
        // elementRef.current.scrollIntoView()

    }
    return (
        <React.Fragment>
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
                    <ol className="LawStateContentOls">{head?.map((items, index) => {

                        return (
                            <React.Fragment key={index}>
                                <div>

                                    <a href={'#'+items.title}> <li className="py-3" onClick={() => LawSelectedFun(items.id)}  style={{ color: Selected === items.id ? "#31B665" : "" }} >{items.title}</li>
                                    </a>
                                </div>



                            </React.Fragment>
                        )
                    })}

                    </ol>
                </div>




            </div>
        </React.Fragment>
    )
}
export default LawStateContent