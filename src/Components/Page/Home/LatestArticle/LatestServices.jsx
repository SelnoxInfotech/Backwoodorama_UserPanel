import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LatestServices = () => {
    const settings = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: true,
                    infinite: true,

                }
            },
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,

                }
            }
        ]
    }
    const arr = [{ head: "Easy to Signup", para: "Gravity is an irreversible force while it is certainly nice that it keeps us rooted certainly nice that it keep us rooted to the ..." },
    { head: "Easy to Addup", para: "Gravity is an irreversible force while it is certainly nice that it keeps us rooted certainly nice that it keep us rooted to the ..." },
    { head: "Easy to Login", para: "Gravity is an irreversible force while it is certainly nice that it keeps us rooted certainly nice that it keep us rooted to the ..." },
    { head: "Easy to Signup", para: "Gravity is an irreversible force while it is certainly nice that it keeps us rooted certainly nice that it keep us rooted to the ..." },
    { head: "Easy to Signup", para: "Gravity is an irreversible force while it is certainly nice that it keeps us rooted certainly nice that it keep us rooted to the ..." },
    { head: "Easy to Signup", para: "Gravity is an irreversible force while it is certainly nice that it keeps us rooted certainly nice that it keep us rooted to the ..." },

    ]
    return (
        <>
            <div className="container-fluid m-4 p-2 mt-4">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="latest_services disp_head">
                            <p>Welcome to Backwoodaroma</p>
                            <h6 className="fontStyle common_sub_head">Check our latest article to see our inspiring content for shopping</h6>
                        </div>
                    </div>

                </div>
                <div className="row ml-2">
                    <Slider {...settings}>
                        {arr.map((ele, index) => {
                            return (
                               <div className="col-12 center_latest" >
                                <div className="col-10  latest_cont" key={index}>
                                    <div className="col img_cont center_latest ">
                                        <div className="col-12  centerImg ">
                                            <img src="./image/latest_img.png" alt="img_not_found" />

                                        </div>

                                    </div>
                                    <div className="col latest_content_div ">
                                        <div className="col-10">
                                            <p className="fontStyle comm_head_prop">{ele.head}</p>

                                        </div>
                                        <div className="col-10 ">
                                        <p className="fontStyle common_sub_head">{ele.para}</p>

                                        </div>

                                    </div>




                                </div>
                               </div>
                            )
                        })}
                      
                    </Slider>



                </div>


            </div>
        </>
    )
}
export default LatestServices