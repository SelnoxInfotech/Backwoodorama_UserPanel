import React from "react"
import { AiOutlineLeft } from "react-icons/ai"
import SearchBar from '@mkyy/mui-search-bar';

const MyOrder = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 myOrder_columns">
                        <AiOutlineLeft size={20} color="#000000" /><span className="My_order_span_name">My order</span>

                    </div>
                    <div className="col-12 searchBar_container">
                        <section className="MyOrder_searchBar">
                            <span className="yourOrder_search">Your Order</span>
                            <div className="MyOrderSearchBar_container">
                                <SearchBar style={{ background: "#FFFFF", border: "1px solid #CACACA" }} width={"100%"} placeholder="Search by customer, product, order id" />
                            </div>
                        </section>


                    </div>
                    <div className="col-12 MyOrder_tabs_list">

                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}
export default MyOrder