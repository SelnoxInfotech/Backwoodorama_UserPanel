import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BiMap} from "react-icons/bi"
import {AiOutlineStar} from "react-icons/ai"
const DispensoriesAddress = () => {
    const settings = {
   
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
               
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const arr = [{ img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106",rating:"Rating" },
     { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106" ,rating:"Rating" },
      { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106",rating:"Rating"  },
       { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106",rating:"Rating" },
       { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106",rating:"Rating" },
       { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106" ,rating:"Rating" },
       { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106",rating:"Rating"  },
        { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106",rating:"Rating" },
        { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106",rating:"Rating" },

]

    return (
        <>
            <div className="container-fluid">
                <div className="disp_head">
                    <p>Shop Dispensories near you</p>

                </div>
                <div className='disp_wraper mt-4 '>

                <Slider {...settings}>

                {arr.map((ele,index)=>{
                    return(
                        <div className='disp_card_con' key={index}>
                        <div className='dispen_card' >
                        <div className='dis_center'>
                        <div className='left_img_div'>
                            <img src={ele.img_url} alt='img_not_found'/>
                        </div>
                        </div>
                        <div className='dis_right_div'>
                          <p>{ele.address}</p>
                          <div className=' dis_navigation'>
                         <span className='span_nav'><BiMap/></span> <h5>{ele.sec_add}</h5>
                         </div>
                        
                             <div  className='dis_rating'>
                            <h5>{ele.rating}</h5><span className='span_nav_star'><AiOutlineStar/></span>
                            </div>
                        </div>

                    </div>
                    </div>
                    )
                })}
                   
                </Slider>
                </div>

            </div>
        </>
    )
}
export default DispensoriesAddress