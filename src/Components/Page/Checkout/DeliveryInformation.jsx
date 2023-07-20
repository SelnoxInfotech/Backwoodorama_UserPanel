import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Createcontext from "../../../Hooks/Context";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker, } from "@material-ui/pickers";
import dayjs from 'dayjs';
const DeliveryInformation = ({ SetShowDeliveryInformation, image, setImage, setDataImage, Details, SetDetails }) => {
    const { dispatch } = React.useContext(Createcontext)
    const method = useForm()
    const [ShowRestDeliveryInformation, SetShowRestDeliveryInformation] = React.useState(true)
    const classes = useStyles()
    const HandleDeliveryInformation = (data) => {
        SetShowDeliveryInformation(true)
        SetShowRestDeliveryInformation(false)
        dispatch({ type: 'DeliveryInformation', DeliveryInformation: true })
        SetDetails({
            ...Details, ["DateOfBirth"]: data.DateOfBirth
        });

    }
    const ShowAgainDeliverInformation = () => {
        SetShowRestDeliveryInformation(true)
    }
    const handleDateChange = (event) => {
        // setSelectedDate(date);
        console.log(event.target.value)
        // SetDetails({
        //     ...Details, [event.target.name]: event.target.value
        // });
    };
    function SelectImage(event) {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setDataImage(event.target.files[0])
        }
    }


    function handleChange(event) {

        SetDetails({
            ...Details, [event.target.name]: event.target.value
        });
    }
console.log(Details)

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
                                    <input  accept="image/*" type='file' onChange={SelectImage} />
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
                                            className={classes.deliveryInformationTextFildColor}
                                            value={Details.FirstName||''}
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
                                          className={classes.deliveryInformationTextFildColor}
                                            label="Last name on photo id"
                                            variant="standard"
                                            value={Details.LastName||''}
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
                                <div className='row my-4'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                        {/* <Box
                                            sx={{
                                                ".MuiFormControl-marginNormal": {
                                                    marginTop: "0px"
                                                }

                                            }}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                                <Controller
                                                    render={(props) => (
                                                        <DatePicker
                                                            defaultValue={dayjs(new Date())}
                                                            // maxDate={new Date()}
                                                            inputVariant="outlined"
                                                            variant="standard"
                                                            format="MM/dd/yyyy"
                                                            margin="normal"
                                                            fullWidth
                                                            value={props.value}
                                                            onChange={props.onChange}
                                                            name='Birthdate'
                                                            // InputProps={{
                                                            //     startAdornment: (
                                                            //         <InputAdornment position="start">
                                                            //             <FaBirthdayCake className='newSignup_icon' />
                                                            //         </InputAdornment>
                                                            //     ),
                                                            // }}
                                                            error={Boolean(method.errors.Birthdate)}
                                                            helperText={method.errors.Birthdate?.message}
                                                        />
                                                    )}
                                        

                                                    control={method.control}
                                                    rules={{
                                                        required: "Date of birth required.",
                                                    }}

                                                />
                                            </MuiPickersUtilsProvider>
                                        </Box> */}
                                        <Box
                                            sx={{
                                                ".MuiFormControl-marginNormal": {
                                                    marginTop: "8px",
                                                },
                                                ".MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline ":{
                                                      
                                                },
                                                "& .MuiOutlinedInput-notchedOutline.Mui-focused .MuiOutlinedInput-notchedOutline":{
                                                  borderColor:"#31B665"
                                                }

                                            }}>
                                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                            <Controller
                                            
                                            defaultValue={dayjs(new Date())}  
                                          
                                            render={(props) => (
                                                    <DatePicker  
                                                     className={classes.muiDatePicker}
                                                    {...props}                                              
                                                        maxDate={new Date()}
                                                        inputVariant="outlined"
                                                        name={props.name}
                                                        format="MM/dd/yyyy"
                                                        margin="normal"
                                                        size="small"
                                                        value={props.value}
                                                      
                                                        onChange={props.onChange}
                                                        onBlur={props.onBlur}
                                                        InputProps={{
                                                            // startAdornment: (
                                                            //     // <InputAdornment position="start">
                                                            //     //     <FaBirthdayCake className='newSignup_icon' />
                                                            //     // </InputAdornment>
                                                            // ),
                                                        }}
                                                        error={Boolean(method.errors?.DateOfBirth)}
                                                        helperText={method.errors.DateOfBirth?.message}
                                                     
                                                    />
                                                )}
                                                name="DateOfBirth"
                                                onClick={handleChange}
                                                control={method.control}
                                                    rules={{
                                                        required: "Date of birth required.",
                                                    }}

                                            />
                                        </MuiPickersUtilsProvider>
                                            {/* <input type="date" id="start" name="trip-start"
                                    
                                                value={selectedDate}
                                                onChange={handleDateChange} /> */}
                                        </Box>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                        <TextField
                                          className={classes.deliveryInformationTextFildColor}
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
                                <div className='row my-4'>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                        <TextField
                                          className={classes.deliveryInformationTextFildColor}
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
                                <div className='row my-4'>
                                    <div className="col-12 height_del_information_inner_div font_size_paragraph_del">
                                        <p>Medical Marijuana</p>


                                    </div>

                                </div>
                                <div className='row my-4'>
                                    <div className="col-12 height_del_information_inner_div font_size_paragraph_del font_color delivery_information_font_family">
                                        <p>Please enter the ID number from your valid Medical Marijuana ID. Include all dashes and special characters.</p>


                                    </div>

                                </div>
                                <div className='row my-4'>
                                    <div className="col-12 height_del_information_inner_div font_size_paragraph_del font_color delivery_information_font_family">
                                        <TextField
                                          className={classes.deliveryInformationTextFildColor}
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
                                <div className='row my-4'>
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