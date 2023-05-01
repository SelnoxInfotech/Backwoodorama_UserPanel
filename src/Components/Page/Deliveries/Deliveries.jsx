import DeliveryPickupMenu from "./DeliveriesComponent/DeliveryPickupMenu"
const Deliveries=()=>{
    return(
        <>
        <div className="container-fluid">
            <hr/>
            <div className="row center">
                <div className="col-lg-10 col-12 deliveries_container_height">
                    <h1 className="Deliveries_Heading fontStyle">Order online</h1>
                    <h1 className="deliveries_sub_heading fontStyle_weight_fourHundred">Showing result for Newyork</h1>
                    


                </div>
             <DeliveryPickupMenu/>
            </div>

        </div>
        </>
    )
}
export default Deliveries