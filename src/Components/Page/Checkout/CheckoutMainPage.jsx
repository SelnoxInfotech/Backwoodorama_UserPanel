import DeliveryOption from "./DeliveryOption"
import DeliveryInformation from "./DeliveryInformation"
const CheckOutMainPage=()=>{
    return(
        <>
        <div className="container-fluid">
            <div className="row">
               <DeliveryOption/>
            </div>
            <div className="row">
                <DeliveryInformation/>

            </div>
            
        </div>
        </>
    )
}
export default CheckOutMainPage