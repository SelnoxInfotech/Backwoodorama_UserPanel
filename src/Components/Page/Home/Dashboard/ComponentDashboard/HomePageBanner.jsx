import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from '../../../../../Style';
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const HomePageBanner = () => {
    const classes = useStyles()
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
    .slick-next {
        right: 0px;
        display: block;
      } 
      .slick-prev {
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

                    <div>
                        <div className='col-12'>
                            <div className=''>
                                <LazyLoadImage src={ele.description} alt="glass_img" className='HomePageBanner_image' />
                            </div>
                        </div>

                    </div>

                    // <div className='cat_main_div' key={index} >
                    //     <div className='image_Div'>

                    //         
                    //     </div>
                    //     <h6>{ele.name.substr(0, 100)}</h6>
                    // </div>
                )
            })}
        </SliderCategory>



    )

}
export default HomePageBanner