import Dialog from "@mui/material/Dialog"
import React from "react"
import Button from "@mui/material/Button"
import { MdEdit } from "react-icons/md"
import TextField from "@mui/material/TextField"
import useStyles from "../../../../../../Style"
import { Box } from "@mui/material"
import  LoadingButton from "@mui/lab/LoadingButton"
import {RiCloseCircleFill} from "react-icons/ri"
import IconButton from '@mui/material/IconButton';
const EditUserName = () => {
    const classes = useStyles()
    const [Open, SetOpen] = React.useState(false)
    const handleClickOpen = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
    return (
        <div>
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClickOpen} startIcon={<MdEdit color="#707070" size={20} />}>
                Edit
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.EditUserNamePopup}>
                <div className="container-fluid py-4 px-4">
                    <div className="row">
                        <div className="col-12 text-end edit_userName_col">
                        <IconButton aria-label="closebutton"><RiCloseCircleFill onClick={handleClose} color='#949494' size={24}/></IconButton>
                        </div>
                        <div className="col-12 edit_userName_col">
                            <h1 className="editUserHeading">Edit User</h1>
                        </div>

                    </div>
                    <form>
                    <div className="row">
                        <div className="col-12 edit_userName_col">
                          <label className="editUserLabel" htmlFor="UserName">Name</label>
                        </div>
                        <div className="col-12 edit_userName_col_textfield">
                             <TextField id="UserName"
                              variant="filled" fullWidth 
                               placeholder="Maxwell"
                               className={`${classes.FilledTextFieldStyle}`}
                               />
                        </div>

                    </div>
                    <Box className={`mt-4 ${classes.editEmail_loadingBtn}`}>
                        <LoadingButton onClick={handleClose}>Save</LoadingButton>
                    </Box>
                    <Box className={`mt-4 ${classes.editEmail_loadingBtn_cancel}`}>
                        <LoadingButton onClick={handleClose}>Cancel</LoadingButton>
                    </Box>
                    </form>

                </div>
            </Dialog>
        </div>
    )
}
export default EditUserName