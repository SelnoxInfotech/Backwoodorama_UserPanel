import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Createcontext from "../../../Hooks/Context"
import { IoLogoFacebook } from 'react-icons/io';
import { FcGoogle } from "react-icons/fc"
import LoginWithGoogle from '../Login/LoginWithGoogle'
import React,{useState} from 'react';
import Axios from 'axios'
import { SignupSeo } from '../../Component/ScoPage/CommenpageSeo';
const Signup = () => {
    const { state } = React.useContext(Createcontext)
 const [emailvalid,setemailvalid]=useState(false)
    const navigate = useNavigate()
    const method = useForm()
    const classes = useStyles()
    function Submit(State) {
      
      Axios.post('https://api.cannabaze.com/UserPanel/UserAlreadyExist/',{
        email:State.email
      }).then((res)=>{
        if(res.data.email !== "Email is already Registered"){
            navigate("/signupwithemail", { state: { State } })
       
        }else{
            setemailvalid(true)
        }
      }).catch((error)=>{

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
            <SignupSeo></SignupSeo>
            <div className="container signup_margins_top ">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-8 col-10 signup_padding_bottom login_signup_reset_container signup_container_height">
                        <div className='row'>
                            <div className='col-12 signup_head'>
                                <p>Sign Up</p>

                            </div>
                        </div>
                        <form onSubmit={method.handleSubmit(Submit)}>
                            <div className='row'>
                                <label htmlFor='Email'>Email</label>

                                <div className='col-lg-12 signup_btn_height mt-2'>
                                    <TextField
                                        id="Email"
                                        className={`${classes.textFieldFocusBorderColor}`}
                                        placeholder="Enter Your Email"
                                        name='email'
                                        variant="outlined"
                                        onChange={()=>{setemailvalid(false)}}
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
                                        helperText={method.errors?.email?.message}
                                        error={Boolean(method.errors?.email)}

                                    />
                                    {emailvalid && <p className='errorPara'>Email is already Registered</p>}
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
                        <div className='row'>
                            <div className='col-12 signup_Col'>
                                <span className='Signup_spanss'>Already a member?</span>
                                <span>
                                    <Link to="/login" className='signupLinkColor'><span >Signin</span></Link>
                                </span>
                            </div>

                        </div>
                        <div className='w-100 d-flex mt-4 center'>
                            <div className='signupHorizontalLine'></div> <span className='px-2 login_OR'>OR</span> <div className='signupHorizontalLine'></div>
                        </div>
                        {/* <div className='row  signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
                                <Box
                                    className={`  ${classes.Signup_loading_btn_facebook}`}
                                >
                                    <LoadingButton variant="outlined" startIcon={<IoLogoFacebook />}>Continue with Facebook</LoadingButton>
                                </Box>
                            </div>

                        </div> */}
                        <div className='signup_margins_top'>
                            <div className='col-lg-12 signup_btn_height'>
                               <LoginWithGoogle/>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default Signup