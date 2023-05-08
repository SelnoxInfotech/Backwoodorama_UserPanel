import { LazyLoadImage } from "react-lazy-load-image-component";

const RecentViewProduct = () => {
    const FlowerArray = [{ imgUrl: "/image/cat_pro_img4.png", name: "flower" },
    { imgUrl: "/image/glass.png", name: "Capsules" },
    { imgUrl: "/image/flower2.webp", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/flower2.webp", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },
    { imgUrl: "/image/glass.png", name: "All American" },


    ]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12  recentViewProductSlider">
                    {FlowerArray.map((items, index) => {
                        return (
                            <div className="col-lg-2 col-md-4 col-sm-6 col-6  recentViewProductCard border" key={index}>
                                <div className="row">
                                    <div className="col-12 center recentViewImageContainer">
                                        <LazyLoadImage className="recentView_images" src={items.imgUrl} alt="image not availble"  />
                                    </div>
                                    <div className="col-12 recentViewProductContent_container mx-1">

                                        <div className="row">
                                            <div className="col-12">
                                                <p>Urban flavour delivery</p>

                                            </div>
                                            <div className="col-12">
                                                <p>Berkeley California</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

        </div>
    )
}
export default RecentViewProduct