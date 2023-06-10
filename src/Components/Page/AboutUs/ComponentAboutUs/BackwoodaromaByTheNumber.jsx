const BackwoodaromaByTheNumber = () => {
    const NumberOfVisits = [{ visit: "60 MILLION" }, { visit: "4+ MILLION" }, { visit: "4,600+ MILLION" }, { visit: "1.3 million" }, { visit: "5,000+" }]
    return (
        <>
            <div className="col-12 backwoodaromaByTheNumber_container">
                <div className="row mx-0">
                    <div className="col-12 backwoodaroma_heading_container">
                        <h1 className="backwoodar_heading">BACKWOODAROMA  by the numbers</h1>
                    </div>
                    <div className="col-12 backwoodaroma_number_container px-0 bg-light mt-2 border ">
                        <ol>
                            {NumberOfVisits.map((items, index) => {
                                return (
                                    <li key={index}>{items.visit}</li>

                                )

                            })}


                        </ol>
                    </div>
                    <div className="col-12  NumberText_container mt-2">
                        <ol>
                            <li className="" style={{ display: "flex", flexDirection: "column" }}><span>Visitors to Leafly</span>

                                <span>every year</span>
                            </li>
                            <li>Orders placed
                                annually</li>
                            <li>Retailers online
                                with Leafly</li>
                            <li>Product reviews</li>
                            <li>Strains in the
                                Leafly database</li>
                        </ol>
                    </div>

                </div>



            </div>
        </>
    )
}
export default BackwoodaromaByTheNumber