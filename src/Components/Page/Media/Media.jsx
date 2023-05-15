import { LazyLoadImage } from "react-lazy-load-image-component";

const Media = () => {
    const PromoCardArray = [
        { imgUrl: "/image/Leafly March Promo.png" },
        { imgUrl: "/image/Leafly Promo.png" },
        { imgUrl: "/image/social.png" },
        { imgUrl: "/image/Leafly March Promo.png" },
        { imgUrl: "/image/Leafly Promo.png" },
        { imgUrl: "/image/Leafly Promo.png" },
    ]
    return (
        <div className="container-fluid">
            <div className="row center">
                {PromoCardArray.map((items, index) => {
                    return (
                        <div className="col-lg-4  col-sm-6 col-112 media_outer_container">
                            <div className="row media_row mx-4 mt-4">
                                <div className="col-12 media_image_container px-0">
                                    <LazyLoadImage className="media_image" src={items.imgUrl}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
              

            </div>

        </div>
    )
}
export default Media