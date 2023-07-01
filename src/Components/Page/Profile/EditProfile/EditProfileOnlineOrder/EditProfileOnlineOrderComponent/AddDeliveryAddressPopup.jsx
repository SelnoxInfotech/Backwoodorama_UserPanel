
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { AiFillPlusCircle } from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import {RiCloseCircleFill} from "react-icons/ri"
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from '../../../../../../Style';
import { Box } from '@mui/system';
const AddDeliveryAddressPopup = () => {
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
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClickOpen} startIcon={<AiFillPlusCircle size={18} color='#707070' />}>
                Add
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.addDeliverAddress}>
                <div className="container-fluid my-4 px-4">
                    <div className="row">
                        <div className='col-12 text-end addDeliverAddress_col'>
                        <IconButton aria-label="closebutton"><RiCloseCircleFill color='#949494' size={24}/></IconButton>
                        </div>
                        <div className="col-12 addDeliverAddress_col">
                            <h1 className='deliveryAddress_heading'>Add delivery address</h1>
                        </div>
                    </div>
                    <form>
                    <div className='row'>
                        <div className='col-12 addDeliverAddress_col'>
                            <label htmlFor='delivery address'>Delivery Address</label>
                        </div>
                        <div className='col-12 addDeliveryAddress_textfield_col mt-2'>
                            <TextField variant='filled' fullWidth id="delivery address" InputProps={{ disableUnderline: true }} />
                        </div>

                    </div>
                    <Box className={` mt-4 ${classes.editEmail_loadingBtn}`}>
                        <LoadingButton>Save</LoadingButton>
                    </Box>
                    <Box className={` mt-4 ${classes.editEmail_loadingBtn_cancel}`}>
                        <LoadingButton>Cancel</LoadingButton>
                    </Box>
                    </form>
                </div>
            </Dialog>

        </div>
    )
}
export default AddDeliveryAddressPopup