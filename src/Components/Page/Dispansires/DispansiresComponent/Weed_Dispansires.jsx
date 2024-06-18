import { useLocation } from "react-router-dom";
import React from "react";
import Dispensoriescart from './Dispensoriescart'

import { DispensariesSco } from "../../../Component/ScoPage/DispensariesSco"

const Weed_Dispansires = ({ Store, SetStore, searchtext, setsearchtext, contentdata }) => {

    const locaton = useLocation();
    return (
        <React.Fragment>

            <DispensariesSco location={locaton?.pathname}></DispensariesSco>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 dispensories_main_container">
                        <div className="row dispensories_search_result">
                            <div className="col-12 dispensories_open_result_heading">
                                <div className="row">
                                    <div className="col-12 dispensories_open_search_result mt-2">
                                        <div className="form-outline" data-mdb-input-init>
                                            <input value={searchtext} onChange={(e) => setsearchtext(e.target.value)} placeholder="Search......" type="search" id="form1" className={searchtext?.length !== 0 ? "form-control customSearchBar" : "form-control customSearchBar customSearchBarsearchicon"} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 dispensoriesOpenResultHeadingss py-2'>
                                    <span className='dispensories_result_head'>Showing result</span>
                                    <span className='dispensories_result_head'>{Store?.length || 0} </span>
                                </div>
                            </div>
                        </div>


                        {Store?.map((ele, index) => {
console.log(ele)
                            return (
                                <div key={index}>
                                    <Dispensoriescart index={index} ele={ele} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-12 webContent">
                        <h2 className="section_main_title">{contentdata?.Title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: contentdata?.Content }} />
                    </div>
                  
                </div>
            </div>
        </React.Fragment>
    )
}
export default Weed_Dispansires