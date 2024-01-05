import React, { useContext, useEffect, useState } from 'react'
import { getAllNews } from '../../../../Api/Api.jsx';
import { AiFillHeart, AiFillEye } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import SearchBar from '@mkyy/mui-search-bar';
import useStyles from "../../../../Style.jsx";
import axios from "axios";
import { BlogLike,Post_BlogLike} from "../../../../Api/Api"
import { FaRegHeart } from "react-icons/fa";
import { BsShareFill } from "react-icons/bs";
import { NewsSeo } from "../../../Component/ScoPage/NewsSeo.jsx";
import DeliveryItemsCardSkeleton from '../../../Component/Skeleton/Deliveries/DeliveriesComponent/DeliveryMenu/DeliveryItemsCardSkeleton.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import _, { reverse } from "lodash";
import Createcontext from '../../../../Hooks/Context.jsx';
import { RWebShare } from "react-web-share";
import { IconButton } from "@material-ui/core";
import { cssNumber } from 'jquery';
const Allblogs = () => {
  const [allblogs, setallblogs] = useState([])
  const { state } = React.useContext(Createcontext)
  const [value, SetValue] = React.useState([])
  const [allLikes, SetallLikes] = React.useState([])
  const [isdata, setisdata] = useState(false)
  
  const [Getlikes, SetLikes] = React.useState([])
  const [searchtext , setsearchtext] = useState('')
  const classes = useStyles()
 
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    }); 
    getAllNews().then(async (res) => {
    
            res.forEach( async(item)=>{
             let getss
            
               await  BlogLike(item.id).then((resposce2) => {
                getss = resposce2.data.Like.map((itemss)=>{
                  return itemss.user
                })
             
               allLikes.push(getss)
             
            }).catch((error) => {
                console.error(error)
            })
             
           
            })


          let newdata= _.sortBy(res,
              [function (o) { return o.Publish_Date; }]).reverse()
         setallblogs(newdata);
         setisdata(true);
    }).catch((err) => {
      console.trace(err)
    })
  }, [])
  function Searchbar(e){
    setsearchtext(e)
   axios.post('https://api.cannabaze.com/UserPanel/Get-BlogSearchApi/', {
      "search": e
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
   }).then((res)=>{
    setallblogs(res.data)
   })
  }
  function PostLike(News, like) {
   
    if (state.login) {
        Post_BlogLike(News?.id, !like).then((res) => {
       
            getAllNews().then(async (res) => {
            SetallLikes([])
            await res.forEach((item)=>{
                BlogLike(item.id).then((res) => {
                  let a = res.data.Like.map((itemss)=>{
                    return itemss.user
                  })
             
                allLikes.push(a)
          
                }).catch((error) => {
                    console.error(error)
                })
             
            })

              setallblogs(res);
              setisdata(true);
            }).catch((err) => {
              console.trace(err)
            })


        }).catch(() => {

        })
    }
    else {
       
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
      <NewsSeo></NewsSeo>
      <div>
         <div className='p-md-0 p-2 d-md-flex  justify-content-between align-items-center'>    
            <h2 className='section_main_title'>Read blogs from weedx</h2>
           <div className='search_bar_box'></div> <SearchBar value={searchtext}  onChange={(e)=>Searchbar(e)} style={{ background: "#FFFFF", border: "1px solid #31B665" }} width={"100%"} placeholder="Search Menu" />
          </div>
          { 
           isdata ? <div className='blogListWrapper'>
            {
              allblogs.map((items, index) => {
           
                return (

                  <div className='row blogListCard mx-0' key={index}>
                    <div className='col-3  d-flex align-items-center'>
                      <div className='blogCardImg'>
                        <Link to={`/cannabis-news/${items.Title.replace(/ /g, "-").replace("?", "").toLowerCase()}/${items.id}`} key={index}>
                          <LazyLoadImage
                            onError={event => {
                              event.target.src = "/image/blog.jpg"
                              event.onerror = null
                            }}
                            src={`${items.Image}`} alt={items.Alt_Text} />
                        </Link>
                      </div>
                    </div>
                    <div className='col-9'>
                      <div className='blogcardText'>
                        <div className='blogDate'> <span>{items.Publish_Date.slice(0, 10)}</span></div>
                        <Link to={`/cannabis-news/${items.Title.replace(/ /g, "-").replace("?", "").toLowerCase()}/${items.id}`} key={index}>
                          <h2 className='blogcardHeading'>{items.Title}</h2>
                        </Link>
                        <Link to={`/cannabis-news/${items.Title.replace(/ /g, "-").replace("?", "").toLowerCase()}/${items.id}`} key={index}>
                          <p className='blogcardDescription'>   <div dangerouslySetInnerHTML={{ __html: items?.Description.split('</p>')[0]}} /></p>
                        </Link>
                        {/* <p onClick={handlechmnag}>click</p>  */}
                        <div className='row extra_function extra_function_destop '>
                          <div className='col-3'>
                            <span className='action_icons'><AiFillEye /></span>
                            <span>{items.ViewCount} Views</span>
                          </div>
                          <div className='col-3'>
                            <span className='action_icons'><BiCommentDetail /></span>
                            <span>{items.commentCount}</span>
                          </div>
                          <div className='col-3'>
                        
                                   <IconButton onClick={(() => { PostLike(items ,color()?.like) })}>
                                        
                                        {(state?.login && allLikes[index]?.includes(state.Profile.id) )? <AiFillHeart color={"#31B655"}></AiFillHeart> : <FaRegHeart color="#31B655" /> }
                                    </IconButton>
                            <span>{items.likeCount}</span>
                          </div>
                          <div className='col-3'>
                            <span className='action_icons'>
                              <RWebShare
                                data={{ url: window.location.href }}
                                sites={["facebook", "twitter", "whatsapp", "telegram", "linkedin", 'mail', 'copy']}
                                onClick={() => console.info("share successful!")}
                                color="#31B665"
                              >
                                <BsShareFill />
                              </RWebShare>

                            </span>
                            <span>Share</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-12'>
                      <div className='row extra_function extra_function_mobile '>
                        <div className='col-3'>
                          <span className='action_icons'><AiFillEye /></span>
                          <span className=''>{items.ViewCount}</span>
                        </div>
                        <div className='col-3'>
                          <span className='action_icons'><BiCommentDetail /></span>
                          <span>{items.commentCount} </span>
                        </div>
                        <div className='col-3'>
                          <span className='action_icons'><AiFillHeart /></span>
                                    <IconButton onClick={(() => { PostLike(items ,color()?.like) })}>
                                        <AiFillHeart color={state?.login && "#31B655"}></AiFillHeart>
                                    </IconButton>
                          <span>{items.likeCount}</span>
                        </div>
                        <div className='col-3'>
                          <span className='action_icons'>

                          <RWebShare
                                data={{ url: window.location.href }}
                                sites={["facebook", "twitter", "whatsapp", "telegram", "linkedin", 'mail', 'copy']}
                                onClick={() => console.info("share successful!")}
                                color="#31B665"
                              >
                              <BsShareFill />
                            </RWebShare>
                            </span>

                        </div>
                      </div>
                    </div>
                  </div>

                )



              })
            }

            </div>
            : <DeliveryItemsCardSkeleton></DeliveryItemsCardSkeleton>
          }

      </div>
    </React.Fragment>
  )
}

export default Allblogs




