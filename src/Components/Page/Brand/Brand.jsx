import VerifyBrands from "./BrandComponent/VerifyBrands"
import ProductSearchResult from "../Product/ProductSearchResult/ProductSearchResult"
import Footer from "../../Component/Footer/Footer"
const Brand=()=>{
    const RelatedProductResult1 = [
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery dsfasfas asfdddddddddddddddddddddddddddd asfafafsdfa", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/weed.png", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
    ]
    const RelatedProductResult2 = [
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery dsfasfas asfdddddddddddddddddddddddddddd asfafafsdfa", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/weed.png", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
        { imgUrl: "/image/wee_img1.jpeg", heading: "Urban flavour delivery", subHeading: "by Tribe Tokes" },
    ]
    return(
        <>
        <div className="container-fluid">
            <div className="row center brands_containers_height">
                <div className="col-12 col-sm-10 brandHeading">
                    <h1>Verify brands</h1>
                    <VerifyBrands/>
                </div>
                <div className="col-12 col-sm-10 brandHeading">
                    <h1>Shop verify brands</h1>
                    {/* <ProductSearchResult RelatedProductResult={RelatedProductResult1}/> */}

                </div>
                <div className="col-12 col-sm-10 brandHeading">
                    <h1>Shop verify flower brands</h1>
                    {/* <ProductSearchResult RelatedProductResult={RelatedProductResult2}/> */}

                </div>

            </div>
            <Footer/>

        </div>
        </>
    )
}
export default Brand