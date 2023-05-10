
import StoreDetailMenuItem from "./StoreDetailComponent/StoreDetailMenuItem"

import ComponentStoreDetails from "./ComponentStoreDetails"
const StoreDetail = () => {
    return (
        <>
            <div className="container-fluid">
                <StoreDetailMenuItem />
              <ComponentStoreDetails></ComponentStoreDetails>


            </div>
        </>
    )
}
export default StoreDetail