const OurValues=()=>{
    const OurValuesArray=[{head:"Data-Driven Approach"},{head:"Result-Oriented"},{head:"Result-Oriented"}]
    return(
        <div className="row mx-0">
            {OurValuesArray.map((items,index)=>{
                return(
                    <div className="col-md-4 col-sm-6 col-12  border" key={index}>
                         <section className="">
                            <h1>{items.head}</h1>
                         </section>
                    </div>
                )
            })}


        </div>
    )
}
export default OurValues