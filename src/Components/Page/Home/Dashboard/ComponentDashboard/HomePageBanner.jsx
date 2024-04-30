import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Autoplay } from 'swiper/modules';
import {Homepagebanner} from '../../../../../Api/Api.jsx';
import "swiper/css";
import { Link } from "react-router-dom";

import HomePageBannerSkeleton from '../../../../Component/Skeleton/DashBoardSkeleton/HomePageBannerSkeleton';
const HomePageBanner = () => {
    const [HomePageBannerImage,SetHomePageBannerImage]=React.useState([])
    const [Skeleton , SetSkeleton] = React.useState(true)
    React.useEffect(()=>{
        Homepagebanner().then((res)=>{
          
            SetHomePageBannerImage(res.data)
            SetSkeleton(false)
        })
    },[])
    


    return (

        !Skeleton ?
            
            <div className="homeBannerContainer">
                <div className="destop_image">
                <Swiper loop={true} autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                       
                        }}  modules={[Autoplay]}>
                                        {HomePageBannerImage?.map((items, index) => {
                                        
                            return (
                                <SwiperSlide key={index}>
                                <div className='col-12 homePageBanner_container'>
                                    <a href={items?.Link !== null ? items?.Link : "#"} target="_blank">  
                                     <LazyLoadImage 
                                        onError={event => {
                                            event.target.src = "/image/1.jpg"
                                            event.onerror = null
                                        }}
                                        width="100" height="auto"
                                    src={`${items?.Banner}`}  alt="Weedx.io Promotion banner" className='HomePageBanner_image'/>
                                    </a>
                                </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="mobile_imges">
                <Swiper loop={true} autoplay={{
                    delay: 2000,
                    
                    disableOnInteraction: true,
                    }}  modules={[Autoplay]}>
                        {HomePageBannerImage.map((items, index) => {
                            return (
                                <SwiperSlide  key={index}>
                                    <div className='col-12 homePageBanner_container'>
                                    <a href={items?.Link !== null ? items?.Link : "#"} target="_blank">  
                                        <LazyLoadImage  
                                        
                                        onError={event => {
                                            event.target.src = "/image/m1.jpg"
                                            event.onerror = null
                                        }}
                                        width="100" height="auto"
                                        src={`${items.mobile}`}  alt="Weedx.io Promotion banner" className='HomePageBanner_image'/>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                   </Swiper>
                </div>
            </div>
          
        :
        <HomePageBannerSkeleton></HomePageBannerSkeleton>



    )

}
export default HomePageBanner