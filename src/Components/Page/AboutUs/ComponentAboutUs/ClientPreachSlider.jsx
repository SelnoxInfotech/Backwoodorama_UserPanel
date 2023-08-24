import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
const ClientPreachSlider = () => {
    const ClientPreachSlider = styled(Slider)`

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
    const AboutUsBannerArray = [{ content: "“  WeedX has not only been a pleasure to work with, but has been very beneficial to our organization. Throughout the last year we have seen significant improvement in our organic rankings. With MMX’s thorough reporting we are able to analyze all of our  marketing   platforms and their ROI to optimize our marketing budget. I would recommen them to anyone seeking exceptional marketing services.  “" },
    { content: "“  WeedX has not only been a pleasure to work with, but has been very beneficial to our organization. Throughout the last year we have seen significant improvement in our organic rankings. With MMX’s thorough reporting we are able to analyze all of our  marketing   platforms and their ROI to optimize our marketing budget. I would recommen them to anyone seeking exceptional marketing services.  “" }
            
]

    return (
        <div className='row'>
            <div className='w-100 mt-2 center'>
                <h1 className='clientPreach_heading'>Clients preach the WeedX</h1>
            </div>
            <ClientPreachSlider {...settings}>
                {AboutUsBannerArray.map((items, index) => {
                    return (
                        <div className='col-8 client_preach_container mb-4' key={index}>
                            <div className='client_preach_content_center mt-4'>
                                <section className='clientPreach_content_section'>
                                    <p className='clientPreach_paragraph'>{items.content}</p>
                                </section>
                            </div>
                        </div>
                    )
                })}
            </ClientPreachSlider>
        </div>
    )
}
export default ClientPreachSlider