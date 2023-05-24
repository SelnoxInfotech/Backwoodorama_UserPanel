import { LazyLoadImage } from "react-lazy-load-image-component";
import SearchBar from '@mkyy/mui-search-bar';
import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
const StrainType = ({ArrayData,Heading}) => {
    const ref = React.useRef(null);

    const StrainTypeCardArray = [
        { imgUrl: "./image/indica.png", head1: "Indica" },
        { imgUrl: "./image/sativa.png", head1: "Hybrid" },
        { imgUrl: "./image/social.png", head1: "Sativa" },
        { imgUrl: "./image/Leafly March Promo.png", head1: "Indica" },
        { imgUrl: "./image/Leafly Promo.png", head1: "Hybrid" },
        { imgUrl: "./image/Leafly Promo.png", head1: "Sativa" },
    ]
    return (
        <>
            <div className="row my-4">
                <div className="col-sm-4 strainType_heading">
                    <h1 className="mx-2">{Heading}</h1>
                </div>
                <div className="col-sm-8 px-2">
                    <SearchBar style={{ background: "#FFFFF", border: "1px solid gray" }} width={"100%"} placeholder="Serch Strain Type" />

                </div>

            </div>
            <div className="col-lg-12 col-12   recentViewProductSlider" id="width" ref={ref}>
            <ScrollContainer className="ScrollContainerRelative">

                {ArrayData.map((items, index) => {
                    return (
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-4 strainType_container" key={index}>
                            <div className="row starinType_inner_row mx-1 my-2">
                                <div className="col-12 strainTypeInner_container px-0">
                                    <LazyLoadImage className="strainType_image" src={items.imgUrl} />
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-12 center">
                                    <p className="ellipsis strainTypeCaption">{items.head1}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
              </ScrollContainer>
            </div>
        </>
    )
}
export default StrainType