import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import React from 'react';
import { useForm } from "react-hook-form";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Createcontext from "../../../Hooks/Context" ;
const DeliveryInformation = ({ SetShowDeliveryInformation ,image ,setImage,setDataImage,Details,SetDetails    }) => {
    const { dispatch } = React.useContext(Createcontext)
    const method = useForm()
    const [ShowRestDeliveryInformation, SetShowRestDeliveryInformation] = React.useState(true)
    const classes = useStyles()
    const HandleDeliveryInformation = () => {
        SetShowDeliveryInformation(true)
        SetShowRestDeliveryInformation(false)
        dispatch({ type: 'DeliveryInformation', DeliveryInformation: true })
    }
    const ShowAgainDeliverInformation = () => {
        SetShowRestDeliveryInformation(true)
    }

    const [focus, setFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);
    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    function SelectImage(event) {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setDataImage(event.target.files[0])
        }
    }
    

    function handleChange (event){

        SetDetails({
        ...Details, [event.target.name]: event.target.value
    }); 
    }
    return (
        <div className="container-fluid">

            <div className='row center deliver_row_margin'>

                <div className='col-lg-12 col-md-12 col-sm-12 col-12 delivery_information_container'>
                    <div className='row'>
                        <div className="col-12 height_del_information_inner_div font_size_paragraph">
                            <p onClick={ShowAgainDeliverInformation} >Your Information</p>
                        </div>
                    </div>
                    {ShowRestDeliveryInformation &&
                        <div className='showRestDeliveryInformation'>
                            <div className='row'>
                                <div className="col-12 height_del_information_inner_div font_size_paragraph_del">
                                    <p>Enter Your Information</p>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-2 col-md-2 col-sm-2 col-2'>
                                    <p>Photo Id</p>
                                </div>
                                <div className='col-lg-10 col-md-10 col-sm-10 col-10'>
                                    <input capture="camera" accept="image/*" type='file' onChange={SelectImage} />
                                </div>

                            </div>
                            <div className='row'>
                                <div className='col-8 delivery_option_img_div_height'>
                                    <LazyLoadImage className='delivery_option_image' src={image} />
                                </div>


                            </div>

                            <form onSubmit={method.handleSubmit(HandleDeliveryInformation)} >
                                <div className='row'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                        <TextField
                                        value={Details.FirstName}
                                            label="First name on photo id"
                                            variant="standard"
                                            fullWidth
                                            onChange={handleChange}
                                            name='FirstName'
                                            inputRef={method.register({
                                                required: "FirstName is required*.",
                                            }
                                            )}
                                            helperText={method.errors?.FirstName?.message}
                                            error={Boolean(method.errors?.FirstName)}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                        <TextField
                                            label="Last name on photo id"
                                            variant="standard"
                                            value={Details.LastName}
                                            onChange={handleChange}
                                            fullWidth
                                            name='LastName'
                                            inputRef={method.register({
                                                required: "LastName is required*.",
                                            }
                                            )}
                                            helperText={method.errors?.LastName?.message}
                                            error={Boolean(method.errors?.LastName)}
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                        <TextField
                                            id="outlined-number"
                                            onFocus={onFocus}
                                            value={Details.Birthdate}
                                            onBlur={onBlur}
                                            onChange={(e) => {
                                                if (e.target.value) setHasValue(true);
                                                else setHasValue(false);
                                                SetDetails({
                                                    ...Details, [e.target.name]: e.target.value
                                                }); 
                                            }}
                                            type={hasValue || focus ? "date" : "text"}
                                            label="Birth date" variant="standard" fullWidth
                                            name='Birthdate'
                                            inputRef={method.register({
                                                required: "Birth date is required*.",
                                            }
                                            )}
                                            helperText={method.errors?.Birthdate?.message}
                                            error={Boolean(method.errors?.Birthdate)}
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                        <TextField
                                            label="Email"
                                            value={Details.Email}
                                            onChange={handleChange}
                                            variant="standard"
                                            fullWidth
                                            name='Email'
                                            inputRef={method.register({
                                                required: "Email is required*.",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                }
                                            }
                                            )}
                                            helperText={method.errors?.Email?.message}
                                            error={Boolean(method.errors?.Email)}
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                        <TextField
                                            type='mobile'
                                            onChange={handleChange}
                                            value={Details.Mobile}
                                            label="Mobile phone"
                                            variant="standard"
                                            fullWidth
                                            name='Mobile'
                                            inputRef={method.register({
                                                required: "Email is required*.",
                                                minLength: {
                                                    value: 10,
                                                    message: "enter valid number"
                                                },
                                                maxLength: {
                                                    value: 15,
                                                    message: "enter valid number"
                                                }
                                            }
                                            )}
                                            helperText={method.errors?.Mobile?.message}
                                            error={Boolean(method.errors?.Mobile)}
                                        />


                                    </div>

                                </div>
                                <div className='row mt-2'>
                                    <div className="col-12 height_del_information_inner_div font_size_paragraph_del">
                                        <p>Medical Marijuana</p>


                                    </div>

                                </div>
                                <div className='row mt-2'>
                                    <div className="col-12 height_del_information_inner_div font_size_paragraph_del font_color delivery_information_font_family">
                                        <p>Please enter the ID number from your valid Medical Marijuana ID. Include all dashes and special characters.</p>


                                    </div>

                                </div>
                                <div className='row mt-2'>
                                    <div className="col-12 height_del_information_inner_div font_size_paragraph_del font_color delivery_information_font_family">
                                        <TextField
                                        onChange={handleChange}
                                        value={Details.Id_Number}
                                            label="Medical Marijuana Number"
                                            variant="standard"
                                            fullWidth
                                            name="Id_Number"
                                            inputRef={method.register({
                                                required: "Enter valid Id Number is required*.",
                                            }
                                            )}
                                            helperText={method.errors?.Id_Number?.message}
                                            error={Boolean(method.errors?.Id_Number)}
                                        />


                                    </div>

                                </div>
                                <div className='row mt-4'>
                                    <div className='col-12 col-lg-4 height_delivery_information_btn'>
                                        <Box
                                            className={`  ${classes.loadingBtnTextAndBack}`}
                                        >
                                            <LoadingButton type='submit' variant="outlined">continue</LoadingButton>
                                        </Box>
                                    </div>

                                </div>

                            </form>
                        </div>
                        }

                </div>

            </div>


        </div>
    )
}
export default DeliveryInformation