
import React from "react"
import Createcontext from "../Hooks/Context"
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
export default function ProtectRout(props) {
    const cookies = new Cookies();
    const login = cookies.get("Token_access")
    const Navigate = useNavigate()
    const { Component } = props;
    const {dispatch } = React.useContext(Createcontext)
    React.useEffect(() => {

        if (!login) {

            Navigate("/login")
            dispatch({ type: 'Login', login: false })
        }
        else {
            dispatch({ type: 'Login', login: true })
        }


    }, [Component, Navigate, dispatch , login])




    return (

        <div><Component /></div>
    )
}