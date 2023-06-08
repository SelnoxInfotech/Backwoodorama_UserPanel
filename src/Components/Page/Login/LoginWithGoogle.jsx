import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios';

import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
import {FcGoogle} from "react-icons/fc"
function LoginWithGoogle() {
    const classes = useStyles()
    const cookies = new Cookies();
    const location = useLocation();
    const Navigate = useNavigate()
    const { state, dispatch } = React.useContext(Createcontext)
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => { GoogleAuth(codeResponse) },
        onError: (error) =>alert('Login Failed:', error)

    })


    async function GoogleAuth(codeResponse) {
       await axios.post("https://sweede.app/UserPanel/GoogleView/ ", {
            token: codeResponse.access_token
        }).then(response => {
            if (location.pathname === "/CheckOutMainPage") {
                if (state.AllProduct.length === 0) {
                    Navigate("/Product")
                }
            }
            else {
                let date = new Date();
                date.setTime(date.getTime() + (60 * 60 * 8000))
                cookies.set('Token_access', response.data.access_token, { expires: date })
                dispatch({ type: 'Login', login: true })
                dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                Navigate(-1)
            }
        }).catch(
            function (error) {
                alert(error.response.data.message)

            })
    }
    return (
        <Box
            className={`${classes.Signup_loading_btn_Googles}`}
        >
            <LoadingButton onClick={login} variant="outlined"  loadingPosition="start"  startIcon={<FcGoogle />}> Continue with Google</LoadingButton>
        </Box>
    )
}

export default LoginWithGoogle