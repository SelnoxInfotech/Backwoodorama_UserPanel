import { LazyLoadImage } from "react-lazy-load-image-component";

const VerifyBrands = () => {
    const VerifyArrayData = [{ imgUrl: "/image/flower.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/flower.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/flower.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },            
]
    return (
        <>
            <div className="row">
                {VerifyArrayData.map((items, index) => {
                    return (
                        <div className="col-md-4 verify_brand_container">
                            <div className="row verifyBrand_row mx-1 my-1">
                                <div className="col-4  verifyBrand_image_container">
                                <LazyLoadImage className="product_search_result_image" src={items.imgUrl} alt="image not found"/>

                                </div>
                                <div className="col-8">
                                    <p>{items.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default VerifyBrands