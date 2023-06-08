import { AiFillHeart } from "react-icons/ai"
import { MdShare } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component";

const RelatedVerifyBanner = ({BrandDetails}) => {
    return (
        <div className="row center px-2">
            <div className="col-lg-10 relatedVerifyBrand_Banner py-4">
                <div className="row">
                    <div className="col-12 text-end mt-2 mb-2 relatedVerifyBrand_icons">
                        <span><AiFillHeart color="#949494" size={20}/></span>
                        <span className="mx-2"><MdShare color="#949494" size={20}/></span>

                    </div>
                    <div className="col-md-4 RelatedVerifyBrandBanner_Image_container">
                        <div className="realtedVerifyBanner_image_inner_container">
                            <LazyLoadImage className="related_verify_banner_img"
                            
                             src={`https://sweede.app/` + BrandDetails.Brand_Logo} alt="Brand_Logo image not available" />

                        </div>

                    </div>
                    <div className="col-md-8 relatedVerifyBrandBanner_contentContainer">
                        <div className="row">
                            <div className="col-12 relatedVerifyBrand_heading">
                                <h1>{BrandDetails.name}</h1>
                            </div>
                            <div className="col-12 related_verify_paragraph">

                                <p  > <div  dangerouslySetInnerHTML={{ __html: BrandDetails.Brand_description }} /></p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}
export default RelatedVerifyBanner