import React from "react"
import { AiOutlineLeft } from "react-icons/ai"
import SearchBar from '@mkyy/mui-search-bar';
import AllOrder from "./MyOrderComponent/AllOrder";
import useStyles from "../../../Style";
import { IconButton } from "@mui/material";
import Pending_Order from "../MyOrder/MyOrderComponent/Pending_Order"
import { useNavigate } from "react-router-dom";
const MyOrder = () => {
    const navigate =  useNavigate()
    const classes = useStyles()
    const [Selected, SetSelected] = React.useState(1)
    const MyOrderList = [{ id: 1, items: "All" }, { id: 2, items: "Pending" }, { id: 3, items: "Shipped" }, { id: 4, items: "Delivered" }, { id: 5, items: "Cancelled" }]
    const changeBackgroundFun = (itemId) => {
        SetSelected(itemId)
    }
    React.useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row px-2">
                    <div className="col-12 myOrder_columns px-0">
                        <h1  className="myorderHeadings"><IconButton ><AiOutlineLeft onClick={()=>navigate(-1)} className="myOrderSpanIcons" size={20} color="#000000" style={{ marginLeft: "-6px" }} /></IconButton><span onClick={(()=>navigate(-1))} className="My_order_span_name">My order</span></h1>

                    </div>
                    <div className="col-lg-10 col-12  searchBar_container  px-0">
                        <section className="MyOrder_searchBar">
                            <span className="yourOrder_search">Your Order</span>
                            <div className="MyOrderSearchBar_container px-0">
                                <SearchBar className={`${classes.MyOrderSearchBar}`} style={{ background: "#FFFFF", border: "1px solid #CACACA" }} width={"100%"} placeholder="Search by customer, product, order id" />
                            </div>
                        </section>


                    </div>
                    <div className="col-12 col-lg-10 MyOrder_tabs_list  mt-4 px-0 mx-0">
                        <ol className="MyOrder_list">
                            {MyOrderList.map((val, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <li style={{ backgroundColor: Selected === val.id ? "#D8FFE7" : "" }} onClick={() => changeBackgroundFun(val.id)}>{val.items}</li>
                                    </React.Fragment>
                                )
                            })}
                        </ol>

                    </div>
                    {Selected === 1 ?
                        (
                            <AllOrder />
                        )
                        : Selected === 2 ? (<div className="col-12" style={{ paddingLeft: "30px" }}><h2><Pending_Order></Pending_Order></h2></div>) :
                        Selected === 3 ? (<div><h2>Shipped</h2></div>) :
                       Selected === 4 ? (<div><h2>Delivered</h2></div>) :
                         Selected === 5 ? (<div><h2><AllOrder /></h2></div>) : ""
                    }

                </div>
            </div>

        </React.Fragment>
    )
}
export default MyOrder