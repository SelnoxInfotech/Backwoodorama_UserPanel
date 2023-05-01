import { LazyLoadImage } from "react-lazy-load-image-component";

const NewProductCategorySlider = ({flowerArray}) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 newProductCategorySliderContainer">
                        {flowerArray.map((items, index) => {
                            return (
                                <div className="col newProductCard" key={index}>
                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="newProduct_category_slider_image">
                                        
                                        <LazyLoadImage className="newProductCategory_image" src={items.imgUrl}/>
                                       </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-center" >
                                        <p>flower</p>
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