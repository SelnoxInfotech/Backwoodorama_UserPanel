import { useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlinePlus } from "react-icons/ai"
import Button from '@mui/material/Button';
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
import _ from "lodash"
import React from "react";
import useStyles from "../../../../Style"
const AddToCartReview = ({ SetTotal, Total }) => {
    const count = useRef(null);
    const count1 = useRef(null);
    const classes = useStyles()
    const [LocalData, SetLocalData] = React.useState()
    const [data, setdata] = React.useState([])
    React.useEffect(() => {
        const items = localStorage.getItem('items')
        SetLocalData(JSON.parse(items))

        // JSON.parse(items)?.map((item) => {
        //     if (item?.Price_index.length === 0) {
        //         item?.Prices.map((ele1) => {
        //             var JsonObject = JSON.parse(JSON.stringify(ele1))
        //             var jsondata = JSON.parse(JsonObject.Price)

        //             if (Boolean(_.find(Total, Total => Total.Id === item.Product_id))) {
        //                 let newArr = Total?.map((i) => {
        //                     if (i.Id === item.Product_id) {
        //                         return { ...i, Price: jsondata[0]?.Price * item.Product_Quantity, Id: item.Product_id };
        //                     }
        //                     return i
        //                 });
        //                 SetTotal(newArr);
        //             }
        //             else {

        //                 SetTotal(Total => [...Total, { Price: jsondata[0]?.Price * item.Product_Quantity, Id: item.Product_id }])
        //             }

        //         })
        //     }
        //     else {
        //         item?.Prices.map((ele1) => {
        //             var JsonObject = JSON.parse(JSON.stringify(ele1))
        //             var jsondata = JSON.parse(JsonObject.Price)
        //             console.log(_.find(Total, total => console.log(item.Product_id)))

        //             if (Boolean(_.find(Total, total => total.Id === item.Product_id))) {
        //                 let newArr = Total?.map((i) => {
        //                     console.log(i)
        //                     jsondata?.map((data) => {

        //                         if (i.Id === item.Product_id) {
        //                             return { ...i, Price: jsondata[0]?.Price * item.Product_Quantity, Id: item.Product_id };
        //                         }
        //                     })
        //                     return i
        //                 });
        //                 SetTotal(newArr);
        //             }
        //            else {
        //             jsondata?.map((data) => {
        //                 console.log(item.Price_index[0].Item_id)


        //                 if (item.Price_index[0].Item_id === data.id) {
        //                     console.log(data)
        //                     // SetTotal(Total => [...Total, { Price: data?.Price * item.Product_Quantity, Id: item.Product_id }])
        //                 }
        //             })
        //            }

        //         })
        //         // console.log(item.Price_index[0].Product_id)
        //         // let g = _.find(Total, Total => Total.Id === item.Price_index[0].Product_id)
        //         // console.log(g !== undefined)


        //         // if (g !== undefined) {

        //         //     console.log(Total)
        //         //     Total?.map((total) => {
        //         //         console.log(total.Id === item.Product_id)
        //         //         // if (total.Id === item.Product_id)
        //         //         // {
        //         //         // }
        //         //         // else {
        //         //         //     return total
        //         //         // }
        //         //         return {...total , Price : 4444 , }
        //         //     })

        //         //     // SetTotal(Total.map((i) => {
        //         //     //     if (i.Id === item.Price_index[0].Product_id) {
        //         //     //         return { ...i, Price: 55, Id: item.Product_id }
        //         //     //         // item?.Prices?.map((Pricing) => {
        //         //     //         //     var JsonObject = JSON.parse(JSON.stringify(Pricing))
        //         //     //         //     var jsondata = JSON.parse(JsonObject.Price)

        //         //     //         //     // return jsondata
        //         //     //         //     jsondata?.map((data) => {
        //         //     //         //         if (item?.Price_index[0].Item_id === data.id) {
        //         //     //         //             // console.log(i)
        //         //     //         //             return { ...i, Price: data.Price * item.Product_Quantity, Id: item.Product_id }
        //         //     //         //         }
        //         //     //         //         return data
        //         //     //         //     })
        //         //     //         //     return Pricing
        //         //     //         // })

        //         //     //     }


        //         //     //         return i


        //         //     // }))
        //         //     // SetTotal(Total => {
        //         //     //     return Total.filter(Total => Total.Id !== item.Product_id)
        //         //     // })
        //         //     // SetTotal(Total => [...Total, { Product_id: "hkhjk", Item_id: "ghj" }]);


        //         // }

        //         // else {
        //         //     item?.Prices?.map((Pricing) => {
        //         //         var JsonObject = JSON.parse(JSON.stringify(Pricing))
        //         //         var jsondata = JSON.parse(JsonObject.Price)
        //         //         jsondata?.map((data) => {
        //         //             if (item?.Price_index[0].Item_id === data.id) {
        //         //                 SetTotal(Total => [...Total, { Price: data?.Price * item.Product_Quantity, Id: item.Product_id }])
        //         //             }
        //         //         })


        //         //     })
        //         // }
        //     }

        // })
        //    console.log( document.getElementById("qw"))
        if (Total.length === 0) {
            JSON.parse(items)?.map((value) => {
                if (value.Price_index.length === 0) {
                    // console.log(value.Prices)
                    value.Prices.map((Pricevalue) => {
                        var JsonObject = JSON.parse(JSON.stringify(Pricevalue))
                        var jsondata = JSON.parse(JsonObject.Price)

                        SetTotal(Total => [...Total, { Price: jsondata[0]?.Price * value.Product_Quantity, Id: value.Product_id, Amount: jsondata[0]?.Price }])

                    })
                }
                else {
                    value.Prices.map((Pricevalue) => {
                        var JsonObject = JSON.parse(JSON.stringify(Pricevalue))
                        var jsondata = JSON.parse(JsonObject.Price)
                        jsondata.map((da) => {
                            if (da.id === value.Price_index[0].Item_id)
                                SetTotal(Total => [...Total, { Price: da?.Price * value.Product_Quantity, Id: value.Product_id, Amount: da?.Price }])

                        })


                    })

                }


            })
        }
        // const spanElement =  screen.queryByTestId('test-span');



    }, [localStorage.getItem('items')])




    function DeleteItem(Id) {
        var obj = JSON.parse(localStorage.getItem("items"));
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].Product_id === Id) {
                obj.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("items", JSON.stringify(obj));
        const item = localStorage.getItem('items')
        SetLocalData(JSON.parse(item))
        SetTotal(oldValues => {
            return oldValues.filter(Total => Total.Id !== Id)
          })

    }
    function Quantity(Id, Product_Quantity) {
        var obj = JSON.parse(localStorage.getItem("items"));
        var s = obj?.map((arr) => {
            if (arr.Product_id === Id) {

                return { ...arr, Product_Quantity: arr.Product_Quantity + 1 }
            }
            return arr

        })
        localStorage.setItem("items", JSON.stringify(s));
        const item = localStorage.getItem('items')
        SetLocalData(JSON.parse(item))

        SetTotal(
            Total?.map((data) => {
                if (Id === data.Id) {
                    return { ...data, Price: data.Amount * (Product_Quantity + 1) }
    
                }
    
                return data
    
            })
        )


    }
    function decreaseQuantity(Id , Product_Quantity) {
        var obj = JSON.parse(localStorage.getItem("items"));
        var s = obj?.map((arr) => {
            if (arr.Product_id === Id) {

                return { ...arr, Product_Quantity: arr.Product_Quantity - 1 }
            }
            return arr

        })
        localStorage.setItem("items", JSON.stringify(s));
        const item = localStorage.getItem('items')
        SetLocalData(JSON.parse(item))
        SetTotal(
            Total?.map((data) => {
                if (Id === data.Id) {
                    return { ...data, Price: data.Amount * (Product_Quantity - 1) }
    
                }
    
                return data
    
            })
        )

    }

    return (
        <>
            <div className="col-12  AddProductCartContainerinner">
                {LocalData?.map((ele, index) => {
                    return (
                        <div className="col-12 border Add_product_cart_left_container_item" key={index}>

                            <div className="col-12  Add_prod_item_image">

                                <div className="col-1 Add_prod_item_image_cont">
                                    <LazyLoadImage src={`http://52.3.255.128:8000//${ele.Image[0]?.image}`} alt="imag not found" />
                                </div>
                                <div className="col-8 Add_prod_content_cont p-2">
                                    <div className="col-12 fontStyle  add_prod_para_font">
                                        <h5>{ele.Product_Name}  </h5>

                                    </div>

                                    <div className="col-12 fontStyle  add_prod_para_margin add_prod_cart_p">
                                        <p>{ele.StoreName}</p>

                                    </div>
                                    <div className="col-12 fontStyle  add_prod_para_margin d-flex">
                                        {ele?.Prices.map((ele1, index) => {
                                            var JsonObject = JSON.parse(JSON.stringify(ele1))
                                            var jsondata = JSON.parse(JsonObject.Price)
                                            if (ele.Price_index?.length === 0) {
                                                return (

                                                    <span className="add_prod_span_amount fontStyle">${jsondata[0].Price}</span>
                                                )
                                            }
                                            else {
                                                const d = jsondata?.find((PriceSelect) => {
                                                    return (PriceSelect.id === ele.Price_index[0].Item_id) && PriceSelect.Price
                                                })

                                                return (<span className="add_prod_span_amount fontStyle">${d.Price}</span>
                                                )
                                            }
                                        })
                                        }


                                    </div>
                                    <div className="col-12 add_prod_btn_amount">
                                        <div className="col-10 col-lg-4 col-md-4 col-sm-6  add_to_product_btn_div d-flex">
                                            <div className="col-4">
                                                {/* <button className="add_prod_cart_btn" onClick={() => { Quantity(ele.Product_id) }} ><AiOutlinePlus /></button> */}
                                                <Button className="center" style={{ width: "15px" }} onClick={() => { Quantity(ele.Product_id, ele.Product_Quantity) }} ><AiOutlinePlus /></Button>


                                            </div>
                                            <div className="col-2 addprod_quant">
                                                <p>{ele.Product_Quantity}</p>
                                            </div>
                                            <div className="col-4">
                                                {/* <button className="add_prod_cart_btn" > {ele.Product_Quantity > 1 && <GrFormSubtract onClick={() => { decreaseQuantity(ele.Product_id) }} />}</button> */}
                                                <Button className="" style={{ width: "15px" }} > {ele.Product_Quantity > 1 && <GrFormSubtract onClick={() => { decreaseQuantity(ele.Product_id, ele.Product_Quantity) }} />}</Button>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div className="col-3 ">
                                    <div className="col-10 fontStyle Add_prod_cart_amount  mt-4 ">
                                        <RiDeleteBin6Line onClick={(() => { DeleteItem(ele.Product_id) })} />
                                    </div>

                                    <div className="col-10 fontStyle Add_prod_cart_amount_right_side   d-flex">
                                        {ele?.Prices.map((ele1, index) => {
                                            // console.log(document.getElementById(ele1.id))
                                            var JsonObject = JSON.parse(JSON.stringify(ele1))
                                            var jsondata = JSON.parse(JsonObject.Price)
                                            if (ele.Price_index?.length === 0) {
                                                // SetTotal((Total) => { [...Total, jsondata[0].Price * ele.Product_Quantity] })

                                                return (

                                                    <div key={index} >
                                                        <p> Amount</p>  <span className="add_prod_span_amount fontStyle Amount" id={ele1.id} value={jsondata[0].Price * ele.Product_Quantity} ref={count} >{jsondata[0].Price * ele.Product_Quantity}</span>
                                                    </div>
                                                )
                                            }
                                            else {
                                                const d = jsondata?.find((PriceSelect) => {
                                                    return (PriceSelect.id === ele.Price_index[0].Item_id) && PriceSelect.Price
                                                })
                                                return (

                                                    < div key={index} >

                                                        <p> Amount</p> <span className="add_prod_span_amount Amount fontStyle" id={ele1.id}  value={d.Price * ele.Product_Quantity} ref={count1}>{d.Price * ele.Product_Quantity}</span>
                                                    </div>
                                                )

                                            }
                                        })}





                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default AddToCartReview