import React from "react";
import { ScrollContainer } from "react-indiana-drag-scroll"
import { LazyLoadImage } from "react-lazy-load-image-component";
const RecentPost = () => {
    const RecentPostSliderArray = [{ imgUrl: "./image/LeaflyMarchPromo.png", head1: "CBD" }, { imgUrl: "./image/LeaflyMarchPromo.png", head1: "CBD" },
    { imgUrl: "./image/LeaflyMarchPromo.png", head1: "CBD" },]
    return (
        <React.Fragment>
            <div className="col-12 RecentPostHeadingContainer px-0 mt-4">
                <h1 className="RecentPostHeading">Recent Posts</h1>
            </div>
            <div className="w-100 border Recentent_post_container mt-2 px-0">

                <div className="col-12  recentPostSlider">
                    <ScrollContainer className="recentPost_ScrollContainerRelative">
                        {RecentPostSliderArray.map((items, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="col-md-4 col-sm-6 col-12 ">
                                        <div className="recentPostCard">
                                            <LazyLoadImage src={items.imgUrl} className="recentPostImages"/>
                                        </div>

                                    </div>
                                </React.Fragment>)
                        })}

                    </ScrollContainer>
                </div>


            </div>

        </React.Fragment>
    )
}
export default RecentPost