
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingButton from "@mui/lab/LoadingButton";
import useStyles from "../../../Style";
import Box from '@mui/material/Box';

const FourZeroThree=()=>{
    const classes=useStyles()
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 FourZeroThree_container">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12">
                    <section className="FourZeroThree_Image_section ">
                            <LazyLoadImage src="./image/FourZeroThree.png" className="fourZeroThree_image" />
                        </section>
                        <section className="fourZeroThree_content_section mt-2">
                            
                            <div className="fourZeroThree_div_width_sec">
                                <h1 className="fourZero_Three_sub_heading">403 ERROR FORBIDDEN</h1>
                            </div>
                            <div className="fourZeroThree_div_width_sec">
                                <h1 className="four_zero_three_message">You dont have permission to access this resource.
                                </h1>

                            </div>
                            

                        </section>
                        <Box className={`center mt-4 ${classes.fourZero_Three}`}>
                            <LoadingButton>Go To Home Page</LoadingButton>
                        </Box>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default FourZeroThree