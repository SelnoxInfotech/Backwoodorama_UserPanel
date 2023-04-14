
import LoadingButton from '@mui/lab/LoadingButton';
import { AiFillStar } from "react-icons/ai";
import useStyles from "../../../../Style"
import Box from '@mui/material/Box';

const Flavour = (Deta) => {
    const classes = useStyles()

    return (
        <>
            <div className="container-fluid" >
                <div className='row'>
                    <div className='col-lg-12 col-sm-12 col-md-12 col-12 flavour_New_container'>
                        <div className='row'>
                            <div className='col-lg-1  col-md-4 col-sm-2'>
                                <img className='flav_img_height' src={`http://52.3.255.128:8000/${Deta.delBtn[0]?.Store_Image}`} alt="img_not_found" style={{ pointerEvents: "none" }} />

                            </div>
                            <div className='col-lg-10 col-md-8 col-sm-8 flav_content_right_side fontStyle'>
                                <p>{Deta.delBtn[0]?.Store_Name}</p>

                            </div>

                        </div>
                        <div className='row'>

                            <div className='col-lg-12 mx-2 flav_new_cont_rat_star'>
                                <span>Rating</span>
                               <span> <AiFillStar className={classes.disPen_Icons} id='flav_star'/></span>
                            </div>

                        </div>
                        <div className='row'>

                            <div className='col-lg-12 mx-2'>
                                <p>{Deta.delBtn[0]?.city_name}</p>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-6 col-8 d-flex'>
                                <Box
                                    className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton  variant="outlined">Mobile no</LoadingButton>
                                    
                                </Box>
                                <Box
                                    className={` weed_cart_btn ${classes.loadingBtnTextAndBack}`}
                                >
                                    <LoadingButton  variant="outlined">email Id</LoadingButton>
                                </Box>
                            </div>
                           

                        </div>


                    </div>

                </div>
                


            </div>
        </>
    )
}
export default Flavour