import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { CiLock } from "react-icons/ci"
import { IconButton } from '@mui/material';
const CreatePassword = () => {
    const classes = useStyles()
    const method = useForm()
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, SetShowConfirmPassword] = React.useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickConfirmShowPassword = () => SetShowConfirmPassword((show) => !show);


    const [PasswordState, SetPasswordState] = React.useState({
        NewPassword: "",
        ConfirmPassword: ""

    })
    const HandlePassword = (e) => {
        const { name, value } = e.target;
        SetPasswordState({ ...PasswordState, [name]: value })
    }
    const Submit = () => {

    }
    return (
        <>
            <div className="container signup_margins_top signup_margins_bottom">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom login_signup_reset_container create_container_height">
                        <form onSubmit={method.handleSubmit(Submit)}>
                            <div className='row'>
                                <div className='col-12 fontStyle signup_head'>
                                    <p>Create Password</p>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 fontStyle resetPassword_paragraph'>
                                    <p>Enter your email address and we’ll send you instructions to reset your password.</p>

                                </div>
                            </div>
                            <div className='row'>
                                <label htmlFor='NewPassword'>New Password</label>

                                <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                    <TextField
                                        className={`${classes.textFieldFocusBorderColor}`}
                                        type={showPassword ? 'text' : 'password'}
                                        id="NewPassword"
                                        name='NewPassword'
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
                                        value={PasswordState.NewPassword}
                                        onChange={HandlePassword}
                                        inputRef={method.register({
                                            required: "password  is required*.",
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be more than 8 characters'
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "At least one uppercase,lowercase,number,one special character"
                                            }
                                        },
                                        )}
                                        helperText={method.errors?.NewPassword?.message}
                                        error={Boolean(method.errors?.NewPassword)}
                                        placeholder="Enter Your New Password"
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                    />

                                </div>
                            </div>
                            <div className='row mt-4'>
                                <label htmlFor='ConfirmPassword'>Confirm Password</label>

                                <div className='col-lg-12 signup_margins_top_textfield signup_btn_height'>
                                    <TextField
                                        className={`${classes.textFieldFocusBorderColor}`}
                                        type={showConfirmPassword ? "text" : "password"}
                                        id="ConfirmPassword"
                                        name='ConfirmPassword'
                                        value={PasswordState.ConfirmPassword}
                                        onChange={HandlePassword}


                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <CiLock />
                                                </InputAdornment>
                                            ),
                                            endAdornment: <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickConfirmShowPassword}
                                                >
                                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }}
                                        inputRef={method.register({
                                            required: "confirm password  is required*.",
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be more than 8 characters'
                                            },
                                            pattern: {
                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                message: "At least one uppercase,lowercase,number,one special character"
                                            }
                                        },

                                        )}

                                        helperText={method.errors?.ConfirmPassword?.message}
                                        error={Boolean(method.errors?.ConfirmPassword)}
                                        placeholder="Enter Confirm Password"
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                    />

                                </div>
                                {method.watch("NewPassword") !== method.watch("ConfirmPassword") &&
                                        method.getValues("password_repeat") ? (
                                        <p>password not match</p>
                                    ) : null}
                            </div>



                            <div className='row  signup_margins_top'>
                                <div className=' col-lg-12 signup_btn_height'>
                                    <Box
                                        className={` ${classes.loadingBtnTextAndBack}`}
                                    >
                                        <LoadingButton variant="outlined" type={"submit"}>Save</LoadingButton>
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
export default CreatePassword