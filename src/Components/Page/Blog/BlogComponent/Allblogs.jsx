import React, { useEffect, useState } from 'react'
import {getAllNews } from '../../../../Api/Api.jsx';
import { AiFillHeart , AiFillEye} from "react-icons/ai";
import {  BiCommentDetail } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";

const Allblogs = () => {
const[allblogs,setallblogs] = useState([])


  useEffect(()=>{
   const news= getAllNews()
   news.then((res)=>{
      setallblogs(res);
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div>
        <h2 className='section_main_title'>Read blogs from weedx</h2>
        <div className='blogListWrapper'>
          {
            allblogs.map((items,index)=>{
              return   (<div className='row blogListCard' key={index}>
              <div className='col-3'>
                  <div className='blogCardImg'>
                      <img src={`https://api.cannabaze.com/${items.Image}`} alt={items.Alt_Text}/>
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
                            <span>40 Views</span>
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
                            <span className=''>40 </span>
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
          </div>)
                   
               
              
            })
          }
          
        </div>
    </div>
  )
}

export default Allblogs