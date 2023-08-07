import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlinePlus } from "react-icons/ai"
import Button from '@mui/material/Button';
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
import React from "react";
import axios from 'axios';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Createcontext from "../../../../Hooks/Context"
import { LoadingButton } from '@mui/lab';
import { Link,useNavigate } from 'react-router-dom';
const AddToCartReview = () => {
    const { state, dispatch } = React.useContext(Createcontext)
    const navigate =  useNavigate()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [Loadingmines, SetLoadingmines] = React.useState(false)
    const [LoadingPlue, SetLoadingPluse] = React.useState(false)
    const [LoadingDelete, SetLoadingDelete] = React.useState(false)


    async function DeleteItem(Id, id) {
        if (state.login) {
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };
            await Axios.delete(`https://sweede.app/UserPanel/DeleteAddtoCart/${id}`,
                config,
                SetLoadingDelete(true)
            )
                .then(async (res) => {
                    await dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                    SetLoadingDelete(false)
                })
                .catch((error) => {
                    console.error(error)
                    SetLoadingDelete(false)
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

        }
        dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })

    }

    async function Quantity(Id, Cart, Event) {

        if (state.login || token_data) {
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
            await Axios.post(`https://sweede.app/UserPanel/Update-AddtoCart/${Id}`,
                Arry,
                config,
                SetLoadingPluse(true)
            )
                .then((res) => {
                    SetLoadingPluse(false)
                    dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })

                })
                .catch((error) => {
                    console.error(error)
                    SetLoadingPluse(false)
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

        }
        dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })

    }
    async function decreaseQuantity(Id, Event) {
        if (state.login || token_data) {
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };

            await Axios.post(`https://sweede.app/UserPanel/Update-AddtoCart/${Id}`,
                {
                    Product_id: Event.Product_id,
                    Store_id: Event.Store_id,
                    Image_id: Event.Image_id,
                    Price: Event.Price,
                    Cart_Quantity: (Event.Cart_Quantity - 1),
                    PriceId: Event.Price.id

                },
                config,

                SetLoadingmines(true)

            )
                .then((res) => {
                    SetLoadingmines(false)
                    dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })

                })
                .catch((error) => {
                    console.error(error)
                    SetLoadingmines(false)
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

        }

        dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
    }
      function Navigate (e){
        navigate(`/NewProductDetails/${e}`)
      }
   
console.log(state.AllProduct)
    return (
        <>
            <div className="col-12  AddProductCartContainerinner">
                {state.AllProduct?.map((ele, index) => {
                    return (
                        <div className="col-12 border Add_product_cart_left_container_item" key={index}>

                            <div className="col-12  Add_prod_item_image">

                                <div className="col-1 Add_prod_item_image_cont">
                                    <Link to={`/NewProductDetails/${ele.Product_id}`}>
                                 
                                    <LazyLoadImage onError={event => {
                                        event.target.src = "/image/blankImage.jpg"
                                        event.onerror = null
                                    }} src={`https://sweede.app//${ele.Image}`} alt="imag not found" />
                                       </Link>
                                </div>
                                <div className="col-8 Add_prod_content_cont p-2">
                                    <div className="col-12 fontStyle  add_prod_para_font">
                                 
                                        <h5 onClick={()=>{Navigate(ele.Product_id)}}>{ele.ProductName + "(" + ele.Price.Weight + ")"}</h5>
                                

                                    </div>

                                    <div className="col-12 TOtalAmount(ele.Price.SalePrice * ele.Cart_Quantity) fontStyle  add_prod_para_margin add_prod_cart_p">
                                        <p>{ele.StoreName}</p>

                                    </div>
                                    <div className="col-12 fontStyle  add_prod_para_margin d-flex">
                                        <span className="add_prod_span_amount fontStyle">${parseInt(ele.Price.SalePrice)}</span>
                                    </div>
                                    <div className='col-12'>
                                        <div className='AddToCartReviewBtn d-flex' >
                                            <div className='addToCart_btn'>
                                                <LoadingButton loading={Loadingmines} style={{ width: "15px" }}  > {(Loadingmines || ele.Cart_Quantity) > 1 && <GrFormSubtract color='gray' onClick={() => { decreaseQuantity(ele.id, ele) }} />}</LoadingButton>


                                            </div>
                                            <div className='AddToCartCount' style={{ width: "20px" }}>
                                                <p>{ele.Cart_Quantity}</p>

                                            </div>
                                            <div className='addToCart_btn'>
                                                <LoadingButton loading={LoadingPlue} className="center" style={{ width: "15px" }} onClick={() => { Quantity(ele.id, ele.Cart_Quantity, ele) }} ><AiOutlinePlus color='gray' /></LoadingButton>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="col-3 ">
                                    <div className="col-10 fontStyle Add_prod_cart_amount  mt-4 ">
                                        <LoadingButton loading={LoadingDelete} className="center" style={{ width: "15px" }} onClick={(() => { DeleteItem(ele.Product_id, ele.id) })}> <RiDeleteBin6Line size={20} color='gray' /></LoadingButton>
                                    </div>

                                    <div className="col-10 fontStyle Add_prod_cart_amount_right_side   d-flex">
                                        <span className="add_prod_span_amount fontStyle" value={ele.Price.SalePrice * ele.Cart_Quantity} >${parseInt(ele.Price.SalePrice * ele.Cart_Quantity)}</span>
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