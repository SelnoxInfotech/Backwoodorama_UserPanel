import { useLocation, Link } from "react-router-dom";
import React, { useContext } from "react";
import Dispensoriescart from './Dispensoriescart'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DispensariesSco } from "../../../Component/ScoPage/DispensariesSco"
import Createcontext from "../../../../Hooks/Context";
import WebContent from "../DispansiresComponent/Webcontent"
const Weed_Dispansires = ({ Store, searchtext, setsearchtext, contentdata }) => {
    const { state } = useContext(Createcontext)
    const locaton = useLocation();
    function modifystr(str) {
        if (typeof str !== 'string') {

        }
        else {
            str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
            str = str?.trim().replaceAll(' ', "-");
            let a = 0;
            while (a < 1) {
                if (str?.includes("--")) {
                    str = str?.replaceAll("--", "-")
                } else if (str?.includes("//")) {
                    str = str?.replaceAll("//", "/")
                } else if (str?.includes("//")) {
                    str = str?.replaceAll("-/", "/")
                } else if (str?.includes("//")) {
                    str = str?.replaceAll("/-", "/")
                } else {
                    a++
                }
            }

            return str
        }
    }

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
                    {contentdata.length !== 0 &&
                        contentdata?.Faq[0]?.title !== '' &&
                        <>  <h3 className="section_main_title">FAQs</h3>

                            <div className="row">
                                {
                                    contentdata?.Faq?.map((item) => {
                                        return <div className="col-lg-6 webContent my-2"> <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                            >
                                                <h3 >{item.title}</h3>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <p>{item.answer}</p>
                                            </AccordionDetails>
                                        </Accordion></div>
                                    })
                                }

                            </div>
                            </>
                            }
                    <WebContent modifystr={modifystr} Store={Store} state={state} from={"dispensaries"} url={'dispensaries'}></WebContent>

                </div>
            </div>
        </React.Fragment>
    )
}
export default Weed_Dispansires