import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { AiFillPlusCircle } from "react-icons/ai"
import { IoCloseCircle } from "react-icons/io5"
import { Box } from '@mui/system';
import useStyles from '../../../../../../Style';
const AddPhotoId = () => {
    const classes = useStyles()
    const [Open, SetOpen] = React.useState(false)
    const handleClick = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }
    return (
        <div>
            <Button onClick={handleClick} startIcon={<AiFillPlusCircle color='#707070' size={20}/>}>
                Add
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.addPhotoPopup} >
                <div className='container-fluid my-4 px-4'>
                    <div className='row'>
                        <div className='col-12 text-end AddPhotoIdPoppup_col'>
                            <IoCloseCircle size={22} color='#707070' />
                        </div>
                        <div className='col-12 AddPhotoIdPoppup_col'>
                            <h1 className='photoId_heading'>Photo Id Upload</h1>
                        </div>

                    </div>

                </div>
            </Dialog>

        </div>
    )
}
export default AddPhotoId