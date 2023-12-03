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

    React.useEffect(() => {
        axios.post(`https://api.cannabaze.com/UserPanel/Update-SiteMap/11`,
                {
                    j:'https://www.weedx.io'+ modifystr(Location.pathname)
                },
            ).then((res) => {
              

            }).catch((err) => {
            })
    }, [Location])



    return(
        <React.Fragment>
        <div className="container-fluid">
            <div className="row  deliveries_centers">
                <div className="col-lg-12 col-11 deliveries_container_height px-0 mt-2">
                <h1 className="d-flex"> <span className="dispensories_name">Weed Delivery In </span> <span className="dispensories_city">{state.Location}</span></h1>
                
                </div>
             <DeliveryMenuBar/>
            </div>

        </div>
        </React.Fragment>
    )
}
export default Deliveries