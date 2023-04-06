import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const SignupWithEmail=()=>{
    const classes = useStyles()

    return(
        <>
      <div className="container signup_margins_top signup_margins_bottom">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom login_signup_reset_container signup_container_height">
                        <div className='row'>
                            <div className='col-12 fontStyle signup_head'>
                            <p>Signup With Email</p>

                            </div>
                            </div>
                        <div className='row'>
                            <label>Email</label>

                            <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                <TextField id="outlined-basic" placeholder="Enter Your Email" variant="outlined" fullWidth size='small'/>
                            </div>
                        </div>
                        <div className='row signup_margins_top'>
                            <label>Password</label>

                            <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                <TextField type='password' id="outlined-basic" placeholder="Enter Your Password" variant="outlined" fullWidth size='small' />
                            </div>
                        </div>
                        <div className='row signup_margins_top'>
                            <label>Enter your username 8 character</label>

                            <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                <TextField  id="outlined-basic" placeholder='Enter your username 8 character' variant="outlined" fullWidth size='small'/>
                            </div>
                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
                                <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                     <Link to="/SignupWithEmail"><LoadingButton variant="outlined">Signup</LoadingButton></Link>
                                </Box>
                            </div>

                        </div>
                       
                       
                       

                    </div>

                </div>

            </div>
        </>
    )
}
export default SignupWithEmail