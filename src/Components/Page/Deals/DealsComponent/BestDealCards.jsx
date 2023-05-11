import { LazyLoadImage } from "react-lazy-load-image-component";

const BestDealCards = () => {
    const BestDealsCardArray = [
        { imgUrl: "/image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/social.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },

        { imgUrl: "/image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },

    ]
    return (
        <>
            <div className="row">
                <div className="col-12 bestDealsCard_Heading_offers">
                    <h1 className="ellipsis px-2">Offers</h1>
                </div>

            </div>
            <div className="row">
                {
                    BestDealsCardArray.map((items, index) => {
                        return (
                            <div className="col-xl-3 col-md-4 col-sm-6 bestDealCards" key={index}>
                                <div className="row bestDealsCardContainer mx-2 my-2">
                                    <div className="col-12 BestDeals_image_container px-0">
                                        <LazyLoadImage className="bestDeals_imageHeight" src={items.imgUrl} alt="image not available" />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-12 bestDealsHead_container ">
                                        <h1 className="ellipsis mx-2">{items.head1}</h1>
                                    </div>
                                    <div className="col-12 bestDeal_subHeading ">
                                        <p className="ellipsis mx-2">{items.sub_head}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
export default BestDealCards