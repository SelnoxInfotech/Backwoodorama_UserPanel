
import Dialog from "@mui/material/Dialog"
import React from "react"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import useStyles from "../../../../../../Style"
import { MdEdit } from "react-icons/md"
import MuiPhoneNumber from "material-ui-phone-number"
import LoadingButton from "@mui/lab/LoadingButton"
import { AiFillPlusCircle } from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import {RiCloseCircleFill} from "react-icons/ri"

const AddMobileNumberPopup = () => {
    const [Open, SetOpen] = React.useState(false)
    const classes = useStyles()
    const handleClickOpen = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
    return (
        <div>
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClickOpen} startIcon={<AiFillPlusCircle color="#707070" size={20} />}>Add</Button>
            <Dialog open={Open} onClose={handleClose} className={`${classes.AddMobilePopup}`}>
                <div className="container-fluid py-4 px-4">
                    <div className="row">
                        <div className="col-12 text-end AddMobileNo_col">
                        <IconButton aria-label="closebutton"><RiCloseCircleFill color='#949494' size={24}/></IconButton>
                        </div>
                        <div className="col-12 AddMobileNo_col">
                            <h1 className="addMobileNumberPopup_heading">Add Mobile Number</h1>

                        </div>

                    </div>
                    <form>
                    <div className="row">
                        <div className="col-12 AddMobileNo_col ">
                            <label htmlFor="mobileNo">Mobile Number</label>

                        </div>
                        <div className="col-12 mt-2 AddMobileNo_col">
                            <MuiPhoneNumber style={{outline:"0px 1px green"}} id="mobileNo"  defaultCountry="in" fullWidth="true" />

                        </div>
                        <section className="mobile_notification ">
                            <p className="mobile_send_code">We'll send you a code to verify your number </p>
                        </section>

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
export default AddMobileNumberPopup