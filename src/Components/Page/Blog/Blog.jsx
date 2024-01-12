import React, { useRef } from "react";
import { IoChevronBack } from "react-icons/io5"
import SearchBar from '@mkyy/mui-search-bar';
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { IconButton } from "@material-ui/core";
import useStyles from "../../../Style";
import RecentPost from "./BlogComponent/RecentPost";
import RecentPostComment from "./BlogComponent/RecentPostComment";
import Newsletter from "../../Component/Newsletter/HomePageDealsSignup";
import { BsFillShareFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import Select from '@mui/material/Select';
import { AiOutlineLike } from "react-icons/ai";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { AiTwotoneLike } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";
import { AiFillHeart } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlogPaginate from "./BlogComponent/BlogPaginate.jsx";
import { BsThreeDotsVertical } from "react-icons/bs"
import Createcontext from "../../../Hooks/Context";
import { BlogLike, Get_Comment, Post_BlogLike } from "../../../Api/Api"
import _ from "lodash"
import Cookies from 'universal-cookie';
import { RWebShare } from "react-web-share";
import { WhisList } from "../../Component/Whishlist/WhisList";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { SingleNewsSeo } from "../../Component/ScoPage/NewsSeo.jsx";
const Blogs = () => {
    const ref = useRef(null)
    const classes = useStyles()
    const navigate = useNavigate()
    const Location = useLocation()
    const { state } = React.useContext(Createcontext)
    const [value, SetValue] = React.useState([])
    const [Getlikes, SetLikes] = React.useState([])
    const [Getcommnet, Setcommnet] = React.useState([])
    const { id } = useParams();
    const [News, SetNews] = React.useState({})
    const [WishList, SetWishList] = React.useState(false)
    const [ViewCount, SetViewCount] = React.useState(0)
    const cookies = new Cookies();
    const token_data = cookies.get('User_Token_access')
    React.useEffect(() => {
        const getApi = async () => {
            const res = await fetch(`https://api.cannabaze.com/UserPanel/Get-GetNewsById/${id}`);
            const data = await res.json();
            if (data.length !== 0) {
                SetNews(data[0])
                await BlogLike(data[0].id).then((res) => {
                    SetLikes(res.data.Like)
                    SetValue({ ...value, "LinkCount": res.data.LikeCount })
                }).catch((error) => {
                    console.error(error)
                })
                GetComment(data[0].id)
            } else {
                navigate("/FourZeroFour")
            }
            // await ViewCountApi(id).then((res) => {
            //      SetViewCount(res.data.data)
            //      SetBlogReviewCount(res.data.ViewCount)
            //  }).catch(() => {

            // })

        }
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
        getApi()


    }, [id])
    React.useEffect(() => {
        if (Object.keys(News).length !== 0) {
            axios.post("https://api.cannabaze.com/UserPanel/Update-ViewCounter/", {
                id: News.id
            }).then((response) => {
                SetViewCount(response.data.data.ViewCount)

            });
        }
    }, [News])

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
    const [ShowCards, SetShowCards] = React.useState(false)
    const [CommentCardArrays, SetCommentCardArray] = React.useState()
    React.useEffect(() => {
        SetCommentCardArray(Getcommnet.UserComment)

    }, [Getcommnet.UserComment])

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(5);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = CommentCardArrays?.slice(indexOfFirstPost, indexOfLastPost);
    let usercomment = currentPosts?.filter((item) => {
        return item.user === state?.Profile.id
    })
    let newdata = currentPosts?.filter((item, index) => {
        return item.user !== state.Profile.id
    })
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
    function scrolltocomment() {
        SetShowCards(true)

        let horiheight = ref.current.children[4].offsetTop - document.getElementById('Navbar_box').clientHeight
        document.documentElement.scrollTo({
            top: horiheight,
            left: 0,
            behavior: "smooth",
        });
    }
    function handleDelete(id) {

        axios.delete(`https://api.cannabaze.com/UserPanel/Delete-Comment/${id}`,
            {
                headers: { Authorization: `Bearer ${token_data}` }
            },).then((response) => {
                Get_Comment(id).then((res) => {
                    Setcommnet({ ...Getcommnet, "CommentCounts": res.data.CommentCounts, 'UserComment': res.data.Comments })
                }).catch((error) => {
                    console.error(error)
                })
            })
    }
    return (
        <React.Fragment>
            <SingleNewsSeo Title={News?.Meta_title} Description={News?.Meta_Description} location={useLocation().pathname}></SingleNewsSeo>
            <div className="container" >
                <div className="row mx-1" ref={ref}>
                    <div className="col-12 w-100 row align-items-center justify-content-between blog_searchBar_container px-0">
                        <section className=" col-2 backButton_section">
                            <div className="col-12 backBtnCol_searchBar_height">
                                <span onClick={() => { navigate(-1) }} style={{ marginLeft: "-4px", cursor: 'pointer' }}> <IoChevronBack color="#000000" size={20} /></span><span onClick={() => { navigate(-1) }} style={{ cursor: 'pointer' }} className="blogBackSpan">Back</span>

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
                        <section className="blog_Image" style={{ backgroundImage: `url(${state?.StaticImage?.blogbanner})` }} >
                            <div className="overlay_blog"></div>
                            <h1 className="blog_Title ">{News?.Title}</h1>
                            {/* <img src ="https://api.cannabaze.com/image/images/download/media/BlankImage/b1_2.png"  style={{width:"100%" , height:"250px"}}alt="blog image"></img> */}
                        </section>
                        <div className="blog_text_container" id="center1" >
                            <div className="blogEditorPaddings ">

                                <div>
                                    <span >
                                        <div className="linkTaginsideEditer" dangerouslySetInnerHTML={{ __html: News?.Description }} /></span>
                                </div>
                            </div>
                        </div>
                        <div className="blog_text_container" id="center1" >
                            {/* <div className="col-12 BlogLink"> */}
                            <div className="col-12 Linkofblog ">
                                <div className="col BlogSocal" id="center1">

                                    <RWebShare
                                        data={{ url: "https://www.weedx.io/" + Location.pathname }}
                                        sites={["facebook", "twitter", "whatsapp", "telegram", "linkedin", 'mail', 'copy']}
                                        onClick={() => console.info("share successful!")}
                                        color="#31B665" >
                                        <IconButton>
                                            <BsFillShareFill size={16}></BsFillShareFill>
                                        </IconButton>
                                    </RWebShare>

                                    <div className="blogViewCounts destop_view">Share</div>
                                </div>
                                <div className="col viewsBlog" id="center1">
                                    <IconButton>
                                        <IoEyeSharp></IoEyeSharp>
                                    </IconButton>

                                    <span className="blogViewCounts">{ViewCount} <span className="destop_view">Views</span></span>


                                </div>

                                <div className="col viewsBlog BlogSocal" id="center1" onClick={scrolltocomment}>

                                    <IconButton>
                                        <BiCommentDetail />
                                    </IconButton>
                                    <span className="blogViewCounts">{Getcommnet.CommentCounts} <span className="destop_view"> Comment</span> </span>

                                </div>
                                <div className="col viewsBlog BlogSocal like" id="center1">
                                    <IconButton onClick={(() => { PostLike(color()?.like) })}>
                                        <AiFillHeart color={state?.login && color()?.like && "#31B665"}></AiFillHeart>
                                    </IconButton>
                                    <span className="blogViewCounts">{value?.LinkCount}</span>
                                </div>
                            </div>

                            {/* </div> */}
                        </div>
                    </div>
                    {WishList && <WhisList open1={WishList} SetWishList={SetWishList}></WhisList>}
                    {/* <RecentPost /> */}
                    <RecentPost />
                    <RecentPostComment scrolltocomment={scrolltocomment} id={id} GetUserComment={Getcommnet} SetUserComment={Setcommnet} Get={GetComment} />
                    <div>
                        {/* <BlogsCommentsCard  Getcommnet={Getcommnet} /> */}
                        <section className="px-0" id="blodComment">
                            <div className="col-12 blogsCommentCountCol">
                                <div className="col-6">
                                    <h2 className="blogsCommentheadings">Comments ({CommentCardArrays?.length})</h2>
                                </div>
                                <div className="col-6 blogCommentCardArrowBtn">
                                    {ShowCards ? (
                                        <IconButton onClick={() => SetShowCards(!ShowCards)}><IoIosArrowUp /></IconButton>
                                    ) : (
                                        <IconButton onClick={() => SetShowCards(!ShowCards)}><IoIosArrowDown /></IconButton>

                                    )}

                                </div>
                            </div>
                            {
                                ShowCards && (
                                    <section>

                                        {
                                            (state.login && Boolean(usercomment?.length)) &&
                                            usercomment?.map((val, index) => {

                                                const CommentDate = val.created_at.slice(0, 10).split("-").reverse().join("-")
                                                return (
                                                    <div className="border blogCommentEachCards" key={index}>

                                                        <div className="col-12 blogsCommentCardDateCol">
                                                            <span className="blogsCommentCardDate">{CommentDate}</span>

                                                        </div>
                                                        <div className="col-12 blogCommentFlex">
                                                            <div className="commentCardImages">
                                                                <div className="imageContainer">
                                                                    <LazyLoadImage
                                                                        onError={event => {
                                                                            event.target.src = "/image/blankImage.jpg"
                                                                            event.onerror = null
                                                                        }}
                                                                        src={`${val.image}`} className="blogsCommentImages" alt="image-notfound" />
                                                                </div>
                                                            </div>
                                                            <div className="commentCradContentSection">
                                                                <h2 className="blogCommentName">{val.username}</h2>
                                                                <div className="col-12">
                                                                    <p className="blogUserComments">{val.comment}</p>
                                                                </div>

                                                            </div>
                                                            {state.login && state?.Profile?.id === val.user && (
                                                                <div className="col BlogCommentEdit">
                                                                    {/* <IconButton> <BsThreeDotsVertical color="#31B665" size={20} /></IconButton> */}
                                                                    <span className='userreviewaction'> {
                                                                        <Select

                                                                            IconComponent={BsThreeDotsVertical} labelId="demo-simple-select-error-label"
                                                                            sx={{
                                                                                boxShadow: "none",
                                                                                padding: '0',

                                                                                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                                                                                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                                                                {
                                                                                    border: 0,
                                                                                    outline: "none"

                                                                                },
                                                                                "& .MuiSelect-select": {
                                                                                    padding: '0 10px !important'
                                                                                },
                                                                                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                                                                {
                                                                                    border: 0,
                                                                                    outline: "none"
                                                                                },
                                                                                "&.Mui-focused .MuiSelect-icon": { color: "#31B665" },
                                                                                "&:hover": {
                                                                                    ".MuiSelect-icon": {
                                                                                        color: "#31B665"
                                                                                    }
                                                                                },
                                                                            }}
                                                                        >
                                                                            <List className={classes.orderEditList}>


                                                                                <ListItem button className={classes.orderEditListitem} onClick={() => handleDelete(val.id)}>
                                                                                    <AiFillDelete color='31B665' />
                                                                                    Delete
                                                                                </ListItem>
                                                                                <ListItem button className={classes.orderEditListitem}>

                                                                                    <FaEdit color='31B665' />
                                                                                    Edit
                                                                                </ListItem>



                                                                            </List>
                                                                        </Select>

                                                                    }</span>
                                                                </div>
                                                            )}




                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                        {newdata?.map((val, index) => {

                                            const CommentDate = val.created_at.slice(0, 10).split("-").reverse().join("-")
                                            return (
                                                <div className="border blogCommentEachCards" key={index}>

                                                    <div className="col-12 blogsCommentCardDateCol">
                                                        <span className="blogsCommentCardDate">{CommentDate}</span>

                                                    </div>
                                                    <div className="col-12 blogCommentFlex">
                                                        <div className="commentCardImages">
                                                            <div className="imageContainer">
                                                                <LazyLoadImage
                                                                    onError={event => {
                                                                        event.target.src = "/image/blankImage.jpg"
                                                                        event.onerror = null
                                                                    }}
                                                                    src={`${val.image}`} className="blogsCommentImages" alt="image-notfound" />
                                                            </div>
                                                        </div>
                                                        <div className="commentCradContentSection">
                                                            <h2 className="blogCommentName">{val.username}</h2>
                                                            <div className="col-12">
                                                                <p className="blogUserComments">{val.comment}</p>
                                                            </div>

                                                        </div>
                                                        {state.login && state?.Profile?.id === val.user && (
                                                            <div className="col BlogCommentEdit">
                                                                <IconButton> <BsThreeDotsVertical color="#31B665" size={20} /></IconButton>

                                                            </div>
                                                        )}




                                                    </div>
                                                </div>
                                            )
                                        })}

                                        <BlogPaginate
                                            postsPerPage={postsPerPage}
                                            totalPosts={CommentCardArrays.length}
                                            paginate={paginate}
                                            previousPage={previousPage}
                                            nextPage={nextPage}
                                        />
                                    </section>
                                )}
                        </section>
                    </div>

                </div>
            </div>
            <Newsletter />
        </React.Fragment>
    )
}
export default Blogs