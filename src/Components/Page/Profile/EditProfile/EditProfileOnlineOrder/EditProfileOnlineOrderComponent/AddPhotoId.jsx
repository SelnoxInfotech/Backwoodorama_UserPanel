import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { AiFillPlusCircle } from "react-icons/ai"
import IconButton from '@mui/material/IconButton';
import { RiCloseCircleFill } from "react-icons/ri"
import { Box } from '@mui/system';
import useStyles from '../../../../../../Style';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillCamera } from "react-icons/ai"
import LoadingButton from "@mui/lab/LoadingButton"
import Cookies from 'universal-cookie';
import Axios from 'axios';
const AddPhotoId = ({ image, Api, SetApi }) => {
    const classes = useStyles()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [image1, Setimage] = React.useState(null)
    const [Open, SetOpen] = React.useState(false)
    const [Error, SetError] = React.useState('')
    const handleClick = () => {
        SetOpen(true)
    }
    const handleClose = () => {
        SetOpen(false)
    }


    const handleImage = (event) => {
        const file = event.target.files[0];
        // console.log(file.size)
        if (file.size <  76429) {

            Setimage(event.target.files[0]);
            setSelectedImage(URL.createObjectURL(event.target.files[0]))
            SetError('')
        }
        else {
            SetError('File size large')
        }

    }
    const Submit = () => {
        const formdata = new FormData();
        formdata.append('image', image1);
        Axios.post(`https://sweede.app/UserPanel/Update-UpdateUserProfile/`,
            formdata,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
                ,
            }
        )
            .then((res) => {
                // reset(Address)
                SetOpen(false);
                SetApi(!Api)
            })
            .catch((error) => {
                // console.log(error.response.data.error.username[0])
                // setError("Username", {
                //     type: "manual",
                //     message: error.response.data.error.username[0],
                // })
            })
    }
    return (
        <div>
            <Button className={`${classes.EditProfileBtn_Color}`} onClick={handleClick} startIcon={<AiFillPlusCircle color='#707070' size={20} />}>
                Add
            </Button>
            <Dialog open={Open} onClose={handleClose} className={classes.addPhotoPopup} >
                <div className='container-fluid my-4 px-4'>
                    <div className='row'>
                        <div className='col-12 text-end AddPhotoIdPoppup_col'>
                            <IconButton onClick={handleClose} aria-label="closebutton"><RiCloseCircleFill color='#949494' size={24} /></IconButton>
                        </div>
                        <div className='col-12 AddPhotoIdPoppup_col'>
                            <h1 className='photoId_heading'>Photo Id Upload</h1>
                        </div>

                    </div>
                    <form>
                        <div className='row'>
                            <div className='col-12 add_photos_col_container mt-4'>
                                <section className='addphoto_section'>
                                    <div className='add_photo_container'>
                                        {
                                            selectedImage !== null ? <LazyLoadImage src={selectedImage} alt='' className='add_photo_size' />
                                                :
                                                <LazyLoadImage
                                                    onError={event => {
                                                        event.target.src = "./image/user.webp"
                                                        event.onerror = null
                                                    }}
                                                    src={`https://sweede.app/${image}`}
                                                    // src={image}
                                                    alt=''
                                                    className='add_photo_size'
                                                />
                                        }

                                        {/* <LazyLoadImage src='./image/user.webp' className='add_photo_size' /> */}
                                    </div>
                                    <div className="add_photo_label_div">
                                        <label htmlFor="Add photo" className="add_photo_label">
                                            <div className='center'>
                                                <AiFillCamera color="#707070" size={22} />
                                            </div>
                                            <div className="changePhoto_title mx-0">Change photo</div>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                hidden
                                                id="Add photo"
                                                name="myImage"
                                                onChange={(event) => {
                                                    // Setimage(event.target.files[0]);
                                                    // setSelectedImage(URL.createObjectURL(event.target.files[0])
                                                    handleImage(event)
                                                }}
                                            />
                                        </label>
                                    </div>

                                </section>

                            </div>

                        </div>
                        {Error !== '' && <p style={{color:"red"}}>{Error}</p>}
                        <Box className={` mt-4 ${classes.editEmail_loadingBtn}`}>
                            <LoadingButton onClick={Submit}>Save</LoadingButton>
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
export default AddPhotoId