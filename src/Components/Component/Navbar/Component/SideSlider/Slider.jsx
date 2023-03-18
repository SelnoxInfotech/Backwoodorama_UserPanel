import React from "react"


const SideNavbar = ({ closeNav }) => {


    return (
        <>
            <div id="mySidebar" className="sidebar " >
                <p className="closebtn" onClick={closeNav} >×</p>
                <div className="col-12 Slider_content_center " >
                    <p>Dispansires</p>
                </div>
               <div className="col-10 ">
               <hr></hr>
               </div>
                <div className="col-12 Slider_content_center " >
                    <p>Deliveries</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Brand</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Product</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Deals</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Learn</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>Dispansires</p>
                </div>
                <hr></hr>
                <div className="col-12 Slider_content_center " >
                    <p>More</p>
                </div>
            </div>
        </>
    )
}
export default SideNavbar