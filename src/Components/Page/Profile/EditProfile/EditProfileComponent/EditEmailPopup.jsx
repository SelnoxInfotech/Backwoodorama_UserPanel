import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { Box } from "@mui/material"
import useStyles from "../../../../../Style"
import LoadingButton from '@mui/lab/LoadingButton';
import { MdEdit } from 'react-icons/md';
import {RiCloseCircleFill} from "react-icons/ri"
import IconButton from '@mui/material/IconButton';
const EditEmailPopup = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [closePopup,SetclosePopup]=React.useState(true)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
  
    return (

        <div>
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClickOpen} startIcon={<MdEdit/>}>
                Edit
            </Button>
                        <Dialog open={open} onClose={handleClose} className={classes.notification_dialogBox_width_height}>
                        <div className='container-fluid px-4'>
                        
                             <form>
                            <div className='row my-2'>
                                <div className='col-6 mt-4 EditEmailPopup_col_height'>
                                    <label className='EditEmail_pop_heading' htmlFor='edit email'>Email Edit</label>
                                </div>
                                <div className='col-6 text-end mt-4 EditEmailPopup_col_height'>
                                <IconButton onClick={handleClose} aria-label="closebutton"><RiCloseCircleFill color='#949494' size={24}/></IconButton>
        
                                </div>
        
        
                            </div>
                            <div className='row'>
                                <div className='col-12  EditEmailPopup_col_height'>
                                    <TextField id="edit email" 
                                    className={`${classes.FilledTextFieldStyle}`}
                                    fullWidth
                                    placeholder='maxwel@gmail.com' variant="filled" />
                                </div>
        
                            </div>
        
        
                            <Box
                                className={`edit_emailPopUp_btn_container ${classes.editEmail_loadingBtn}`}
                            >
                                <LoadingButton id='EditEmailSave' variant="outlined" >Save</LoadingButton>
                            </Box>
                            <Box
                                className={`edit_emailPopUp_btn_container ${classes.editEmail_loadingBtn_cancel}`}
                            >
                                <LoadingButton id='EditEmailSave' variant="outlined" >cancel</LoadingButton>
                            </Box>
                            </form>
                            </div>

                    </Dialog>

        </div>
    )
}
export default EditEmailPopup