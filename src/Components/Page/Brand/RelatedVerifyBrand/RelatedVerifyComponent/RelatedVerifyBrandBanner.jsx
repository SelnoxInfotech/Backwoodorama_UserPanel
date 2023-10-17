import { MdShare } from "react-icons/md"
import { AiTwotoneHeart } from "react-icons/ai"
import { LazyLoadImage } from "react-lazy-load-image-component";
import  IconButton  from "@mui/material/IconButton";
import './RelatedVerifyBrandBanner.css';
const RelatedVerifyBanner = ({ BrandDetails }) => {
    return (
        <div className="brandProfileBanner row center">
            <div className="relatedVerifyBrand_Banner">
              
                    <div className="relatedVerifyBrand_icons">
                       <IconButton  aria-label="share icons"><AiTwotoneHeart color="#949494" size={20} /></IconButton>

                        <IconButton  aria-label="share icons"><MdShare color="#949494" size={20} /></IconButton>

                    </div>
                    <div className="related_verifyBrandBanner_maincol">
                        <div className="RelatedVerifyBrandBanner_image_box">
                            <div className="realtedVerifyBanner_image_inner_container">
                                <LazyLoadImage className="related_verify_banner_img"

                                    src={ BrandDetails.Brand_Logo} alt="Brand_Logo image not available" />

                            </div>
                        </div>
                        <div className="RelatedVerifyBanner_content_box">
                     
                                <h1 className="section_main_title">{BrandDetails.name}</h1>
                          
                            <div className="related_verify_paragraph">

                                <div dangerouslySetInnerHTML={{ __html: BrandDetails.Brand_description }} />
                            </div>
                        </div>
                    </div>                
               

            </div>

        </div>
    )
}
export default RelatedVerifyBanner