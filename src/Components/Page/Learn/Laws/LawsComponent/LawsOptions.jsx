import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import blankImage from "../Image/blankImage.jpg"
import { Link } from "react-router-dom"
import Content from "../LawContents"
const LawsOptions = () => {
    const [Values, SetValues] = React.useState([])
    return (
        <div className="col-12 lawsContainer my-4">
            <ol className="laws_ol">
                {Content?.map((items, index) => {
                    console.log(items)
                    return (
                        <li className="lawoptionMainList " key={index}>
                            <div className="col-12 lawsListStyle px-2" onClick={() => SetValues({ ...Values, [items.id]: !Values[items.id] })}>
                                <span className="listCountryName">{items.Country.name}</span><span><MdOutlineKeyboardArrowDown color="#707070" size={22} /></span>
                            </div>
                            {Values[items.id] === true && (
                                <div className="border lawsDropDownList px-2 col-12 ">
                                    <ol className="lawssoptionStyle law_Inner_OPtionList_Ol">
                                        {items.state.map((val, index) => {
                                            return (
                                       
                                                <Link  to={{
                                                    pathname: "/LawStateDescription",
                                                   
                                                }}>

                                                    <li key={index}>
                                                        <LazyLoadImage src={blankImage} className="lawOPtionListImage" alt="image-not-found" />
                                                        <span>{val.name}</span>
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                    </ol>

                                </div>
                            )}
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}
export default LawsOptions