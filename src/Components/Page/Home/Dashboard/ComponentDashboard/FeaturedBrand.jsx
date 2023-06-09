import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
const FeaturedBrand = ({ CardDataArray }) => {
    const ref = React.useRef(null);

    return (
        <>
        {/* <div className="container-fluid">
            

             <div className="row"> */}
             <div className="col-12 bestDealsCard_Heading_offers mt-4">
                    <h1 className="ellipsis">Featured Brands</h1>
                </div>
{/* className="col-lg-12 col-12   recentViewProductSlider" id="width" */}
            <div  ref={ref}>
                <ScrollContainer className="ScrollContainerRelative">
                    {
                        CardDataArray.map((items, index) => {
                            return (
                                <div className="col-xxl-3 col-xl-4 col-lg-3 col-sm-6 col-12 mb-4  bestDealCards" key={index}>
                                    <div className="row  FeaturedBrandContainer  mx-3 my-2">
                                        <div className="col-12 FeaturedBrandImageContainer px-0">
                                            <LazyLoadImage className="FeaturedBrandImage_height" src={`https://sweede.app/${items.Brand_Logo}`} alt="image not available" />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-12 featuredBrandTitle center">
                                            <h1 className="ellipsis mx-2">{items.name}</h1>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </ScrollContainer>

            </div>
             {/* </div>
        </div> */}

        </>
    )
}
export default FeaturedBrand