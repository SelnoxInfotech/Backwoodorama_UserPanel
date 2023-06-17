import Dialog from "@mui/material/Dialog"
import React from "react"
import Button from "@mui/material/Button"
import { MdEdit } from "react-icons/md"
import TextField from "@mui/material/TextField"
import useStyles from "../../../../../../Style"
import { RiCloseCircleFill } from "react-icons/ri"
import { Box } from "@mui/material"
import  LoadingButton from "@mui/lab/LoadingButton"
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
            <Button onClick={handleClickOpen} startIcon={<MdEdit color="#707070" size={20} />}>
                Edit
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.EditUserNamePopup}>
                <div className="container-fluid py-4 px-4">
                    <div className="row">
                        <div className="col-12 text-end edit_userName_col">
                            <RiCloseCircleFill color="#707070" size={24} />
                        </div>
                        <div className="col-12 edit_userName_col">
                            <h1 className="editUserHeading">Edit User</h1>
                        </div>

                    </div>
                    <form>
                    <div className="row">
                        <div className="col-12 edit_userName_col">
                          <label className="editUserLabel" htmlFor="User Name">Name</label>
                        </div>
                        <div className="col-12 edit_userName_col_textfield">
                             <TextField id="User Name" variant="filled" fullWidth InputProps={{disableUnderline:true}} placeholder="Maxwell"/>
                        </div>

                    </div>
                    <Box className={`mt-4 ${classes.editEmail_loadingBtn}`}>
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
export default EditUserName