import React from "react";
import { AiOutlinePlus } from "react-icons/ai"
import { GrFormSubtract } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri"
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddToCartReview from "../AddToCartComponent/AddToCartReview"
import AddToCartSummary from "../AddToCartComponent/AddToCartSummary"
const AddToCart = () => {
    const classes = useStyles()

    const [LocalData, SetLocalData] = React.useState()

    const [Total, SetTotal] = React.useState([])
    const [OpenDelivery, SetOpenDelivery] = React.useState(false);
    const [DeliveryButtonBackground, SetDeliveryButtonBackground] = React.useState("")
    const [BackgroundClick, SetBackgroundClick] = useState(null)
    React.useEffect(() => {
        const item = localStorage.getItem('items')
        SetLocalData(JSON.parse(item))
    }, [])

    const HandleDelivery = () => {
        const bgColor = "#31B665"

        SetOpenDelivery(!OpenDelivery)
        SetBackgroundClick(!null)
        SetDeliveryButtonBackground({ background: bgColor })
    }
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
    }

    function Quantity(Id) {
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


    }
    function decreaseQuantity(Id) {
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
    }




    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="col-12">
                        <p>Your Items</p>
                    </div>


                    <div className="col-12 AddProductCartContainer">

                    <div className="col-8  AddProductCartContainerinner">
                    <AddToCartReview />

                    </div>
                    <div className="col-4 border  p-2 Add_product_cart_right_container_summary ">
                    <AddToCartSummary/>
                        </div>




                    </div>
                    <div className="col-12">


                    </div>



                </div>

            </div>

        </div >
    )
}
export default AddToCart