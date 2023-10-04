import React from "react";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

const PopularStrain = ({SliderDataArray,Heading}) => {
  
    const ref = React.useRef(null);



    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 d-block popularStrainContainer  popularStrainContainerSlider " id="width" ref={ref}>
                        <h1 className="popularStrain_heading">{Heading}</h1>
                    <ScrollContainer className="ScrollContainer_newProductCtaegory">
                        {SliderDataArray.map((items,index)=>{
                            return(
                                <div className="col-4 col-md-3 col-lg-2  newProductCard mx-0 popularStrainCard_slider pt-2 " key={index}>


                                <div className="w-100 center">
                                    <div className="popularStrainImageContainer">

                                        <LazyLoadImage
                                          
                                            className="popularStrain_Image"
                                             src={items.imgUrl}
                                             alt="Image not available"
                                             />
                                             
                                    </div>

                                    
                                </div>
                                <div className="w-100  popularStrainContent  ">
                                    <p className="my-0 popularStrainName ellipsis">{items.name}</p>

                                    
                                </div>
                                <div className="w-100 popularStrainContent ">
                                <p className="popularSttrainSecName ellipsis">{items.secName}</p>

                                </div>

                            </div>
                            )
                        }) }
                    </ScrollContainer>

                </div>
            </div>

        </div>
    )
}
export default PopularStrain