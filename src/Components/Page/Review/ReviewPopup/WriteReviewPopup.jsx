import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import useStyles from '../../../../Style';
import { RiCloseCircleFill } from "react-icons/ri"
import { IconButton } from '@mui/material';
import { Rating } from '@mui/material';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box } from "@mui/material"
import { useForm } from "react-hook-form";
import Createcontext from "../../../../Hooks/Context"
import { useNavigate } from 'react-router-dom';
import {Add_Review,Get_UserComment,Get_Review} from "../ReviewApi"
const WriteReviewPopup = ({Product,api,  SetApi}) => {
    const navigate =  useNavigate()
    const { state } = React.useContext(Createcontext)
    const userId =  state.Profile.id
    const id = Product?.id 
    const { register, handleSubmit, errors, control, reset } = useForm();
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);
    const [comment, setcomment] = React.useState('');
    const [Title,SetTitle] =  React.useState('')
    const handleClickOpen = () => {
        if (state.login) {
            setOpen(true);
        }
        else{
            navigate("/Login")
        }
    };

    const handleClose = () => {
        setOpen(false);
        setValue(0)
    };
    
    const onSubmit = (data) => {
       const  Review ={
            product:Product.id            ,
            rating:value,
            Title:Title,
            comment:comment
         }
        Add_Review(Review).then((res)=>{
           setOpen(false);
           setValue(0)
         SetApi(!api)
        }).catch(()=>{

        })
    };

    const handlecomment = (e) => {
        setcomment(e.target.value)
    }
    
    React.useEffect( ()=>{
        if(userId !== undefined && id !== undefined){
            Get_UserComment(userId , id).then((res)=>{
                if(res.data.length !== 0 )
                {   
                    setValue(()=>{
                        return res.data[0]?.rating})
                    setcomment(res.data[0]?.comment)
                    SetTitle(res.data[0]?.Title)
                }
            })
        }
    },[userId,id,open])

    return (
        <>
            <Button className={classes.WriteReviewBtn_Color} variant="outlined" onClick={handleClickOpen}>
                Write a review
            </Button>
            <Dialog open={open} onClose={handleClose} className={classes.WriteReviewDialog}>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 writeReviewContainer px-0'>
                            <div className='col-12 writeReviewCloseIconContainer'>
                                <IconButton onClick={handleClose} aria-label="closebutton"><RiCloseCircleFill color='#949494' size={24} /></IconButton>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='col-12 writeReviewTextCenter'>
                                    <h2 className='writeReviewHeadings'>Write a review</h2>
                                    <h3 className='secRatingHeadings'>My rating</h3>
                                    <Rating
                                        className={`mx-2 ${classes.WriteReviewStarIcons}`}
                                        value={value}
                                        color='red'
                                        onChange={(e) => setValue(e.target.value)}
                                        precision={1}
                                    />

                                </div>
                                <div className='col-12 px-4 py-4'>
                                    <div className='col-12'>
                                        <label className='writeReviewLabel' htmlFor='title'>Title</label>
                                        <TextField
                                            className={`${classes.FilledTextFieldStyle}`}
                                            size='small'
                                            id="title"
                                            value={Title}
                                            onChange={((e)=>{SetTitle(e.target.value)})}
                                            name="title"
                                            placeholder='Title'
                                            variant='filled'
                                            fullWidth
                                            inputRef={register({
                                                required: "title is required*.",
                                                minLength: {
                                                    value: 5,
                                                    message: "Please enter valid title"
                                                },
                                                maxLength: {
                                                    value: 150,
                                                    message: "Please enter shot valid title"
                                                }
                                            }
                                            )}
                                            helperText={errors.title?.message}
                                            error={Boolean(errors?.title)}
                                        />
                                    </div>
                                    <div className='col-12 writReviewMarginTop'>
                                        <label className='writeReviewLabel' htmlFor='review'>Review</label>
                                        <textarea
                                            name='Comment'
                                            value={comment}
                                            onChange={handlecomment}
                                            id="review"
                                            className="textinput" placeholder="Comment"></textarea>
                                    </div>
                                    <div className='col-12'>
                                        <Box
                                            className={`edit_UserPopUp_btn_container mt-4
                                              ${classes.editEmail_loadingBtn}`}
                                        >
                                            <LoadingButton disabled={value === 0 ? true : false} type="submit" variant="outlined" >Submit</LoadingButton>
                                        </Box>
                                    </div>
                                </div>
                            </form>


                        </div>


                    </div>

                </div>
            </Dialog>
        </>
    )
}
export default WriteReviewPopup