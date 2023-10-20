import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlinePlus } from "react-icons/ai"
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Cookies from 'universal-cookie';
import Createcontext from "../../../../Hooks/Context"
import { LoadingButton } from '@mui/lab';
import { Link, useNavigate } from 'react-router-dom';
const AddToCartReview = () => {
    const Swal = require('sweetalert2')
    const { state, dispatch } = React.useContext(Createcontext)
    const navigate = useNavigate();
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access');
    const [Loadingmines, SetLoadingmines] = React.useState(false);
    const [LoadingPlue, SetLoadingPluse] = React.useState(false);
    const [LoadingDelete, SetLoadingDelete] = React.useState(false);
    const [wondowWidth, setWindowWidth] = useState('')
    async function DeleteItem(Id, id) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won'to remove this product from Cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#31B665',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
      
            if (result.isConfirmed) {  
                  const myPromise = new Promise((resolve, reject) => {
                        if (state.login) {  
                        const config = {
                            headers: { Authorization: `Bearer ${token_data}` }
                        };
                        Axios.delete(`https://api.cannabaze.com/UserPanel/DeleteAddtoCart/${id}`,
                            config,
                            SetLoadingDelete(true)
                        )
                        .then(async (res) => {
                            await dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                          
                            SetLoadingDelete(false)
                            resolve();
                        })
                        .catch((error) => {
                            SetLoadingDelete(false)
                            reject();
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
                            resolve();
                        }
                  })
                  myPromise.then(async ()=>{
                    dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                    Swal.fire(
                        'Removed!',
                        'Your product has been removed.',
                        'success'
                    )
                  })
            }
        })


    }
    async function Quantity(Id, Cart, Event) {

        if (state.login || token_data) {
            const config = {
                headers: { Authorization: `Bearer ${token_data}` }
            };
            let Arry =
            {
                Brand_Name: Event.Brand_Name,
                Product_id: Event.Product_id,
                Store_id: Event.Store_id,
                Image_id: Event.Image_id,
                Price: Event.Price,
                Cart_Quantity: Event.Cart_Quantity + 1,
                PriceId: Event.Price.id

            }
            await Axios.post(`https://api.cannabaze.com/UserPanel/Update-AddtoCart/${Id}`,
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

            await Axios.post(`https://api.cannabaze.com/UserPanel/Update-AddtoCart/${Id}`,
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
                    console.trace(error)
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
    function Navigate(e) {
       
        navigate(`/products/${modifystr(e.category)}/${modifystr(e.SubcategoryName)}/${modifystr(e.ProductName)}/${e.Sub_Category_id}`)
    }
    function modifystr(str) {
        str = str === undefined ? "" : str
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str.toLowerCase()
    }
    useEffect(() => {
        setWindowWidth(window.innerWidth)

    })
    return (
        <React.Fragment>
            <div className="col-12  AddProductCartContainerinner">
{wondowWidth > 768 ?
                <>
                <div class="cartProductHeadings row col-12">
                    <div className='col-5 '><span className='carttableheadings'>Item</span></div>
                    <div className='col-2 text-center'><span className='carttableheadings'>Price</span></div>
                    <div className='col-2 text-center'><span className='carttableheadings'>Quantity</span></div>
                    <div className='col-2 text-center'><span className='carttableheadings'>Subtotal</span></div>
                    <div className='col-1 text-end'><span className='carttableheadings'></span></div>
                </div>
                <div className=" Add_product_cart_left_container_item" >

                    {state?.AllProduct?.map((ele, index) => {
                        let wrigh;
                        if (ele.Price.Weight) {
                            wrigh = ele.Price.Weight;
                        } else {
                            wrigh = `${ele.Price.Unit} Unit`
                        }
                        return (
                            <div className="row py-3 px-0 border-top border-bottom justify-content-center   align-items-center" key={index}>
                                <div className='row align-items-center col-5'>
                                    <div className="p-0 col-3 Add_prod_item_image_cont">
                                        <Link to={`/products/${modifystr(ele.category)}/${modifystr(ele.SubcategoryName)}/${modifystr(ele.ProductName)}/${ele.Product_id}`}>

                                            <LazyLoadImage onError={event => {
                                                event.target.src = "/image/blankImage.jpg"
                                                event.onerror = null
                                            }} src={`${ele.Image}`} alt="imag not found" />
                                        </Link>
                                    </div>
                                    <div className="col-9 Add_prod_content_cont p-2">


                                        <h5 className='add_prod_cart_p_title' onClick={() => { Navigate(ele) }}>{ele.ProductName + "(" + wrigh + ")"}</h5>
                                        <h4 className='add_prod_cart_p'>{ele.StoreName}</h4>
                                    </div>
                                </div>
                                <div className="col-2 text-center">
                                    <span className="add_prod_span_amount fontStyle">${parseInt(ele.Price.SalePrice)}</span>
                                </div>
                                <div className="col-2 text-center">
                                    <div className='AddToCartReviewBtn ' >
                                        <div className='addToCart_btn'>
                                            {(Loadingmines || ele.Cart_Quantity) > 1 && <LoadingButton loading={Loadingmines} style={{ width: "15px" }} onClick={() => { decreaseQuantity(ele.id, ele) }} >  <GrFormSubtract color='gray' /></LoadingButton>
                                            }
                                        </div>
                                        <div className='AddToCartCount' style={{ width: "20px" }}>
                                            <p className='addToCartCountNumber'>{ele.Cart_Quantity}</p>

                                        </div>
                                        <div className='addToCart_btn'>
                                            <LoadingButton loading={LoadingPlue} className="center" style={{ width: "15px" }} onClick={() => { Quantity(ele.id, ele.Cart_Quantity, ele) }} ><AiOutlinePlus color='gray' /></LoadingButton>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-2 text-center">
                                    <span className="add_prod_span_amount fontStyle" value={ele.Price.SalePrice * ele.Cart_Quantity} >${parseInt(ele.Price.SalePrice * ele.Cart_Quantity)}</span>
                                </div>
                                <div className="col-1 text-center">
                                    <span><LoadingButton loading={LoadingDelete} className="center" style={{ width: "15px" }} onClick={(() => { DeleteItem(ele.Product_id, ele.id) })}> <RiDeleteBin6Line size={20} color='gray' /></LoadingButton></span>
                                </div>

                            </div>
                        )
                    })}
                </div>

          
            </>
            :
            <div className="  " >
                {state.AllProduct?.map((ele, index) => {

                    let wrigh;
                    if (ele.Price.Weight) {
                        wrigh = ele.Price.Weight;
                    } else {
                        wrigh = `${ele.Price.Unit} Unit`
                    }
                    return (
                        <div className=" addtoproduct_card" key={index}>
                            <div className='mb_addtoproduct_card_img'>
                                <Link to={`/products/${modifystr(ele.category)}/${modifystr(ele.SubcategoryName)}/${modifystr(ele.ProductName)}/${ele.Sub_Category_id}`}>

                                    <LazyLoadImage onError={event => {
                                        event.target.src = "/image/blankImage.jpg"
                                        event.onerror = null
                                    }} src={`https://selnoxmedia.s3.amazonaws.com/${ele.Image}`} alt="imag not found" />
                                </Link>
                            </div>
                            <div className="mb_addtoproduct_card_content">
                                <div>
                                    <h5 className='add_prod_cart_p_title' onClick={() => { Navigate(ele) }}>{ele.ProductName + "(" + wrigh + ")"}</h5>
                                    
                                </div>
                                <div className='d-flex justify-content-between align-items-end'>
                                    <div className='AddToCartReviewBtn ' >
                                        <div className='addToCart_btn'>
                                            {(Loadingmines || ele.Cart_Quantity) > 1 ? <LoadingButton loading={Loadingmines} style={{ width: "15px" }} onClick={() => { decreaseQuantity(ele.id, ele) }} >  <GrFormSubtract color='gray' /></LoadingButton> : <span><LoadingButton loading={LoadingDelete} className="center" style={{ width: "15px" }} onClick={(() => { DeleteItem(ele.Product_id, ele.id) })}> <RiDeleteBin6Line className='delete_icons_add' color='gray' /></LoadingButton></span>}
                                        </div>
                                        <div className='AddToCartCount text-center' >
                                            <p className='addToCartCountNumber'>{ele.Cart_Quantity}</p>

                                        </div>
                                        <div className='addToCart_btn'>
                                            <LoadingButton loading={LoadingPlue} className="center" style={{ width: "15px" }} onClick={() => { Quantity(ele.id, ele.Cart_Quantity, ele) }} sx={{
                                                minWidth: '30px',
                                            }} ><AiOutlinePlus color='gray' /></LoadingButton>

                                        </div>

                                    </div>
                                    <span className="add_prod_span_amount fontStyle" value={ele.Price.SalePrice * ele.Cart_Quantity} >${parseInt(ele.Price.SalePrice * ele.Cart_Quantity)}</span>
                                </div>
                            </div>





                        </div>
                    )
                })}
            </div>
                

}
</div>
        </React.Fragment >
    )
}
export default AddToCartReview