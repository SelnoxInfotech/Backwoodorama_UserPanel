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
import {AiFillHeart} from "react-icons/ai"
import {RiLinkedinLine} from "react-icons/ri"
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
    React.useEffect(()=>{
window.scroll(0,0)
    },[])

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
                                    <h1>{News?.username?.slice(0, 1)}</h1>
                                </div>
                            </div>
                            <div className="col-10 UserNmae  ">
                                <h6>{News?.username}</h6>
                            </div>
                        </div>
                        <div classname="col" id="center1" >
                            <div className="col-10 border">
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
                            <div className="col-10 BlogLink">
                                <div className="col-12 Linkofblog">
                                    <RiFacebookLine></RiFacebookLine>
                                    <RiLinkedinLine></RiLinkedinLine>
                                    <BsFillShareFill></BsFillShareFill>
                                </div>
                                <div className=" col-12 Display_blog">
                                    <div class="col viewsBlog">
                                        <IoEyeSharp></IoEyeSharp>
                                        <span>40 Views</span>
                                    </div>
                                    <div class="col-md-8 d-flex ">
                                        <div class="col viewsBlog">
                                            {/* <IoEyeSharp></IoEyeSharp> */}
                                            <span>20</span>
                                            <span>Comment</span>
                                        </div>
                                        <div class="col viewsBlog like">
                                            <AiFillHeart></AiFillHeart>
                                            <span>201</span>
                                        </div>
                                    </div>

                                    <div class="col col-lg-2">
                                    <div class="col viewsBlog like">
                                            <span>Post</span>
                                            <span>10/2/2023</span>
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