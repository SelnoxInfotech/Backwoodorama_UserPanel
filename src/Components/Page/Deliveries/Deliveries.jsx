// import DeliveryPickupMenu from "./DeliveriesComponent/DeliveryPickupMenu"
import DeliveryMenuBar from "./DeliveriesComponent/DeliveryMenuBar/DeliveryMenuBar"
const Deliveries=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row  deliveries_centers">
                <div className="col-lg-12 col-12 deliveries_container_height">
                    <h1 className="Deliveries_Heading fontStyle">Order online</h1>
                    <h1 className="deliveries_sub_heading fontStyle_weight_fourHundred">Showing result for Newyork</h1>
                    


                </div>
             {/* <DeliveryPickupMenu/> */}
             <DeliveryMenuBar/>
            </div>

        </div>
        </>
    )
}
export default Deliveries