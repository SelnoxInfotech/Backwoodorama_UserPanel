import VerifyBrands from "./BrandComponent/VerifyBrands"
import ProductSearchResult from "../Product/ProductSearchResult/ProductSearchResult"
const Brand=()=>{
    const RelatedProductResult1 = [
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery dsfasfas asfdddddddddddddddddddddddddddd asfafafsdfa", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/weed.png", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },

        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },

        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },

        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },

        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },



    ]
    return(
        <>
        <div className="container-fluid">
            <div className="row center brands_containers_height">
                <div className="col-10 brandHeading">
                    <h1>Verify Brands</h1>
                    <VerifyBrands/>
                </div>
                <div className="col-10 brandHeading">
                    <h1>Shop Verify Brands</h1>
                    <ProductSearchResult RelatedProductResult={RelatedProductResult1}/>

                </div>

            </div>

        </div>
        </>
    )
}
export default Brand