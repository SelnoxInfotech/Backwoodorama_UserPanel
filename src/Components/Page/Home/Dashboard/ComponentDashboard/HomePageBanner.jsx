import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Axios from "axios"

const HomePageBanner = () => {
    const [HomePageBannerImage,SetHomePageBannerImage]=React.useState([])
    
    React.useEffect(()=>{
        Axios(`https://sweede.app/UserPanel/Get-AllHomePageBanner/`,{

        }

        ).then((response)=>{
            SetHomePageBannerImage(response.data)
        }

        ).catch(()=>{

        })
    },[])
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
            {HomePageBannerImage.map((items, index) => {
                return (
                    <div className='col-12 homePageBanner_container' key={index}>
                        <LazyLoadImage  src={`https://sweede.app/${items.Banner}`}  alt="Image not available" className='HomePageBanner_image'/>
                    </div>

                )
            })}
        </SliderCategory>



    )

}
export default HomePageBanner