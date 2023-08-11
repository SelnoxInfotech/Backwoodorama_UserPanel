
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
import { useForm } from "react-hook-form";
import Cookies from 'universal-cookie';
import Axios from 'axios';
const AddDeliveryAddressPopup = ({ DeliveryAddress, Api, SetApi }) => {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const { register, handleSubmit, errors, reset ,setError} = useForm();
    const classes = useStyles()
    const [Address ,  SetAddress] =  React.useState('')
    const [Open, SetOpen] = React.useState(false)
    const handleClickOpen = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
    const onSubmit = (data) => {
        Axios.post(`https://sweede.app/UserPanel/Update-UpdateUserProfile/`,
            {
                DeliveryAddress: data.DeliveryAddress
            },
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
                ,
            }
        )
            .then((res) => {
                reset(Address)
                SetOpen(false);
                SetApi(!Api)
            })
            .catch((error) => {
                console.log(error.response.data.error.username[0])
                setError("Username", {
                    type: "manual",
                    message: error.response.data.error.username[0],
                })
            })
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
                        <IconButton onClick={handleClose} aria-label="closebutton"><RiCloseCircleFill color='#949494' size={24}/></IconButton>
                        </div>
                        <div className="col-12 addDeliverAddress_col">
                            <h1 className='deliveryAddress_heading'>Add delivery address</h1>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='col-12 addDeliverAddress_col'>
                            <label htmlFor='deliveryaddress'>Delivery Address</label>
                        </div>
                        <div className='col-12 addDeliveryAddress_textfield_col mt-2'>
                            <TextField 
                            variant='filled'
                            fullWidth 
                            id="deliveryaddress"
                            onChange={(e)=>SetAddress(e.target.value)}
                            placeholder={DeliveryAddress}
                            name='DeliveryAddress'
                            inputRef={register({
                                required: "Address is required*.",

                            })}
                            value={Address}
                            className={`${classes.FilledTextFieldStyle}`}
                            error={Boolean(errors?.DeliveryAddress)}
                            helperText={errors.DeliveryAddress?.message}
                             />
                        </div>

                    </div>
                    <Box className={` mt-4 ${classes.editEmail_loadingBtn}`}>
                        <LoadingButton type='submit'>Save</LoadingButton>
                    </Box>
                    <Box className={` mt-4 ${classes.editEmail_loadingBtn_cancel}`}>
                        <LoadingButton onClick={handleClose}>Cancel</LoadingButton>
                    </Box>
                    </form>
                </div>
            </Dialog>

        </div>
    )
}
export default AddDeliveryAddressPopup