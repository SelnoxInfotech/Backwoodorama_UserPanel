import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Openingtime = ({storeDetails , heading , type}) => {
  return (
    <React.Fragment>
      <div className='destop_view'>
         <div className="opning_time mt-2">
            
              <h4>{heading}</h4>
          <hr></hr>
            {
                storeDetails[0]?.Hours !== null &&  storeDetails[0]?.Hours.map((items , index )=>{
                  return <p>{`${items.day} :- ${items.Open[0].Time1}-${items.Open[0].Time2}`}</p>
                })
            }
                           
         </div>
      </div>
      <div className='mobile_view'>
        <div className="opning_time mt-2">
            <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h4>{heading}</h4>
            </AccordionSummary>
            <AccordionDetails>
            {
                storeDetails[0]?.Hours !== null &&  storeDetails[0]?.Hours.map((items , index )=>{
                  return <p>{`${items.day} :- ${items.Open[0].Time1}-${items.Open[0].Time2}`}</p>
                })
            }
            </AccordionDetails>
            </Accordion>                    
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Openingtime