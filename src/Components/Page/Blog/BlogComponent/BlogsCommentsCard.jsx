import { IoIosArrowDown } from "react-icons/io"
import { IconButton } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
const BlogsCommentsCard = () => {
    const CommentCardArray=[
        {imgUrl:"./image/flower2.webp",name:"Mr nice guys",comments:"Good peeps. Happy vibes. Smart pharmacists. My crew!"},
        {imgUrl:"./image/flower2.webp",name:"Mr nice guys",comments:"Good peeps. Happy vibes. Smart pharmacists. My crew!"},
]
    return (
        <section className="px-0">
            <div className="col-12 blogsCommentCountCol">
                <div className="col-6">
                    <h2 className="blogsCommentheadings">Comments(41)</h2>
                </div>
                <div className="col-6 blogCommentCardArrowBtn">
                    <IconButton><IoIosArrowDown /></IconButton>
                </div>
            </div>
            <section>
                {CommentCardArray.map((val,index)=>{
                    return(
                        <div className="col-12 border" key={index}>
                            <section className="commentCardImages">
                                  <div className="imageContainer">
                                   <LazyLoadImage src={val.imgUrl} className="blogsCommentImages" alt="image-notfound"/>
                                  </div>
                            </section>
                            <section className="commentCradContentSection">

                            </section>


                        </div>
                    )
                })}
            </section>
        </section>
    )
}
export default BlogsCommentsCard;