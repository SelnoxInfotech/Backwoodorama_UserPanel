import { AiFillHeart } from "react-icons/ai"
import { LazyLoadImage } from "react-lazy-load-image-component"
import StrainHome from "./StrainProductComponent/StrainHome"
const StrainProduct = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10 col-12 strainProduct_container mt-4">
                    <div className="strainProduct_inner_container">
                        <div className="w-100 text-end strainProduct_heart_div">
                            <AiFillHeart color="#707070" size={22} />
                        </div>
                        <div className="col-lg-10 col-12  strainProduct_img_content_section">
                            <section className="strainProduct_img_section">
                                <LazyLoadImage src="./image/indica.png" className="strainProduct_images" />
                            </section>
                            <section className="strainProduct_content_section">
                                <div className="w-100 strainProduct_content_head_div">
                                    <h1 className="strainProduct_content_head">0gm Kush</h1>

                                </div>
                                <div className="w-100 strainProduct_content_head_div">
                                    <h1 className="strainProduct_content_subHead">Hybrid</h1>
                                </div>
                                <div className="w-100 strainProduct_content_head_div">
                                    <h1 className="strainProduct_variety">AKA Original</h1>
                                </div>

                            </section>

                        </div>


                    </div>

                </div>

            </div>
            <StrainHome/>

        </div>
    )
}
export default StrainProduct