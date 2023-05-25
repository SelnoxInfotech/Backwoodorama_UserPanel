import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
const FeaturedBrand = ({ CardDataArray }) => {
    const ref = React.useRef(null);

    return (
        <>
            <div className="row">
                <div className="col-12 bestDealsCard_Heading_offers mt-4">
                    <h1 className="ellipsis px-2">Featured Brands</h1>
                </div>

            </div>
            <div className="col-lg-12 col-12   recentViewProductSlider" id="width" ref={ref}>
                <ScrollContainer className="ScrollContainerRelative">
                    {
                        CardDataArray.map((items, index) => {
                            return (
                                <div className="col-xxl-2 col-xl-3 col-lg-2 col-sm-4 col-12 mb-4  bestDealCards" key={index}>
                                    <div className="row  FeaturedBrandContainer  mx-4 my-2">
                                        <div className="col-12 FeaturedBrandImageContainer px-0">
                                            <LazyLoadImage className="FeaturedBrandImage_height" src={items.imgUrl} alt="image not available" />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-12 featuredBrandTitle center ">
                                            <h1 className="ellipsis mx-2">{items.head1}</h1>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </ScrollContainer>

            </div>
        </>
    )
}
export default FeaturedBrand