import React from "react";
import { ScrollContainer } from "react-indiana-drag-scroll"
import parse from 'html-react-parser';
import { Link } from "react-router-dom";
const RecentPost = () => {

   const [News, SetNews] = React.useState([])
    React.useEffect(() => {
        const getApi = async () => {
            const res = await fetch("https://sweede.app/UserPanel/Get-News/");
            const data = await res.json();
            SetNews(data)
            // console.log(data)

        }
        getApi()

    }, [])
    return (
        <React.Fragment>
            <div className="col-12 RecentPostHeadingContainer px-0 mt-4">
                <h1 className="RecentPostHeading">Recent Posts</h1>
            </div>
            {/* <div className="w-100  Recentent_post_container mt-2 px-0"> */}

            <div className="col-12" style={{padding: '0px'}}>
                        <ScrollContainer className="ScrollContainerRelative">
                            <div className="BlogContainer mb-2">
                                {News?.map((ele, index) => {
                                    return (
                                        <Link to={`/Blogs/${ele.id}`} > 
                                        <section  key={index}>
                                            <div className="col img_cont center_latest ">
                                                {/* <div className="centerImg "> */}
                                                   <img src={`https://sweede.app${ele?.Image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />

                                                {/* </div> */}

                                            </div>
                                            <div className="col latest_content_div mt-2 ">
                                                {/* <div className="col-10 mt-2"> */}
                                                    <span className="fontStyle latest_font_size  ">
                                                        {ele?.Title}
                                                        </span>

                                                {/* </div> */}
                                                <div className="mt-1 ">
                                                    <span className="fontStyle  common_sub_head">{parse(ele?.Description.slice(0,50) + "...")}</span>

                                                </div>

                                            </div>
                                        </section>
                                        </Link>
                                    )
                                })}

                            </div>
                        </ScrollContainer>
                    </div>


            {/* </div> */}

        </React.Fragment>
    )
}
export default RecentPost