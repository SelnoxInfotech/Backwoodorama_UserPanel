import { ScrollContainer } from 'react-indiana-drag-scroll';
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from 'react';
const StrainHomeSlider=()=>{
    const StrainHomeSliderArray=[{imgUrl:"./image/indica.png"},{imgUrl:"./image/indica.png"},{imgUrl:"./image/indica.png"},
    {imgUrl:"./image/indica.png"},{imgUrl:"./image/indica.png"},{imgUrl:"./image/indica.png"}]
    return(
        <React.Fragment>
             <div className="col-lg-10 col-12 strainHomeSlider px-0">
                <ScrollContainer className="StrainHomeSlider_scrollContainerRelative">

                    {StrainHomeSliderArray.map((items, index) => {
                        return (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-12 mb-4  strainHomeSlider_container" key={index}>
                                <div className="strainHomeSlider_Inner_cont">
                                        <LazyLoadImage className="strainHomeSlider_image" src={items.imgUrl} alt='imgNotFound'/>

                                </div>
                              
                            </div>
                        )
                    })}
                </ScrollContainer>
            </div>
        </React.Fragment>
    )
}
export default StrainHomeSlider