import DeliveryOption from "./DeliveryOption"
import DeliveryInformation from "./DeliveryInformation"
import Payment from "./Payment"
import React from "react"
const CheckOutMainPage=()=>{
    const [ShowData,SetShowData]=React.useState(false)
    const [ShowDeliveryInformation,SetShowDeliveryInformation]=React.useState(false)
    return(
        <>
        <div className="container-fluid">
            <div className="row">
               <DeliveryOption SetShowData={SetShowData}/>
            </div>
            <div className="row">
            {ShowData===true&& <DeliveryInformation SetShowDeliveryInformation={SetShowDeliveryInformation}/>
              }

            </div>
            <div className="row">
                {ShowDeliveryInformation===true && <Payment/>}

            </div>
            
        </div>
        </>
    )
}
export default CheckOutMainPage