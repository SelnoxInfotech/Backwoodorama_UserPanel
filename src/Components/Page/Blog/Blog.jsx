import React from "react";
import { IoChevronBack } from "react-icons/io5"
import SearchBar from '@mkyy/mui-search-bar';
import useStyles from "../../../Style";
import RecentPost from "./BlogComponent/RecentPost";
const Blogs = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="container">
                <div className="row mx-1">
                    <div className="col-12 blog_searchBar_container bg-light px-0">
                        <section className="backButton_section">
                            <div className="col-12 backBtnCol_searchBar_height">
                                <span style={{ marginLeft: "-4px" }}> <IoChevronBack color="#000000" size={20} /></span><span className="blogBackSpan">Back</span>

                            </div>
                        </section>
                        <section className="searchBar_section">
                            <div className="col-12 text-end">
                                <SearchBar width={"100%"} className={`Blog_searchBar ${classes.strainTypSearchBar}`} />

                            </div>
                        </section>

                    </div>
                    <div className="col-12 blogEditorContainer mt-4">
                        <div>
                            <span>HOW LONG DOES WEED POTENCY LAST?.</span>
                        </div>
                        <div>
                            
                        </div>

                    </div>
                    <RecentPost/>

                </div>

            </div>

        </React.Fragment>
    )
}
export default Blogs