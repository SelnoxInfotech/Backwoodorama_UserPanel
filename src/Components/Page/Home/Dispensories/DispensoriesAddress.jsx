import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DispensoriesAddress = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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
    const arr = [{ img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106" },
     { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106" },
      { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106" },
       { img_url: "./image/flower.png", address: "Canna Cabana",sec_add:"2917 Broadway astoria NY 11106" },
]

    return (
        <>
            <div className="container-fluid">
                <div className="disp_head">
                    <p>Shop Dispensories near you</p>

                </div>
                <div className='disp_wraper mt-4'>

                <Slider {...settings}>

                {arr.map((ele,index)=>{
                    return(
                        <div className='disp_card_con' key={ele}>
                        <div className='dispen_card' >
                        <div className='dis_center'>
                        <div className='left_img_div'>
                            <img src={ele.img_url} alt='img_not_found'/>
                        </div>
                        </div>
                        <div className='dis_right_div'>
                          <p>{ele.address}</p>
                          <h5>{ele.sec_add}</h5>

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