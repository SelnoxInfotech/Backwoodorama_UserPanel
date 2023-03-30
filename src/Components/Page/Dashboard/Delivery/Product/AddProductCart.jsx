import { AiOutlinePlus } from "react-icons/ai"
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
const AddProductCart = () => {
    const cartArr = [{ head: "Canna Cabana (1/2 oz)", innerHead: 'by careleaf', rs: "64$" },
    { head: "Canna Cabana (1/2 oz)", innerHead: 'by careleaf', rs: "64$" },
    { head: "Canna Cabana (1/2 oz)", innerHead: 'by careleaf', rs: "64$" },
    { head: "Canna Cabana (1/2 oz)", innerHead: 'by careleaf', rs: "64$" }

        ,]
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="col-12">
                        <p>Your Items</p>
                    </div>
                    <div className="col-12  AddProductCartContainer">

                        <div className="col-10  AddProductCartContainerinner">
                            {cartArr.map((ele, index) => {
                                return (
                                    <div className="col-12 border Add_product_cart_left_container_item" key={index}>

                                        <div className="col-12  Add_prod_item_image">

                                            <div className="col-1 Add_prod_item_image_cont">
                                                <img src="./image/wee_img1.jpeg" alt="imag not found" />
                                            </div>
                                            <div className="col-8 Add_prod_content_cont p-2">
                                                <div className="col-12 fontStyle  add_prod_para_font">
                                                    <h5>{ele.head} </h5>

                                                </div>

                                                <div className="col-12 fontStyle  add_prod_para_margin">
                                                    <p>by careleaf</p>

                                                </div>
                                                <div className="col-12 fontStyle  add_prod_para_margin d-flex">
                                                    <span className="add_prod_span_amount fontStyle">$64</span>

                                                </div>
                                                <div className="col-12 add_prod_btn_amount">
                                                    <div className="col-2 border Add_prod_sub_minus_cont d-flex">
                                                        <div className="col-4">
                                                            <button className="add_prod_btn"><GrFormSubtract size={"large"} /></button>

                                                        </div>
                                                        <div className="col-2 addprod_quant">
                                                            <p>1</p>
                                                        </div>
                                                        <div className="col-4 ">
                                                            <button className="add_prod_btn"><AiOutlinePlus size={"large"} /></button>

                                                        </div>

                                                    </div>
                                              

                                                </div>
                                            </div>
                                            <div className="col-3 ">
                                                <div className="col-10 fontStyle Add_prod_cart_amount  mt-4 ">
                                                    <RiDeleteBin6Line />
                                                </div>

                                                <div className="col-10 fontStyle Add_prod_cart_amount_right_side   d-flex">
                                                    <p>Amount</p>  <span className="add_prod_span_amount fontStyle">$64</span>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-2 border  p-2 Add_product_cart_right_container_summary">
                            <p>Order Summmary</p>
                        </div>
                     
                    </div>
              


                </div>

            </div>

        </div>
    )
}
export default AddProductCart