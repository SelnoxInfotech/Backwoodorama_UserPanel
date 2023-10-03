import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';

const StrainTypeCards = ({ ArrayData }) => {
    const ref = React.useRef(null);
   
    return (
        <React.Fragment>
            <div className="col-lg-12 col-12   recentViewProductSlider" id="width" ref={ref}>
                <ScrollContainer className=" StrainTypeCardRelative indiana-scroll-container">

                    {ArrayData.map((items, index) => {
                        return (
                            <div className="col-lg-3 col-sm-6 col-6 col-mb-4 strainType_container" key={index}>
                                <div className="row starinType_inner_row mx-1 my-2">
                                    <div className="col-12 strainTypeInner_container px-0">
                                      <Link to={`/StrainProduct/${items.head1}`}  state={{ data: items.imgUrl }}>  <LazyLoadImage alt={items.head1} className="strainType_image" src={items.imgUrl}  /></Link>
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
        </React.Fragment>
    )
}
export default StrainTypeCards