
import React from "react"
import CurrentLocation from "../Components/Component/Navbar/Component/CurrentLocation"
import Createcontext from "../Hooks/Context"
export default function RoutingList(props) {
    const { Component } = props;
    const { state } = React.useContext(Createcontext)
    console.log(state.Location)
    return (

        <div>
            <Component />
            <CurrentLocation Country={state?.Location } State1={state?.State} ></CurrentLocation>
        </div>
    )
}