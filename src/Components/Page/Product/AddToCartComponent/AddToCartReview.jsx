import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlinePlus } from "react-icons/ai"
import Button from '@mui/material/Button';
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
import _ from "lodash"
import React from "react";
import axios from 'axios';
import Cookies from 'universal-cookie';
import Createcontext from "../../../../Hooks/Context"
const AddToCartReview = ({ SetTotal, Total }) => {
    const {state, dispatch } = React.useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [LocalData, SetLocalData] = React.useState()
    React.useEffect(() => {

        if (token_data) {
            axios.get("http://52.3.255.128:8000/UserPanel/Get-Addtocart/", {

                headers: { Authorization: `Bearer ${token_data}` }

            }).then(response => {
                var uniqueUsersByID = _.uniqBy(response.data, 'Product_id'); //removed if had duplicate id
                var uniqueUsers = _.uniqWith(uniqueUsersByID, _.isEqual);//removed complete duplicates
                SetLocalData(uniqueUsers)


            }).catch(
                function (error) {

                })

        }
        else {
            SetLocalData(JSON.parse(localStorage.getItem("items")))
        }

    }, [])







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
        dispatch({ type: 'CartCount', CartCount: JSON.parse(item).length })

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
    function decreaseQuantity(Id, Product_Quantity) {
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
                                    <LazyLoadImage src={`http://52.3.255.128:8000//${ele.image}`} alt="imag not found" />
                                </div>
                                <div className="col-8 Add_prod_content_cont p-2">
                                    <div className="col-12 fontStyle  add_prod_para_font">
                                        <h5>{ele.ProductName}  </h5>

                                    </div>

                                    <div className="col-12 fontStyle  add_prod_para_margin add_prod_cart_p">
                                        <p>{ele.StoreName}</p>

                                    </div>
                                    <div className="col-12 fontStyle  add_prod_para_margin d-flex">
                                        <span className="add_prod_span_amount fontStyle">${ele.Price.SalePrice}</span>
                                    </div>
                                    <div className='col-12'>
                                        <div className='AddToCartReviewBtn d-flex' >
                                            <div className='addToCart_btn'>
                                                <Button style={{ width: "15px" }} > {ele.Product_Quantity > 1 && <GrFormSubtract onClick={() => { decreaseQuantity(ele.Product_id, ele.Product_Quantity) }} />}</Button>


                                            </div>
                                            <div className='AddToCartCount' style={{ width: "20px" }}>
                                                <p>{ele.Product_Quantity}</p>

                                            </div>
                                            <div className='addToCart_btn'>
                                                <Button className="center" style={{ width: "15px" }} onClick={() => { Quantity(ele.Product_id, ele.Product_Quantity) }} ><AiOutlinePlus /></Button>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="col-3 ">
                                    <div className="col-10 fontStyle Add_prod_cart_amount  mt-4 ">
                                        <RiDeleteBin6Line onClick={(() => { DeleteItem(ele.Product_id) })} />
                                    </div>

                                    <div className="col-10 fontStyle Add_prod_cart_amount_right_side   d-flex">
                                        <span className="add_prod_span_amount fontStyle">${ele.Price.SalePrice * ele.Cart_Quantity}</span>
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