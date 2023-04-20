import {Link} from "react-router-dom"
const StoreDetailMenuItem = () => {

    const StoreDetailMenuItem = [{ item: "Menu",color:"#31B665" }, { item: "Store Details",color:"#000000" }, { item: "Review",color:"#000000" },  { item: "Deal",color:"#000000" }, { item: "Media",color:"#000000" }]


    return (
        <>
            <div className="container-fluid">
                <div className="row center">
                    <div className="col-lg-10  col-md-12 col-sm-12 col-12 StoreDetailMenuItem_container">
                        <ol className="store_detail_order_list">
                            {StoreDetailMenuItem.map((ele, index) => {
                                return (
                                    <li className="listfontStyle" style={{color:ele.color}} key={index}>{ele.item}</li>
                                )
                            })}
                        </ol>
                    </div>

                </div>

            </div>
        </>
    )
}
export default StoreDetailMenuItem