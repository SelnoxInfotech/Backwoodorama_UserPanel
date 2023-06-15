import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/material"
import useStyles from "../../../../../Style"
import { IoCloseSharp } from "react-icons/io5"
import LoadingButton from '@mui/lab/LoadingButton';

const EditEmailPopup = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose} className={classes.notification_dialogBox_width_height}>
                <div className='container-fluid px-4'>
                

                    <div className='row my-2'>
                        <div className='col-6 mt-4 EditEmailPopup_col_height'>
                            <h1 className='EditEmail_pop_heading'>Email Edit</h1>
                        </div>
                        <div className='col-6 text-end mt-4 EditEmailPopup_col_height'>
                            <IoCloseSharp />
                        </div>


                    </div>
                    <div className='row'>
                        <div className='col-12  EditEmailPopup_col_height'>
                            <TextField id="filled-basic" fullWidth label="Filled" variant="filled" />
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
                    </div>
            </Dialog>
        </div>
    )
}
export default EditEmailPopup