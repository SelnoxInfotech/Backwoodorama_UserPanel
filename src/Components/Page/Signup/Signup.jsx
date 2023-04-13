import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link , useNavigate} from 'react-router-dom';
import { useForm} from "react-hook-form";
const Signup = () => {
    const navigate = useNavigate()
    const method = useForm()
    const classes = useStyles()
    function Submit ( State) {
        navigate("/SignupWithEmail", { state: { State } })
    }

    return (
        <>
            <div className="container signup_margins_top signup_margins_bottom">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom login_signup_reset_container signup_container_height">
                        <div className='row'>
                            <div className='col-12 fontStyle signup_head'>
                            <p>signup</p>

                            </div>
                            </div>
                       <form onSubmit={method.handleSubmit(Submit)}>
                       <div className='row'>
                            <label>Email</label>

                            <div className='col-lg-12 signup_btn_height'>
                                <TextField 
                                 id="outlined-basic" 
                                 placeholder="Enter Your Email" 
                                 name='email' 
                                 variant="outlined" 
                                 fullWidth 
                                size='small'
                                inputRef={method.register({
                                    required: "email is required*.",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                      }

                                }
                                )}
                                helperText={method.errors?.email?.message }
                                error={Boolean(method.errors?.email )  }
                                  />
                            </div>
                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
                                <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                     <LoadingButton variant="outlined" loading={false} type={'submit'}>Signup</LoadingButton>
                                </Box>
                            </div>

                        </div>
                       </form>
                        <div className='row justify-content-center align-items-center signup_margins_top'>
                                <div className='col-lg-4  col-md-6 col-sm-6 col-6 signup_btn text-end signup_btn_height'>
                                <p>Already a member?</p>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2 col-2 signup_btn_height'>
                             <Link to="/Login"><p>Signin</p></Link>
                                </div>


                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
                                <Box
                                    className={`  ${classes.Signup_loading_btn_facebook}`}
                                >
                                    <LoadingButton variant="outlined">Continue with Facebook</LoadingButton>
                                </Box>
                            </div>

                        </div>
                        <div className='signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
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