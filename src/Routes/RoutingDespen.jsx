import React, { useContext } from 'react'
import Createcontext from "../Hooks/Context"
import { useParams, useLocation } from "react-router-dom";
import RoutingSearch from "../Components/Component/DispensierRoutingSearch/RoutingSearch";
export default function RoutingDespen(props) {
    const { state } = useContext(Createcontext)
    const params = useParams()
    const Location = useLocation()
    const { Component } = props;
    return (

        <div>


            {((state.permission === false) && (params?.city?.toLowerCase() !== state?.City?.toLowerCase() || params?.state?.toLowerCase() !== state?.State?.toLowerCase() || params?.Country?.toLowerCase() !== state?.Country?.toLowerCase() || params.route?.toLowerCase() !== state?.route?.toLowerCase())) && <RoutingSearch city={params.city} State={params.state} country={params.Country} route={params.route}
                pathname={Location.pathname.slice(0, 18) === '/weed-dispensaries' ? "/weed-dispensaries" : "/weed-deliveries"} ></RoutingSearch>}
            <Component />

        </div>
    )
}