import { IoIosArrowDown } from "react-icons/io"
import { IconButton } from "@material-ui/core";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import { LazyLoadImage } from "react-lazy-load-image-component";
import flower2 from "../BlogImage/flower2.webp"
import React from "react";
import BlogPaginate from "./BlogPaginate";
const BlogsCommentsCard = () => {
    const [ShowCards, SetShowCards] = React.useState(false)
    const CommentCardArray = [
        { name: "Mr nice guys", comments: "Good peeps. Happy vibes. Smart pharmacists. My crew!" },
        { name: "Mr nice guys", comments: "Good peeps. Happy vibes. Smart pharmacists. My crew!" },
        { name: "Mr nice guys", comments: "Good peeps. Happy vibes. Smart pharmacists. My crew!" },
        { name: "Mr nice guys", comments: "Good peeps. Happy vibes. Smart pharmacists. My crew!" },
        { name: "Mr nice guys", comments: "Good peeps. Happy vibes. Smart pharmacists. My crew!" },
        { name: "Mr nice guys", comments: "Good peeps. Happy vibes. Smart pharmacists. My crew!" },
        { name: "Mr nice guys", comments: "Good peeps. Happy vibes. Smart pharmacists. My crew!" },
        { name: "Mr nice guys", comments: "Good peeps. Happy vibes. Smart pharmacists. My crew!" },

    ]
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = CommentCardArray.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const previousPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(CommentCardArray.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <section className="px-0">
            <div className="col-12 blogsCommentCountCol">
                <div className="col-6">
                    <h2 className="blogsCommentheadings">Comments(41)</h2>
                </div>
                <div className="col-6 blogCommentCardArrowBtn">
                    <IconButton onClick={() => SetShowCards(!ShowCards)}><IoIosArrowDown /></IconButton>
                </div>
            </div>
            {
                ShowCards && (
                    <section>
                        <>
                            {currentPosts.map((val, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="border blogCommentEachCards">

                                            <div className="col-12" style={{ display: "flex", justifyContent: "flex-end" }}>
                                                <span>04-09-2023</span>
                                            </div>
                                            <div className="col-12 blogCommentFlex " >
                                                <section className="commentCardImages">
                                                    <div className="imageContainer">
                                                        <LazyLoadImage src={flower2} className="blogsCommentImages" alt="image-notfound" />
                                                    </div>
                                                </section>
                                                <section className="commentCradContentSection">
                                                    <h2 className="blogCommentName">{val.name}</h2>
                                                    <h3 className="blogUserComments">{val.comments}</h3>
                                                </section>


                                            </div>
                                        </div>

                                    </React.Fragment>
                                )
                            })}
                            <BlogPaginate
                                postsPerPage={postsPerPage}
                                totalPosts={CommentCardArray.length}
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