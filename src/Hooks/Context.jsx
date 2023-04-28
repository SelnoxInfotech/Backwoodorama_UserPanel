import React, { useReducer, createContext, useState, useEffect } from 'react';
import Reducer from '../Hooks/Reduser'
import Cookies from 'universal-cookie';
import axios from 'axios';
const Createcontext = createContext();
const cookies = new Cookies();
const login = cookies.get("Token_access")
const length = localStorage.getItem("items")
const s =  () => {



    const   j  = axios.get ("http://52.3.255.128:8000/UserPanel/Get-Addtocart/", {
        headers: { Authorization: `Bearer ${login}` }
    }).then(function (response) {
        var k = response.data.length
        return response.data.length
    })
        .catch(function (error) {
            return error
        })
    
    console.log(j)

}


const e = s()
console.log()
//  let g = s().then((data)=>{
//    return(data)
// })
// console.log(Promise.resolve(g))

const count = !login ? JSON.parse(length)?.length : "d"

const log = login ? true : false
const initialUser = {

    login: log,
    api: "",
    CartCount: count,
    AllProduct: [],
    DeliveryOption: false,
    DeliveryInformation: false

}

function Context(props) {
    const [state, dispatch] = useReducer(Reducer, initialUser)
    return (

        <Createcontext.Provider value={{ state, dispatch }} >

            {props.children}
        </Createcontext.Provider>

    )

}

export default Createcontext;
export { Context }