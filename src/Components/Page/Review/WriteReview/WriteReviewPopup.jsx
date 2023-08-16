import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useStyles from '../../../../Style';
import { RiCloseCircleFill } from "react-icons/ri"
import { IconButton } from '@mui/material';
import { Rating } from '@mui/material';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from "@mui/material"

const WriteReviewPopup = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Button className={classes.WriteReviewBtn_Color} variant="outlined" onClick={handleClickOpen}>
                Write a review
            </Button>
            <Dialog open={open} onClose={handleClose} className={classes.WriteReviewDialog}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 writeReviewContainer px-0'>
                            <div className='col-12 writeReviewCloseIconContainer'>
                                <IconButton onClick={handleClose} aria-label="closebutton"><RiCloseCircleFill color='#949494' size={24} /></IconButton>

                            </div>
                            <div className='col-12 writeReviewTextCenter'>
                                <h2 className='writeReviewHeadings'>Write a review</h2>
                                <h3 className='secRatingHeadings'>My rating</h3>
                                <Rating className={`mx-2 ${classes.WriteReviewStarIcons}`} name="read-only" value={4} readOnly />


                            </div>
                            <div className='col-12 px-4 py-4'>
                                <form>
                                    <div className='col-12'>
                                        <label className='writeReviewLabel' htmlFor='title'>Title</label>
                                        <TextField
                                            className={`${classes.FilledTextFieldStyle}`}

                                            id="title"
                                            placeholder='Title'
                                            variant='filled'
                                            fullWidth />
                                    </div>
                                    <div className='col-12 writReviewMarginTop'>
                                        <label className='writeReviewLabel' htmlFor='review'>Review</label>
                                        <textarea
                                            id="review"
                                            className="textinput" placeholder="Comment"></textarea>
                                    </div>
                                    <div className='col-12'>
                                        <Box
                                            className={`edit_UserPopUp_btn_container mt-4
                                              ${classes.editEmail_loadingBtn}`}
                                        >
                                            <LoadingButton type="submit" variant="outlined" >Submit</LoadingButton>
                                        </Box>
                                    </div>
                                </form>
                            </div>


                        </div>


                    </div>

                </div>
            </Dialog>
        </>
    )
}
export default WriteReviewPopup