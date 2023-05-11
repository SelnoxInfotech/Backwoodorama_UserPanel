import { LazyLoadImage } from "react-lazy-load-image-component";

const BestDealCards = () => {
    const BestDealsCardArray = [
        { imgUrl: "/image/logo.webp", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/weed.png", head1: "25% off all products", sub_head: "claims deals & percent" }
    ]
    return (
        <div className="row">
            {
                BestDealsCardArray.map((items, index) => {
                    return (
                        <div className="col-xl-3 col-md-2 col-sm-4 bestDealCards">
                            <div className="row bestDealsCardContainer mx-1">
                                <div className="col-12 BestDeals_image_container">
                                  <LazyLoadImage className="bestDeals_imageHeight" src={items.imgUrl} alt="image not available"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default BestDealCards