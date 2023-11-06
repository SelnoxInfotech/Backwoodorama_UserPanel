
import React from "react"
import Createcontext from "../Hooks/Context"
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
export default function ProtectRout(props) {

    const cookies = new Cookies();
    const login = cookies.get("Token_access")
    const Navigate = useNavigate()
    const { Component } = props;
    const { state, dispatch } = React.useContext(Createcontext)
    React.useEffect(() => {

        if (!login) {

            Navigate("/login")
            dispatch({ type: 'Login', login: false });


        }
        else {

            if (props.path === "/CheckOutMainPage") {
                if ( state.AllProduct.length === 0) {
                    dispatch({ type: 'Login', login: true })
                    Navigate("/cart")
                }
            }
            else {

                dispatch({ type: 'Login', login: true })
            }


        }




    }, [login, Navigate, dispatch, state])
    return (

        <div>
           
           
            <Component />
            {/* <CurrentLocation Country={state?.Country }></CurrentLocation>  */}
           
          

        </div>
    )
}