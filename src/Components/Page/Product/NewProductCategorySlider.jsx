import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import $ from 'jquery'; 
import React from "react";
import { Draggable } from "gsap/Draggable";
const NewProductCategorySlider = ({ flowerArray }) => {


      const box =  document.querySelector(".newProductCard")
function btn (){
    let w = box.clientWidth
    console.log(w)
}
    return (
        <>
            <div className="container-fluid">

                <div className="row  ">

                        
                    <div className="col-12 newProductCategorySliderContainer  ">
                        {flowerArray?.map((items, index) => {
                            return (
                                <div className="col newProductCard pt-2 " key={index}>


                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="newProduct_category_slider_image">

                                            <Link to={`/Product/${items.name}`} state={ items.id }>
                                            <LazyLoadImage
                                                onError={event => {
                                                    event.target.src = "/image/blankImage.jpg"
                                                    event.onerror = null
                                                }}
                                                className="newProductCategory_image"
                                                 src={`http://backend.sweede.net/${items?.SubCategoryImage}`}/>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-center newProductCategorySliderName">
                                        <p className=" text-truncate">{items.name}</p>
                                    </div>
                                </div>

                            )
                        })}
                        </div>
                  
                    




                </div>

            </div>
        </>
    )
}
export default NewProductCategorySlider