import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Autoplay } from 'swiper/modules';
import {Homepagebanner} from '../../../../../Api/Api.jsx';
import "swiper/css";
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
                <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}  modules={[Autoplay]}>
                        {HomePageBannerImage.map((items, index) => {
                        
                            return (
                                <SwiperSlide key={index}>
                                <div className='col-12 homePageBanner_container'>
                                    <LazyLoadImage  src={`https://api.cannabaze.com${items.Banner}`}  alt="Weedx.io Promotion banner" className='HomePageBanner_image'/>
                                </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="mobile_imges">
                <Swiper autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}  modules={[Autoplay]}>
                        {HomePageBannerImage.map((items, index) => {
                            return (
                                <SwiperSlide>
                                    <div className='col-12 homePageBanner_container' key={index}>
                                        <LazyLoadImage  src={`https://api.cannabaze.com/${items.mobile}`}  alt="Weedx.io Promotion banner" className='HomePageBanner_image'/>
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