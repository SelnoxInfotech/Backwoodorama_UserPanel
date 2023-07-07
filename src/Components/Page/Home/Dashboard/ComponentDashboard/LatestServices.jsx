import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from 'html-react-parser';
import styled from "styled-components";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
const LatestServices = () => {
    const [News,SetNews]=useState([])
    useEffect(()=>{
        const getApi=async ()=>{
            const res=await fetch("https://sweede.app/UserPanel/Get-News/");
            const data=await res.json();
            SetNews(data)
            // console.log(data)

        }
        getApi()

    },[])
    const SliderLatestService = styled(Slider)`
    .slick-next {
        right: 0px;
      } 
      .slick-prev {
        left: 0px;
      }
      .slick-dots{
        width: 90%;
       
    }
    .slick-track {
        gap: 10px;
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        margin-left: auto;
        margin-right: auto;
    }
      `;
    const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow:2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,

                }
            }
        ]
    }
  
    return (
        <>
            <div className="container-fluid   mt-4">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="latest_services">
                            <h1 className="latest_services_headings mt-2">Welcome to Backwoodaroma</h1>
                            <h6 className="fontStyle common_sub_head ellipsis mt-2  mb-3">Check our latest article to see our inspiring content for shopping</h6>
                        </div>
                    </div>

              
                  <div className="w-100 px-0 latestServices_SliderCol">
                  <SliderLatestService {...settings}>
                        {News.map((ele, index) => {
                            return (
                              <div key={index}>
                                 <Link to="/Blogs">
                                <div className="col-12  latest_cont" >
                                    <div className="col img_cont center_latest ">
                                        <div className="col-12  centerImg ">
                                            <img src={`https://sweede.app/${ele.Image}`} alt="img_not_found" style={{pointerEvents: "none"}}/>

                                        </div>

                                    </div>
                                    <div className="col latest_content_div ">
                                        <div className="col-10 mt-2">
                                            <span className="fontStyle latest_font_size ">{ele.Title.slice(0,50)}</span>

                                        </div>
                                        <div className="col-10 ">
                                        <span className="fontStyle common_sub_head">{parse(ele.Description.slice(0, 100))}</span>

                                        </div>

                                    </div>




                               </div>
                                </Link>
                              </div>
                            )
                        })}
                      
                    </SliderLatestService>


                    </div>
                </div>


            </div>
        </>
    )
}
export default LatestServices