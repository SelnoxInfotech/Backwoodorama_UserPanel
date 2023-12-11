import React, { useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsStar ,BsStarFill } from "react-icons/bs";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Button from '@mui/material/Button';
import Cookies from 'universal-cookie';
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneLike } from "react-icons/ai";
import Badge from '@mui/material/Badge';
import Createcontext from "../../../Hooks/Context"
import useStyles from "../../../Style";
import {StoreHelpFull} from '../../../Api/Api';
const Myreview = () => {
    const Navigate= useNavigate()
    const classes = useStyles()
    const [allreiew,setallreviews]=useState([])
    const cookies = new Cookies();
    const { state, dispatch } = React.useContext(Createcontext);
    function HellFull (ReviewId){
        StoreHelpFull(ReviewId.id ,state.Profile.id).then((res)=>{

        }).catch(()=>{
        })
       }

    const token_data = cookies.get('Token_access')
    React.useEffect(()=>{
        axios.get('https://api.cannabaze.com/UserPanel/Get-ProductReviewbyUser/',
        {
            headers: { Authorization: `Bearer ${token_data}` }
        }).then((res)=>{
            setallreviews(res.data)
        })
    },[])
    function calculateTImefromDate(value){
        //  new Date() = 'Mon Nov 20 2023 13:00:15 GMT+0530 (India Standard Time)'
      let diffTime = Math.abs(new Date().valueOf() - new Date(value).valueOf());
      let months = Math.trunc( diffTime / (24*60*60*1000)/30);
      let days = diffTime / (24*60*60*1000);
      let hours = (days % 1) * 24;
      let minutes = (hours % 1) * 60;
      let secs = (minutes % 1) * 60;
      [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]
     
     if(months !==0){
        return months + " Month ago"
     }else if(days !== 0)
      {
        return days + " days ago"
      }
      else if(hours !== 0){
        return hours + " hours ago"
      }
      else if(minutes !== 0){
        return minutes + " minutes ago"
      }
      else {
        return secs + " secs ago"
      }
      }

  return (
    <div className='container'>
        <div className='myreviewContainer'>
            <div className='w-100 d-flex gap-2 align-items-center my-4'>
               <span><IconButton onClick={() => Navigate('-1')}><MdOutlineKeyboardArrowLeft color="#000000"/></IconButton></span><span onClick={() => Navigate(-1)} className="BackPageBtn">Back</span>
            </div>
            
            <div className='reviews'>
                {
                    allreiew?.length !== 0 &&
                    allreiew?.map((item)=>{
                        return <div className='myreviewBox'>
                        <div className='reviewHeaders mb-sm-4 mb-3 d-flex gap-3'>
                            <div className='productReviewImg'>
                                <div className='productreview_imgcircle'>
                                    <img src={item.userImage}   alt="img" / >
                                </div>
                            </div>
                            <div className='productReviewText'>
                                <h2 className='producRRRtitle'>{item.ProductName}</h2>
                                <h4>{calculateTImefromDate(item.created_at)}</h4>
                            </div>
                        </div>
                        <div className="product_cart_review">
                                                                {4 &&  new Array(item.rating).fill(null).map(() => (
                                                                    <BsStarFill size={16} color="#31B665" className="product_search_rating_star" />  
                                                                ))}
                                                                
                                                                {new Array(5- item.rating).fill(null).map(() => (
                                                                    <BsStar size={16} color="#31B665" className="product_search_rating_star" />  
                                                                ))}
                        </div>
                        <h2 className="Myreview_titile">{item.Title}</h2>
                        <p className='myreviewComment'>{item.comment}</p>
                        <div className='myreview_footer'>
                        <Button className={item?.helpfull?.includes(state?.Profile?.id) ? classes.donehelpfullBtn_Color : classes.WritehelpfullBtn_Color} variant="outlined" onClick={() =>{  state.login ? HellFull(item) : Navigate("/login")  }}>
                                  Helpfull  <Badge badgeContent={item?.count} className={classes.sliderLink_badge}>
                                             {item?.helpfull?.includes(state?.Profile?.id) ? <AiTwotoneLike color='#31B655' size={25} onClick={() =>{  state?.login ? HellFull(item) : Navigate('/login')  }}/> : <AiOutlineLike color='#31B655' size={25} onClick={() =>{  state.login ? HellFull(item) : Navigate("/login")  }}/>} 
                                            </Badge>
                       </Button>
                         </div>
                    </div>
                    })
                
            }
            </div>
        </div>
   </div>
  )
}

export default Myreview