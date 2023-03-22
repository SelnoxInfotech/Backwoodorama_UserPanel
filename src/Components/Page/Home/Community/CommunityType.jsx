const CommunityType = () => {
    return (
        <>
            <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col-12 d-flex" style={{ background: "#E8FFF1" }}>

                        <div className="col-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="col-12 d-flex">

                                <div className="col-6 mt-4  ">
                                    <div className="col-12 community_img_div d-flex" >
                                        <img src="./image/community_1.png" alt='img_not_found' />
                                        <img src="./image/community_2.png" alt='img_not_found' />

                                    </div>
                                   
                                </div>

                            </div>

                        </div>
                        <div className="col-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="col-12 d-block">

                                <div className="col-12  mt-4 comm_para">
                                    <p>BACKWOODAROMA</p>
                                </div>
                                <div className="col-12 comm_para">
                                    <p>A community connecting canabis consumer retailers doctor and brands since 2008 </p>

                                </div>
                                <div className="col-12 d-flex center" style={{ gap: "10px" }}>
                                    <div className='col-6 text-end'>
                                        <p>Google Play</p>

                                    </div>
                                    <div className='col-6'>
                                        <p>App Store</p>

                                    </div>



                                </div>
                            </div>


                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
export default CommunityType