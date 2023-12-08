import React from "react"
const IsWeedLegalState = ({head , description2}) => {
    const myRef = React.useRef();
    function scrollToComponent() {
        if (window.location.hash === head.replaceAll(' ','_')) {
          myRef.current.scrollIntoView();
          myRef.current.focus();
          console.log(window.location.hash)
        }
      }
    
      React.useEffect( () => scrollToComponent(), [] )
    return (
        <React.Fragment>
            <div  ref={myRef} className="col-12" id={head.replaceAll(' ','_')}>
 
                <h2 id="isweedLegalHeadings" className="isweedLegalHeading">{head}</h2>

                <div className="col-12"  >
                    <section className="isWeedLegalParagraph">
                       {description2}
                    </section>
                </div>

            </div>

        </React.Fragment>
    )
}
export default IsWeedLegalState