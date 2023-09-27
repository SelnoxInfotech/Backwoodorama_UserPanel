import { LazyLoadImage } from "react-lazy-load-image-component";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import * as React from 'react';
import FeaturedBrandSkeleton from "../../../../Component/Skeleton/DashBoardSkeleton/FeaturedBrandSkeleton";
import { Link,  } from "react-router-dom"
const FeaturedBrand = ({ CardDataArray ,BrandSkeleton}) => {
   
    const ref = React.useRef(null);

    return (
        <div className="feature_brands_section">
            <div className="container-fluid">
        {!BrandSkeleton  ?
        <React.Fragment>
             <div className="bestDealsCard_Heading_offers">
                    <h3 className="featuredBrandHeading">Featured Brands</h3>
                   
             </div>

            <div  className="feature_brand_container"  ref={ref}>
                <ScrollContainer className="featuredBrandScrollContainerRelative">
                    {
                        CardDataArray.map((items, index) => {
                            return (
                                <div className="feature_brands" key={index}>
                                      <Link  to={`/brands/${items.name.replace(/\s/g, '')}/${items.id}`}> 
                                        <div className="row  FeaturedBrandContainer  mx-0 my-2">
                                            <div className="col-12 FeaturedBrandImageContainer px-0">
                                                <LazyLoadImage className="FeaturedBrandImage_height" src={`https://api.cannabaze.com/${items.Brand_Logo}`} alt="image not available" />
                                            </div>
                                            <p className="ellipsis featuredBrandTitle">{items.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </ScrollContainer>
            </div>
          

        </React.Fragment>
        :
         <div className="col-12 bestDealsCard_Heading_offers mt-4">
       
          <FeaturedBrandSkeleton></FeaturedBrandSkeleton>
         </div>
        }
        </div>
        </div>
    )
}
export default FeaturedBrand