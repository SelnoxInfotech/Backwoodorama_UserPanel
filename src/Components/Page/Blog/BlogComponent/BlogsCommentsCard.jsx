import { IoIosArrowDown } from "react-icons/io"
import {IoIosArrowUp} from "react-icons/io"
import { IconButton } from "@material-ui/core";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import flower2 from "../BlogImage/flower2.webp"
import React from "react";
import BlogPaginate from "./BlogPaginate";
const BlogsCommentsCard = ({Getcommnet}) => {
    const [ShowCards, SetShowCards] = React.useState(false)
    const [CommentCardArrays,SetCommentCardArray]=React.useState()
    React.useEffect(()=>{
        SetCommentCardArray(Getcommnet.UserComment)

    },[Getcommnet.UserComment])

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = CommentCardArrays?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(CommentCardArrays?.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <section className="px-0">
            <div className="col-12 blogsCommentCountCol">
                <div className="col-6">
                    <h2 className="blogsCommentheadings">Comments ({CommentCardArrays?.length})</h2>
                </div>
                <div className="col-6 blogCommentCardArrowBtn">
                    {ShowCards?(
                        <IconButton onClick={() => SetShowCards(!ShowCards)}><IoIosArrowUp /></IconButton>
                    ):(
                        <IconButton onClick={() => SetShowCards(!ShowCards)}><IoIosArrowDown /></IconButton>

                    )}
                    
                </div>
            </div>
            {
                ShowCards && (
                    <section>
                        <>
                            {currentPosts?.map((val, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="border blogCommentEachCards">

                                            <div className="col-12 blogsCommentCardDateCol">
                                                <span className="blogsCommentCardDate">{val.created_at.slice(0,10)}</span>
                                            </div>
                                            <div className="col-12 blogCommentFlex " >
                                                <section className="commentCardImages">
                                                    <div className="imageContainer">
                                                        <LazyLoadImage src={flower2} className="blogsCommentImages" alt="image-notfound" />
                                                    </div>
                                                </section>
                                                <section className="commentCradContentSection">
                                                    <h2 className="blogCommentName">{val.username}</h2>
                                                    <h3 className="blogUserComments">{val.comment}</h3>
                                                </section>


                                            </div>
                                        </div>

                                    </React.Fragment>
                                )
                            })}
                            <BlogPaginate
                                postsPerPage={postsPerPage}
                                totalPosts={CommentCardArrays.length}
                                paginate={paginate}
                                previousPage={previousPage}
                                nextPage={nextPage}
                            />
                        </>
                    </section>
                )}


        </section>
    )
}
export default BlogsCommentsCard;