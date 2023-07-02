import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const ResetPassword = () => {
    const classes = useStyles()

    return (
        <>
            <div className="container signup_margins_top signup_margins_bottom">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom login_signup_reset_container reset_container_height">
                        <div className='row'>
                            <div className='col-12 fontStyle signup_head'>
                                <p>Reset Password</p>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 fontStyle resetPassword_paragraph'>
                                <p>Enter your email address and we’ll send you instructions to reset your password.</p>

                            </div>
                        </div>
                        <div className='row'>
                            <label htmlFor='EmailUser'>Email/Username</label>

                            <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                <TextField id="EmailUser"  className={`${classes.textFieldFocusBorderColor}`}
                                 placeholder="Enter Your Email" variant="outlined" fullWidth size='small' />
                            </div>
                        </div>



                        <div className='row  signup_margins_top'>
                            <div className=' col-lg-12 signup_btn_height'>
                                <Box
                                    className={` ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton variant="outlined">Send email</LoadingButton>
                                </Box>
                            </div>

                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
                                <Box
                                    className={`  ${classes.Reset_password_canel_loading_btn}`}
                                >
                                    <LoadingButton variant="outlined">Cancel</LoadingButton>
                                </Box>
                            </div>

                        </div>





                    </div>

                </div>

            </div>

        </>

    )
}
export default ResetPassword