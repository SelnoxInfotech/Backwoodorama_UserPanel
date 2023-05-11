import { LazyLoadImage } from "react-lazy-load-image-component";

const PromoCode = () => {
    const PromoCardArray = [
        { imgUrl: "/image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/social.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly March Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
        { imgUrl: "/image/Leafly Promo.png", head1: "25% off all products", sub_head: "claims deals & percent" },
    ]
    return (
        <>
        <div className="row">
          <div className="col-12 promocode_headings">
            <h1 className="px-2">Promo code use</h1>

          </div>
        </div>
        <div className="row">

            {PromoCardArray.map((items, index) => {
                return (
                    <div className="col-xl-3 col-md-4 col-sm-6 promoCode_card_Outer_container" key={index}>
                        <div className="row promoCode_card_inner_container mx-2 my-2">
                            <div className="col-12 promocode_image_container">
                              <LazyLoadImage className="promocode_image" src={items.imgUrl} alt="image not available"/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default PromoCode