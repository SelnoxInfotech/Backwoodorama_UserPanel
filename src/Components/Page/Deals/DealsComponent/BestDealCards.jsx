import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';

const BestDealCards = ({CardDataArray,Heading}) => {
    const ref = React.useRef(null);
    return (
        <>
       
                <div className="col-12 bestDealsCard_Heading_offers mt-2 px-0">
                    <h1 className="ellipsis px-2">{Heading}</h1>
                </div>

     
            <div className="col-lg-12 col-12   recentViewProductSlider" id="width" ref={ref}>
            <ScrollContainer className=" bestDealsCard_ScrollContainerRelative">
                {
                    CardDataArray.map((items, index) => {
                        return (
                            <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4  bestDealCards" key={index}>
                                <div className="row bestDealsCardContainer mx-1 my-2">
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
                </ScrollContainer>

            </div>
        </>
    )
}
export default BestDealCards