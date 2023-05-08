
import React from "react"
import Createcontext from "../Hooks/Context"
import { useNavigate , useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';
export default function ProtectRout(props) {
    const cookies = new Cookies();
    const login = cookies.get("Token_access")
    const Navigate = useNavigate()
    const { Component } = props;
    const { state,dispatch } = React.useContext(Createcontext)
      const location = useLocation();
    React.useEffect(() => {

        if (!login) {

            Navigate("/login")
            dispatch({ type: 'Login', login: false });
            if(location.pathname === "/CheckOutMainPage"){
                console.log(state.AllProduct.length)
               if(state.AllProduct.length === 0)
               {
                Navigate("/Product")
               }
            }
    
        }
        else {
            dispatch({ type: 'Login', login: true })
        }

       


    }, [Component, Navigate, dispatch , login , location , state])




    return (

        <div><Component /></div>
    )
}