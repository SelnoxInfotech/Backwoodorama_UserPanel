import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
import {FcGoogle} from "react-icons/fc"
function LoginWithGoogle() {
    const classes = useStyles()
    const cookies = new Cookies();
    const Navigate = useNavigate()
    const { state, dispatch } = React.useContext(Createcontext)
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => { GoogleAuth(codeResponse) },
        onError: (error) =>alert('Login Failed:', error)

    })


    async function GoogleAuth(codeResponse) {
       await axios.post("https://api.cannabaze.com/UserPanel/GoogleView/ ", {
            token: codeResponse.access_token
        }).then(response => {
                 response.data.picture.slice(0,5) === "https" ?  dispatch({ type: 'GoogleImage', GoogleImage: response.data.picture }) :dispatch({ type: 'GoogleImage', GoogleImage: '' })
                let date = new Date();
                date.setTime(date.getTime() + (60 * 60 * 8000))
                cookies.set('User_Token_access', response.data.access_token, { expires: date })
                dispatch({ type: 'Login', login: true })
                dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                Navigate(-1)
            
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