import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from '../../../../../Style';
const HomePageDealsSignup = () => {
    const classes = useStyles()

    return (
        <div className="container mt-4">
            <div className="row  mt-4">
                <div className="col-12 HomePageDealsSignupContainer">
                    <div className='homePageSignupHeight'>
                        <form>
                            <div className="row center">
                                <div className="col-md-4 homePageSignup_paragraph dealSignup_col_height  homePageDealSignupContentHeight">
                                    <p>Never miss deals!</p>
                                </div>
                                <div className='col-md-6 mt-2 dealSignup_col_height homePageDealSignupContentHeight'>
                                    <TextField
                                        className={classes.homePageDealSignup_TextFields}
                                        InputProps={{
                                            style: {
                                                borderRadius: "20px",
                                                backgroundColor: "#FFFFFF"
                                            }
                                        }}
                                        type='email'
                                        placeholder="Enter Your Email"
                                        variant="outlined"
                                        fullWidth
                                        size='small'
                                    />
                                </div>
                                <div className='col-md-2 dealSignup_col_height homePageDealSignupContentHeight'>
                                    <Button className={`mt-2 ${classes.homePageButton}`} >Subscribe</Button>
                                </div>
                    </div>
                    <div className='row'>
                    <div className='col-12 homePageSignipLink'>
                        <p>Signup</p>
                    </div>
                    </div>
                   
                </form>
            </div>
        </div>

            </div >
        </div >
    )
}
export default HomePageDealsSignup