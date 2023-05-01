import { LazyLoadImage } from "react-lazy-load-image-component";

const NewProductCategorySlider = () => {
    const flowerArray = [{ imgUrl: "/image/wee_img1.jpeg", title: "flower" }, { imgUrl: "/image/flower2.webp", title: "pre-roll" }, { imgUrl: "/image/flower2.webp", title: "flower" },
    { imgUrl: "/image/flower2.webp" }, { imgUrl: "/image/flower2.webp" },
    { imgUrl: "/image/flower2.webp", title: "flower" }, { imgUrl: "/image/flower2.webp", title: "flower" }, { imgUrl: "/image/flower2.webp", title: "flower" }]
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12 newProductCategorySliderContainer">
                        {flowerArray.map((items, index) => {
                            return (
                                <div className="row newProductCard " key={index}>
                                    <div className="col-12 mx-4">
                                        <div className="newProduct_category_slider_image">
                                        
                                        <LazyLoadImage className="newProductCategory_image" src={items.imgUrl} />
                                       </div>
                                    </div>
                                    <div className="col-12" style={{ marginLeft: "50px" }}>
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