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
                            <LazyLoadImage src="https://selnoxmedia.s3.amazonaws.com/media/BlankImage/FourZeroFour.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAS4WSA6KJNP6NPPES%2F20231017%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231017T091513Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b87bcd334f115329dac671e91f1008755ad971201423f89d1d4168077581e08a" className="fourZero_image" />
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