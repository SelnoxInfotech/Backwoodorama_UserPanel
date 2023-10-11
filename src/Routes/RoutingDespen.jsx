
import React ,{Suspense}from "react"
import Createcontext from "../Hooks/Context"
import {  useParams ,useLocation } from "react-router-dom";
import CurrentLocation from "../Components/Component/Navbar/Component/CurrentLocation"
import Cookies from "universal-cookie";
import RoutingSearch from "../Components/Component/DispensierRoutingSearch.jsx/RoutingSearch";
export default function RoutingDespen(props) {
    const cookies = new Cookies()
    const { state } = React.useContext(Createcontext)
    const params = useParams()
    const Location = useLocation()
    const { Component } = props;
 console.log(params , Location.pathname.slice(0,18) === '/weed-dispensaries')
 
    return (

        <div>
            <Suspense fallback={"Loading"}>
            <Component />
           {(params.city !== state.City || params.state !== state.State || params.Country !== state.Country)&& <RoutingSearch value={params.city } f ={params.state } g ={params.Country} 
           pathname={Location.pathname.slice(0,18) === '/weed-dispensaries' ? "/weed-dispensaries" :"/weed-deliveries"}
           ></RoutingSearch>}
          {
            //  state.permission===false && <CurrentLocation Country={L} State1={s} city={c}></CurrentLocation>
            }
            </Suspense>
        </div>
    )
}