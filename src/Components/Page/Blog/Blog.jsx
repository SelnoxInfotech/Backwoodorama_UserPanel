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
import { IconButton } from "@mui/material"
import Createcontext from "../../../Hooks/Context"
import { BlogLike, Post_BlogLike ,Get_Comment,Post_Comment} from "../../../Api/Api"
import _ from "lodash"
import { WhisList } from "../../Component/Whishlist/WhisList";
import BlogsCommentsCard from "./BlogComponent/BlogsCommentsCard"
import { Link } from "react-router-dom";
const Blogs = () => {
    const classes = useStyles()
    const navigate = useNavigate()
    const { state } = React.useContext(Createcontext)
    const [value, SetValue] = React.useState([])
    const [Getlikes, SetLikes] = React.useState([])
    const [Getcommnet, Setcommnet] = React.useState([])
    const { id } = useParams();
    const [News, SetNews] = React.useState({})
    const [WishList, SetWishList] = React.useState(false)
    // console.log(Getcommnet)
    React.useEffect(() => {
        const getApi = async () => {
            const res = await fetch(`https://sweede.app/UserPanel/Get-GetNewsById/${id}`);
            const data = await res.json();
            SetNews(data[0])
            await BlogLike(data[0].id).then((res) => {
                SetLikes(res.data.Like)
                SetValue({ ...value, "LinkCount": res.data.LikeCount })
            }).catch((error) => {
                console.error(error)
            })
            await Get_Comment(data[0].id).then((res) => {  
            
                Setcommnet({ ...Getcommnet, "CommentCounts": res.data.CommentCounts, 'UserComment':res.data.Comments })
            }).catch((error) => {
                console.error(error)
            })
    
        }
        getApi()
    }, [id])
    React.useEffect(() => {
        window.scroll(0, 0)
        
    }, [])
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
                        <div className="col" id="center1" >
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
                        <div className="col" id="center1" >
                            {/* <div className="col-12 BlogLink"> */}
                                <div className="col-12 Linkofblog ">
                                    <div className="col BlogSocal" id="center1">

                                        <Link to={"https://www.facebook.com/profile.php?id=61550742531174"}><RiFacebookLine></RiFacebookLine></Link>
                                        <RiLinkedinLine></RiLinkedinLine>
                                        <BsFillShareFill></BsFillShareFill>
                                    </div>
                                    <div className="col viewsBlog" id="center1">
                                        <IconButton>
                                            <IoEyeSharp></IoEyeSharp>
                                        </IconButton>
                                        <span>40 Views</span>
                                    </div>
                                    <div className="col-md-8 d-flex center">
                                        <div className="col viewsBlog" id="center1">
                                            {/* <IoEyeSharp></IoEyeSharp> */}
                                            <span>{Getcommnet.CommentCounts}</span>
                                            <span>Comment</span>
                                        </div>
                                        <div className="col viewsBlog like" id="center1">
                                            <IconButton onClick={(() => { PostLike(color()?.like) })}>
                                                <AiFillHeart color={state?.login && color()?.like && "red"}></AiFillHeart>
                                            </IconButton>
                                            <span>{value?.LinkCount}</span>
                                        </div>
                                    </div>
                                </div>

                            {/* </div> */}
                        </div>
                    </div>
                    {WishList && <WhisList open1={WishList} SetWishList={SetWishList}></WhisList>}
                    <RecentPost />
                    <RecentPostComment id={id} GetUserComment={Getcommnet} SetUserComment={Setcommnet} />
                    <BlogsCommentsCard Getcommnet={Getcommnet}/>
                    <HomePageDealsSignup />

                </div>

            </div>

        </React.Fragment>
    )
}
export default Blogs