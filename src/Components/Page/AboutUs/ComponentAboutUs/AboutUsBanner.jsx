import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const AboutUsBanner=()=>{
    const AboutUsSlider = styled(Slider)`

    .slick-arrow{
        display: none;
    }
    .slick-next {
        // position: relative;
        // right: 0px;
        display: none;
        background-color:white;
        height:0px;
      } 
      .slick-prev {
        position: relative;
        left: 0px;
        display: none;
      }
     
      .slider1 {
        display: flex;
        justify-content: center;
        margin-inline: 10px;

      }
      .slick-dots{
            bottom: -12px
      }
      `;
      const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    // initialSlide: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {

                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,

                }
            }
        ]
    };
      const AboutUsBannerArray=[{imgUrl:"./image/about_us_banner.jpg"},{imgUrl:"./image/about_us_banner.jpg"}]
    return(
        <AboutUsSlider {...settings}>
            {AboutUsBannerArray.map((items,index)=>{
                return(
                    <div className='col-12 about_us_image_container border' key={index}>
                       <LazyLoadImage src={items.imgUrl} alt='imgs not available'  className='About_us_banner_image'/>
                    </div>
                )
            })}
        </AboutUsSlider>
    )
}
export default AboutUsBanner