import { useLocation, Link } from "react-router-dom";
import React, { useContext } from "react";
import Dispensoriescart from './Dispensoriescart'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DispensariesSco } from "../../../Component/ScoPage/DispensariesSco"
import Createcontext from "../../../../Hooks/Context";
import  WebContent  from "../DispansiresComponent/Webcontent"
const Weed_Dispansires = ({ Store, searchtext, setsearchtext, contentdata }) => {
    const { state } = useContext(Createcontext)
    const locaton = useLocation();
    function modifystr(str) {
        if(typeof str !=='string') {

        }
        else{
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

                        </div></>}


                        <div className="col-12 webContent">
                                <h2 className="section_main_title">Discover the Best Cannabis Dispensaries in {state.Location} </h2>
                                <div>
                                <p>Explore top-rated weed dispensaries in {state.Location} with Weedx.io. Our platform simplifies the search for trusted recreational and medical dispensaries conveniently located near you in {state.Location} </p>
                                <h3>Top Weed  Dispensaries in {state.Location}:</h3>
                                   { Boolean(Store?.length) &&  <ul>
                                        {
                                            Store?.filter((item)=> item.rating >= 4)?.map((items)=>{
                                                return <li><Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${items.id}`}>{items.Store_Name}</Link></li>
                                            })
                                        }
                                         
                                       </ul>
                                    }

                                    <h3>Top Selling Weed Dispensaries  Products in {state.Location}:</h3>
                                    { Boolean(Store?.length) &&  <ul>
                                        {
                                            Store?.filter((item)=> item.rating > 4)?.map((items)=>{
                                                return <li><Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g,'-').toLowerCase()}/${"review"}/${items.id}`}>{items.Store_Name}</Link></li>
                                            })
                                        }
                                         
                                       </ul>
                                    }
                                    <h3>Neighborhood Locations Near {state.Location}:</h3>
                                    <p> Nearby Location 1 | Nearby Location 2 | Nearby Location 3 </p>

                                    <h3>Zip Codes in {state.Location} Area:</h3>
                                    <p> Zip Code 1 | Zip Code 2 </p>
                                    <h3>Popular Searches in {state.Location}</h3>
                                  
                                  <ul>
                                    <li>Newest weed Dispensaries in {state.Location}</li>
                                    <li>Dispensaries in {state.Location} with Curbside Pickup</li>
                                    <li>Marrijuana Dispensaries in {state.Location} with Delivery Options</li>
                                    <li>Weed Dispensaries in {state.Location} Open Late</li>
                                    <li>Medical Cannabis Dispensaries in {state.Location}</li>
                                    <li>Recreational Cannabis Dispensaries in {state.Location}</li>
                                    <li>cannabis dispensaries close to me near{state.Location}</li>
                                    <li>dispensaries near me that are open in {state.Location}</li>
                                    <li>weeds shop near me in {state.Location}</li>
                                  </ul>
                                  
                                </div>
                            </div>
                  
                             <h3 className="section_main_title">FAQs</h3>
                                {Boolean(Store.length) &&  <div className="row">
                                        <div className="col-lg-6 webContent my-2">
                                            <Accordion>
                                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}   aria-controls="panel1-content"  id="panel1-header" >
                                                    <h3 >{` What are the best dispensaries in ${state.Location}? `}</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p> Some of the top-rated dispensaries in {state.Location} include <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1].id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2].id}`}>{Store[2]?.Store_Name}</Link> . See the full list: Best Dispensaries in {state.Location}.
                                                    </p>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6 webContent my-2">
                                            <Accordion>
                                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}   aria-controls="panel1-content"  id="panel1-header" >
                                                    <h3 >{` Where can I find dispensaries near [Popular Landmark]? `}</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p> Popular dispensaries near [Landmark] include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1].id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2].id}`}>{Store[2]?.Store_Name}</Link> . See the full list: Dispensaries near [Landmark].
                                                    </p>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6 webContent my-2">
                                            <Accordion>
                                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}   aria-controls="panel1-content"  id="panel1-header" >
                                                    <h3 >{` What dispensaries offer the best prices in ${state.Location}? `}</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p>Dispensaries known for their competitive pricing in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1].id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2].id}`}>{Store[2]?.Store_Name}</Link> . See the full list: Affordable Dispensaries in {state.Location}. </p>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6 webContent my-2">
                                            <Accordion>
                                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}   aria-controls="panel1-content"  id="panel1-header" >
                                                    <h3 >{` Which dispensaries in ${state.Location} have the best selection of edibles? `}</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p>Dispensaries with a wide variety of edibles in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1].id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2].id}`}>{Store[2]?.Store_Name}</Link> .  See the full list: Edible Dispensaries in {state.Location}. </p>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6 webContent my-2">
                                            <Accordion>
                                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}   aria-controls="panel1-content"  id="panel1-header" >
                                                    <h3 >{`What are the best dispensaries for first-time visitors in ${state.Location}?  `}</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p> Friendly and informative dispensaries for first-time visitors in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1].id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2].id}`}>{Store[2]?.Store_Name}</Link> . See the full list: First-Time Visitor Dispensaries in {state.Location}.                                                    </p>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6 webContent my-2">
                                            <Accordion>
                                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}   aria-controls="panel1-content"  id="panel1-header" >
                                                    <h3 >{` Which dispensaries in ${state.Location} offer online ordering and pickup? `}</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p>Dispensaries offering convenient online ordering and pickup in {state.Location} include <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1].id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2].id}`}>{Store[2]?.Store_Name}</Link> .  See the full list: Online Ordering Dispensaries in {state.Location}.
                                                    </p>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6 webContent my-2">
                                            <Accordion>
                                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}   aria-controls="panel1-content"  id="panel1-header" >
                                                    <h3 >{` What are the best dispensaries for medical cannabis in ${state.Location}? `}</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p>Highly recommended medical cannabis dispensaries in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1].id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2].id}`}>{Store[2]?.Store_Name}</Link> .  See the full list: Medical Cannabis Dispensaries in {state.Location}.
                                                    </p>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <div className="col-lg-6 webContent my-2">
                                            <Accordion>
                                                <AccordionSummary  expandIcon={<ExpandMoreIcon />}   aria-controls="panel1-content"  id="panel1-header" >
                                                    <h3 >{` Which dispensaries in ${state.Location} are open late? `}</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p>Dispensaries with extended hours in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1].id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2].id}`}>{Store[2]?.Store_Name}</Link> . See the full list: Late-Night Dispensaries in {state.Location}.                                                    </p>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                       
                                </div>}
                </div>
            </div>
        </React.Fragment>
    )
}
export default Weed_Dispansires