import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiMap } from "react-icons/bi"
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style"
import Box from '@mui/material/Box';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import Createcontext from '../../../../Hooks/Context';

const DispensoriesAddress = () => {
    const {dispatch} = React.useContext(Createcontext)
    const [Store, SetStore] = useState([])
    useEffect(() => {
        const fetchApiFun = async () => {
            const fetchApi = await fetch("http://52.3.255.128:8000/UserPanel/Get-Stores/");
            const data = await fetchApi.json();
            SetStore(data)
            dispatch({ type: 'Dispensories' , Dispensories :data })

        }
        fetchApiFun()
    }, [])
    const classes = useStyles()
    const Sliderv = styled(Slider)`
    .slick-next {
        right: 0px;
      } 
      .slick-prev {
        left: 0px;
      }
     
      .slider1 {
        display: flex;
        justify-content: center;
      }
      .Driscription_{

      }x`;

    const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        lazyLoad: true,

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
                <div className='row'>
                    <div className='col-12 ' >
                        <div className="disp_head  ">
                            <p>Shop Dispensories near you</p>
                        </div>
                    </div >
                </div >

            </div>

            <Sliderv  {...settings}>
                {Store.map((ele, index) => {
                    return (
                       
                        <div className='col-12 slider1' key={index} >
                            <div className='slider1'>
                            <Link to={`/DispensoriesProduct/${ele.id}`}>
                                <img src={`http://52.3.255.128:8000/${ele?.Store_Image}`} alt='img_not_found' className='img-responsive rounded center-block' width={"83%"} height={"170px"}  />
                                </Link>
                            </div>
                            <div>
                                <div className='col-12  slider1'>

                                    <div className=' col-10  dis_right_div'>
                                        <p>{ ele.Store_Name.charAt(0).toUpperCase() + ele.Store_Name.slice(1)}</p>
                                    </div>
                                </div>
                                <div className='col-12  slider1'>

                                    <div className=' col-10 Dispensaries_card_discription'>
                                        <div className='col-2'>
                                            <span className='span_nav'><BiMap className={classes.disPen_Icons} /></span>
                                        </div>

                                        <div className='col-10'>
                                            <span>{ele.city_name}/110 mi</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='col-12  slider1'>
                                    <div className=' col-10 Dispensaries_card_discription'>
                                        <span>Tyonek Alaska  | 110 mi</span>
                                    </div>
                                </div> */}

                                <div className='col-12  slider1'>
                                    <div className=' col-10 Dispensaries_card_discription'>
                                        <span>{ele.Store_Type}</span>
                                    </div>
                                </div>
                                <div className='col-12  slider1'>

                                    <div className=' col-10 Rating'>
                                        <div className='col-2 color'>
                                            <span>Rating</span>
                                        </div>

                                        <div className='col-10'>
                                            <span> <Rating name="read-only" value={4} readOnly /></span>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-12  slider1 mt-4'>
 
                                    <div className=' col-10  mb-2'>
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
            </Sliderv>
        
        </>
    )
}
export default DispensoriesAddress