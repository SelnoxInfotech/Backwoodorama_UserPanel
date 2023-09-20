import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CategorySkeleton from "../../../../Component/Skeleton/CategorySkeleton"
const CategoryProduct = ({ ShowCategoryProduct, Category,Skeleton }) => {
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
        margin-top:83px;
        gap:20px;

      }
      .slick-track{
        margin-left: inherit;
      }
      
      `;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1333,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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
        <React.Fragment>
            <div className='container-fluid mt-4 CategoryBordrr'>
                <div className='row'>


                       {
                             !Skeleton?
                           
                                <div className="catagoryTabs_section">
                                    <div className='col-12 disp_head '>
                                        <h1 className='mt-9 shopByCategoryHeading'>Shop by Category</h1>
                                    </div>
                                    <SliderCategory {...settings} >
                                        {Category?.map((ele, index) => {
                                            return (
                                            <div >
                                                    <div className='CategorySliderImageBlock' key={index}>
                                                        <div className='slider1'>
                                                    
                                                            <LazyLoadImage onClick={() => { ShowCategoryProduct(ele.id, ele.name) }} src={`https://sweede.app/` + ele.categoryImages} alt="glass_img" className='rounded-circle catagoriesTabImg' />
                                                        
                                                        </div>
                                                        <div className='col center Category_title' >
                                                                <p>{ele.name.substr(0, 100)}</p>
                                                        </div>
                                                        
                                                    </div>
                                                    </div>
                                            )
                                        })}
                                        
                                    </SliderCategory> 
                             </div>
                            
                             :
                             <CategorySkeleton></CategorySkeleton>
                    }
                           </div>
            </div>

        </React.Fragment>
    )
}
export default CategoryProduct





// category_container,catgory_wraper ,cat_main_div