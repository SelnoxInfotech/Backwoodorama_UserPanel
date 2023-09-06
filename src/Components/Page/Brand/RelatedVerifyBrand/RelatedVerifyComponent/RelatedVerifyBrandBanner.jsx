import { MdShare } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component";
import  IconButton  from "@mui/material/IconButton";
const RelatedVerifyBanner = ({ BrandDetails }) => {
    return (
        <div className="row center mx-0">
            <div className="col-lg-12 relatedVerifyBrand_Banner py-4">
                <div className="row">
                    <div className="col-12 text-end mt-2 mb-2 relatedVerifyBrand_icons">
                        <IconButton  aria-label="share icons" className="mx-2"><MdShare color="#949494" size={20} /></IconButton>

                    </div>
                    <div className="col-12 related_verifyBrandBanner_maincol">
                        <section className="RelatedVerifyBrandBanner_image_section">
                        <div className="w-100 realtedVerifyBanner_image_inner_container">
                            <LazyLoadImage className="related_verify_banner_img"

                                src={`https://sweede.app/` + BrandDetails.Brand_Logo} alt="Brand_Logo image not available" />

                        </div>
                        </section>
                        <section className="RelatedVerifyBanner_content_section">
                        <div className="col-12 relatedVerifyBrand_heading">
                                <h1>{BrandDetails.name}</h1>
                            </div>
                            <div className="col-12 related_verify_paragraph">

                                <div dangerouslySetInnerHTML={{ __html: BrandDetails.Brand_description }} />
                            </div>
                        </section>
                    </div>                
                </div>

            </div>

        </div>
    )
}
export default RelatedVerifyBanner