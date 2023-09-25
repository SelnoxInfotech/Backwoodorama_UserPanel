import React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import HomePageBannerSkeleton from '../../../../Component/Skeleton/DashBoardSkeleton/HomePageBannerSkeleton';
import Axios from "axios";
const HomePageWeedBanner=()=>{
    const [Skeleton , SetSkeleton]= React.useState(true)
    const [data,setdata] = React.useState([]) 
   
   
    // const HomePageWeedBanner=[{imgUrl:"./image/homePageBanner.jpg"},{imgUrl:"./image/homePageBanner.jpg"}]
    React.useEffect(() => {
        Axios("https://sweede.app/UserPanel/Get-PromotionalBanners/ ")
        .then((response)=>{
            setdata(response.data)
           
            SetSkeleton(false)
        })
        .catch((error)=>{
        })
    }, [])



    return(
        <div className='homepagebanner2 container-fluid'>
         { !Skeleton   ?
           <ScrollContainer className="ScrollContainerRelative">
            {data?.map((ele, index) => {
                return (
                    <div className='col-12 homePageBanner_container' key={index}>
                        <LazyLoadImage src={`https://sweede.app/${ele?.Banner}`} alt="image not available" className='HomePageBanner_image'/>
                    </div>

                )
            })}
        </ScrollContainer>
        :
        <HomePageBannerSkeleton></HomePageBannerSkeleton>
    }
    </div>
    )
}
export default HomePageWeedBanner