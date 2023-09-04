import {BiChevronLeft} from "react-icons/bi"
import {BiChevronRight} from "react-icons/bi"
const BlogPaginate = ({ postsPerPage, totalPosts, paginate, previousPage, nextPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
        <div className="Blog_paginateList">

            <ul className="pagination">
                <li onClick={previousPage} className="page-number">
                    <BiChevronLeft size={20}/>
                </li>
                {pageNumbers.map((number,index) => {
                    console.log(number)
                    return (
                        <li
                           
                            key={index}
                            onClick={() => paginate(number)}
                            className="pageNumberLists"
                        >
                            {number}
                        </li>
                    )
                })}
                <li onClick={nextPage} className="page-number">
                    <BiChevronRight size={20}/>
                </li>
            </ul>
        </div>

        </>
    )
}
export default BlogPaginate