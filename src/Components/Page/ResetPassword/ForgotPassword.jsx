import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import React from 'react';
import { useForm } from "react-hook-form";

const ForgotPassword = () => {
    const [Email,SetEmail]=React.useState("")
    const classes = useStyles()
    const method=useForm()
    const HandleEmail=(e)=>{
        SetEmail(e.target.value)
    }
const Submit=()=>{

}
   
    return (
        <>
            <div className="container signup_margins_top signup_margins_bottom">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom login_signup_reset_container reset_container_height">
                        <form  onSubmit={method.handleSubmit(Submit)}>
                        <div className='row'>
                            <div className='col-12 fontStyle signup_head'>
                                <p>Forgot Password</p>

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
                                <TextField
                                autoComplete="none"
                                 id="EmailUser" 
                                 name="Email"
                                 inputProps={{
                                    autoComplete: 'Email',
                                    form: {
                                      autoComplete: 'off',
                                    },
                                  }}
                                 value={Email}
                                 onChange={HandleEmail}
                                 inputRef={method.register({
                                    required:"Email is required*",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                 })}
                                 helperText={method.errors?.Email?.message}
                                 error={Boolean(method.errors?.Email)}
                                  className={`${classes.textFieldFocusBorderColor}`}

                                 placeholder="Enter Your Email" variant="outlined" fullWidth size='small' />
                            </div>
                            
                        </div>
                        <div className='row  signup_margins_top'>
                            <div className=' col-lg-12 signup_btn_height'>
                                <Box
                                    className={` ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton variant="outlined" type={"submit"}>Send email</LoadingButton>
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
                        </form>




                    </div>

                </div>

            </div>

        </>

    )
}
export default ForgotPassword