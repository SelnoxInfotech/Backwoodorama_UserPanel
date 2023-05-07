import { LazyLoadImage } from "react-lazy-load-image-component";

const NewProductCategorySlider = ({ flowerArray }) => {
    return (
        <>
            <div className="container-fluid">

                <div className="row ">

                    <div className="col-12 newProductCategorySliderContainer">
                        {flowerArray?.map((items, index) => {
                            return (
                                <div className="col newProductCard pt-2" key={index}>


                                    <div className="col-12 d-flex justify-content-center">
                                        <div className="newProduct_category_slider_image">

                                            <LazyLoadImage
                                                onError={event => {
                                                    event.target.src = "/image/cat_pro_7.jpg"
                                                    event.onerror = null
                                                }}
                                                className="newProductCategory_image"
                                                 src={`http://52.3.255.128:8000/${items?.image}`} />
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