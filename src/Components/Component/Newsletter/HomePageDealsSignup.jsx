import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from '../../../Style';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import Axios from 'axios';
import { FormHelperText } from '@mui/material';
import './newsletter.css'
import React from 'react';
const HomePageDealsSignup = () => {
    const classes = useStyles()
    const [submited,setsubmited]= React.useState(true)
    const { register, handleSubmit, errors, reset, setError } = useForm();
    const [email, setEmail] = React.useState('');
    const onSubmit = (data) => {


        Axios.post(`https://api.cannabaze.com/UserPanel/Add-Subscribe/`,
            {
                email: email
            },

        ).then((res) => {
                if (res.data.status === "success") {
                    alert("Thank You For Subscribe")
                }
                setsubmited(true)
            })
            .catch((error) => {
                setError("email", {
                    type: 'custom',
                    message: 'subscribe with this email already exists.',
                }
                )
            })
    }
    const handleChange = event => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    return (
        <div className=" mt-4">
                <div className="col-12 HomePageDealsSignupContainer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">

                            <div className="envelop_icon text-center">
                                <span className=''><HiOutlineEnvelope color='#fff' fontSize={70} /></span>
                            </div>
                            <div className=" homePageSignup_paragraph   ">
                                <p>Subscribe To Our Newsletters</p>
                            </div>
                          
                          {
                            submited ? <h2 className='thankforsubscribe'>Thanks For Subscribe</h2>:
                            <div className='newsletterFormFeild'>
                                <TextField
                                    className={classes.homePageDealSignup_TextFields}
                                    InputProps={{
                                        style: {
                                            borderRadius: "20px",
                                            backgroundColor: "#FFFFFF"
                                        }
                                    }}
                                    type='email'
                                    placeholder="Enter Your Email"
                                    variant="outlined"
                                    fullWidth
                                    size='small'
                                    value={email}
                                    name="email"
                                    onChange={handleChange}
                                    helperText={errors.email?.message}
                                    error={Boolean(errors?.email)}
                                    inputRef={register({
                                        required: " Email not Valid",
                                        pattern: {
                                            value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                            message: "Email not Valid"
                                        }
                                    })}

                                />
                                <span className='newsletter_btn'>
                                    <Button className={` ${classes.homePageButton}`} type='submit' >Subscribe</Button>
                                </span>
                            </div>
                             }




                        </div>
                    </form>
                </div>
        </div >

    )
}
export default HomePageDealsSignup