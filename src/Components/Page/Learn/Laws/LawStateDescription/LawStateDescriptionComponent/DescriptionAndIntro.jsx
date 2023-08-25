const DescriptionAndIntro = ({description1,description2}) => {
    return (
        <>
            <div className="col-12">
                {description1}
             
            </div>
            <div className="weedDescriptionContainer">
                <h3 className="isweedLegalHeading"> {description1}</h3>
                <div className="col-12">
                   {description2}
                </div>

            </div>
        </>
    )
}
export default DescriptionAndIntro