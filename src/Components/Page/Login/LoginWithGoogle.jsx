import React, { useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import { useGoogleLogin ,googleLogout} from '@react-oauth/google'
import axios from 'axios';
function LoginWithGoogle() {
    const classes = useStyles()
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState([]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {setUser(codeResponse)
        console.log(codeResponse)
        },
      
        onError: (error) => console.log('Login Failed:', error)

    });
//   React.useEffect(
    // () => {
    //     if (user) {
    //         axios
    //             .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${user.access_token}`,
    //                     Accept: 'application/json'
    //                 }
    //             })
    //             .then((res) => {
    //                 setProfile(res.data);
    //             console.log(res.data)
    //             })
    //             .catch((err) => console.log(err));
    //     }
    // },
    // [ user ]
// );
    return (
        <Box
            className={`  ${classes.Signup_loading_btn_facebook}`}
        >
            <LoadingButton onClick={login} variant="outlined">Continue with Google</LoadingButton>
        </Box>
    )
}

export default LoginWithGoogle