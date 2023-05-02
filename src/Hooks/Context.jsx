import React, { useReducer, createContext } from 'react';
import Reducer from '../Hooks/Reduser'
import Cookies from 'universal-cookie';
import axios from 'axios';
const Createcontext = createContext();
const cookies = new Cookies();
const login = cookies.get("Token_access")
const log = login ? true : false

const initialUser = {

    login: log,
    ApiProduct: false,
    AllProduct: [],
    DeliveryOption: false,
    DeliveryInformation: false,
    Cart_subTotal: "",
    LoadingApi : false ,
    Order_place:false,

}

function Context(props) {
    const [state, dispatch] = useReducer(Reducer, initialUser)
    React.useEffect(() => {
        const cookies = new Cookies();
        const logi = cookies.get("Token_access")
        dispatch({ type: 'LoadingApi', LoadingApi: true })
        if (Boolean(logi)) {
            axios.get("http://52.3.255.128:8000/UserPanel/Get-Addtocart/", {
                headers: { Authorization: `Bearer ${logi}` }
            }).then(async function (response) {
                const CarTProduct = await response?.data;
                dispatch({ type: 'AllProduct', AllProduct: CarTProduct })
                dispatch({ type: 'LoadingApi', LoadingApi: false })
                let AllTotal = 0
                CarTProduct.map((data)=>{
                  return  AllTotal += parseInt(data?.TotalPrice)
                })
                dispatch({ type: 'Cart_subTotal', Cart_subTotal: AllTotal })
            })
                .catch(function (error) {
                    return error
                })
        }
        else {
            const data =  localStorage?.getItem("items")
             console.log( data === null)
             const length =   data === null ? [] : data
            
            dispatch({ type: 'AllProduct', AllProduct: JSON.parse(length) })
            let AllTotal = 0
            JSON.parse(length)?.map((data)=>{
               
               return AllTotal += parseInt(data.Price.SalePrice* data.Cart_Quantity);
            })
            dispatch({ type: 'LoadingApi', LoadingApi: false })
            dispatch({ type: 'Cart_subTotal', Cart_subTotal: AllTotal })
        }
    }, [state.ApiProduct])
    return (

        <Createcontext.Provider value={{ state, dispatch }} >

            {props.children}
        </Createcontext.Provider>

    )

}

export default Createcontext;
export { Context }