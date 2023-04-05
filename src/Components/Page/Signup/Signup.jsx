import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import useStyles from "../../../Style"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const Signup = () => {
    const classes = useStyles()

    return (
        <>
            <div className="container signup_margins_top">
                <div className="row center">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-10 signup_container">
                        <h1>signup</h1>
                        <div className='row'>
                            <label>Email</label>

                            <div className='col-lg-12'>
                                <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" fullWidth />
                            </div>
                        </div>
                        <div className='row  signup_margins_top'>
                            <div className='col-lg-12'>
                                <Box
                                    className={`  ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton variant="outlined">Signup</LoadingButton>
                                </Box>
                            </div>

                        </div>
                        <div className='row center signup_margins_top'>
                                <div className='col-lg-6 col-6 signup_btn'>
                                <p>Already a member?</p>
                                </div>
                                <div className='col-lg-2 col-2'>
                                 <Button variant="outlined">Signin</Button>
                                </div>


                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Signup