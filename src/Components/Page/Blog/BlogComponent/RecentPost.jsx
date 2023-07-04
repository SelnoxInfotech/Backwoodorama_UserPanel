import React from "react";
import { ScrollContainer } from "react-indiana-drag-scroll"
import { LazyLoadImage } from "react-lazy-load-image-component";
const RecentPost = () => {
    const RecentPostSliderArray = [{
        imgUrl: "./image/LeaflyMarchPromo.png", head1: "Easy To Add Business",
        para: "Gravity is an irresistible force. While it is certainly nice that it keeps us rooted to the"
    },
    {
        imgUrl: "./image/LeaflyMarchPromo.png", head1: "Easy To Signup",
        para: "Gravity is an irresistible force. While it is certainly nice that it keeps us rooted to the"
    },
    {
        imgUrl: "./image/LeaflyMarchPromo.png", head1: "Easy To purchase", para: "Gravity is an irresistible force. While it is certainly nice that it keeps us rooted to the…",
    },
    {
        imgUrl: "./image/LeaflyMarchPromo.png", head1: "Easy To Signup",
        para: "Gravity is an irresistible force. While it is certainly nice that it keeps us rooted to the"
    },
]
    return (
        <React.Fragment>
            <div className="col-12 RecentPostHeadingContainer px-0 mt-4">
                <h1 className="RecentPostHeading">Recent Posts</h1>
            </div>
            <div className="w-100  Recentent_post_container mt-2 px-0">

                <div className="col-12  recentPostSlider px-0">
                    <ScrollContainer className="recentPost_ScrollContainerRelative">
                        {RecentPostSliderArray.map((items, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="col-lg-3 border recentPostCard_container col-md-4 col-sm-6 col-12 ">
                                        <div className="recentPostInnerContainer">
                                            <div className="recentPostCardImg_cont">
                                                <LazyLoadImage src={items.imgUrl} className="recentPostImages" alt="img-not-available" />
                                            </div>
                                            <div className="w-90 recentPost_cont_cont mt-2">
                                                <h1 className="recentpost_headings">{items.head1}</h1>
                                            </div>
                                            <div className="w-90 recentPost_cont_cont mt-2">
                                                <p className="recentPost_para">{items.para}</p>
                                            </div>
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