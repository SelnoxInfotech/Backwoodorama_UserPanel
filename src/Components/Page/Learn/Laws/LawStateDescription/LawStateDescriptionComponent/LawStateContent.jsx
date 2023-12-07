import React from "react"
import '../../../../../../styles/termconditions.css';
import { useRef } from 'react';
const LawStateContent = ({ head , gothroughID}) => {
    const ref = useRef(null);
    const [Selected, SetSelected] = React.useState(1)
    const divElement = document.getElementById('Navbar_box')?.clientHeight

    function test(id){
        window.scrollTo(0, 1000)
     
    }
    return (
        <React.Fragment>
            <div className="col-lg-11 col-md-12 LawStateContentsContainer ">
                <div className="heading_box socialIconsContainer"> <h3 className='text-white m-0 sideTableHeading'>Table of Contents</h3> </div>
                <div className="col-12 LawStateContentOlsCol">
                    <ol className="LawStateContentOls" >{head?.map((items, index) => {
                      
                        return (
                            <React.Fragment key={index}>
                               
                                <a href={`#${items.title.replaceAll(' ','_')}`}>
                                     <li className="py-3 tableList" onClick={() => test(items.title.replaceAll(' ','_'))} id={items.title.replaceAll(' ','_')} style={{ color: Selected === items.id ? "#31B665" : "" }} >{items.title}</li></a>
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