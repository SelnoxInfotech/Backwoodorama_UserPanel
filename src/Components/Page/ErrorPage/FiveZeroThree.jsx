
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingButton from "@mui/lab/LoadingButton"
import useStyles from "../../../Style";
import Box from '@mui/material/Box';

const FiveZeroThree = () => {
    const classes = useStyles()
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 fiveZeroThree_container">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12">
                        <section className="FiveZero_Image_section ">
                            <LazyLoadImage src="/image/FiveZeroThree.png" className="fiveZero_image" />
                        </section>
                        <section className="fiveZero_content_section mt-2">
                            
                            <div className="fiveZeroThree_div_width">
                                <h1 className="fiveZero_sub_heading">Sorry we're under maintenance!</h1>
                            </div>
                            <div className="fourZeroThree_div_width_sec">
                                <h1 className="five_zero_three_message">Hang on till we get the error fixed.
                                </h1>

                            </div>
                            <div className="fourZeroThree_div_width_sec">
                                <h1 className="five_zero_three_message">
                                    You may also refresh the page or try again later
                                </h1>
                            </div>

                        </section>
                        <Box className={`center mt-4 ${classes.fiveZero_Three}`}>
                            <LoadingButton>Go To Home Page</LoadingButton>
                        </Box>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default FiveZeroThree