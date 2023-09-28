import React from "react";
import { ScrollContainer } from "react-indiana-drag-scroll"
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const RecentPost = () => {
  const id = useParams().id
   const [News, SetNews] = React.useState([])
    React.useEffect(() => {
        const getApi = async () => {
            const res = await fetch("https://api.cannabaze.com/UserPanel/Get-News/");
            const data = await res.json();
            SetNews(data)
          console.log(data ,'RecentPost')

        }
        getApi()

    }, [])
    return (
        <React.Fragment>
            <div className="  my-3 my-md-5">
            <h3 className="section_main_title">Recent Blogs 2023</h3>
                    <div className="blogs_card_slider">
                        <ScrollContainer className="blogSlider">
                        
                                {News?.filter((ele, index) => {
                                //    if(ele.id !== id) {
                                    console.log(ele)
                                   return (
                                        <Link to={`/Blogs/${ele.id}`} key={index}> 
                                            <div className="new_blog_card">
                                                <div className="new_blog_card_img">
                                                    <img src={`https://api.cannabaze.com/${ele.Image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />
                                                </div>
                                                <div className="new_blog_card_text">  
                                                    <span className="fontStyle latest_font_size  ">
                                                        {ele.Title}
                                                    </span>
                                                    {/* <span className=" common_sub_head">{parse(ele?.Description)}</span>
                                                */}
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                        
                        </ScrollContainer>
                    </div>
            
            </div >
        </React.Fragment>
    )
}
export default RecentPost