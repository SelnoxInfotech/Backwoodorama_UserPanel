import React from "react"
import { AiOutlineLeft } from "react-icons/ai"
import SearchBar from '@mkyy/mui-search-bar';
import AllOrder from "./MyOrderComponent/AllOrder";
const MyOrder = () => {
    const [Selected,SetSelected]=React.useState(1)
    const MyOrderList=[{id:1,items:"All"},{id:2,items:"Order"},{id:3,items:"Shipped"},{id:4,items:"Delivered"},{id:5,items:"Cancelled"}]
    const changeBackgroundFun=(itemId)=>{
        SetSelected(itemId)
    }
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 myOrder_columns ">
                        <AiOutlineLeft size={20} color="#000000" /><span className="My_order_span_name">My order</span>

                    </div>
                    <div className="col-lg-10 col-12  searchBar_container  px-0">
                        <section className="MyOrder_searchBar">
                            <span className="yourOrder_search">Your Order</span>
                            <div className="MyOrderSearchBar_container px-0">
                                <SearchBar style={{ background: "#FFFFF", border: "1px solid #CACACA" }} width={"100%"} placeholder="Search by customer, product, order id" />
                            </div>
                        </section>


                    </div>
                    <div className="col-12 col-lg-10 MyOrder_tabs_list  mt-4 px-0 mx-0">
                        <ol className="MyOrder_list">
                            {MyOrderList.map((val,index)=>{
                                return(
                                    <React.Fragment key={index}>
                                        <li style={{backgroundColor:Selected===val.id? "#D8FFE7":""}} onClick={()=>changeBackgroundFun(val.id)}>{val.items}</li>
                                    </React.Fragment>
                                )
                            })}
                        </ol>

                    </div>
                    {Selected===1?
                    (
                        <AllOrder/>
                        )
                        :Selected===2?(<div className="col-12" style={{paddingLeft:"30px"}}><h1>Order</h1></div>):
                           Selected===3?(<div><h1>Shipped</h1></div>):
                           Selected===4?(<div><h1>Delivered</h1></div>):
                           Selected===5?(<div><h1>Cancelled</h1></div>):""
                }

                </div>
            </div>

        </React.Fragment>
    )
}
export default MyOrder