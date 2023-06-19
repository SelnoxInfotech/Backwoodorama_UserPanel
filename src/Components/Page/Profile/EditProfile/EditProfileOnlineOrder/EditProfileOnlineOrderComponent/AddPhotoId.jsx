import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { AiFillPlusCircle } from "react-icons/ai"
import { IoCloseCircle } from "react-icons/io5"
import { Box } from '@mui/system';
import useStyles from '../../../../../../Style';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillCamera } from "react-icons/ai"
import LoadingButton from "@mui/lab/LoadingButton"

const AddPhotoId = () => {
    const classes = useStyles()
    const [Open, SetOpen] = React.useState(false)
    const handleClick = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
    return (
        <div>
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClick} startIcon={<AiFillPlusCircle color='#707070' size={20} />}>
                Add
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.addPhotoPopup} >
                <div className='container-fluid my-4 px-4'>
                    <div className='row'>
                        <div className='col-12 text-end AddPhotoIdPoppup_col'>
                            <IoCloseCircle size={22} color='#707070' />
                        </div>
                        <div className='col-12 AddPhotoIdPoppup_col'>
                            <h1 className='photoId_heading'>Photo Id Upload</h1>
                        </div>

                    </div>
                    <form>
                    <div className='row'>
                        <div className='col-12 add_photos_col_container'>
                            <section className='addphoto_section'>
                                <div className='add_photo_container'>
                                    <LazyLoadImage src='./image/user.webp'className='add_photo_size'/>
                                </div>
                                <div className="add_photo_label_div">
                                    <label for="Add photo" className="add_photo_label">
                                        <div className='center'>
                                        <AiFillCamera color="#707070" size={22} />
                                        </div>
                                        <div className="changePhoto_title mx-0">Change photo</div>

                                        <input type="file" hidden id="Add photo"/>
                                    </label>
                                </div>
                               
                            </section>

                        </div>

                    </div>
                    <Box className={` mt-4 ${classes.editEmail_loadingBtn}`}>
                        <LoadingButton>Save</LoadingButton>
                    </Box>
                    <Box className={`mt-4 ${classes.editEmail_loadingBtn_cancel}`}>
                        <LoadingButton>Cancel</LoadingButton>
                    </Box>
                    </form>
                </div>
            </Dialog>

        </div>
    )
}
export default AddPhotoId