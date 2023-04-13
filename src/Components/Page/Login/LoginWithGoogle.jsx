import React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import { useGoogleLogin } from '@react-oauth/google'
function LoginWithGoogle() {
    const classes = useStyles()

 const Login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse)
  });

    return (
        <Box
            className={`  ${classes.Signup_loading_btn_facebook}`}
        >
            <LoadingButton onClick={Login} variant="outlined">Continue with Google</LoadingButton>
        </Box>
    )
}

export default LoginWithGoogle