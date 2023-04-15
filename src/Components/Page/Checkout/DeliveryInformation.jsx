import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import React from 'react';
import { Link } from 'react-router-dom';

const DeliveryInformation = ({ SetShowDeliveryInformation }) => {
    const [Image, SetImage] = React.useState(true)
    const [ShowRestDeliveryInformation, SetShowRestDeliveryInformation] = React.useState(true)
    const classes = useStyles()
    const HandleDeliveryInformation = () => {
        SetShowDeliveryInformation(true)
        SetShowRestDeliveryInformation(false)
    }
    const ShowAgainDeliverInformation = () => {
        SetShowRestDeliveryInformation(true)
    }

    return (
        <div className="container-fluid">


            <div className='row center deliver_row_margin'>

                <div className='col-lg-12 col-md-12 col-sm-12 col-12 delivery_information_container'>
                    <div className='row'>
                        <div className="col-12 height_del_information_inner_div font_size_paragraph">
                            <p  onClick={ShowAgainDeliverInformation} >Your Information</p>
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
                                    <input type='file' />
                                </div>

                            </div>
                            <div className='row'>
                                {Image && <div className='col-8 delivery_option_img_div_height'>
                                    <img className='delivery_option_image' src='./image/user.webp' />
                                </div>}


                            </div>

                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                    <TextField label="First name on photo id" variant="standard" fullWidth />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                    <TextField label="Last name on photo id" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                    <TextField label="Birth date" variant="standard" fullWidth />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                    <TextField label="Email" variant="standard" fullWidth />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12 height_text_field">
                                    <TextField type='number' label="Mobile phone" variant="standard" fullWidth />


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
                                    <TextField label="Medical Marijuana Number" variant="standard" fullWidth />


                                </div>

                            </div>
                            <div className='row mt-4'>
                                <div className='col-12 col-lg-4 height_delivery_information_btn'>
                                    <Box
                                        className={`  ${classes.loadingBtnTextAndBack}`}
                                    >
                                        <LoadingButton onClick={HandleDeliveryInformation} variant="outlined">continue</LoadingButton>
                                    </Box>
                                </div>

                            </div>
                        </div>}

                </div>

            </div>


        </div>
    )
}
export default DeliveryInformation