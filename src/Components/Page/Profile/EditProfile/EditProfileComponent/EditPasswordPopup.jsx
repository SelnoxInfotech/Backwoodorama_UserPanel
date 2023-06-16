import React from "react"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import Button from "@mui/material/Button"
import { IoCloseCircle } from "react-icons/io5"
import {AiFillEye} from "react-icons/ai"
import {BsFillEyeSlashFill} from "react-icons/bs"
import { Box } from "@mui/material";
import useStyles from "../../../../../Style"
import { InputAdornment } from "@material-ui/core"
import  LoadingButton  from "@mui/lab/LoadingButton"
import { MdEdit } from "react-icons/md"
const EditPasswordPopup = () => {
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
            <Button  startIcon={<MdEdit color="#707070" size={18}/>} onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.editPwd_Popup_dialog}>
                <div className="container-fluid px-4">
                    <div className="row ">
                        <div className="col-12 text-end mt-4 editPassword_Col">
                            <IoCloseCircle color="#707070" size={22} />
                        </div>
                        <div className="col-12 mt-4 editPassword_Col">
                            <h1 className="editPassword_heading">Edit password</h1>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 editPassword_Col">
                          <label className="editPassword_label" htmlFor="current password">Current Password</label>
                        </div>
                        <div className="col-12 editPassword_Col_textfield mt-2">
                            <TextField id="current password"
                             InputProps={{
                                disableUnderline:true,
                                endAdornment:(
                                    <InputAdornment position="end">
                                    <AiFillEye color="#707070" size={22}/>
                                    </InputAdornment>
                                )
                            }} 
                             variant="filled" placeholder="Current password" fullWidth/>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 mt-4">
                           <label htmlFor="forgot password">Forgot Password</label>
                        </div>
                        <div className="col-12 editPassword_Col_textfield mt-2">
                            <TextField id="forgot password"
                             InputProps={{
                                disableUnderline:true,
                                endAdornment:(
                                    <InputAdornment position="end">
                                        <AiFillEye color="#707070" size={22}/>
                                    </InputAdornment>
                                )
                            }}
                              placeholder="Forgot password" variant="filled" fullWidth/>
                        </div>

                    </div>
                    <Box className={`mt-4 ${classes.editEmail_loadingBtn}`}>
                        <LoadingButton >Save</LoadingButton>
                    </Box>
                    <Box className={`mt-4 ${classes.editEmail_loadingBtn_cancel}`}>
                        <LoadingButton>Cancel</LoadingButton>
                    </Box>
                
                </div>
            </Dialog>
        </div>
    )
}
export default EditPasswordPopup