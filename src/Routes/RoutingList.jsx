
import React from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';
import CurrentLocation from "../Components/Component/Navbar/Component/CurrentLocation"
import Createcontext from "../Hooks/Context"
export default function RoutingList(props) {
    const { Component } = props;
    const { state } = React.useContext(Createcontext)
    console.log(state.Location)
    return (

        <div>
            <Component />
            <CurrentLocation Country={state?.Location } State1={''} ></CurrentLocation>
        </div>
    )
}