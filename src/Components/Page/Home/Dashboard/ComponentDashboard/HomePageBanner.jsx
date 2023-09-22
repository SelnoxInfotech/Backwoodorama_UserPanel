import React from 'react';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Axios from "axios"
import HomePageBannerSkeleton from '../../../../Component/Skeleton/DashBoardSkeleton/HomePageBannerSkeleton';
const HomePageBanner = () => {
    const [HomePageBannerImage,SetHomePageBannerImage]=React.useState([])
    const [Skeleton , SetSkeleton] = React.useState(true)
    React.useEffect(()=>{
        Axios(`https://sweede.app/UserPanel/Get-AllHomePageBanner/`,{

        }

        ).then((response)=>{
            SetHomePageBannerImage(response.data)
            SetSkeleton(false)

        }

        ).catch(()=>{

        })
    },[])
   
    return (

        !Skeleton ?
            
          
            <ScrollContainer  className="ScrollContainerRelative">
                {HomePageBannerImage.map((items, index) => {
                    return (
                        <div className='col-12 homePageBanner_container' key={index}>
                            <LazyLoadImage  src={`https://sweede.app/${items.Banner}`}  alt="Image not available" className='HomePageBanner_image'/>
                        </div>

                    )
                })}
            </ScrollContainer>
          
        :
        <HomePageBannerSkeleton></HomePageBannerSkeleton>



    )

}
export default HomePageBanner