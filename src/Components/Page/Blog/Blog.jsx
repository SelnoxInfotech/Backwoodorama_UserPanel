import React from "react";
import { IoChevronBack } from "react-icons/io5"
import "./Blog.css"
import SearchBar from '@mkyy/mui-search-bar';
import useStyles from "../../../Style";
import RecentPost from "./BlogComponent/RecentPost";
import RecentPostComment from "./BlogComponent/RecentPostComment";
import HomePageDealsSignup from "../Home/Dashboard/ComponentDashboard/HomePageDealsSignup";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { BsFillShareFill } from "react-icons/bs"
import { IoEyeSharp } from "react-icons/io5"
import { AiFillHeart  } from "react-icons/ai"
import { FaLinkedinIn  } from "react-icons/fa"
import { RiFacebookFill } from "react-icons/ri"
import { IconButton } from "@mui/material"
import Createcontext from "../../../Hooks/Context"
import { BlogLike, Post_BlogLike, Get_Comment, Post_Comment, ViewCountApi } from "../../../Api/Api"
import _ from "lodash"
import { RWebShare } from "react-web-share";
import { WhisList } from "../../Component/Whishlist/WhisList";
import BlogsCommentsCard from "./BlogComponent/BlogsCommentsCard"
import { Link , useLocation } from "react-router-dom";
const Blogs = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const Location  = useLocation()
    const { state } = React.useContext(Createcontext)
    const [value, SetValue] = React.useState([])
    const [Getlikes, SetLikes] = React.useState([])
    const [Getcommnet, Setcommnet] = React.useState([])
    const { id } = useParams();
    const [News, SetNews] = React.useState({})
    const [WishList, SetWishList] = React.useState(false)
    const [ViewCount, SetViewCount] = React.useState(0)
    const [BlogReviewCount,SetBlogReviewCount]=React.useState()
  
    React.useEffect(() => {
        const getApi = async () => {
            const res = await fetch(`https://api.cannabaze.com/UserPanel/Get-GetNewsById/${id}`);
            const data = await res.json();
            SetNews(data[0])
            await BlogLike(data[0].id).then((res) => {
                SetLikes(res.data.Like)
                SetValue({ ...value, "LinkCount": res.data.LikeCount })
            }).catch((error) => {
                console.error(error)
            })
            GetComment(data[0].id)
            await ViewCountApi(id).then((res) => {
                 SetViewCount(res.data.data)
                 SetBlogReviewCount(res.data.ViewCount)
             }).catch(() => {

            })

        }
        getApi()
    }, [id])
    React.useEffect(() => {
        window.scroll(0, 0)

    }, [])
    async function GetComment(id) {
        await Get_Comment(id).then((res) => {

            Setcommnet({ ...Getcommnet, "CommentCounts": res.data.CommentCounts, 'UserComment': res.data.Comments })
        }).catch((error) => {
            console.error(error)
        })
    }

    function PostLike(like) {
        if (state.login) {
            Post_BlogLike(News?.id, !like).then((res) => {
                BlogLike(News.id).then((res) => {
                    SetLikes(res.data.Like)
                    SetValue({ ...value, "LinkCount": res.data.LikeCount })
                }).catch((error) => {
                    console.error(error)
                })
            }).catch(() => {

            })
        }
        else {
            SetWishList(true)
        }
    }
    function color() {
        const l = _.find(Getlikes, function (n) {
            return n?.user === state?.Profile?.id;
        })
        return l

    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row mx-1">
                    <div className="col-12 w-100 row align-items-center justify-content-between blog_searchBar_container px-0">
                        <section className=" col-2 backButton_section">
                            <div className="col-12 backBtnCol_searchBar_height">
                                <span onClick={() => { navigate(-1) }} style={{ marginLeft: "-4px", cursor: 'pointer' }}> <IoChevronBack color="#000000" size={20} /></span><span onClick={() => { navigate(-1) }} style={{ cursor: 'pointer' }} className="blogBackSpan">Back</span>

                            </div>
                        </section>
                        <section className="col-9 searchBar_section">
                            <div className="col-12 text-end">
                                <SearchBar width={"100%"} className={`Blog_searchBar ${classes.strainTypSearchBar}`} />

                            </div>
                        </section>

                    </div>

                    <div className="p-0 blogEditorContainer">
                        <div className=" UserNmae_Blog">
                            <div className="">
                                <div className="Col_BlogUSerIcon">
                                    <h2>{News?.username?.slice(0, 1)}</h2>
                                </div>
                            </div>
                            <div className=" UserNmae  ">
                                <h6>{News?.username}</h6>
                            </div>
                        </div>
                        <section className="blog_Image" >
                            <div className="overlay_blog"></div>
                            <h1 className="blog_Title ">{News?.Title}</h1>
                            {/* <img src ="https://api.cannabaze.com/image/images/download/media/BlankImage/b1_2.png"  style={{width:"100%" , height:"250px"}}alt="blog image"></img> */}
                        </section>
                        <div className="blog_text_container" id="center1" >
                            <div className="blogEditorPaddings ">

                                <div>
                                    <span>
                                        <div dangerouslySetInnerHTML={{ __html: News?.Description }} /></span>
                                </div>
                            </div>
                        </div>
                        <div className="blog_text_container" id="center1" >
                            {/* <div className="col-12 BlogLink"> */}
                            <div className="col-12 Linkofblog ">
                                <div className="col BlogSocal" id="center1">

                                    <Link className=" LinkColor" to={"https://www.facebook.com/profile.php?id=61550742531174"}>< RiFacebookFill></ RiFacebookFill></Link>
                                    <Link className=" LinkColor" to={'https://www.linkedin.com/company/weedx-io/'}><FaLinkedinIn ></FaLinkedinIn></Link>
                                    <RWebShare
                                        data={{url: "https://www.weedx.io/" + Location.pathname }}
                                        sites={["facebook" , "twitter" , "whatsapp" , "telegram" , "linkedin" , 'mail' , 'copy']}
                                        onClick={() => console.info("share successful!")}
                                        color="#31B665"
                                    >
                                        <BsFillShareFill></BsFillShareFill>
                                    </RWebShare>

                                </div>
                                <div className="col viewsBlog" id="center1">
                                    <IconButton>
                                        <IoEyeSharp></IoEyeSharp>
                                    </IconButton>
                                 
                                    <span className="blogViewCounts">{BlogReviewCount} Views</span>

                                   
                                </div>
                                <div className="col-md-8 d-flex center">
                                    <div className="col viewsBlog" id="center1">
                                        {/* <IoEyeSharp></IoEyeSharp> */}
                                        <span className="blogViewCounts">{Getcommnet.CommentCounts} Comment</span>
                                        {/* <span className="blogViewCounts">Comment</span> */}
                                    </div>
                                    <div className="col viewsBlog like" id="center1">
                                        <IconButton onClick={(() => { PostLike(color()?.like) })}>
                                            <AiFillHeart color={state?.login && color()?.like && "red"}></AiFillHeart>
                                        </IconButton>
                                        <span className="blogViewCounts">{value?.LinkCount}</span>
                                    </div>
                                </div>
                            </div>

                            {/* </div> */}
                        </div>
                    </div>
                    {WishList && <WhisList open1={WishList} SetWishList={SetWishList}></WhisList>}
                    {/* <RecentPost /> */}
                    <RecentPost/>
                    <RecentPostComment id={id} GetUserComment={Getcommnet} SetUserComment={Setcommnet} Get={GetComment} />
                    <BlogsCommentsCard Getcommnet={Getcommnet} />
                    <HomePageDealsSignup />
                </div>
            </div>
        </React.Fragment>
    )
}
export default Blogs