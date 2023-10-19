import React, { useEffect, useState } from 'react'
import {getAllNews } from '../../../../Api/Api.jsx';
import { AiFillHeart , AiFillEye} from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { BsShareFill } from "react-icons/bs";
import { NewsSeo } from "../../../Component/ScoPage/NewsSeo.jsx";
import DeliveryItemsCardSkeleton from '../../../Component/Skeleton/Deliveries/DeliveriesComponent/DeliveryMenu/DeliveryItemsCardSkeleton.jsx';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Allblogs = () => {
const[allblogs,setallblogs] = useState([])
const [isdata,setisdata] = useState(false)

  useEffect(()=>{
    window.scroll(0, 0)
   const news= getAllNews()
   news.then((res)=>{
     
      setallblogs(res);
      setisdata(true)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <React.Fragment> 
    <NewsSeo></NewsSeo>
    <div>
      
        <h2 className='section_main_title'>Read blogs from weedx</h2>
       { isdata?  <div className='blogListWrapper'>
          {
            allblogs.map((items,index)=>{
             
              return   (
                <Link to={`/cannabis-news/${items.Title.replace(/ /g, "-").replace("?", "").toLowerCase()}/${items.id}`} key={index}>
                  <div className='row blogListCard' key={index}>
                  <div className='col-3  d-flex align-items-center'>
                      <div className='blogCardImg'>
                          <LazyLoadImage
                            onError={event => {
                              event.target.src = "/image/blog.jpg"
                              event.onerror = null
                          }}
                          src={`${items.Image}`} alt={items.Alt_Text}/>
                      </div>
                  </div>
                  <div className='col-9'>
                      <div className='blogcardText'>
                          <div className='blogDate'> <span>{items.updated.slice(0, 10)}</span></div>
                          <h2 className='blogcardHeading'>{items.Title}</h2>
                          <p className='blogcardDescription'>   <div dangerouslySetInnerHTML={{ __html: items?.Description }} /></p>
                          <div className='row extra_function extra_function_destop '>
                              <div className='col-3'>
                                <span className='action_icons'><AiFillEye/></span>
                                <span>{items.ViewCount} Views</span>
                              </div>
                              <div className='col-3'>
                                <span className='action_icons'><BiCommentDetail/></span>
                                <span>20 Comment</span>
                              </div>
                              <div className='col-3'>
                                <span className='action_icons'><AiFillHeart/></span>
                                <span>40</span>
                              </div>
                              <div className='col-3'>
                                <span className='action_icons'><BsShareFill/></span>
                                <span>Share</span>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className='col-12'>
                  <div className='row extra_function extra_function_mobile '>
                              <div className='col-3'>
                                <span className='action_icons'><AiFillEye/></span>
                                <span className=''>{items.ViewCount}</span>
                              </div>
                              <div className='col-3'>
                                <span className='action_icons'><BiCommentDetail/></span>
                                <span>20 </span>
                              </div>
                              <div className='col-3'>
                                <span className='action_icons'><AiFillHeart/></span>
                                <span>40</span>
                              </div>
                              <div className='col-3'>
                                <span className='action_icons'><BsShareFill/></span>
                                
                              </div>
                          </div>
                  </div>
                  </div>
                </Link>
              )
                   
               
              
            })
          }
          
        </div>
        : <DeliveryItemsCardSkeleton></DeliveryItemsCardSkeleton>}

    </div>
    </React.Fragment>
  )
}

export default Allblogs