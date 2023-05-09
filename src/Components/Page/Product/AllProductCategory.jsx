import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const AllProductCategory = ({ flowerArray }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12  px-4 productSlider_headings fontStyle">
                        <h1>Flower</h1>
                    </div>

                </div>

                <div className="row center">
                    {flowerArray.map((items, index) => {
                        return (
                            <div className="col-xl-2 col-lg-2  col-sm-3 col-6 mt-4" key={index}>
                                <div className="row ">
                                    <div className="col-12  center">
                                        <div className="allProductCategory_image_container">
                                            <Link to={`/Product/${items.name}`} state={items.id}>

                                                <LazyLoadImage
                                                    onError={event => {
                                                        event.target.src = "/image/cat_pro_7.jpg"
                                                        event.onerror = null
                                                    }}
                                                    className="allProduct_imageHeight" src={`http://52.3.255.128:8000/${items?.image}`} alt="image not found" />
                                            </Link>

                                        </div>
                                    </div>
                                    <div className="col-12 center">
                                        <p>{items.name}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>
        </>
    )
}
export default AllProductCategory