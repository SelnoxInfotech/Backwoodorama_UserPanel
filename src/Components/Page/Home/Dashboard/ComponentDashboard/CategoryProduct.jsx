import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const CategoryProduct = ({ ShowCategoryProduct, Category }) => {
    const SliderCategory = styled(Slider)`
    .slick-next {
        position: relative;
        right: 0px;
        display: none;
        background-color:white;
        height:0px;
      }
      .slick-prev {
        left: 0px;
      }
     
      .slider1 {
        display: flex;
        justify-content: center;
        margin-inline: 10px;

      }
      .slick-track{
        margin-left: inherit;
      }
      
      `;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,

                }
            }
        ]
    };


    return (
        <>
            <div className='container-fluid mt-4'>
                <div className='row'>
                    <div className='col-12 disp_head'>
                        <h1>Shop by  category</h1>
                    </div>
                </div>
                <SliderCategory {...settings}>
                    {Category.map((ele, index) => {
                        return (
                         
                                <div className='col-10 ' key={index}>
                                    <div className='slider1'>
                                 
                                        <LazyLoadImage onClick={() => { ShowCategoryProduct(ele.id, ele.name) }} src={`https://sweede.app/` + ele.categoryImages} alt="glass_img" className='rounded-circle  Image_Width' />
                                    
                                    </div>
                                    <div className='col-12 center '>
                                        <div className='col center Category_title' >
                                            <p>{ele.name.substr(0, 100)}</p>
                                        </div>
                                    </div>
                                </div>
                         
                        )
                    })}
                </SliderCategory>


            </div>
        </>
    )
}
export default CategoryProduct





// category_container,catgory_wraper ,cat_main_div