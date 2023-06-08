import { IoMdStar } from "react-icons/io";
import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style";
import Box from '@mui/material/Box';
import SearchBar from '@mkyy/mui-search-bar';
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const DispensoriesOpenResult = () => {
    const classes = useStyles()
    const [Store, SetStore] = React.useState([])
    React.useEffect(() => {

        Axios.get(
            'https://sweede.app/UserPanel/Get-Dispensaries/',
           
            ).then(response => {
                SetStore(response.data)
                
            }).catch(
                function (error) {
          
                   
                })
    }, [])
   
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 dispensories_main_container">
                        <div className="row dispensories_search_result">
                            <div className="col-12 dispensories_open_result_heading">
                                <div className="row">
                                    <div className="col-12 dispensories_open_search_result mt-2">
                                        <SearchBar style={{ background: "#FFFFF", border: "1px solid gray" }} width={"100%"} placeholder="Search dispensaries address" />
                                    </div>
                                </div>
                                <div className="row m-2">
                                    <div className="col-6 dispensories_result_head fontStyle">
                                        <p>Showing result</p>
                                    </div>
                                    <div className="col-6 text-end dispensories_result_head fontStyle">
                                        <p>1 to {Store.length}</p>
                                    </div>
                                </div>

                            </div>



                        </div>


                        {Store.map((ele, index) => {
                            return (
                                <div className="row mt-2" key={index}>
                                    <div className="col-lg-12  col-md-12 col-sm-12 col-12 despensories_card_container">
                                        <div className="row">
                                            <div className="col-4 disensories_card_image_div">
                                           <Link to={`/DispensoriesProduct/${ele.id}/${"Menu"}`}>     <LazyLoadImage id={ele.id} src={`https://sweede.app/${ele.Store_Image}`} alt="img_not_found" className="dispensories_card_image" /></Link>

                                            </div>
                                            <div className="col-8 dispenosries_card_content_div">
                                                <div className="row">
                                    
                                                   <div className="col-12 dispensories_content_Header_paragraphs text-truncate">
                                                        <p className="text-truncate">{ele.Store_Name}</p>

                                                    </div>
                                                    <div className="col-12 dispensories_content_paragraphs">
                                                        <p className="text-truncate">{ele.Store_Address}</p>
                                                    </div>
                                                    <div className="col-12 dispensories_buttonsContainer">
                                                        <button className="dispensories_open_res_btns">Closed</button>
                                                        <button className="dispensories_open_res_btns2">Order Online</button>

                                                    </div>
                                                    <div className="col-12 dispensories_buttonsContainer mt-2">
                                                        <button className="dispensories_pickup_btn">Pickup delivery</button>
                                                    </div>
                                                    <div className="col-12 d-flex dispensories_content_paragraphs">
                                                       {/* <div> <p>Rating</p><span className="dis_open_result_star"><IoMdStar className={classes.disp_star_color} /></span></div> */}
                                                    </div>
                                                    <div className="col-12">
                                                        <Box className={classes.loadingBtnTextAndBack}>
                                                            <LoadingButton style={{ width: "60%", height: "30px" }}>Order Pickup</LoadingButton>
                                                        </Box>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}
export default DispensoriesOpenResult