import React from "react";
import { ScrollContainer } from "react-indiana-drag-scroll"
import parse from 'html-react-parser';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const RecentPost = () => {
 const id = useParams()
   const [News, SetNews] = React.useState([])
    React.useEffect(() => {
        const getApi = async () => {
            const res = await fetch("https://api.cannabaze.com/UserPanel/Get-News/");
            const data = await res.json();
           
           let newdata= data.filter((item )=>{
                return item.id != id.id
            })
            SetNews(newdata)
          
        }
        getApi()

    }, [])
    return (
        <React.Fragment>
            <div className="  my-3 my-md-5">
            <h3 className="section_main_title">Recent Blogs</h3>
                    <div className="blogs_card_slider">
                        <ScrollContainer className="ScrollContainerRelative">
                        
                                {News?.map((ele, index) => {
  
                                        return (
                                            <Link to={`/${ele.Category_Name==='BLOGS'? "blogs":'cannabis-news'}/${ele.Title.replace(/ /g, "-").replace("?", "").toLowerCase()}/${ele.id}`} key={index}> 
                                                <div className="new_blog_card">
                                                    <div className="new_blog_card_img">
                                                        <LazyLoadImage 
                                                            onError={event => {
                                                                event.target.src = "/image/blog.jpg"
                                                                event.onerror = null
                                                            }}
                                                        
                                                        src={`${ele.Image}`}
                                                        alt={ele.Title}
                                                        title={ele.Title}
                                                        style={{ pointerEvents: "none" }} />
                                                    </div>
                                                    <div className="new_blog_card_text">  
                                                        <span className="fontStyle latest_font_size  ">
                                                            {ele.Title}
                                                        </span>
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