// import DeliveryPickupMenu from "./DeliveriesComponent/DeliveryPickupMenu"
import DeliveryMenuBar from "./DeliveriesComponent/DeliveryMenuBar/DeliveryMenuBar"
import Createcontext from "../../../Hooks/Context"
import React from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
const Deliveries=()=>{
    const { state } = React.useContext(Createcontext)
    const Location = useLocation()
    React.useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[])
    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str.toLowerCase()
    }

    React.useEffect(()=>{
        axios.get(`https://api.cannabaze.com/UserPanel/Get-SitemapbyId/11`,
        ).then((res) => {
            if (res.data.length === 0) {
                axios.post(`https://api.cannabaze.com/UserPanel/Add-SiteMap/`,
                    {
                        Xml: 'https://www.weedx.io' +modifystr( Location.pathname)
                    },
                ).then((res) => { }).catch((err) => {
                    console.trace(err)
                })
            }
            else {
                const json = typeof res.data[0].Xml === "object" ? res.data[0].Xml : [res.data[0].Xml]
                if (!json.includes('https://www.weedx.io' + modifystr( Location.pathname))) {
                    json.push('https://www.weedx.io' + modifystr( Location.pathname));
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
    },[Location])




    return(
        <React.Fragment>
        <div className="container-fluid">
            <div className="row  deliveries_centers">
                <div className="col-lg-12 col-11 deliveries_container_height px-0 mt-2">
                <h1 className="d-flex"> <span className="dispensories_name">Weed Delivery In </span> <span className="dispensories_city">{state.Location}</span></h1>
                    {/* <h1 className="Deliveries_Heading fontStyle">  <span>{state.Location}</span></h1> */}
                    {/* <h2 className="deliveries_sub_heading fontStyle_weight_fourHundred">Showing result for, {state.Location}</h2> */}
                    


                </div>
             {/* <DeliveryPickupMenu/> */}
             <DeliveryMenuBar/>
            </div>

        </div>
        </React.Fragment>
    )
}
export default Deliveries