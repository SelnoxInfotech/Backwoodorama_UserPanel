import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CiLock } from "react-icons/ci"
import LoginWithGoogle from './LoginWithGoogle';
import Cookies from 'universal-cookie';
import Createcontext from "../../../Hooks/Context"
const Login = () => {
    const cookies = new Cookies();
    const method = useForm()
    const location = useLocation();
    console.log(location)
    const { state, dispatch } = React.useContext(Createcontext)
    const Navigate = useNavigate()
    const [loading, Setloading] = React.useState(false)
    const classes = useStyles()
    const [showPassword, setShowPassword] = React.useState(false);
    const [dulicate, Setduplicate] = React.useState([])
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    function Submit(data) {
        Setloading(true)
        axios.post("http://backend.sweede.net/UserPanel/Login/", {

            email: data.email,
            password: data.password

        },
        ).then(response => {

           
            if (location.pathname === "/CheckOutMainPage") {
                if (state.AllProduct.length === 0) {
                    Navigate("/Product")
                }
            }
            else {
                let date = new Date();
                date.setTime(date.getTime() + (60 * 60 * 8000))
                cookies.set('Token_access', response.data.tokens.access, { expires: date })
                dispatch({ type: 'Login', login: true })
                dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                Navigate(-1)
                Setloading(false)
            }


        }).catch(
            function (error) {
                Setloading(false)
                alert(error.response.data.message)

            })
    }

    return (
        <>
            <div className="container signup_margins_top signup_margins_bottom">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom login_signup_reset_container login_container_height">
                        <div className='row'>
                            <div className='col-12 fontStyle signup_head'>
                                <p>Login</p>

                            </div>
                        </div>
                        <form onSubmit={method.handleSubmit(Submit)}>
                            <div className='row'>
                                <label>Email/Username</label>

                                <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                    <TextField
                                        placeholder="Enter Your Email"
                                        variant="outlined"
                                        fullWidth
                                        name='email'
                                        size='small'
                                        inputRef={method.register({
                                            required: "email  is required*.",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            }
                                        },
                                        )}
                                        helperText={method.errors?.email?.message || dulicate?.email}
                                        error={Boolean(method.errors?.email) || (Boolean(dulicate?.email))}
                                    />
                                </div>
                            </div>
                            <div className='row signup_margins_top'>
                                <label>Password</label>

                                <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                    <TextField
                                        autoComplete="on"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter Your Password"
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                        name='password'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CiLock />
                                                </InputAdornment>
                                            ),
                                            endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }}
                                        inputRef={method.register({
                                            required: "password  is required*.",

                                        },
                                        )}
                                        helperText={method.errors?.password?.message}
                                        error={Boolean(method.errors?.password)}
                                    />
                                </div>
                            </div>
                            <div className='row  align-items-center signup_margins_top'>
                                <div className='col-lg-8  col-md-8 col-sm-8 col-8 signup_btn text-end'>
                                    <p>Having trouble to access your account?</p>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2 col-2 Signup_already_btn'>
                                    <Link to="/ResetPassword"><p>Click here</p></Link>
                                </div>


                            </div>

                            <div className='row  signup_margins_top'>
                                <div className=' col-lg-12 signup_btn_height'>
                                    <Box
                                        className={` ${classes.loadingBtnTextAndBack}`}
                                    >
                                        <LoadingButton variant="outlined" loading={loading} type='submit'>LOGIN</LoadingButton>
                                    </Box>
                                </div>

                            </div>
                        </form>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
                                <LoginWithGoogle></LoginWithGoogle>
                            </div>

                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
                                <Box
                                    className={`${classes.Signup_loading_btn_google}`}
                                >
                                    <LoadingButton variant="outlined">Continue with Facebook</LoadingButton>
                                </Box>
                            </div>

                        </div>




                    </div>

                </div>

            </div>
        </>
    )
}
export default Login
