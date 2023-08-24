const IsWeedLegalState = ({elementRef,head}) => {
    
    return (
        <>
            <div className="col-12">
 
                <h2 id="isweedLegalHeadings" ref={elementRef} className="isweedLegalHeading">{head}</h2>

                <div className="col-12">
                    <p className="isWeedLegalParagraph">
                        Recreational marijuana is not legal in Alabama. The state has maintained its stance against recreational use, adhering to a strict prohibition.
                        Possession of marijuana in personal quantities is a misdemeanor, while repeated possession or possession with intent to sell is a felony.
                    </p>
                </div>

            </div>

        </>
    )
}
export default IsWeedLegalState