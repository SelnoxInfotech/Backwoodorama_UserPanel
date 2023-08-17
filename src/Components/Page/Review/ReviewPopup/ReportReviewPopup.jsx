import React from "react"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useStyles from "../../../../Style";
import { RiCloseCircleFill } from "react-icons/ri"
import { IconButton } from '@mui/material';

const ReportReviewPopup = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button className={classes.WriteReviewBtn_Color} variant="outlined" onClick={handleClickOpen}>
                Report
            </Button>
            <Dialog open={open} onClose={handleClose} className={classes.WriteReviewDialog}>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-12 reportReviewContainer px-0">
                            <div className="col-12 closeBtnAndHeading">
                                <div className="col-6">
                                    <h2 className="reportPopupHeading">Report Review</h2>
                                </div>
                                <div className="col-6 reportReviewCloseIcons">
                                    <IconButton onClick={handleClose}><RiCloseCircleFill /></IconButton>
                                </div>
                            </div>
                            <form>
                                <div className="col-12 reportReviewContentContainer">
                                   <div className="col-12 ">
                                    <h3 className="reportWarningHeading">Are you sure you want to report this review?</h3>
                                   </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </Dialog>

        </React.Fragment>
    )
}
export default ReportReviewPopup