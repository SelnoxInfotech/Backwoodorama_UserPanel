import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Signup = () => {
    const classes = useStyles()

    return (
        <>
            <div className="container signup_margins_top signup_margins_bottom">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom signup_container">
                        <div className='row'>
                            <div className='col-12 fontStyle signup_head'>
                            <p>signup</p>

                            </div>
                            </div>
                        <div className='row'>
                            <label>Email</label>

                            <div className='col-lg-12'>
                                <TextField id="outlined-basic" placeholder="Enter Your Email" variant="outlined" fullWidth />
                            </div>
                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12'>
                                <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                     <Link to="/SignupWithEmail"><LoadingButton variant="outlined">Signup</LoadingButton></Link>
                                </Box>
                            </div>

                        </div>
                        <div className='row justify-content-center align-items-center signup_margins_top'>
                                <div className='col-lg-4  col-md-6 col-sm-6 col-6 signup_btn text-end'>
                                <p>Already a member?</p>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                             <Link to="/Login">  <Button className={`Signup_already_btn ${classes.mui_signup_btn}`}>Signin</Button></Link>
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
export default Signup