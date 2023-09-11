
import React from "react"
const StoreDetailMenuItem = ({SelectionTab , tab}) => {

    const StoreDetailMenuItem = [{ item: "Menu",color:"#31B665" }, { item: "Store Details",color:"#31B665" },
     { item: "Review",color:"#31B665" },  { item: "Deal",color:"#31B665" }, { item: "Media",color:"#31B665" },
    ]


    return (
        <React.Fragment>
            <div className="container-fluid px-0">
                <div className="row center">
                    <div className="col-lg-12  col-md-12 col-sm-12 col-12 StoreDetailMenuItem_container center">
                        <ol className="store_detail_order_list">
                            {StoreDetailMenuItem.map((ele, index) => {
                                return (
                                    <li className="listfontStyle store_detail_list" onClick={()=>{SelectionTab(ele.item )}}
                                     style={{color: tab === ele.item && ele.color}}     
                                      key={index}><span className="storeDetalMenuItemCursor">{ele.item}</span></li>
                                )
                            })}
                        </ol>
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default StoreDetailMenuItem