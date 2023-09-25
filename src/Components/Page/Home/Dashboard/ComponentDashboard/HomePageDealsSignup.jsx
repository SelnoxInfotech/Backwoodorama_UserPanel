import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useStyles from '../../../../../Style';
import {HiOutlineEnvelope} from "react-icons/hi2";
const HomePageDealsSignup = () => {
    const classes = useStyles()

    return (
        <div className="container mt-4">
            <div className="row  mt-4">
                <div className="col-12 HomePageDealsSignupContainer">
                        <form>
                            <div className="">

                                <div className="envelop_icon text-center">
                                    <span className=''><HiOutlineEnvelope color='#fff' fontSize={70}/></span>
                                </div>
                                <div className=" homePageSignup_paragraph   ">
                                    <p>Subscribe to our Newsletters</p>
                                </div>
                                <div className='newsletterFormFeild'>
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
                                    <span className='newsletter_btn'>
                                      <Button className={` ${classes.homePageButton}`} >Subscribe</Button>
                                      </span>
                                </div>
                           
                                  
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div >
       
    )
}
export default HomePageDealsSignup