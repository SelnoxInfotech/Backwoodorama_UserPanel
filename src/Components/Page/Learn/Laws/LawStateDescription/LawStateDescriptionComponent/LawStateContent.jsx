import React from "react"
import '../../../../../../styles/termconditions.css';
import { useRef } from 'react';
const LawStateContent = ({ head , gothroughID}) => {
    const ref = useRef(null);
    const [Selected, SetSelected] = React.useState(1)
 
    return (
        <React.Fragment>
            <div className="col-lg-11 col-md-12 LawStateContentsContainer ">

                <div className="heading_box socialIconsContainer"> <h3 className='text-white m-0 sideTableHeading'>Table of Contents</h3> </div>
                <div className="col-12 LawStateContentOlsCol">
                    <ol className="LawStateContentOls" >{head?.map((items, index) => {
                      
                        return (
                            <React.Fragment key={index}>
                                     <li className="py-3 tableList" onClick={() => gothroughID(items.title.replaceAll(' ','_'))} id={items.title.replaceAll(' ','_')} style={{ color: Selected === items.id ? "#31B665" : "" }} >{items.title}</li>
                            </React.Fragment>
                        )
                    })}

                    </ol>
                </div>
            </div>
        </React.Fragment>
    )
}
export default LawStateContent