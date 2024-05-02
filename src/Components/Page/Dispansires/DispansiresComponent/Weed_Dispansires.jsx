import { useLocation } from "react-router-dom";
import React from "react";
import Axios from "axios";
import Dispensoriescart from './Dispensoriescart'
// import { DespensioriesItem } from '../../../../Api/Api';
import { DispensariesSco } from "../../../Component/ScoPage/DispensariesSco"
import Createcontext from "../../../../Hooks/Context"
const Weed_Dispansires = ({Store,SetStore ,searchtext ,setsearchtext }) => {
    const locaton = useLocation();
    // const [searchtext, setsearchtext] = React.useState("");
    const { state } = React.useContext(Createcontext);
//  console.log(state ,'state')
    // React.useEffect(() => {

    //     if (searchtext !== "") {
    //         const getData = setTimeout(() => {
    //             const json = {
    //                 "store": searchtext,
    //                 "City": state.City,
    //                 "Country": state.Country?.replace(/-/g, " "),
    //                 "State": state.State?.replace(/-/g, " "),
    //             }
    //             Axios.post(`https://api.cannabaze.com/UserPanel/FilterDispensaries/`,
    //                 json
    //             )
    //                 .then(function (response) {
    //                     SetStore(response?.data);
                      
    //                 })
    //                 .catch(function (error) {
    //                     console.trace(error);
    //                     SetStore([]);
                        
    //                 });
    //         }, 1000)
    //         return () => clearTimeout(getData)
    //     } else {
    //         const object = { City: state.City.replace(/-/g, " "), "Country": state.Country?.replace(/-/g, " "), "State": state.State?.replace(/-/g, " "), }
    //         state.Country !== "" && DespensioriesItem(object).then((res) => {
    //             if (res === "No Dispensary in your area") {
    //                 SetStore([])
    //             }
    //             else {
    //                 SetStore(res)
    //             }
    //         })
    //     }
    // }, [searchtext, state])
    return (
        <React.Fragment>
          
            <DispensariesSco location={locaton.pathname}></DispensariesSco>
            <div className="">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 dispensories_main_container">
                        <div className="row dispensories_search_result">
                            <div className="col-12 dispensories_open_result_heading">
                                <div className="row">
                                    <div className="col-12 dispensories_open_search_result mt-2">
                                        <div class="form-outline" data-mdb-input-init>
                                            <input value={searchtext} onChange={(e) => setsearchtext(e.target.value)} placeholder="Search......" type="search" id="form1" className={searchtext.length !== 0 ? "form-control customSearchBar" : "form-control customSearchBar customSearchBarsearchicon"} />
                                        </div>
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
                                <Dispensoriescart index={index} ele={ele} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Weed_Dispansires