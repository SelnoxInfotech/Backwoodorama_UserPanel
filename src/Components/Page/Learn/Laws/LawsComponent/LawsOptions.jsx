import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import blankImage from "../Image/blankImage.jpg"
import { Link } from "react-router-dom"
const LawsOptions = () => {
    const [Values, SetValues] = React.useState([])



    // Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, 
    // Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri,
    //  Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon,
    //  Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, 
    //  Texas, Utah, Vermont, Virginia, Washington, West Virginia, Wisconsin, and Wyoming

    const LawsOptionsListArray = [
        {
            id: 1,
            name: "USA",
            key2: [
                { state: "Alabama", imgUrl: "blankImage" },
                { state: "Alaska", imgUrl: "blankImage" },
                { state: "Arizona", imgUrl: "blankImage" },
                { state: "Arkansas", imgUrl: "blankImage" },
                { state: "California", imgUrl: "blankImage" },
                { state: "Colorado", imgUrl: "blankImage" },
                { state: "Connecticut", imgUrl: "blankImage" },
                { state: "Delaware", imgUrl: "blankImage" },
                { state: "Florida", imgUrl: "blankImage" },
                { state: "Georgia", imgUrl: "blankImage" },
                { state: "Hawaii", imgUrl: "blankImage" },
                { state: "Idaho", imgUrl: "blankImage" },
                { state: "Illinois", imgUrl: "blankImage" },
                { state: "Indiana", imgUrl: "blankImage" },




                // {
                //     First_state: "Alabama",  Sec_state: "Alaska", Third_state: "Arizona", Fourth_state: "Arkansas", Fifth_state: "California", Sixth_state: "Colorado",
                //     Seventh_state: "Connecticut",eighth_state: "Delaware",  ninth_state: "Florida", tenth_state: "Georgia", eleventh_state: "Hawaii",
                //     twelve: "Idaho",thirteen: "Illinois", fourteen: "Indiana", fifteen: "Iowa", sixteen: "Kansas",seventeen: "Kentucky",  eighteen: "Louisiana", ninteen: "Maine",
                //     twenty: "Maryland",twentyOne:"Massachusetts",twentyTwo:"Michigan",twentyThree:"Minnesota",twentyFour:"Mississippi",twentyFive:"Missouri",twentySix:"Montana",
                //     twentySeven:"Nebraska",twentyEight:"Nevada",twentyNine:"New Hampshire",thirty:"New Jersey",thirtyOne:"New Mexico",ThirtyTwo:"New York",thirtyThree:"North Carolina",
                //     thirtyFour:"North Dakota",thirtyFive:"Ohio",thirtySix:"Oklahoma",thirtySeven:"Texas",thirtyEight:"Utah",thirtyNine:"Vermont",
                //     forty:"Virginia",fortyOne:"Washington",fortyTwo:"West Virginia",fortyThree:"Wisconsin",fortyFour:"Wyoming"
                // },

            ]
        },
        // Alberta
        // British Columbia
        // Manitoba
        // New Brunswick
        // Newfoundland and Labrador
        // Northwest Territories
        // Nova Scotia
        // Nunavut
        // Ontario
        // Prince Edward Island
        // Quebec
        // Saskatchewan
        // Yukon

        {
            id: 2,
            name: "CANADA",
            key2: [
                { state: "Alberta", imgUrl: "blankImage" },
                { state: "British Columbia", imgUrl: "blankImage" },
                { state: "Manitoba", imgUrl: "blankImage" },
                { state: "New Brunswick", imgUrl: "blankImage" },
                { state: "Newfoundland and Labrador", imgUrl: "blankImage" },
                { state: "Northwest Territories", imgUrl: "blankImage" },
                { state: "Nova Scotia", imgUrl: "blankImage" },
                { state: "Nunavut", imgUrl: "blankImage" },
                { state: "Ontario", imgUrl: "blankImage" },
                { state: "Prince Edward Island", imgUrl: "blankImage" },
                { state: "Quebec", imgUrl: "blankImage" },
                { state: "Saskatchewan", imgUrl: "blankImage" },
                { state: "Yukon", imgUrl: "blankImage" },
                // {
                //     First_state: "Alberta",
                //     Sec_state: "British Columbia",
                //     Third_state: "Manitoba",
                //     Fourth_state: "New Brunswick",
                //     Fifth_state: "Newfoundland and Labrador",
                //     Sixth_state: "Northwest Territories",
                //     Seventh_state: "Nova Scotia",
                //     eighth_state: "Nunavut",
                //     ninth_state: "Ontario",
                //     tenth_state: "Prince Edward Island",
                //     eleventh_state: "Quebec",
                //     twelve: "Saskatchewan",
                //     thirteen: "Yukon",

                // },
            ]
        },
        {
            id: 3,
            name: "International",
            key2: [
                { state: "Australia", imgUrl: "blankImage" },
                { state: "Germany", imgUrl: "blankImage" },
                { state: "Itlay", imgUrl: "blankImage" },
                { state: "Jamaica", imgUrl: "blankImage" },
                { state: "Mexico", imgUrl: "blankImage" },
                { state: "Neitherland", imgUrl: "blankImage" },
                { state: "New Zealand", imgUrl: "blankImage" },
                { state: "South Korea", imgUrl: "blankImage" },
                { state: "Spain", imgUrl: "blankImage" },
                { state: "Switzerland", imgUrl: "blankImage" },
                { state: "Urguay", imgUrl: "blankImage" },
                { state: "Us Virgin Islands", imgUrl: "blankImage" },

            ]
        }
    ]
    return (
        <div className="col-12 lawsContainer my-4">
            <ol className="laws_ol">
                {LawsOptionsListArray.map((items, index) => {
                    return (
                        <li className="lawoptionMainList " key={index}>
                            <div className="col-12 lawsListStyle px-2" onClick={() => SetValues({ ...Values, [items.id]: !Values[items.id] })}>
                                <span className="listCountryName">{items.name}</span><span><MdOutlineKeyboardArrowDown color="#707070" size={22} /></span>
                            </div>
                            {Values[items.id] === true && (
                                <div className="border lawsDropDownList px-2 col-12 ">
                                    <ol className="lawssoptionStyle law_Inner_OPtionList_Ol">
                                        {items.key2.map((val, index) => {
                                            return (
                                       
                                                <Link to="/LawStateDescription">

                                                    <li key={index}>
                                                        <LazyLoadImage src={blankImage} className="lawOPtionListImage" alt="image-not-found" />
                                                        <span>{val.state}</span>
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