import { AiFillHeart } from "react-icons/ai"
import { MdShare } from "react-icons/md"
import { LazyLoadImage } from "react-lazy-load-image-component";

const RelatedVerifyBanner = () => {
    return (
        <div className="row center px-2">
            <div className="col-lg-10 relatedVerifyBrand_Banner py-4">
                <div className="row">
                    <div className="col-12 text-end mt-2 mb-2 relatedVerifyBrand_icons">
                        <span><AiFillHeart color="#949494" size={20}/></span>
                        <span className="mx-2"><MdShare color="#949494" size={20}/></span>

                    </div>
                    <div className="col-sm-4 RelatedVerifyBrandBanner_Image_container">
                        <div className="realtedVerifyBanner_image_inner_container">
                            <LazyLoadImage className="related_verify_banner_img" src="/image/logo.webp" alt="image not available" />

                        </div>

                    </div>
                    <div className="col-sm-8 relatedVerifyBrandBanner_contentContainer">
                        <div className="row">
                            <div className="col-12 relatedVerifyBrand_heading">
                                <h1>All American</h1>
                            </div>
                            <div className="col-12 related_verify_paragraph">

                                <p>The only choice for the strongest single puff. Guaranteed. 1 PUFF offers true to
                                    the plant, full spectrum strain formulas by triple isolating each strain through
                                    steam distillation, molecular C02 separation and short path distillation. In
                                    addition to our specially designed strain formulas, 1 PUFF is also available
                                    in cannabanoid specific formulas including sleep, heal and mellow.</p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}
export default RelatedVerifyBanner