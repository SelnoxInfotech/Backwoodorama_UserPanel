// import DeliveryPickupMenu from "./DeliveriesComponent/DeliveryPickupMenu"
import DeliveryMenuBar from "./DeliveriesComponent/DeliveryMenuBar/DeliveryMenuBar"
import Createcontext from "../../../Hooks/Context"
import React from "react"
const Deliveries=()=>{
    const { state } = React.useContext(Createcontext)
    React.useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    },[])
    return(
        <React.Fragment>
        <div className="container-fluid">
            <div className="row  deliveries_centers">
                <div className="col-lg-12 col-11 deliveries_container_height px-0 mt-2">
                <h1 className="d-flex"> <span className="dispensories_name">Weed Delivery in</span> <span className="dispensories_city">{state.Location}</span></h1>
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