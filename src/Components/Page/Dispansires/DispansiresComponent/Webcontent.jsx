import React, { useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import Neighborhood from "./loactoncomponent/Neighborhood";
import Zipcode from "./loactoncomponent/Zipcode";
const WebContent = ({ state, Store = [], modifystr }) => {
    function getediblelist(){
        console.log('run')
         Store?.forEach((item)=>{
            console.log(item)
            item?.Category?.forEach((items)=>{
                console.log("EDIBLES" in items)
                   if("EDIBLES" in items){
                   }
            })
        })
    }
   useEffect(()=>{
    console.log('run')
    Store?.forEach((item)=>{
       console.log(item)
       item?.Category?.forEach((items)=>{
           console.log("EDIBLES" in items)
              if("EDIBLES" in items){
              }
       })
   })
   },[Store])
    return (
        <div>

            <div className="col-12 webContent">
                <h2 className="section_main_title">Discover the Best Cannabis Dispensaries in {state.Location} </h2>
                <div style={{display:"grid" , gap:"8px"}}>
                    <p>Explore top-rated weed dispensaries in {state.Location} with Weedx.io. Our platform simplifies the search for trusted recreational and medical dispensaries conveniently located near you in {state.Location} </p>
                    <h3>Top Weed  Dispensaries in {state.Location}:</h3>
                    {Boolean(Store?.length) && <ul>
                        {
                            Store?.filter((item) => item.rating >= 4)?.map((items) => {
                                return <li><Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g, '-').toLowerCase()}/${"review"}/${items.id}`}>{items.Store_Name}</Link></li>
                            })
                        }

                    </ul>
                    }

                    <h3>Top Selling Weed Dispensaries  Products in {state.Location}:</h3>
                    {Boolean(Store?.length) && <ul>
                        {
                            Store?.filter((item) => item.rating > 4)?.map((items) => {
                                return <li><Link to={`/weed-deliveries/${items.Store_Name.replace(/\s/g, '-').toLowerCase()}/${"review"}/${items.id}`}>{items.Store_Name}</Link></li>
                            })
                        }

                    </ul>
                    }
                    <h3>Neighborhood Locations Near {state.Location}:</h3>
                    <Neighborhood></Neighborhood>

                    <h3>Zip Codes in {state.Location} Area:</h3>
                    <Zipcode></Zipcode>
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
{console.log(Boolean(Store.length) , Store.length)}
            <h3 className="section_main_title">FAQs</h3>
            {Boolean(Store.length) && <div className="row">
                <div className="col-lg-6 webContent my-2">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <h3 >{` What are the best weed dispensaries in ${state.Location}? `}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p> Some of the top-rated dispensaries in {state.Location} include <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0]?.id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1]?.id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2]?.id}`}>{Store[2]?.Store_Name}</Link> . See the full list: Best Dispensaries in {state.Location}.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-lg-6 webContent my-2">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <h3 >{` Where can I find dispensaries near [Popular Landmark]? `}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p> Popular dispensaries near {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0].id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1]?.id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2]?.id}`}>{Store[2]?.Store_Name}</Link> . See the full list: Dispensaries near {state.Location}.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-lg-6 webContent my-2">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <h3 >{` What Weed dispensaries offer the best prices in ${state.Location}? `}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>Dispensaries known for their competitive pricing in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0]?.id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1]?.id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2]?.id}`}>{Store[2]?.Store_Name}</Link> . See the full list: Affordable Dispensaries in {state.Location}. </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-lg-6 webContent my-2">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <h3 >{`  Which cannabis dispensaries in ${state.Location}  have the best selection of edibles?`}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>Dispensaries with a wide variety of edibles in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0]?.id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1]?.id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2]?.id}`}>{Store[2]?.Store_Name}</Link> .  See the full list: Edible Dispensaries in {state.Location}. </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-lg-6 webContent my-2">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <h3 >{`What are the best marijuana dispensaries for first-time visitor in ${state.Location}?  `}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p> Friendly and informative dispensaries for first-time visitors in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0]?.id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1]?.id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2]?.id}`}>{Store[2]?.Store_Name}</Link> . See the full list: First-Time Visitor Dispensaries in {state.Location}.                                                    </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-lg-6 webContent my-2">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <h3 >{` Which weed dispensaries in ${state.Location} offer online ordering and pickup? `}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>Dispensaries offering convenient online ordering and pickup in {state.Location} include <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0]?.id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1]?.id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2]?.id}`}>{Store[2]?.Store_Name}</Link> .  See the full list: Online Ordering Dispensaries in {state.Location}.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-lg-6 webContent my-2">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <h3 >{`What are the best marijuana dispensaries for medical cannabis in ${state.Location}? `}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>Highly recommended medical cannabis dispensaries in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0]?.id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1]?.id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2]?.id}`}>{Store[2]?.Store_Name}</Link> .  See the full list: Medical Cannabis Dispensaries in {state.Location}.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-lg-6 webContent my-2">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header" >
                            <h3 >{`Which cannabis dispensaries in ${state.Location} are open late? `}</h3>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>Dispensaries with extended hours in {state.Location} include  <Link to={`/weed-dispensaries/${modifystr(Store[0]?.Store_Name.toLowerCase())}/${Store[0]?.id}`}>{Store[0]?.Store_Name}</Link>, <Link to={`/weed-dispensaries/${modifystr(Store[1]?.Store_Name.toLowerCase())}/${Store[1]?.id}`}>{Store[1]?.Store_Name}</Link> and  <Link to={`/weed-dispensaries/${modifystr(Store[2]?.Store_Name.toLowerCase())}/${Store[2]?.id}`}>{Store[2]?.Store_Name}</Link> . See the full list: Late-Night Dispensaries in {state.Location}.                                                    </p>
                        </AccordionDetails>
                    </Accordion>
                </div>

            </div>}
        </div>
    )
}

export default WebContent