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
import { useForm } from "react-hook-form";
import Cookies from 'universal-cookie';
import Axios from 'axios';
const AddDateOfBirth = ({ Profile, Api, SetApi }) => {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const { register, handleSubmit, errors, reset, setError } = useForm();
    const classes = useStyles()
    const [Open, SetOpen] = React.useState(false)
    const handleClick = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
    const onSubmit = (data) => {
        Axios.post(`https://api.cannabaze.com/UserPanel/Update-UpdateUserProfile/`,
            {
                DateOfBirth: data.DateOfBirth,
            },
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
                ,
            }
        )
            .then((res) => {
                reset()
                SetOpen(false);
                SetApi(!Api)
            })
            .catch((error) => {
               
                setError("Email", {
                    type: "manual",
                    message: error.response.data.error.email[0],
                })
            })
    }
    return (
        <div>
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClick} startIcon={<AiFillPlusCircle color='#707070' size={20} />}>
                Add
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.addDateOfBirthPopup} >
                <div className='container-fluid py-4 px-4'>
                    <div className='row'>
                        <div className='col-12 text-end dobCol'>
                            <IconButton aria-label="closebutton" onClick={handleClose}><RiCloseCircleFill color='#949494' size={24} /></IconButton>
                        </div>
                        <div className='col-12 addDateOfBirth_label mt-2'>
                            <h2 className='dob_heading'>Add Date of Birth</h2>

                        </div>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='row mt-4'>
                            <div className='col-12 addDateOfBirth_label'>
                                <label htmlFor='DOB'>Date of Birth</label>
                            </div>
                            <div className='col-12 AddDateOfBirth_textField_col mt-2'>
                                <TextField
                                    id="DOB"
                                    fullWidth
                                    className={`${classes.FilledTextFieldStyle}`}
                                    type='date'
                                    defaultValue={Profile.DateOfBirth || ''}
                                    name='DateOfBirth'
                                    variant='filled'
                                    inputRef={register({
                                        required: "Date Of Birth required*.",

                                    })}
                                    error={Boolean(errors?.DateOfBirth)}
                                    helperText={errors.DateOfBirth?.message}
                                />
                            </div>

                        </div>
                        <Box className={` mt-5 ${classes.editEmail_loadingBtn}`}>
                            <LoadingButton type='submit'>Save</LoadingButton>
                        </Box>
                        <Box className={`mt-5 ${classes.editEmail_loadingBtn_cancel}`}>
                            <LoadingButton onClick={handleClose}>Cancel</LoadingButton>
                        </Box>
                    </form>

                </div>

            </Dialog>

        </div>
    )
}
export default AddDateOfBirth