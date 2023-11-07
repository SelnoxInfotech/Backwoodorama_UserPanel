import React from "react"
import '../../../../../../styles/termconditions.css';
const LawStateContent = ({ head }) => {
    const [Selected, SetSelected] = React.useState(1)
    const LawSelectedFun = (ids) => {
        SetSelected(ids)
        // elementRef.current.scrollIntoView()

    }
    return (
        <React.Fragment>
            <div className="col-lg-11 col-md-12 LawStateContentsContainer ">

                <div className="heading_box socialIconsContainer"> <h3 className='text-white m-0 sideTableHeading'>Table of Contents</h3> </div>
                <div className="col-12 LawStateContentOlsCol">
                    <ol className="LawStateContentOls">{head?.map((items, index) => {

                        return (
                            <React.Fragment key={index}>
                                <div>

                                    <a href={'#'+items.title}> <li className="py-3" onClick={() => LawSelectedFun(items.id)}  style={{ color: Selected === items.id ? "#31B665" : "" }} >{items.title}</li>
                                    </a>
                                </div>



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