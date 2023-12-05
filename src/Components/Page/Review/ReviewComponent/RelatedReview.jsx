import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillLike } from "react-icons/ai"
import { BsStar, BsStarFill } from "react-icons/bs";
import Button from '@mui/material/Button';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import Select from '@mui/material/Select';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { BsThreeDotsVertical } from "react-icons/bs"
import useStyles from "../../../../Style";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import React from 'react';
import Badge from '@mui/material/Badge';
import ReportReviewPopup from '../ReviewPopup/ReportReviewPopup';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import Createcontext from "../../../../Hooks/Context"
const RelatedReview = ({ handleEdit, storeDetails, AllReview, handleDelete, HellFull}) => {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const classes = useStyles();
    const navigate = useNavigate();
    const { state, dispatch } = React.useContext(Createcontext);
    const [readopen, setreadopen] = useState(true);
    function textgive(text) {
        let arrofstr = text?.split(' ');
        let finalstr = ""
        if (arrofstr?.length >= 100 && readopen) {

            for (let i = 0; i < 100; i++) {
                finalstr += `${arrofstr[i]} `
            }
        } else {
            finalstr = text
        }
        return finalstr
    }

    const moveObject = (arr, targetKey, targetValue, newIndex) => {
        try {
            const target = arr.find(value => value[targetKey] === targetValue)
            if (target === undefined) {
                return arr;

            }
            else {
                const newArray = arr.filter(value => value[targetKey] !== targetValue)
                newArray.splice(newIndex, 0, target);
                return newArray;
            }
        }
        catch {
            return arr;
        }
    }

    // function commenthelpful(ele){
    //     console.log(token_data ,'token_data')
    //     console.log(ele.id)
    //     if (state.login) {
    //         axios.post("https://api.cannabaze.com/UserPanel/AddandUpdateHelpfullButton/", {   
    //             Review: ele.id,
    //             helpfull:true,
    //         },   {
    //             headers: { Authorization: `Bearer ${token_data}` }
    //           },).then((res)=>{
    //             console.log(res)
    //         })
    //       } else {
    //         navigate("/login")
    //       }
    // }
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
        <React.Fragment>
            <div className='container-fluid'>

                <div className="row center reviewCardWrapper">
                    {(state.login ? moveObject(AllReview, 'user', state.Profile.id, 0) : AllReview)?.map((ele, index) => {
                        const text = ele?.comment;
                        console.log(ele ,'ele')
                        console.log(ele.user)
                        return (

                            <div className="w-100 related_review_container" key={index}>
                                <div className="d-flex gap-2">
                                    <div className="related_img_container">

                                        <div className="related_review_image">

                                            <LazyLoadImage
                                                onError={event => {
                                                    event.target.src = "/image/user.webp"
                                                    event.onerror = null
                                                }}
                                                className='realted_review_images'
                                                src={`${ele?.userImage}`}
                                                alt="userImage"
                                            />
                                        </div>

                                    </div>
                                    <div className="related_review_content">

                                        <h3 className='reviews_title'>{ele.Title}</h3>
                                        <p className='reviews_writer'>{ele.username}</p>

                                        <div className="reviwerName_rating">

                                            <div className='reviewSectionRating'>
                                                {ele.rating && new Array(ele.rating).fill(null).map(() => (
                                                    <BsStarFill size={10} color="#31B665" className="product_search_rating_star" />
                                                ))}

                                                {new Array(5 - ele.rating).fill(null).map(() => (
                                                    <BsStar size={10} color="#31B665" className="product_search_rating_star" />
                                                ))}
                                            </div>
                                        </div>
                                        <div className='review_date'>
                                            {/* <p>{ele.created_at.slice(0, 10)?.split("-").reverse().join("-")}</p> */}
                                            <p>{calculateTImefromDate(ele.created_at)}</p>
                                            <span className='userreviewaction'> {
                                                state.login &&
                                                state.Profile.id === ele.user && <><Select

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


                                                        <ListItem button className={classes.orderEditListitem} onClick={() => handleDelete(ele.id)}>
                                                            <AiFillDelete color='31B665' />
                                                            Delete
                                                        </ListItem>
                                                        <ListItem button className={classes.orderEditListitem} onClick={() => handleEdit()}>

                                                            <FaEdit color='31B665' />
                                                            Edit
                                                        </ListItem>



                                                    </List>
                                                </Select>

                                                </>
                                            }</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='review_description_container'>

                                    <p>{textgive(text)}   {text?.split(' ')?.length >= 100 && <span className='band_shlebtn' onClick={() => setreadopen(!readopen)}>Read {readopen ? "More" : "Less"}</span>}</p>
                                </div>

                                {ele.Reply !== null && "Reply" in ele && ele.Reply !== "" &&
                                    <div className='container-fluid mx-2 review_reply'>
                                        <div className="d-flex gap-2">
                                            <div className="related_img_container">
                                                <div className="related_review_image">
                                                    <LazyLoadImage
                                                        onError={event => {
                                                            event.target.src = "/image/user.webp"
                                                            event.onerror = null
                                                        }}
                                                        className='realted_review_images'
                                                        src={`${storeDetails[0]?.Store_Image}`}
                                                        alt="userImage"
                                                    />
                                                </div>
                                            </div>
                                            <div className="related_review_content">

                                                <h3 className='reviews_title'>Response from the Owner</h3>
                                                <p className='reviews_writer'>{storeDetails[0]?.Store_Name}</p>
                                                <div className='review_date'>

                                                    <p>{calculateTImefromDate(ele?.ReplyTime)}</p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='review_description_container'>

                                            <p>{textgive(ele.Reply)}   {text?.split(' ')?.length >= 100 && <span className='band_shlebtn' onClick={() => setreadopen(!readopen)}>Read {readopen ? "More" : "Less"}</span>}</p>
                                        </div>

                                    </div>
                                }

                                <div className='related_review_footer '>

                                    <div className='related_review_footer_paragraph ellipsis'>
                                        <Button className={ ele.helpfull.includes(state.Profile.id) ? classes.WriteReviewBtn_Coloractive : classes.WriteReviewBtn_Color } variant="outlined" onClick={() => { HellFull(ele) }}> 
                                            <Badge badgeContent={ele?.count} className={classes.sliderLink_badge}>
                                              <AiFillLike />
                                            </Badge>
                                            Helpful
                                        </Button>
                                    </div>
                                    <div className='related_review_footer_paragraph ellipsis px-0'>

                                        <ReportReviewPopup />
                                    </div>


                                </div>
                            </div>



                        )
                    })}
                </div>
            </div>

        </React.Fragment>
    )
}
export default RelatedReview












