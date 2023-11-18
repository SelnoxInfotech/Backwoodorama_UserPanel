import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiFillLike } from "react-icons/ai"
import { BsStar, BsStarFill } from "react-icons/bs";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton"
import { BsThreeDotsVertical } from "react-icons/bs"
import useStyles from "../../../../Style";
import React from 'react';
import ReportReviewPopup from '../ReviewPopup/ReportReviewPopup';
import { useState } from 'react';
import Createcontext from "../../../../Hooks/Context"
import { Delete_Review } from "../../Product/ProductApi"
const RelatedReview = ({ handleEdit, AllReview, handleDelete }) => {
    const classes = useStyles()
    const { state, dispatch } = React.useContext(Createcontext)
    const [readopen, setreadopen] = useState(true)
    const [Option, SetOption] = useState(false)
    function textgive(text) {
        let arrofstr = text.split(' ');
        let finalstr = ""
        if (arrofstr.length >= 100 && readopen) {

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

    function handleoption() {
        SetOption(!Option)
    }

    return (
        <React.Fragment>
            <div className='container-fluid'>

                <div className="row center reviewCardWrapper">
                    {(state.login ? moveObject(AllReview, 'user', state.Profile.id, 0) : AllReview)?.map((ele, index) => {
                        const text = ele?.comment;

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
                                        <p>{ele.username}</p>

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
                                            <p>{ele.created_at.slice(0, 10).split("-").reverse().join("-")}</p>
                                            {
                                                state.login &&
                                                state.Profile.id === ele.user &&  <span>
                                                    <IconButton
                                                        onClick={handleoption}

                                                        >
                                                            <BsThreeDotsVertical size={10}></BsThreeDotsVertical>

                                                    </IconButton>
                                                    {Option && <>
                                                    <option onClick={()=>handleDelete(ele.id)} >Delete</option>
                                                    <option onClick={()=>handleEdit()} >Edit</option>
                                                    </> }
                                                </span>
                                            }
                                        </div>
                                         </div>

                                    </div>
                                    <div className='review_description_container'>
                                       
                                        <p>{textgive(text)}   { text.split(' ').length >= 100 &&<span className='band_shlebtn' onClick={()=>setreadopen(!readopen)}>Read { readopen ? "More" : "Less"}</span>}</p>
                                    </div>
                                    <div className='related_review_footer '>
                                       
                                            <div className='related_review_footer_paragraph ellipsis'>
                                               <Button className={classes.WriteReviewBtn_Color} variant="outlined"> <AiFillLike/> Helpful</Button>
                                            </div>
                                            <div className='related_review_footer_paragraph ellipsis px-0'>
                                              
                                                <ReportReviewPopup/>
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












