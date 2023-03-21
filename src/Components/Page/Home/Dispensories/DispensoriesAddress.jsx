import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiMap } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
const DispensoriesAddress = () => {
    const [value,setValue]=useState([])
    useEffect(()=>{
   const fetchApiFun=async ()=>{
    const fetchApi=await fetch("http://52.3.255.128:8000/UserPanel/Get-Stores/");
    const data=await fetchApi.json();
    setValue(data)

   }
   fetchApiFun()
    },[])
    const classes = useStyles()

    const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,

                }
            }
        ]
    }
   

    return (
        <>
            <div className="container-fluid">
                <div className="disp_head">
                    <p>Shop Dispensories near you</p>

                </div>
                <div className='disp_wraper mt-4 '>

                    <Slider {...settings}>

                        {value.map((ele, index) => {
                            return (
                                <div className='disp_card_con' key={index}>
                                    <div className='dispen_card' >
                                        <div className='dis_center'>
                                            <div className='left_img_div'>
                                                <img src={`http://52.3.255.128:8000/${ele?.Store_Image}`} alt='img_not_found' />


                                            </div>
                                        </div>
                                        <div className='dis_right_div'>
                                            <p>{ele.Store_Name}</p>
                                            <div className=' dis_navigation'>
                                                <span className='span_nav'><BiMap className={classes.disPen_Icons} /></span> <h5 className='fontStyle common_sub_head'>{ele.Store_Address}</h5>
                                            </div>
                                            <h5 className='fontStyle common_sub_head'>{ele.Store_Type}</h5>
                                            <h5 className='fontStyle common_sub_head'>{ele.city_name}</h5>
                                            <div className='dis_rating'>
                                                <h5 className='fontStyle common_sub_head'>{ele.Store_Address.slice(0, 100)}</h5><span className='span_nav_star'><AiFillStar className={classes.disPen_Icons}/></span>
                                            </div>
                                          

                                            <div className='dis_btn_div'>
                                                <Box
                                                    className={`${classes.loadingBtnTextAndBack}`}
                                                >
                                                    <LoadingButton>Order Pickup</LoadingButton>
                                                </Box>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}

                    </Slider>
                </div>


            </div>
        </>
    )
}
export default DispensoriesAddress