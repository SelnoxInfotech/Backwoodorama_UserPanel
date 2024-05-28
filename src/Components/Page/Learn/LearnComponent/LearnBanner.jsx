import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const LearnBanner = () => {
    const LearnSlider = styled(Slider)`

    .slick-arrow{
        display: none;
        visibility:hidden;
    }
    .slick-next {
        position: relative;
        right: 0px;
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
            bottom: -20px
      }
      `;
    const settings = {
        dots: true,
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    // initialSlide: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {

                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,

                }
            }
        ]
    };
    const LearnBannerArray = [{ imgUrl:" /image/learnBanner.webp" }]

    return (
        <div className='col-12 '>
            <LearnSlider {...settings}>
                {LearnBannerArray?.map((items, index) => {
                    return (
                        <div className='learn_banner_header' key={index}>
                           
                            <div className='text_on_Learn_banner'>
                                <h2 className='learn_banner_text'>Learn</h2>
                            </div>
                        </div>
                    )
                })}

            </LearnSlider>
        </div>
    )
}
export default LearnBanner;