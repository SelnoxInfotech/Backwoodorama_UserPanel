import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import { Link, useNavigate, useLocation} from 'react-router-dom'
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
import { LoginSeo } from '../../Component/ScoPage/CommenpageSeo';
const Login = () => {
    const cookies = new Cookies();
    const method = useForm()
    const location = useLocation();
    const Swal = require('sweetalert2')
    const { state, dispatch } = React.useContext(Createcontext)
    const Navigate = useNavigate()
    const [loading, Setloading] = React.useState(false)
    const classes = useStyles()
    const [showPassword, setShowPassword] = React.useState(false);
    const [dulicate] = React.useState([])
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    function Submit(data) {

        Setloading(true)
        axios.post("https://api.cannabaze.com/UserPanel/Login/", {

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
                if(response.data !== "Not Authorised"){

                
                let date = new Date();
              
                date.setTime(date.getTime() + 60*60*24*365)
                cookies.set('User_Token_access', response?.data?.tokens?.access, { expires: date })
                dispatch({ type: 'Login', login: true })
                dispatch({ type: 'ApiProduct', ApiProduct: !state.ApiProduct })
                if (location.pathname === "/signupwithemail") {
                        Navigate("/")
                
                }
                else{

                    Navigate('/')
                }
                Setloading(false)
            }
            else{
                // alert("SomeThing Worng")
                Swal.fire({
                    imageUrl: "./image/cross.png",
                    imageClass: "loginsweetimg",
                    imageWidth: 60,
                    imageHeight: 60,
                    title: "Oops...",
                    text: "Login Credentials Incorrect     ",
                    footer:"Invalid email or password. Please check and try again. If not registered, use the correct email or sign up for a new account.",
                    customClass: {
                        confirmButton: 'loginSweetbtn',
                        title: 'title-class',
                        icon: 'loginSweeticon'
                      },
                  });
                Setloading(false) 
            }
        }


        }).catch(
            function (error) {
                Setloading(false)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                   
                  });
            })
    }
  
    React.useEffect(()=>{
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    },[])


    return (
        <React.Fragment>
            <LoginSeo></LoginSeo>
            <div className="container signup_margins_top ">
                <div className="row center">
                    <div className="col-xl-6 col-xxl-4 col-lg-6 col-md-8 col-sm-11 col-11 signup_padding_bottom login_signup_reset_container login_container_height">
                        <div className='row'>
                            <div className='col-12 fontStyle signup_head'>
                                <h1>Log In</h1>

                            </div>
                        </div>

                        <form onSubmit={method.handleSubmit(Submit)}>
                            <div className='row'>
                                <label htmlFor='Email'>Email</label>

                                <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                    <TextField
                                        placeholder="Enter Your Email"
                                        variant="outlined"
                                        fullWidth
                                        className={`${classes.textFieldFocusBorderColor}`}
                                        id='Email'
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
                                <label htmlFor='Password'>Password</label>

                                <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                    <TextField
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter Your Password"
                                        variant="outlined"
                                        fullWidth
                                        className={`${classes.textFieldFocusBorderColor}`}
                                        id='Password'
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
                            <div className='w-100 loginCenterDiv'>
                                <span className='loginParagraphFontSize'>Having trouble to access your account?</span>
                              
                                  <Link to="/forgot-password"><span className='loginParagraphFontSize loginCkBtn'>Click here</span></Link>
                               
                            </div>
                            <div className='row  signup_margins_top'>
                                <div className=' col-lg-12 signup_btn_height'>
                                    <Box
                                        className={ !loading ?`${classes.loginBtnTextAndBackground} ` : `${classes.loginBtnTextAndBackgroundAfter}`}
                                    >
                                        <LoadingButton variant="outlined" loading={loading} type='submit'>LOGIN</LoadingButton>
                                    </Box>
                                </div>

                            </div>
                        </form>
                        <div className='w-100 d-flex mt-4 center'>
                            <div className='login_horizontalLine '></div> <span className='px-2 login_OR'>OR</span> <div className='login_horizontalLine '></div>
                        </div>
                  
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>

                                <LoginWithGoogle></LoginWithGoogle>
                            </div>

                        </div>


                        <div className='w-100 text-center my-2 '>
                            {/* <p className='login_bottom'>New weedx ?</p> */}
                            <h5 className='login_bottom'>New To weedx ?</h5> 
                          
                            <Link className='signInfo' to={'/signup'}><span>Create your Weedx Account</span></Link>
                        </div>


                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default Login
