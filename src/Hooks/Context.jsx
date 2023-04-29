import React, { useReducer, createContext, useState, useEffect } from 'react';
import Reducer from '../Hooks/Reduser'
import Cookies from 'universal-cookie';
import axios from 'axios';
const Createcontext = createContext();
const cookies = new Cookies();
const login = cookies.get("Token_access")
const log = login ? true : false

const initialUser = {

    login: log,
    api: "",
    CartCount: Boolean,
    AllProduct: [],
    DeliveryOption: false,
    DeliveryInformation: false,
    Cart_subTotal :""

}

function Context(props) {
    const [state, dispatch] = useReducer(Reducer, initialUser)

    React.useEffect(() => {
        dispatch({ type: 'Cart_subTotal'})
        const logi = cookies.get("Token_access")
        if (Boolean(logi) ) {
            axios.get("http://52.3.255.128:8000/UserPanel/Get-Addtocart/", {
                headers: { Authorization: `Bearer ${login}` }
            }).then(function (response) {
                dispatch({ type: 'CartCount', CartCount:response?.data.length })
                dispatch({ type: 'AllProduct', AllProduct:response?.data })

            })
                .catch(function (error) {
                    return error
                })
        }
        else {
            const length = localStorage.getItem("items")
            dispatch({ type: 'CartCount', CartCount: JSON.parse(length)?.length })
        }
    }, [state.CartCount])
    return (

        <Createcontext.Provider value={{ state, dispatch }} >

            {props.children}
        </Createcontext.Provider>

    )

}

export default Createcontext;
export { Context }