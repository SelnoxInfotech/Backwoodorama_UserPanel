import React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../../Style";
const RecentPostComment = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <div className="col-12 recentPost_comment_container px-0">
                <div className="recentPost_commentInner_cont">
                    <div className="mt-2 recentPostComment_head_cont">
                        <h1 className="recentPostComment_head">Comment</h1>
                    </div>
                    <div className="recentPostComment_editor_cont mt-2">

                    </div>
                    <div className="col-12 px-0  recentPostBtnCenter mt-4">

                    <Box
                        className={`recentPostBox_width1 ${classes.recentPostCancelBtn}`}
                    >
                        <LoadingButton  variant="outlined">Cancel</LoadingButton>
                    </Box>
                    <Box
                        className={`recentPostBox_width2 ${classes.recentPostCancelBtn2}`}
                    >
                        <LoadingButton  variant="outlined">Save</LoadingButton>
                    </Box>
                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}
export default RecentPostComment