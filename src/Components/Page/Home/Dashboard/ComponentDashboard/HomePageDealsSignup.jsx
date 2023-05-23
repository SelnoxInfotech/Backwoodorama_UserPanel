import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from '../../../../../Style';
const HomePageDealsSignup = () => {
  const classes = useStyles()

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12 HomePageDealsSignupContainer">
                    <div className='w-100 homePageSignupHeight'>
                        <div className="row ">
                            <div className="col-md-4 homePageSignup_paragraph">
                                <p>Never miss deals!</p>
                            </div>
                            <div className='col-md-6'>
                                <TextField
                                 InputProps={{
                                    style: {
                                      borderRadius: "20px",
                                      backgroundColor:"#FFFFFF"
                                    }
                                  }}
                                    type='email'
                                    placeholder="Enter Your Email"
                                    variant="outlined"
                                    fullWidth
                                    size='small'
                                />
                            </div>
                            <div className='col-md-2 homePageSignupBtnMargin'>
                            <Button className={classes.muiBtn} >Subscribe</Button>
                            </div>

                        </div>
                        <div className='w-40 homePageSignipLink'>
                           <p>Signup</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default HomePageDealsSignup