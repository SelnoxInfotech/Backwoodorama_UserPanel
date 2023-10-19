import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillStar } from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import { TbCircleFilled } from "react-icons/tb"
import useStyles from '../../../Style';
import Box from '@mui/material/Box';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
const NewFlavourBanner = ({ delBtn }) => {
    const classes = useStyles()
    return (
        <React.Fragment>
            {/* <div className='container-fluid'> */}
            <div className="row  newFlavour_row" >
                <div className="col-12 newFlavour_container">
                    {
                        delBtn?.map((data) => {
                            return (
                                <div className="row" key={data.id}>
                                    <div className="col-md-2 col-sm-4  col-4 newFlavour_image_container_height">
                                        <div className='newFlavourimage_div'>
                                            <LazyLoadImage 
                                            onError={event => {
                                                event.target.src = "/image/delivery.png"
                                                event.onerror = null
                                            }}
                                            className='newFlavour_image' src={`${data?.Store_Image}`} alt='not available' height={"100px"} />

                                        </div>

                                    </div>
                                    <div className="col-md-9 col-sm-8  col-8  newFlavourContent_height" style={{position:"0px"}}>
                                        <div className='row'>
                                            <div className='col-12 New_flavour_font_size_paragraph  fontStyle'>
                                                <h1 className='New_flavour_font_size_head'>{data.Store_Name}</h1>
                                            </div>
                                            <div className='col-12'>

                                                <div className='new_flavour_flex New_flavour_font_size_paragraph my-1'>
                                                    <IoLocationSharp /><h4 id='NewFlav_margins' className='newFlavourBannerSubHead'>{data.Store_Address}</h4>
                                                </div>


                                            </div>
                                            <div className='col-12 new_flavourList_container d-flex'>

                                                <div className='newFlav_inner_div new_flavour_flex New_flavour_font_size_paragraph'>
                                                    <p className='newFlavBanerRatingFontStyle'>4.5</p>
                                                    <p className=''><AiFillStar className={classes.disp_star_color} id='NewFlav_margins' /></p>
                                                </div>

                                                <div className='newFlav_inner_div new_flavour_flex New_flavour_font_size_paragraph newFlav_margin'>
                                                    <p><TbCircleFilled id="new_flavCircle" /></p>
                                                    <p className='marginLeftnewFlavStore '>Store details</p>
                                                </div>

                                                <div className='newFlav_inner_div new_flavour_flex New_flavour_font_size_paragraph newFlav_margin'>
                                                    <p><TbCircleFilled id="new_flavCircle" /></p>
                                                    <p id='NewFlav_margins' className='newFlav_closed'>closed</p>
                                                </div>


                                            </div>
                                            <div className='col-lg-12 col-md-8 col-sm-8 col-12 d-flex newFlav_btn_height'>
                                                <Box
                                                    className={`${classes.loadingBtnTextAndBack}`}
                                                >
                                                    <LoadingButton style={{ width: "60%", height: "30px" }} variant="outlined">Email</LoadingButton>

                                                </Box>
                                                <Box
                                                    className={`New_flav_btn ${classes.loadingBtnTextAndBack}`}
                                                >
                                                    <LoadingButton style={{ width: "60%", height: "30px" }} variant="outlined">Call</LoadingButton>
                                                </Box>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </div>
            {/* </div> */}
        </React.Fragment>
    )
}
export default NewFlavourBanner