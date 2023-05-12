import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
const CategoryProduct = ({ShowCategoryProduct , Category }) => {
    // const [value, setValue] = useState(Category)
    const SliderCategory = styled(Slider)`
    .slick-next {
        right: 0px;
      } 
      .slick-prev {
        left: 0px;
      }
     
      .slider1 {
        display: flex;
        justify-content: center;
        margin-inline: 10px;

      }
      `;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        // autoplay: true,
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
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    // initialSlide: 2,
                    infinite: false,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,

                }
            }
        ]
    };

    return (
        <>
            <div className='container-fluid '>
                <div className='row'>
                    <div className='col-12 disp_head'>
                        <p>Shop by  category</p>
                    </div>
                </div>
                <SliderCategory {...settings}>
                    {Category.map((ele, index) => {
                        return (
                            <div>
                             <div className='col-10 ' key={index}>
                             <div className='slider1'>
                                 {/* <Link to={`/CategoryProduct/${ele.name}`} state={ ele.id }> */}
                                 <LazyLoadImage onClick={()=>{ShowCategoryProduct(ele.id , ele.name)}} src={`http://52.3.255.128:8000/`+ ele.categoryImages} alt="glass_img" className='rounded-circle  Image_Width' />
                                 {/* </Link> */}
                                </div>
                                <div className='col-12 center '>
                                    <div className='col center Category_title' >
                                        <p>{ele.name.substr(0, 100)}</p>
                                    </div>
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