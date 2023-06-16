
import Dialog from "@mui/material/Dialog"
import React from "react"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"
import useStyles from "../../../../../../Style"
import { IoCloseCircle } from "react-icons/io5"
import { MdEdit } from "react-icons/md"
import MuiPhoneNumber from "material-ui-phone-number"
import LoadingButton from "@mui/lab/LoadingButton"
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
            <Button onClick={handleClickOpen} startIcon={<MdEdit color="#707070" size={20} />}>Add</Button>
            <Dialog open={Open} onClose={handleClose} className={`${classes.AddMobilePopup}`}>
                <div className="container-fluid py-4 px-4">
                    <div className="row">
                        <div className="col-12 text-end AddMobileNo_col">
                            <IoCloseCircle size={22} color="#707070" />
                        </div>
                        <div className="col-12 AddMobileNo_col">
                            <h1 className="addMobileNumberPopup_heading">Add Mobile Number</h1>

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 AddMobileNo_col ">
                            <label>Mobile Number</label>

                        </div>
                        <div className="col-12 mt-2 AddMobileNo_col">
                            <MuiPhoneNumber defaultCountry="in" fullWidth="true" />

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

                </div>
            </Dialog>
        </div>
    )
}
export default AddMobileNumberPopup