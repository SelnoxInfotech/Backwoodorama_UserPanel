import React from "react";
import { IoChevronBack } from "react-icons/io5"
import SearchBar from '@mkyy/mui-search-bar';
import useStyles from "../../../Style";
import RecentPost from "./BlogComponent/RecentPost";
import RecentPostComment from "./BlogComponent/RecentPostComment";
import HomePageDealsSignup from "../Home/Dashboard/ComponentDashboard/HomePageDealsSignup";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
const Blogs = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const [News, SetNews] = React.useState({})
    React.useEffect(() => {
        const getApi = async () => {
            const res = await fetch(`https://sweede.app/UserPanel/Get-GetNewsById/${id}`);
            const data = await res.json();
            SetNews(data[0])


        }
        getApi()

    }, [])

    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="container">
                <div className="row mx-1">
                    <div className="col-12 blog_searchBar_container px-0">
                        <section className="backButton_section">
                            <div className="col-12 backBtnCol_searchBar_height">
                                <span onClick={() => { navigate(-1) }} style={{ marginLeft: "-4px", cursor: 'pointer' }}> <IoChevronBack color="#000000" size={20} /></span><span onClick={() => { navigate(-1) }} style={{ cursor: 'pointer' }} className="blogBackSpan">Back</span>

                            </div>
                        </section>
                        <section className="searchBar_section">
                            <div className="col-12 text-end">
                                <SearchBar width={"100%"} className={`Blog_searchBar ${classes.strainTypSearchBar}`} />

                            </div>
                        </section>

                    </div>
                    <div className="col-12 blogEditorContainer mt-4 p-0">
                        <div className="col-12 UserNmae_ d-flex">
                            <div className="col-2">
                                <div className="Col_BlogUSerIcon">
                                    <span>S</span>
                                </div>
                            </div>
                            <div className="col-10 UserNmae  ">
                            {News.username}
                            </div>
                        </div>
                        <div className="col-10  BlogCol-1">
                            <div className="blogEditerdata">
                                <span>{News?.Title}</span>
                            </div>
                            <div>
                                <span>
                                    <div dangerouslySetInnerHTML={{ __html: News?.Description }} /></span>
                            </div>

                        </div>
                    </div>
                    <RecentPost />
                    <RecentPostComment />
                    <HomePageDealsSignup />
                </div>

            </div>

        </React.Fragment>
    )
}
export default Blogs