import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import blankImage from "../Image/blankImage.jpg"
import { Link } from "react-router-dom"
import Content from "../LawContentsJson"
import { LawState } from "../../../../Component/ScoPage/LearnSeo";
import { useParams } from "react-router-dom"
import {modifystr}  from "../../../../../Hooks/Function"
const LawsOptions = () => {
    const [Values, SetValues] = React.useState([])
  
    return (
        <div className="col-12 lawsContainer my-4">
    {/* <LawState Title={''}></LawState> */}
            {Content?.map((items ,index) => {
                return (
                    <ol className="laws_ol" key={index}>
                        <li className="lawoptionMainList " >
                            <div className="col-12 lawsListStyle px-2" onClick={() => SetValues({ ...Values, [items.id]: !Values[items.id] })}>
                                <span className="listCountryName">{items.name}</span><span><MdOutlineKeyboardArrowDown color="#707070" size={22} /></span>
                            </div>
                            {Values[items.id] === true && (
                                <div className="border lawsDropDownList px-2 col-12 ">
                                    <ol className="lawssoptionStyle law_Inner_OPtionList_Ol">
                                        {items?.state?.map((val, index) => {
                                            return (

                                                <Link to={{
                                                    pathname: `/learn/laws-and-regulation/${'Cannabis-Law-in-'+modifystr(val.name)}/${val.id }`,
                                                }}
                                                    key={index}
                                                >

                                                    <li >
                                                        <LazyLoadImage src={blankImage} className="lawOPtionListImage" alt="image-not-found" />
                                                        <span className="lawOptionCountry_state_List">{val.name}</span>
                                                    </li>
                                                </Link>
                                            )
                                        })}
                                    </ol>

                                </div>
                            )}
                        </li>
                    </ol>
                )

            })}

        </div>
    )
}
export default LawsOptions