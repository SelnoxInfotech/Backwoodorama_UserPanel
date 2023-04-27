import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlinePlus } from "react-icons/ai"
import Button from '@mui/material/Button';
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
import _ from "lodash"
import React from "react";
import axios from 'axios';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Createcontext from "../../../../Hooks/Context"
const AddToCartReview = ({ SetTotal, Total }) => {
    const { state, dispatch } = React.useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [LocalData, SetLocalData] = React.useState()
    React.useEffect(() => {


        post()
        if(Total.length === 0) {

        }
      
    }, [localStorage])


    function post() {
        if (state.login) {
            axios.get("http://52.3.255.128:8000/UserPanel/Get-Addtocart/", {
                headers: { Authorization: `Bearer ${token_data}` }
            }).then(response => {
                SetLocalData(response.data)
            }).catch(
                function (error) {
                })
        }
        else {
            SetLocalData(JSON.parse(localStorage.getItem("items")))
        }
    }

       console.log(Total)

    function DeleteItem(Id, id) {
        if (state.login) {
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };
            Axios.delete(`http://52.3.255.128:8000/UserPanel/DeleteAddtoCart/${id}`,
                config
            )
                .then((res) => {
                    post()
                })
                .catch((error) => {
                    console.error(error)
                })

        }
        else {
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

    }

    function Quantity(Id, Cart, Event) {
        if (state.login) {
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };
            let Arry =
            {
                Product_id: Event.Product_id,
                Store_id: Event.Store_id,
                Image_id: Event.Image_id,
                Price: Event.Price,
                Cart_Quantity: Event.Cart_Quantity + 1,
                PriceId: Event.Price.id

            }
            Axios.post(`http://52.3.255.128:8000/UserPanel/Update-AddtoCart/${Id}`,
                Arry,
                config
            )
                .then((res) => {

                    post()
                })
                .catch((error) => {
                    console.error(error)
                })
        }

        else {
            var obj = JSON.parse(localStorage.getItem("items"));
            var s = obj?.map((arr) => {

                if (arr.Product_id === Event.Product_id && arr.Price.id === Event.Price.id) {

                    return { ...arr, Cart_Quantity: arr.Cart_Quantity + 1 }
                }
                return arr

            })
            localStorage.setItem("items", JSON.stringify(s));
            const item = localStorage.getItem('items')
            SetLocalData(JSON.parse(item))

            SetTotal(
                Total?.map((data) => {
                    if (Id === data.Id) {
                        return { ...data, Price: data.Amount * (Cart + 1) }

                    }

                    return data

                })
            )
        }

    }
    function decreaseQuantity(Id, Cart, Event) {
        if (state.login) {
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };
            let Arry =
            {
                Product_id: Event.Product_id,
                Store_id: Event.Store_id,
                Image_id: Event.Image_id,
                Price: Event.Price,
                Cart_Quantity: Event.Cart_Quantity - 1,
                PriceId: Event.Price.id

            }
            Axios.post(`http://52.3.255.128:8000/UserPanel/Update-AddtoCart/${Id}`,
                Arry,
                config
            )
                .then((res) => {
                    console.log(res.data)
                    post()
                })
                .catch((error) => {
                    console.error(error)
                })
        }

        else {
            var obj = JSON.parse(localStorage.getItem("items"));
            var s = obj?.map((arr) => {
                if (arr.Product_id === Event.Product_id && arr.Price.id === Event.Price.id) {

                    return { ...arr, Cart_Quantity: arr.Cart_Quantity - 1 }
                }
                return arr

            })
            localStorage.setItem("items", JSON.stringify(s));
            const item = localStorage.getItem('items')
            SetLocalData(JSON.parse(item))
            SetTotal(
                Total?.map((data) => {
                    if (Id === data.Id) {
                        return { ...data, Price: data.Amount * (Cart - 1) }

                    }

                    return data

                })
            )

        }
    }
    return (
        <>
            <div className="col-12  AddProductCartContainerinner">
                {LocalData?.map((ele, index) => {
                    console.log(ele)
                    return (
                        <div className="col-12 border Add_product_cart_left_container_item" key={index}>

                            <div className="col-12  Add_prod_item_image">

                                <div className="col-1 Add_prod_item_image_cont">
                                    <LazyLoadImage src={`http://52.3.255.128:8000//${ele.Image }` } alt="imag not found" />
                                </div>
                                <div className="col-8 Add_prod_content_cont p-2">
                                    <div className="col-12 fontStyle  add_prod_para_font">
                                        <h5>{ele.ProductName}  </h5>

                                    </div>

                                    <div className="col-12TOtalAmount(ele.Price.SalePrice * ele.Cart_Quantity) fontStyle  add_prod_para_margin add_prod_cart_p">
                                        <p>{ele.StoreName}</p>

                                    </div>
                                    <div className="col-12 fontStyle  add_prod_para_margin d-flex">
                                        <span className="add_prod_span_amount fontStyle">${ele.Price.SalePrice}</span>
                                    </div>
                                    <div className='col-12'>
                                        <div className='AddToCartReviewBtn d-flex' >
                                            <div className='addToCart_btn'>
                                                <Button style={{ width: "15px" }} > {ele.Cart_Quantity > 1 && <GrFormSubtract onClick={() => { decreaseQuantity(ele.id, ele.Cart_Quantity, ele) }} />}</Button>


                                            </div>
                                            <div className='AddToCartCount' style={{ width: "20px" }}>
                                                <p>{ele.Cart_Quantity}</p>

                                            </div>
                                            <div className='addToCart_btn'>
                                                <Button className="center" style={{ width: "15px" }} onClick={() => { Quantity(ele.id, ele.Cart_Quantity, ele) }} ><AiOutlinePlus /></Button>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="col-3 ">
                                    <div className="col-10 fontStyle Add_prod_cart_amount  mt-4 ">
                                        <RiDeleteBin6Line onClick={(() => { DeleteItem(ele.Product_id, ele.id) })} />
                                    </div>

                                    <div className="col-10 fontStyle Add_prod_cart_amount_right_side   d-flex">
                                        <span className="add_prod_span_amount fontStyle" value={ele.Price.SalePrice * ele.Cart_Quantity} >${ele.Price.SalePrice * ele.Cart_Quantity}</span>
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