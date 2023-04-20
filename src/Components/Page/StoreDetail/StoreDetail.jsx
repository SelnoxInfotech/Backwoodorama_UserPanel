import Amenities from "./StoreDetailComponent/Amenities"
import StoreDetailSideMenuBar from "./StoreDetailComponent/StoreDetailSideMenuBar"
import StoreDetailMenuItem from "./StoreDetailComponent/StoreDetailMenuItem"
const StoreDetail = () => {
    return (
        <>
            <div className="container-fluid">
                <StoreDetailMenuItem />
                <div className="row mt-4 center">
                    <div className="col-lg-10 store_detail_heading fontStyle">
                        <p>Store details</p>

                    </div>
                </div>

                <hr />
                <Amenities />
                <div className="row m-2 center">
                    <StoreDetailSideMenuBar />
                    <div className="col-lg-6 store_detail_container">
                        <div className="row">
                            <div className="col-12 StoreDetail_paragraph fontStyle store_middle_content_top ">
                                <p>Introduction</p>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 store_content_middle_Content storeDetails">
                                <p>LeaflyweedNYC is the best place to buy marijuana online and
                                    get the best delivery services in New York. Leaflyweednyc weed
                                    delivery services NYC is the best place to buy your favourite
                                    marijuana online. Fastest delivery with curbside and store
                                    pickup.</p>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12 StoreDetail_paragraph fontStyle store_middle_content_top ">
                                <p>About Us</p>

                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 store_content_middle_Content">
                                <p>
                                    LeaflyweedNYC is the best place to buy marijuana online and get the best
                                    delivery services in New York. Leaflyweednyc weed delivery services NYC is the best
                                    place to buy your favourite marijuana online. Fastest delivery with curbside and store pickup.
                                </p>
                            </div>

                        </div>



                    </div>
                    <div className="col-lg-2 store_detail_container_right_container">
                        <p>map</p>
                    </div>

                </div>


            </div>
        </>
    )
}
export default StoreDetail