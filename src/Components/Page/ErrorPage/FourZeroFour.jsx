import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingButton from "@mui/lab/LoadingButton"
import Box from '@mui/material/Box';

import useStyles from "../../../Style";
import { Link } from "react-router-dom";

const FourZeroFour = () => {
    const classes=useStyles()
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-12 four_zero_four_img_content_container">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12">
                        <section className="Image_section ">
                            <LazyLoadImage src="/image/FourZeroFour.png" className="fourZero_image" />
                        </section>
                        <section className="fourZero_content_section mt-2">
                            <div className="fourZeroFour_div_width">
                                <h1 className="four_zero_heading">Oops!</h1>
                            </div>
                            <div className="fourZeroFour_div_width">
                                <h1 className="fourZero_sub_heading">404 -PAGE NOT FOUND</h1>
                            </div>
                            <div className="fourZeroFour_div_width">
                                <h1 className="four_zero_message">The page you are for might have been removed had its name changed
                                    is temporarily unavailable.
                                </h1>
                            </div>
                        </section>
                        <Box className={`center mt-4 ${classes.fourZeroFourBtn}`}>
                      <Link to={"/"}> <LoadingButton>Go To Home Page</LoadingButton> </Link> 
                    </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FourZeroFour