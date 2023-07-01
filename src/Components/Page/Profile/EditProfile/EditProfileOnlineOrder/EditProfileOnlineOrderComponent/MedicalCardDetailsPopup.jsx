import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { AiFillPlusCircle } from "react-icons/ai"
import { Box } from '@mui/system';
import LoadingButton from "@mui/lab/LoadingButton"
import useStyles from '../../../../../../Style';
import IconButton from '@mui/material/IconButton';
import { RiCloseCircleFill } from "react-icons/ri"
const MedicalCardDetailsPopup = () => {
    const [Open, SetOpen] = React.useState(false)
    const handleClick = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
    const classes = useStyles()
    return (
        <div>
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClick} startIcon={<AiFillPlusCircle color='#707070' size={20} />}>
                Add
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.medicalCardDetail_dialog} >
                <div className='container-fluid py-4 px-4'>
                    <div className='row'>
                        <div className='col-12 text-end AddPhotoIdPoppup_col '>
                            <IconButton aria-label="closebutton"><RiCloseCircleFill color='#949494' size={24} /></IconButton>
                        </div>
                        <div className='col-12 medicalCard_col_height'>
                            <h1 className='medicalCard_heading'>Add Medical Card Informations</h1>

                        </div>

                    </div>
                    <form>
                        <div className='row'>
                            <div className='col-12 MedicalCard_label_div'>
                                <label htmlFor='medical card number'>Medical Card Number*</label>
                            </div>
                            <div className='col-12 medicalCard_col_height mt-2'>
                                <TextField type='number' id='medical card number' fullWidth variant='filled' InputProps={{ disableUnderline: true }} />
                            </div>

                        </div>
                        <div className='row mt-4'>
                            <div className='col-12 MedicalCard_label_div mt-2'>
                                <label htmlFor='ExpiryDates'>Medical Card Expiration*</label>
                            </div>
                            <div className='col-12 medicalCard_col_height mt-2'>
                                <TextField type="date" id=" ExpiryDates" fullWidth variant='filled' InputProps={{ disableUnderline: true }} />

                            </div>

                        </div>
                        <div className='row mt-4'>
                            <div className='col-12 MedicalCard_label_div mt-2'>
                                <label htmlFor='MedicalCardState'>Medical Card State*</label>
                            </div>
                            <div className='col-12 medicalCard_col_height mt-2'>
                                <TextField type="text" id=" MedicalCardState" fullWidth variant='filled' InputProps={{ disableUnderline: true }} />

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
export default MedicalCardDetailsPopup