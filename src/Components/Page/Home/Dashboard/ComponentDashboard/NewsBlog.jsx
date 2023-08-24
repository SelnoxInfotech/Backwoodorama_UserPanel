
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from 'html-react-parser';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollContainer } from 'react-indiana-drag-scroll';
const NewsBlog = () => {
    const [News, SetNews] = useState([])
    useEffect(() => {
        const getApi = async () => {
            const res = await fetch("https://sweede.app/UserPanel/Get-News/");
            const data = await res.json();
            SetNews(data)
            // console.log(data)

        }
        getApi()

    }, [])
  
    return (
        <>
            <div className="container-fluid   mt-4">
                <div className="row">
                    <div className="col-lg-12 ">
                        <div className="latest_services">
                            <h2 className="latest_services_headings mt-2">Welcome to WeedX</h2>
                            <h3 className="fontStyle common_sub_head mt-2  mb-3">Check our latest article to see our inspiring content for shopping</h3>
                        </div>
                    </div>


                    {/* <div className="w-100 px-0 latestServices_SliderCol"> */}
                    {/* <SliderLatestService {...settings}> */}
                    <div className="col-12" style={{padding: '0px'}}>
                        <ScrollContainer className="ScrollContainerRelative">
                            <div className="BlogContainer">
                                {News?.map((ele, index) => {
                                    return (
                                        <Link to={`/Blogs/${ele.id}`} key={index}> 
                                        <section  >
                                            <div className="col img_cont center_latest ">
                                                {/* <div className="centerImg "> */}
                                                   <img src={`https://sweede.app${ele.Image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />

                                                {/* </div> */}

                                            </div>
                                            <div className="col latest_content_div mt-2 ">
                                                {/* <div className="col-10 mt-2"> */}
                                                    <span className="fontStyle latest_font_size  ">
                                                        {ele.Title}
                                                        </span>

                                                {/* </div> */}
                                                <div className="mt-1 ">
                                                    <span className="fontStyle  common_sub_head">{parse(ele?.Description?.slice(0,50) + "...")}</span>

                                                </div>

                                            </div>
                                        </section>
                                        </Link>
                                    )
                                })}

                            </div>
                        </ScrollContainer>
                    </div>
                </div>

                {/* </SliderLatestService> */}

                {/* </div> */}


            </div >
        </>
    )
}
export default NewsBlog