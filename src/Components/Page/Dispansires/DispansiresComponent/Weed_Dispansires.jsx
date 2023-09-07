import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style";
import Box from '@mui/material/Box';
import SearchBar from '@mkyy/mui-search-bar';
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Rating } from '@mui/material';
import { DispensariesSco } from "../../ScoPage/DispensariesSco"
const Weed_Dispansires = () => {
    const classes = useStyles()
    const [Store, SetStore] = React.useState([])
    const [Search, SetSearch] = React.useState([])
    React.useEffect(() => {
        Axios.get(
            'https://sweede.app/UserPanel/Get-Dispensaries/',
        ).then(response => {
            SetStore(response.data)
        }).catch(
            function (error) {})
    }, [])
    function search(e) {
        const test = Store.filter(team => {
            return team.Store_Name.toLowerCase().includes(e.toLowerCase());
        });
        SetSearch(test)
    }

    return (
        <React.Fragment>
            <DispensariesSco></DispensariesSco>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 dispensories_main_container">
                        <div className="row dispensories_search_result">
                            <div className="col-12 dispensories_open_result_heading">
                                <div className="row">
                                    <div className="col-12 dispensories_open_search_result mt-2">
                                        <SearchBar onChange={search} style={{ background: "#FFFFF", border: "1px solid gray" }} width={"100%"} placeholder="Search dispensaries address" />
                                        {
                                            Search.map((data) => {
                                                return (
                                                    <ul>
                                                        <li>{data.Store_Name}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className='col-12 dispensoriesOpenResultHeadingss py-2'>
                                    <span className='dispensories_result_head'>Showing result</span>
                                    <span className='dispensories_result_head'>{Store.length}</span>
                                </div>                       
                            </div>
                        </div>


                        {Store.map((ele, index) => {
                            return (
                                <React.Fragment  key={index}>
                                <div className="row mt-2">
                                    <div className="col-lg-12  col-md-12 col-sm-12 col-12 despensories_card_container">
                                        <div className="row">
                                            <div className="col-4 disensories_card_image_div">
                                                <Link  to={`/Weed-Dispensories/${ele.Store_Name.replace(/\s/g,'-')}/${"Menu"}/${ele.id}`}>
                                                    <LazyLoadImage id={ele.id} src={`https://sweede.app/${ele.Store_Image}`} alt="img_not_found" className="dispensories_card_image" />
                                                </Link>

                                            </div>
                                            <div className="col-8 dispenosries_card_content_div">

                                                <div className="col-12 dispensories_content_Header_paragraphs text-truncate">
                                                    <span className="text-truncate dispensoriesHeadingName">{ele.Store_Name}</span>

                                                </div>
                                                <div className="col-12 dispensories_content_paragraphs">
                                                    <span className="text-truncate dispensorieAddressNames">{ele.Store_Address}</span>
                                                </div>
                                                <div className="col-12 dispensories_buttonsContainer">
                                                    <button className="dispensories_open_res_btns">Closed</button>
                                                    <button className="dispensories_open_res_btns2">Order Online</button>

                                                </div>
                                                <div className="col-12 dispensories_buttonsContainer mt-2">
                                                    <button className="dispensories_pickup_btn">Pickup delivery</button>
                                                </div>
                                                <div className="col-12 d-flex dispensories_content_paragraphs mt-2">
                                                    <span className='disOPenResRating'>Rating</span>
                                                    <Rating className={`mx-2 ${classes.homePageStarIcons}`} color='green' name="read-only" value={4} readOnly />

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
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default Weed_Dispansires