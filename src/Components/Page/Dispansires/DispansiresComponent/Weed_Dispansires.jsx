import LoadingButton from '@mui/lab/LoadingButton';
import useStyles from "../../../../Style";
import Box from '@mui/material/Box';
import SearchBar from '@mkyy/mui-search-bar';
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import Axios from "axios";
import {DespensioriesItem} from '../../../../Api/Api';
import { Link } from "react-router-dom";
import { Rating } from '@mui/material';
import { DispensariesSco } from "../../../Component/ScoPage/DispensariesSco"
const Weed_Dispansires = () => {
    const classes = useStyles()
    const [Store, SetStore] = React.useState([])
    const [Search, SetSearch] = React.useState([])
    const [searchtext,setsearchtext] = React.useState("")

   
    React.useEffect(() => {
       
        if(searchtext !== ""){
            const getData = setTimeout(() => {
       
                Axios.post(`https://api.cannabaze.com/UserPanel/FilterDispensaries/`,{
                  "store": searchtext
                })
                .then(function (response) {
                    SetStore(response?.data);
                  
                })
                .catch(function (error) {
                  console.trace(error);
                  SetStore([]);
                });
            }, 1000)
            return () => clearTimeout(getData)
        }else{
            DespensioriesItem().then((res)=>{
                SetStore(res)
            })   
        }
      }, [searchtext])
      function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
          if (str.includes("--")) {
            str = str.replaceAll("--", "-")
          } else if (str.includes("//")) {
            str = str.replaceAll("//", "/")
          } else if (str.includes("//")) {
            str = str.replaceAll("-/", "/")
          } else if (str.includes("//")) {
            str = str.replaceAll("/-", "/")
          } else {
            a++
          }
        }
    
        return str
      }

    return (
        <React.Fragment>
            <DispensariesSco></DispensariesSco>
            <div className="">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 dispensories_main_container">
                        <div className="row dispensories_search_result">
                            <div className="col-12 dispensories_open_result_heading">
                                <div className="row">
                                    <div className="col-12 dispensories_open_search_result mt-2">
                                        <SearchBar onChange={(e)=>setsearchtext(e)} style={{ background: "#FFFFF", border: "1px solid gray" }} width={"100%"} placeholder="Search dispensaries address" />
                                        {
                                            Search?.map((data) => {
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
                                    <span className='dispensories_result_head'>{Store?.length}</span>
                                </div>                       
                            </div>
                        </div>


                        {Store?.map((ele, index) => {
                            return (
                                
                                    <div className="row mt-4" key={index}>
                                        <div className=" col-11  mx-auto despensories_card_container">
                                            <div className="row">
                                                <div className="col-4 disensories_card_image_div">
                                                    <Link  to={`/weed-dispensaries/${modifystr(ele?.Store_Name.toLowerCase())}/${ele.id}`}>
                                                        <LazyLoadImage id={ele?.id} src={`https://api.cannabaze.com${ele.Store_Image}`} alt={ele.Store_Name}className="dispensories_card_image" />
                                                    </Link>

                                                </div>
                                                <div className="col-8 dispenosries_card_content_div">

                                                    <div className="col-12 dispensories_content_Header_paragraphs text-truncate">
                                                    <Link  to={`/weed-dispensaries/${modifystr(ele.Store_Name.toLowerCase())}/${ele.id}`}>
                                                        <span className="text-truncate dispensoriesHeadingName">{ele.Store_Name}</span>
                                                    </Link>
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
                                                        <Link  to={`/weed-dispensaries/${modifystr(ele.Store_Name.toLowerCase())}/${"review"}/${ele.id}`}>
                                                    <div className="col-12 d-flex dispensories_content_paragraphs mt-2">
                                                        <span className='disOPenResRating'>Rating</span>
                                                        <Rating className={`mx-2 ${classes.homePageStarIcons}`} color='green' name="read-only" value={ele.rating === null ? 0 : ele.rating} readOnly />
                                                    </div>
                                                        </Link>
                                                    <div className="col-12">
                                                        <Box className={classes.loadingBtnTextAndBack}>
                                                        <Link  to={`/weed-dispensaries/${modifystr(ele.Store_Name.toLowerCase())}/${ele.id}`}>
                                                            <LoadingButton style={{ width: "60%", height: "30px" }}>Order Pickup</LoadingButton>
                                                            </Link>
                                                        </Box>
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
        </React.Fragment>
    )
}
export default Weed_Dispansires