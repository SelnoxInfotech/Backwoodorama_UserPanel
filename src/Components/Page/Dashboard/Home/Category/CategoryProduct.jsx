import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import styled from "styled-components";
const CategoryProduct = () => {
    const [value, setValue] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const apidata = await fetch("http://52.3.255.128:8000/UserPanel/Get-Categories/");
            const data = await apidata.json()
            setValue(data)

        }
        fetchData()

    }, [])
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
      .Driscription_{

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
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    // initialSlide: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

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
                    {value.map((ele, index) => {
                        return (

                            <div>
                             <div className='col-10'>
                             <div className='slider1'>
                                    <img src={`http://52.3.255.128:8000/`+ ele.categoryImages} alt="glass_img" className='rounded-circle  Image_Width' />
                                </div>
                                <div className='col-12 center '>
                                    <div className='col center Category_title' >
                                        <p>{ele.name.substr(0, 100)}</p>
                                    </div>
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


            </div>
        </>
    )
}
export default CategoryProduct





// category_container,catgory_wraper ,cat_main_div