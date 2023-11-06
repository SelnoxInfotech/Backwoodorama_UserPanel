import React , {useEffect , useContext} from 'react'
import Createcontext from "../Hooks/Context"
import { useParams, useLocation } from "react-router-dom";
import RoutingSearch from "../Components/Component/DispensierRoutingSearch/RoutingSearch";
import axios from "axios";
export default function RoutingDespen(props) {
    const { state } = useContext(Createcontext)
    const params = useParams()
    const Location = useLocation()
    const { Component } = props;
    useEffect(() => {
        if (Location.pathname.slice(0, 18) === "/weed-dispensaries") {
            axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/10`,
            ).then((res) => {
                if (res.data.length === 0) {
                    axios.post(`https://api.cannabaze.com/UserPanel/Add-SiteMap/`,
                        {
                            Xml: 'https://www.weedx.io' + Location.pathname
                        },
                    ).then((res) => { }).catch((err) => {
                        console.trace(err)
                    })
                }
                else {
                    const json = typeof res.data[0].Xml === "object" ? res.data[0].Xml : [res.data[0].Xml]
                    if (!json.includes('https://www.weedx.io' + Location.pathname)) {
                        json.push('https://www.weedx.io' + Location.pathname);
                    }
                    axios.post(`https://api.cannabaze.com/UserPanel/Update-SiteMap/10`,
                        {
                            Xml: json
                        },
                    ).then((res) => {
                    }).catch((err) => {
                    })
                }
            }).catch(() => {

            })
        }
        else {
            axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/11`,
            ).then((res) => {
                if (res.data.length === 0) {
                    axios.post(`https://api.cannabaze.com/UserPanel/Add-SiteMap/`,
                        {
                            Xml: 'https://www.weedx.io' + Location.pathname
                        },
                    ).then((res) => { }).catch((err) => {
                        console.trace(err)
                    })
                }
                else {
                    const json = typeof res.data[0].Xml === "object" ? res.data[0].Xml : [res.data[0].Xml]
                    if (!json.includes('https://www.weedx.io' + Location.pathname)) {
                        json.push('https://www.weedx.io' + Location.pathname);
                    }
                    axios.post(`https://api.cannabaze.com/UserPanel/Update-SiteMap/11`,
                        {
                            Xml: json
                        },
                    ).then((res) => {
                    }).catch((err) => {
                    })
                }
            }).catch(() => {

            })
        }
    }, [Location , state?.City , state?.State , state?.Country])

    return (

        <div>
           
                <Component />
                {((state.permission === false) && (params?.city?.toLowerCase() !== state?.City?.toLowerCase() || params?.state?.toLowerCase() !== state?.State?.toLowerCase() || params?.Country?.toLowerCase() !== state?.Country?.toLowerCase() || params.route?.toLowerCase() !== state?.route?.toLowerCase() )) && <RoutingSearch city={params.city} State={params.state} country={params.Country} route={params.route}
                    pathname={Location.pathname.slice(0, 18) === '/weed-dispensaries' ? "/weed-dispensaries" : "/weed-deliveries"}
                ></RoutingSearch>}
            
        </div>
    )
}