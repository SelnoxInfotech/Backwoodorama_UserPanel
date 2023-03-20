import * as React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect,useState } from 'react';
const CategoryProduct = () => {
    const [value,setValue]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const apidata=await fetch("http://52.3.255.128:8000/UserPanel/Get-Categories/");
            const data=await apidata.json()
            setValue(data)

        }
        fetchData()

    },[])

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:8,
        slidesToScroll: 2,
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
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    // initialSlide: 2,
                    infinite: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            }
        ]
    };
    const arr = [{ img_url: "./image/flower.png", type: "flower" },
     { img_url: "./image/G03.png", type: "Edible" },
      { img_url: "./image/glass.png", type: "Edible" }, 
      { img_url: "./image/images2.png", type: "Wap Card" }
        , { img_url: "./image/glass.png", type: "Edible" }, 
        { img_url: "./image/flower.png", type: "Edible" }, 
        { img_url: "./image/flower.png", type: "Edible" },
        { img_url: "./image/glass.png", type: "Edible" }, 
        { img_url: "./image/google.png", type: "CBD" }, 
         { img_url: "./image/flower.png", type: "Edible" }, 
         { img_url: "./image/flower.png", type: "Edible" }, 
         { img_url: "./image/flower.png", type: "Edible" }
    ]
    return (
        <>

            <div className='container-fluid category_container'>
                <p>Shop by  category</p>
                <div className='catgory_wraper'>

                    <Slider {...settings}>
                        {value.map((ele, index) => {
                            return (
                                <div className='cat_main_div' key={index} >
                                    <div className='image_Div'>

                                        <img src="./image/glass.png" alt="flower_img" />
                                    </div>
                                    <h6>{ele.name.substr(0, 100)}</h6>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>
        </>
    )
}
export default CategoryProduct





