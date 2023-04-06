import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
const Login=()=>{
    const classes = useStyles()

    return(
        <>
 <div className="container signup_margins_top signup_margins_bottom">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom signup_container">
                        <div className='row'>
                            <div className='col-12 fontStyle signup_head'>
                            <p>Login</p>

                            </div>
                            </div>
                        <div className='row'>
                            <label>Email/Username</label>

                            <div className='col-lg-12 signup_margins_top_textfield'>
                                <TextField id="outlined-basic" placeholder="Enter Your Email" variant="outlined" fullWidth size='small'/>
                            </div>
                        </div>
                        <div className='row signup_margins_top'>
                            <label>Password</label>

                            <div className='col-lg-12 signup_margins_top_textfield'>
                                <TextField type='password' id="outlined-basic" placeholder="Enter Your Password" variant="outlined" fullWidth size='small' />
                            </div>
                        </div>
                        <div className='row  align-items-center signup_margins_top'>
                                <div className='col-lg-8  col-md-8 col-sm-8 col-8 signup_btn text-end'>
                                <p>Having trouble to access your account?</p>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                              <Button className={`Signup_already_btn ${classes.mui_signup_btn}`}>Click here</Button>
                                </div>


                        </div>
                     
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12'>
                                <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton variant="outlined">LOGIN</LoadingButton>
                                </Box>
                            </div>

                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12'>
                                <Box
                                    className={`  ${classes.Signup_loading_btn_facebook}`}
                                >
                                    <LoadingButton variant="outlined">Continue with Facebook</LoadingButton>
                                </Box>
                            </div>

                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12'>
                                <Box
                                    className={`${classes.Signup_loading_btn_google}`}
                                >
                                    <LoadingButton variant="outlined">Continue with Google</LoadingButton>
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
