import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import React from "react"
const LawsOptions = () => {
    const [Values, SetValues] = React.useState([])
    const LawsOptionsListArray = [
        {
            id: 1,
            name: "USA",
            key2: [
                {
                    First_state: "Alaska",
                    Sec_state: "Arizona",
                    Third_state: "Arkansas",
                    Fourth_state: "California",


                },

            ]
        },
        {
            id: 2,
            name: "CANADA",
            key2: [
                {
                    First_state: "Alaska",
                    Sec_state: "Arizona",
                    Third_state: "Arkansas",
                    Fourth_state: "California",


                },
            ]
        },
        {
            id: 3,
            name: "International",
            key2: [
                {
                    First_state: "Alaska",
                    Sec_state: "Arizona",
                    Third_state: "Arkansas",
                    Fourth_state: "California",


                },
            ]
        }
    ]
    return (
        <div className="col-12 lawsContainer my-4">
            <ol className="laws_ol">
                {LawsOptionsListArray.map((items, index) => {
                    return (
                        <li className=" " key={index}>
                            <div className="col-12 lawsListStyle px-2" onClick={() => SetValues({ ...Values, [items.id]: !Values[items.id] })}>
                                <span className="listCountryName">{items.name}</span><span><MdOutlineKeyboardArrowDown color="#707070" size={22} /></span>

                            </div>
                            {Values[items.id] === true && (
                                <div className="border col-12 px-0">
                                    <ol className="lawssoptionStyle">
                                        {items.key2.map((val, index) => {
                                            return (
                                                <li key={index}>
                                                    <div className="col-12 lawsDropDownList px-2">
                                                        <span>{val.First_state}</span>
                                                        <span>{val.Sec_state}</span>
                                                        <span>{val.Third_state}</span>
                                                        <span>{val.Fourth_state}</span>
                                                    </div>
                                                </li>
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