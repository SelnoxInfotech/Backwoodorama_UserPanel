
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { Box } from "@mui/material"
import LoadingButton  from '@mui/lab/LoadingButton';
import useStyles from '../../../../../Style';
import { MdEdit } from "react-icons/md"
import {RiCloseCircleFill} from "react-icons/ri"
const EditUserPopup = () => {
    const classes=useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClickOpen} startIcon={< MdEdit color="#707070" size={18}/>}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} className={`${classes.notification_user_dialogBox_width_height}`}>
                <div className='container-fluid px-4'>
                    <div className='row'>
                        <div className='col-12 text-end mt-4 EditUser_col_div'>
                           <LoadingButton  startIcon={<RiCloseCircleFill color='gray' size={24}/>}></LoadingButton>
                        </div>
                        <form>
                        <div className='col-12 mt-4 EditUser_col_div'>
                          <label className='Edit_userName' htmlFor='Edit User Name'>Edit User Name</label>
                        </div>
                        <div className='col-12 mt-4 EditUser_col_div'>
                          <TextField  InputProps={{disableUnderline:true}}  placeholder='Maxwell' fullWidth variant="filled" id='Edit User Name'/>
                        </div>
                    <Box
                        className={`edit_UserPopUp_btn_container mt-4 ${classes.editEmail_loadingBtn}`}
                    >
                        <LoadingButton variant="outlined" >Save</LoadingButton>
                    </Box>
                    <Box
                        className={`edit_UserPopUp_btn_container mt-4 ${classes.editEmail_loadingBtn_cancel}`}
                    >
                        <LoadingButton variant="outlined" >cancel</LoadingButton>
                    </Box>
                    </form>
                </div>
                </div>


            </Dialog>
        </div>

    )
}
export default EditUserPopup