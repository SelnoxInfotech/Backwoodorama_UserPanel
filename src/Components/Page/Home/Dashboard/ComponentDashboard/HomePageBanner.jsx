import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const HomePageBanner = () => {
    var items = [
        {
            name: "Random Name #1",
            description: "/image/banner1.jpg"
        },
        {
            name: "Random Name #2",
            description: "/image/banner2.jpg"
        },
        {
            name: "Random Name #3",
            description: "/image/b3.jpg"
        }
    ];
    const SliderCategory = styled(Slider)`

    .slick-arrow{
        display: none;
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
            bottom: -12px
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
    return (

        <SliderCategory {...settings}>
            {items.map((ele, index) => {
                return (
                    <div className='col-12 '>
                        <LazyLoadImage src={ele.description} alt="glass_img" className='HomePageBanner_image' />
                    </div>

                )
            })}
        </SliderCategory>



    )

}
export default HomePageBanner