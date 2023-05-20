import React from "react";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

const PopularStrain = () => {
    const PopularStrainArray = [{ imgUrl: "/image/glass.png", name: "0G Kush", secName: "Hybrid" },
    { imgUrl: "/image/social.png", name: "0G Galeto", secName: "Indica" },
    { imgUrl: "/image/sativa.png", name: "0G Runtz", secName: "Sativa" },
    { imgUrl: "/image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
    { imgUrl: "/image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
    { imgUrl: "/image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
    { imgUrl: "/image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
    { imgUrl: "/image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
    { imgUrl: "/image/edibles.webp", name: "0G Kush", secName: "Hybrid" },
    { imgUrl: "/image/edibles.webp", name: "0G Kush", secName: "Hybrid" }

    ]
    const ref = React.useRef(null);
    const box = document.querySelector(".newProductCard")


    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-12 d-block popularStrainContainer  popularStrainContainerSlider popularStrain_heading" id="width" ref={ref}>
                        <h1>Popular Strain</h1>
                    <ScrollContainer className="ScrollContainer_newProductCtaegory">
                        {PopularStrainArray.map((items,index)=>{
                            return(
                                <div className="col-6 col-md-4 col-lg-2  newProductCard mx-0 popularStrainCard_slider pt-2 " key={index}>


                                <div className="w-100 center">
                                    <div className="popularStrainImageContainer">

                                        <LazyLoadImage
                                          
                                            className="popularStrain_Image"
                                             src={items.imgUrl}
                                             alt="Image not available"
                                             />
                                             
                                    </div>

                                    
                                </div>
                                <div className="w-100  popularStrainContent ">
                                    <p className="my-0 popularStrainName ellipsis">{items.name}</p>
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