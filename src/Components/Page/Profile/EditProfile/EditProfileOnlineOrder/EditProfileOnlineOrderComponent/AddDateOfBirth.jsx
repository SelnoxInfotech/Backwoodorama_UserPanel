import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IoCloseCircle } from "react-icons/io5"

import Dialog from '@mui/material/Dialog';
import { AiFillPlusCircle } from "react-icons/ai"
import { Box } from '@mui/system';
import LoadingButton from "@mui/lab/LoadingButton"
import useStyles from '../../../../../../Style';
const AddDateOfBirth=()=>{
    const classes=useStyles()
        const [Open, SetOpen] = React.useState(false)
    const handleClick = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
    return(
        <div>
            <Button onClick={handleClick} startIcon={<AiFillPlusCircle color='#707070' size={20} />}>
             Add
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.addDateOfBirthPopup} >
                <div className='container-fluid py-4 px-4'>
                    <div className='row'>
                        <div className='col-12 text-end'>
                          <IoCloseCircle size={20} color='#707070'/>
                        </div>
                        <div className='col-12 addDateOfBirth_label mt-2'>
                            <h1 className='dob_heading'>Add Date of Birth</h1>

                        </div>

                    </div>
                    <form>
                    <div className='row mt-4'>
                        <div className='col-12 addDateOfBirth_label'>
                           <label htmlFor='DOB'>Date of Birth</label>
                        </div>
                        <div className='col-12 AddDateOfBirth_textField_col mt-2'>
                            <TextField id="DOB" fullWidth InputProps={{disableUnderline:true}} type='date' variant='filled'/>

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
export default AddDateOfBirth