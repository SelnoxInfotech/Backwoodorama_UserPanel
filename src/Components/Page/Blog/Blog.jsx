import React from "react";
import { IoChevronBack } from "react-icons/io5"
import SearchBar from '@mkyy/mui-search-bar';
import useStyles from "../../../Style";
import RecentPost from "./BlogComponent/RecentPost";
import RecentPostComment from "./BlogComponent/RecentPostComment";
import HomePageDealsSignup from "../Home/Dashboard/ComponentDashboard/HomePageDealsSignup";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { RiFacebookLine } from "react-icons/ri"
import { BsFillShareFill } from "react-icons/bs"
import { IoEyeSharp } from "react-icons/io5"
import { AiFillHeart } from "react-icons/ai"
import { RiLinkedinLine } from "react-icons/ri"
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

    }, [id])
    React.useEffect(() => {
        window.scroll(0, 0)
    }, [id])

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
                            <div className="col-2 Box2">
                                <div className="Col_BlogUSerIcon">
                                    <h2>{News?.username?.slice(0, 1)}</h2>
                                </div>
                            </div>
                            <div className="col-10 UserNmae  ">
                                <h6>{News?.username}</h6>
                            </div>
                        </div>
                        <section className="blog_Image" >
                            <span className="blog_Title ">{News?.Title}</span>
                            {/* <img src ="https://sweede.app/image/images/download/media/BlankImage/b1_2.png"  style={{width:"100%" , height:"250px"}}alt="blog image"></img> */}
                        </section>
                        <div classname="col" id="center1" >
                            <div className="col-12 blogEditorPaddings ">
                                <div className="">
                                    <span>{News?.Title}</span>
                                </div>
                                <div>
                                    <span>
                                        <div dangerouslySetInnerHTML={{ __html: News?.Description }} /></span>
                                </div>
                            </div>
                        </div>
                        <div classname="col" id="center1" >
                            <div className="col-10 BlogLink mt-2">
                                <div className="col-12 Linkofblog">
                                    <div className="col Linkofblog">
                                        <RiFacebookLine></RiFacebookLine>
                                        <RiLinkedinLine></RiLinkedinLine>
                                        <BsFillShareFill></BsFillShareFill>
                                    </div>
                                    <div className="col viewsBlog">
                                        <IoEyeSharp></IoEyeSharp>
                                        <span>40 Views</span>
                                    </div>
                                    <div className="col-md-8 d-flex ">
                                        <div className="col viewsBlog">
                                            {/* <IoEyeSharp></IoEyeSharp> */}
                                            <span>20</span>
                                            <span>Comment</span>
                                        </div>
                                        <div className="col viewsBlog like">
                                            <AiFillHeart></AiFillHeart>
                                            <span>201</span>
                                        </div>
                                    </div>
                                </div>

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