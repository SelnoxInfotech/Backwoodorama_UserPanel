
import React, { Suspense } from "react"
import Createcontext from "../Hooks/Context"
import { useParams, useLocation } from "react-router-dom";
import RoutingSearch from "../Components/Component/DispensierRoutingSearch/RoutingSearch";
import axios from "axios";
var XMLParser = require('react-xml-parser');
export default function RoutingDespen(props) {
    const [xmlData, setXmlData] = React.useState([]);
    const { state } = React.useContext(Createcontext)
    const params = useParams()
    const Location = useLocation()
    const { Component } = props;
    React.useEffect(() => {
        console.log(Location.pathname)
        // fetch('/build/Sitemap/sitemapbrand.xml')
        //     .then((res) => res.text())
        //     // .then(xmlstring =>  window.domparser().parsefromstring(xmlstring, "text/xml"))
        //     .then(data => {
        //         console.log( data)
                axios.post("http://localhost:5000/api-data", {

                    data: Location.pathname,
                }
                ).then((res) => {
                    console.log(res)
                }).catch((eroor) => {
                    console.log(eroor)
                })
                    .catch((err) => {

                });
    }, [Location])
    return (

        <div>
            <Suspense fallback={"Loading"}>
                <Component />
                {((state.permission === false) && (params?.city?.toLowerCase() !== state?.City?.toLowerCase() || params?.state?.toLowerCase() !== state?.State?.toLowerCase() || params?.Country?.toLowerCase() !== state?.Country?.toLowerCase())) && <RoutingSearch city={params.city} State={params.state} country={params.Country}
                    pathname={Location.pathname.slice(0, 18) === '/weed-dispensaries' ? "/weed-dispensaries" : "/weed-deliveries"}
                ></RoutingSearch>}
            </Suspense>
        </div>
    )
}