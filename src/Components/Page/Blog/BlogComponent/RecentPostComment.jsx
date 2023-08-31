import React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
import {Post_Comment} from "../../../../Api/Api"
const RecentPostComment = ({id , GetUserComment , SetUserComment }) => {
    const classes = useStyles()
    function WriteComment(e) {
        SetUserComment({...GetUserComment,"UserComment":e.target.value})
    }
    console.log(GetUserComment)
    const PostComment = async()=>{
        console.log(GetUserComment.UserComment )

    await Post_Comment(id,GetUserComment.UserComment).then((res) => {
            console.log(res)
            // SetUserComment(res.data.Comments)    
        }).catch((error) => {
            console.log(error)
        })

    }


    return (
        <React.Fragment>
            <div className="col-12 recentPost_comment_container px-0">
                <div className="recentPost_commentInner_cont">
                    <div className="mt-2 recentPostComment_head_cont">
                        <h2 className="recentPostComment_head">Comment</h2>
                    </div>
                    <div className="recentPostComment_editor_cont mt-2">
                        <textarea value={GetUserComment.UserComment} onChange={WriteComment} className="BolgCommentBOx" rows="4" cols="50">
                            {/* {GetUserComment} */}
                            {/* {'0'} */}
                        </textarea>
                    </div>
                    <div className="col-12 p x-0  recentPostBtnCenter mt-4">

                        <Box
                            className={`recentPostBox_width1 ${classes.recentPostCancelBtn}`}
                        >
                            <LoadingButton variant="outlined">Cancel</LoadingButton>
                        </Box>
                        <Box
                            className={`recentPostBox_width2 ${classes.recentPostCancelBtn2}`}
                        >
                            <LoadingButton onClick={PostComment} variant="outlined">Save</LoadingButton>
                        </Box>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}
export default RecentPostComment