import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import $ from 'jquery'; 
import React from "react";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'
const NewProductCategorySlider = ({ flowerArray }) => {
    return (
        <>
            <div className="container-fluid">

                <div className="row  ">

                        
                    <div className="col-12 newProductCategorySliderContainer" id="width">
                    <ScrollContainer className="ScrollContainer_newProductCtaegory">
                        {flowerArray?.map((items, index) => {
                            return (
                                <div className="col-4 col-md-4 col-lg-2  newProductCard mx-0 NewProductCategory_slider pt-2 " key={index}>


                                    <div className="col-12 center">
                                        <div className="newProduct_category_slider_image">

                                            <Link to={`/Product/${items.name}`} state={ items.id }>
                                            <LazyLoadImage
                                                onError={event => {
                                                    event.target.src = "/image/blankImage.jpg"
                                                    event.onerror = null
                                                }}
                                                className="newProductCategory_image"
                                                 src={`https://sweede.app/${items?.SubCategoryImage}`}/>
                                            </Link>
                                            
                                        </div>

                                        
                                    </div>
                                    <div className="col-12 d-flex center newProductCategorySliderName">
                                        <p className=" text-truncate">{items.name}</p>
                                    </div>
                                </div>

                            )
                        })}
                         </ScrollContainer>
                        </div>
                  
                    




                </div>

            </div>
        </>
    )
}
export default NewProductCategorySlider